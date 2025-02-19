import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 4000,
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      '/admin': {
        // target: 'http://192.168.31.164:9080/',
        target: 'http://localhost:9081/',
        changeOrigin: true,
      }
    },
    hmr: {
      overlay: false
    },
    host: '0.0.0.0'
  },
})
