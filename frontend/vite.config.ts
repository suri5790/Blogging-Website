// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://127.0.0.1:8787', // Backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});