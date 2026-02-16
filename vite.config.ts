// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '/',
  plugins: [react(), viteTsconfigPaths(), tailwindcss()],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(
        browserslist('defaults and supports es6-module'),
      ),
      cssModules: true,
    },
  },
  build: {
    cssMinify: 'lightningcss',
  },
});
