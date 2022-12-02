import { defineConfig } from 'vite';

export default defineConfig({
  // base: '/',
  server: {
    port: 3000,
  },
  publicDir: 'estaticos',
  build: {
    outDir: './docs',
    emptyOutDir: true,
  },
  base: '/enflujo-bot-poeta/',
});
