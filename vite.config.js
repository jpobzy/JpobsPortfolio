import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'path'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  base: '/',
    build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tunerip: resolve(__dirname, 'tunerip.html'),
        devu: resolve(__dirname, 'devu.html'),
        fliparena: resolve(__dirname, 'fliparena.html'),
        syncify: resolve(__dirname, 'syncify.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@/*': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },


})
