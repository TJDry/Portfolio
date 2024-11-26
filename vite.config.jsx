import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

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
      historyApiFallback: true,
    },
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern',
          silenceDeprecations: ["legacy-js-api"],
        }
      }
    }
  })
