import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 离线模式专用配置
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: './', // 使用相对路径，适合GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: './index-offline.html'
      }
    },
    outDir: 'dist-offline',
    emptyOutDir: true,
  }
});