// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
  },
});
