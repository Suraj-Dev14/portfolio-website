import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(), 
    vercel(), 
  ],
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
  },
  server: {
    port: process.env.PORT,
  }
})