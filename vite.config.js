import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Rudra_Finance/', 
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Expose to all network interfaces
    port: 5174, // Match the current port
    strictPort: false,
    allowedHosts: [
      '.trycloudflare.com', // Allow all Cloudflare tunnel subdomains
      'localhost',
    ],
    hmr: {
      clientPort: 443, // Use HTTPS port for Cloudflare tunnel
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 5174,
  },
})
