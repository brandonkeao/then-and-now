import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.SMOKE_BASE_URL;

if (!baseURL) {
  throw new Error("SMOKE_BASE_URL is required for hosted smoke tests.");
}

export default defineConfig({
  testDir: "./tests/smoke",
  fullyParallel: false,
  forbidOnly: true,
  retries: 1,
  reporter: process.env.CI ? "github" : "list",
  use: {
    ...devices["Desktop Chrome"],
    baseURL,
    screenshot: "off",
    trace: "off",
    video: "off",
  },
});
