import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/JpobsPortfolio',
    build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tunerip: resolve(__dirname, 'tunerip.html'),
        devu: resolve(__dirname, 'devu.html'),
        fliparena: resolve(__dirname, 'fliparena.html'),
      },
    },
  },
})
