import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config kept minimal for clarity and easy future extension.
export default defineConfig({
  plugins: [react()],
  server: {
    // 默认使用 IPv4，避免在部分环境中绑定 IPv6 失败。
    host: '127.0.0.1',
    // 1024 以下端口需要系统权限，改为高位端口避免 EACCES。
    port: 5174,
    open: false
  },
  preview: {
    host: '127.0.0.1',
    port: 4174
  }
});
