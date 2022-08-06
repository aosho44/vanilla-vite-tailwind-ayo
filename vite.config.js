// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        src: resolve(__dirname, "src/index.html"),
        games: resolve(__dirname, "src/components/html/games.html"),
        hobbies: resolve(__dirname, "src/components/html/hobbies.html"),
        interest: resolve(__dirname, "src/components/html/projects.html"),
        socials: resolve(__dirname, "src/components/html/socials.html"),
      },
    },
  },
});
