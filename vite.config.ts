import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { webcrypto } from 'node:crypto';


export default defineConfig({
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
      svgr({ svgrOptions: { icon: true } }),
    ],
    base: '/',
    server: {
      host: 'localhost',
      port: 3000,
    },
    css: {
      preprocessorOptions: {
        scss: {
          // api: 'modern-compiler' // or "modern"
        }
  }
    }
  })