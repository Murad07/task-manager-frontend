import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Set your desired port
    strictPort: true, // Fail if port is in use
  },
})
