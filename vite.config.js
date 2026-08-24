import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' makes every asset path relative, so the production build works
// under ANY GitHub Pages URL (project page like /Joydep-Portfolio/, a user
// site root, or a custom domain) without rebuilding.
// Routing uses HashRouter, so deep links & refresh always resolve correctly.
export default defineConfig({
  base:'/Joydep-Portfolio/',
  plugins: [react(), tailwindcss()],
})
