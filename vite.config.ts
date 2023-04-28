/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      components: '/src/components',
      pages: '/src/pages',
      services: '/src/services',
      models: '/src/models',
      assets: '/src/assets',
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "app/styles/index.scss";`,
      },
    },
  },
});
