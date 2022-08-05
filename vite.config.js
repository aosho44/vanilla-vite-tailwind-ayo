// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        src: resolve(__dirname, "src/index.html"),
        components: resolve(__dirname, "src/components/html/games.html"),
      },
    },
  },
});
