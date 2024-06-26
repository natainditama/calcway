import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  appType: "mpa",
  plugins: [react(), VitePWA({ registerType: "autoUpdate" })],
  build: {
    manifest: true,
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
  server: {
    headers: {
      "x-frame-options": "SAMEORIGIN",
      "x-xss-protection": "1; mode=block",
      "cache-control": "max-age=31536000,immutable",
    },
  },
});
