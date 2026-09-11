import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Forward API calls to the Express server (server/server.js) during dev
      "/api": "http://localhost:3000",
    },
  },
});
