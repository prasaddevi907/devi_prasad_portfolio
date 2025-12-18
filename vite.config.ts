import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  // ✅ MUST match repo name
  base: "/devi_prasad_portfolio/",

  // ✅ frontend root
  root: path.resolve(import.meta.dirname, "client"),

  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  build: {
    // ✅ OUTPUT MUST CONTAIN index.html AT ROOT
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
