/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // resolve: {
  //   alias: {
  //     app: '/src/app',
  //     entities: '/src/entities',
  //     features: '/src/features',
  //     pages: '/src/pages',
  //     shared: '/src/shared',
  //     widgets: '/src/widgets',
  //   },
  // },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/app/styles/index.scss";`,
      },
    },
  },
});
