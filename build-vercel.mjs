/**
 * Vercel Build Output API v3 adapter for TanStack Start + Cloudflare Workers.
 *
 * TanStack Start builds a Cloudflare Workers bundle (dist/server/index.js) that uses
 * node:stream and node:stream/web internally. Vercel Edge Runtime does NOT support these
 * modules, so we deploy as a Node.js 20 Serverless Function instead.
 *
 * The Cloudflare Worker handler uses the Web Request/Response API, which Node.js 18+
 * supports natively. The adapter below bridges Node.js http (req, res) to Web Request API.
 *
 * Run after: npm run build (vite build)
 */

import { build } from "esbuild";
import { cpSync, mkdirSync, rmSync, writeFileSync, existsSync, statSync } from "fs";

const OUT = ".vercel/output";

// ── 1. Clean and scaffold output directories ─────────────────────────────────
if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(`${OUT}/static`, { recursive: true });
mkdirSync(`${OUT}/functions/index.func`, { recursive: true });

// ── 2. Copy static client assets ─────────────────────────────────────────────
for (const entry of ["assets", "images", "fonts", "robots.txt", "favicon.webp"]) {
  const src = `dist/client/${entry}`;
  if (existsSync(src)) cpSync(src, `${OUT}/static/${entry}`, { recursive: true });
}

// ── 3. Create Node.js serverless adapter ─────────────────────────────────────
// The Cloudflare Worker exports { fetch(req, env, ctx) } using Web Request API.
// Vercel Node.js Serverless Functions expect (req: IncomingMessage, res: ServerResponse).
// Node.js 18+ has native Request/Response globals — no polyfills needed.
const adapterSrc = `import worker from './index.js';

export default async function handler(req, res) {
  const proto = req.headers['x-forwarded-proto'] ?? 'https';
  const host = req.headers['x-forwarded-host'] ?? req.headers['host'] ?? 'localhost';
  const url = new URL(req.url, \`\${proto}://\${host}\`).href;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value != null) {
      headers.append(key, Array.isArray(value) ? value.join(', ') : String(value));
    }
  }

  let body;
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    body = Buffer.concat(chunks);
  }

  const webReq = new Request(url, { method: req.method, headers, body });
  const webRes = await worker.fetch(webReq, {}, {});

  res.statusCode = webRes.status;
  for (const [key, value] of webRes.headers) res.setHeader(key, value);
  res.end(Buffer.from(await webRes.arrayBuffer()));
}
`;
writeFileSync("dist/server/_vercel-entry.mjs", adapterSrc);

// ── 4. Bundle server into Node.js-compatible ESM ──────────────────────────────
// platform:"node" means esbuild automatically externalises all node:* built-ins,
// which are resolved by Node.js 20 at runtime (no Edge Runtime restrictions apply).
console.log("Bundling server for Vercel Node.js 20 Runtime...");

await build({
  entryPoints: ["dist/server/_vercel-entry.mjs"],
  bundle: true,
  format: "esm",
  outfile: `${OUT}/functions/index.func/index.js`,
  platform: "node",
  target: "node20",
  // Prevents sideEffects:false from dropping bare imports used for route registration.
  ignoreAnnotations: true,
  minify: true,
  logLevel: "info",
});

// ESM marker: tells Node.js 20 to treat index.js as an ES module.
writeFileSync(
  `${OUT}/functions/index.func/package.json`,
  JSON.stringify({ type: "module" }, null, 2),
);

// ── 5. Node.js serverless function runtime config ─────────────────────────────
writeFileSync(
  `${OUT}/functions/index.func/.vc-config.json`,
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "index.js",
      launcherType: "Nodejs",
      shouldAddHelpers: false,
    },
    null,
    2,
  ),
);

// ── 6. Vercel output routing config ──────────────────────────────────────────
writeFileSync(
  `${OUT}/config.json`,
  JSON.stringify(
    {
      version: 3,
      routes: [
        // Hashed assets: immutable cache (1 year)
        {
          src: "^/assets/(.+)",
          headers: { "cache-control": "s-maxage=31536000, immutable" },
          continue: true,
        },
        // Images: long cache with stale-while-revalidate
        {
          src: "^/images/(.+)",
          headers: { "cache-control": "s-maxage=86400, stale-while-revalidate=3600" },
          continue: true,
        },
        // Fonts: immutable cache (content-hashed filenames from Google Fonts CDN)
        {
          src: "^/fonts/(.+)",
          headers: { "cache-control": "s-maxage=31536000, immutable" },
          continue: true,
        },
        // Serve matching files from static/ (CSS, JS, images, robots.txt)
        { handle: "filesystem" },
        // All other requests → SSR Node.js serverless function
        { src: "/(.*)", dest: "/index" },
      ],
    },
    null,
    2,
  ),
);

// ── 7. Report sizes ──────────────────────────────────────────────────────────
const fnSize = statSync(`${OUT}/functions/index.func/index.js`).size;
const fnKB = (fnSize / 1024).toFixed(1);
console.log(`\nServerless function: ${fnKB} KB (Node.js 20, limit: ~50 MB compressed)`);
console.log("✓ Vercel Build Output API ready at .vercel/output/");
