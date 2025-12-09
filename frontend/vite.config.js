import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
 import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
   plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      // "@task-manager": path.resolve(__dirname, "./src/app/modules/task-manager"),
      // "@notification": path.resolve(__dirname, "./src/app/modules/notification"),
    },
  },
// preview: {
//     port: 3011,
//     host: true,                 // or '0.0.0.0'
//     strictPort: true,
//     allowedHosts: ['handpumpsupport.startupflora.in'], // 👈 add your domain
//   },
});

