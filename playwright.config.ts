import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  retries: 1,
  reporter: [["html", { outputFolder: "playwright-report" }]],
  use: {
    baseURL: "https://dev-repmove-enterprise.web.app/",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
  },
  projects: [{ name: "Chromium", use: { ...devices["Desktop Chrome"] } }],
});
