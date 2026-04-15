import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    define: {
      'process.env': env
    },
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://pocketapi.48.cn',
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          configure: (proxy, _options) => {
            proxy.on('error', (err, _req, _res) => {
              console.log('proxy error', err);
            });
            proxy.on('proxyReq', (proxyReq, req, _res) => {
              // 强制设置正确的头部，避免暴露localhost
              proxyReq.setHeader('Host', 'pocketapi.48.cn');
              proxyReq.setHeader('Origin', 'https://pocketapi.48.cn');
              proxyReq.setHeader('Referer', 'https://pocketapi.48.cn/');
              // console.log('Sending Request to the Target:', req.method, req.url);
            });
            proxy.on('proxyRes', (proxyRes, req, _res) => {
              // console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
            });
          },
          headers: {
            'Host': 'pocketapi.48.cn',
            'Origin': 'https://pocketapi.48.cn',
            'Referer': 'https://pocketapi.48.cn/',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, token, pa, Host, appInfo, User-Agent, Accept-Language, Accept-Encoding, Connection',
          },
        },
      },
      cors: true,
    },
  };
});
