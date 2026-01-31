import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration for Singlish to Sinhala Translator Testing
 * Student: IT23635302
 * Assignment: IT3040 - ITPM Assignment 1
 */
export default defineConfig({
  testDir: './tests',
  
  /* Run tests sequentially for better reporting and stability */
  fullyParallel: false,
  
  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  
  /* Use single worker for sequential execution */
  workers: 1,
  
  /* Reporter configuration */
  reporter: [
    ['html', { outputFolder: 'test-results/html-report', open: 'never' }],
    ['list'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/junit.xml' }]
  ],
  
  /* Shared settings for all projects */
  use: {
    /* Base URL for the application */
    baseURL: 'https://www.swifttranslator.com/',
    
    /* Collect trace on first retry */
    trace: 'on-first-retry',
    
    /* Screenshot on failure */
    screenshot: 'only-on-failure',
    
    /* Video on failure */
    video: 'retain-on-failure',
    
    /* Action timeout */
    actionTimeout: 15000,
    
    /* Navigation timeout */
    navigationTimeout: 30000,
    
    /* Viewport size */
    viewport: { width: 1280, height: 720 },
  },

  /* Configure projects for different browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: ['--disable-blink-features=AutomationControlled']
        }
      },
    },
  ],

  /* Output folder for test artifacts */
  outputDir: 'test-results/artifacts',
});
