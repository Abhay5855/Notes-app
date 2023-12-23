// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  proxy: {
    "/api": {
      target: "https://notes-backend-ytes.onrender.com",
      changeOrigin: true,
      secure: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
});
