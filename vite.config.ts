import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  root: ".",
  base: "/gas-checker/",
  build: {
    outDir: "dist",
  },
});
