import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/xora/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase to a higher KB limit
    rollupOptions: {
      output: {
        manualChunks: {
          pixi: ['pixi.js'],
          gsap: ['gsap'],
        },
      },
    },
  },
})
