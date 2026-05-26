/**
 * Vercel Build Output API v3 adapter for TanStack Start + Cloudflare Workers.
 *
 * Vercel Edge Runtime uses the same V8-based worker environment as Cloudflare Workers.
 * This script adapts the Cloudflare Workers build output into the .vercel/output/ format
 * that Vercel's deployment pipeline expects.
 *
 * Run after: npm run build (vite build)
 */

import { build } from "esbuild";
import { cpSync, mkdirSync, rmSync, writeFileSync, existsSync } from "fs";

const OUT = ".vercel/output";

// ── 1. Clean and scaffold output directories ─────────────────────────────────
if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(`${OUT}/static`, { recursive: true });
mkdirSync(`${OUT}/functions/index.func`, { recursive: true });

// ── 2. Copy static client assets ─────────────────────────────────────────────
// dist/client/ contains: assets/ (JS+CSS), images/, robots.txt
// Exclude .assetsignore (Cloudflare Workers-specific manifest hint)
for (const entry of ["assets", "images", "robots.txt"]) {
  const src = `dist/client/${entry}`;
  if (existsSync(src)) cpSync(src, `${OUT}/static/${entry}`, { recursive: true });
}

// ── 3. Create edge function entry adapter ────────────────────────────────────
// The Cloudflare Worker exports { fetch(req, env, ctx) }.
// Vercel Edge Functions expect: export default function handler(request)
const adapterSrc = `import worker from './index.js';
export default async function handler(request) {
  return worker.fetch(request, {}, {});
}
`;
writeFileSync("dist/server/_vercel-entry.mjs", adapterSrc);

// ── 4. Bundle server into single Edge-compatible ESM file ────────────────────
// Marks Node.js built-ins as external — Vercel Edge Runtime supports them natively.
console.log("Bundling server for Vercel Edge Runtime...");

await build({
  entryPoints: ["dist/server/_vercel-entry.mjs"],
  bundle: true,
  format: "esm",
  outfile: `${OUT}/functions/index.func/index.js`,
  platform: "browser",
  external: [
    "node:events",
    "node:buffer",
    "node:stream",
    "node:util",
    "node:crypto",
    "node:process",
    "node:async_hooks",
  ],
  // The project sets "sideEffects": false which would cause esbuild to drop
  // bare imports used for route registration. Override to preserve all modules.
  ignoreAnnotations: true,
  minify: true,
  logLevel: "info",
});

// ── 5. Edge function runtime config ──────────────────────────────────────────
writeFileSync(
  `${OUT}/functions/index.func/.vc-config.json`,
  JSON.stringify({ runtime: "edge", entrypoint: "index.js" }, null, 2),
);

// ── 6. Vercel output routing config ──────────────────────────────────────────
// Priority: cache headers → filesystem (static) → SSR edge function
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
        // Serve matching files from static/ (CSS, JS, images, robots.txt)
        { handle: "filesystem" },
        // All other requests → SSR edge function
        { src: "/(.*)", dest: "/index" },
      ],
    },
    null,
    2,
  ),
);

// ── 7. Report sizes ──────────────────────────────────────────────────────────
import { statSync } from "fs";
const edgeFnSize = statSync(`${OUT}/functions/index.func/index.js`).size;
const edgeFnKB = (edgeFnSize / 1024).toFixed(1);
console.log(`\nEdge function: ${edgeFnKB} KB (limit: 1024 KB compressed)`);
console.log("✓ Vercel Build Output API ready at .vercel/output/");
