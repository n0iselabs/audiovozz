// The build config already bundles tanstackStart, viteReact, tailwindcss, tsConfigPaths
// and the Cloudflare plugin — do NOT add these manually or the build will break with duplicates.
// Additional Vite config can be passed via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
