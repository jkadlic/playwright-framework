import { defineConfig, devices } from "@playwright/test";

import { config } from "dotenv";
import { resolve, join } from "path";
config({ path: resolve(import.meta.dirname, ".env") });

const CONTEXT_STATE_PATH: string = join(import.meta.dirname, "./.context/state.json");

export default defineConfig({
    testDir: "./tests",
    /* Run tests in files in parallel */
    fullyParallel: !!process.env.CI,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    ...(process.env.CI ? { workers: 1 } : {}),
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: "html",
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        headless: !!process.env.CI,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: "on-first-retry",
        storageState: CONTEXT_STATE_PATH,
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: "authenticate",
            testMatch: "**/authenticate.setup.ts",
            use: {
                storageState: { cookies: [], origins: [] },
            },
        },
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
            dependencies: ["authenticate"],
        },

        // {
        //   name: 'firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },
        //
        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },

        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },
    ],
});
