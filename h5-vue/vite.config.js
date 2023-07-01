import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    chunkSizeWarningLimit: 1500, // 打包文件很大是报警 1500kb
    cssTarget:'chrome80',
  },
  // 本地运行配置，及反向代理配置
  server: {
    host: '0.0.0.0',
    https: false, // 是否启用 http 2
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    port: 8082,
    strictPort: false, // 设为true时端口被占用则直接退出，不会尝试下一个可用端口
    force: true, // 是否强制依赖预构建
    hmr: true, // 禁用或配置 HMR 连接
  },
})
