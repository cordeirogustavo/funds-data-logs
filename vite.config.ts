import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import federation from "@originjs/vite-plugin-federation";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),  
    federation({
      name: "{{ PROJECT_NAME }}",
      filename: "remoteEntry.js",
      exposes: {},
      shared: ["react", "react-dom"],
    }),
    svgr(),
  ]
})
