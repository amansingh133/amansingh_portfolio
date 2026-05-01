import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ─── GITHUB PAGES CONFIG ────────────────────────────────────────────────────
// If hosting at https://username.github.io/repo-name  →  set base: '/repo-name/'
// If hosting at https://username.github.io            →  set base: '/'
// ────────────────────────────────────────────────────────────────────────────
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
