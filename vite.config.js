import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("index.html", import.meta.url)),
        thirdPartyNotices: fileURLToPath(new URL("third-party-notices.html", import.meta.url)),
        privacy: fileURLToPath(new URL("privacy.html", import.meta.url)),
      },
    },
  },
});
