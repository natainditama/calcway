import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import webfontDownload from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    webfontDownload([
    'https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap',
    ])
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
});
