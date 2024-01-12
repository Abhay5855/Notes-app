// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  proxy: {
    "/api": {
      target: process.env.VITE_BASE_URL,
      changeOrigin: true,
      secure: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
  server: {
    fs: {
      allowSymlinks: true,
    },

    watch: {
      followSymlinks: false,
    },
  },
});
