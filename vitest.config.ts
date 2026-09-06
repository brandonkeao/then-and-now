import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
  test: {
    environment: "jsdom",
    exclude: ["tests/e2e/**", "tests/smoke/**", "node_modules/**"],
    setupFiles: ["./src/test/setup.ts"],
  },
});
