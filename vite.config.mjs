import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(() => {
  return {
    css: {
      preprocessorOptions : {
          scss: {
              api: "modern-compiler",
          },
      }
  },
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
      svgr({ svgrOptions: { icon: true } }),
    ],
  };
});
