// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/uvais/", // for GitHub Pages deployment
  server: {
    host: true      // for local network access (like LAN preview)
  }
});


