import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react()
  ],
  server: {
    host: true, // Allows the server to be accessed externally
    port: 5173, // Default port
    strictPort: true, // Ensures the port is not changed
    hmr: {
      clientPort: 5173, // Hot Module Reloading client port (may vary)
    }
  }
})
