import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        animation: 'src/animation.html',
        interface: 'src/interface.html',
        about: 'src/about.html',
      },
    },
  },
});
