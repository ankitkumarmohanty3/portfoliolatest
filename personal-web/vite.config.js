import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  base: process.env.VITE_BASE_PATH || '/portfoliolatest',

  resolve: {
    dedupe: ['react', 'react-dom'],
  },

  build: {
    chunkSizeWarningLimit: 1000,

    minify: 'terser',

    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },

  assetsInclude: [
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.gif',
    '**/*.svg',
  ],
})