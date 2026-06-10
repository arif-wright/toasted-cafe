import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        menu: resolve(__dirname, "menu/index.html"),
        catering: resolve(__dirname, "catering/index.html"),
        location: resolve(__dirname, "location/index.html")
      }
    }
  }
});
