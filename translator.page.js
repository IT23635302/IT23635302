/**
 * Page Object Model for SwiftTranslator
 * URL: https://www.swifttranslator.com/
 * 
 * This class encapsulates all interactions with the translator interface
 */
export class TranslatorPage {
  constructor(page) {
    this.page = page;
    
    // Selectors - These need to be adjusted based on actual page structure
    // Visit the website and inspect elements to get correct selectors
    this.singlishInput = 'textarea#singlish-input, textarea[placeholder*="Singlish"], textarea[placeholder*="singlish"], #input-text, .input-area';
    this.sinhalaOutput = '#sinhala-output, .output-area, .sinhala-text, #output-text';
    this.clearButton = 'button.clear, button#clear, button[aria-label="Clear"]';
    this.convertButton = 'button.convert, button#convert';
  }

  /**
   * Navigate to the translator page
   */
  async goto() {
    await this.page.goto('/');
    // Wait for page to be fully loaded
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Enter Singlish text into the input field
   * @param {string} text - The Singlish text to enter
   */
  async enterSinglish(text) {
    // Try multiple possible selectors
    const inputSelector = await this.findInputField();
    await this.page.fill(inputSelector, text);
    
    // Wait a bit for real-time conversion
    await this.page.waitForTimeout(1500);
  }

  /**
   * Type Singlish text character by character (for real-time testing)
   * @param {string} text - The Singlish text to type
   */
  async typeSinglish(text) {
    const inputSelector = await this.findInputField();
    await this.page.click(inputSelector);
    await this.page.keyboard.type(text, { delay: 50 });
    await this.page.waitForTimeout(1000);
  }

  /**
   * Get the Sinhala output text
   * @returns {Promise<string>} The converted Sinhala text
   */
  async getSinhalaOutput() {
    const outputSelector = await this.findOutputField();
    
    // Wait for output to appear
    await this.page.waitForTimeout(500);
    
    try {
      const element = await this.page.locator(outputSelector).first();
      const text = await element.textContent();
      return text ? text.trim() : '';
    } catch (error) {
      console.error('Error getting Sinhala output:', error);
      return '';
    }
  }

  /**
   * Clear the input field
   */
  async clearInput() {
    try {
      // Try to click clear button if exists
      const clearBtn = this.page.locator(this.clearButton).first();
      if (await clearBtn.isVisible({ timeout: 2000 })) {
        await clearBtn.click();
      } else {
        // Otherwise clear by selecting all and deleting
        const inputSelector = await this.findInputField();
        await this.page.fill(inputSelector, '');
      }
    } catch (error) {
      // Fallback: just clear the field
      const inputSelector = await this.findInputField();
      await this.page.fill(inputSelector, '');
    }
    await this.page.waitForTimeout(500);
  }

  /**
   * Check if output updates in real-time
   * @returns {Promise<boolean>} True if real-time conversion works
   */
  async isRealTimeConversionWorking() {
    await this.clearInput();
    
    // Type first word
    const inputSelector = await this.findInputField();
    await this.page.type(inputSelector, 'mama');
    await this.page.waitForTimeout(1000);
    
    const firstOutput = await this.getSinhalaOutput();
    
    // Type second word
    await this.page.type(inputSelector, ' gedhara');
    await this.page.waitForTimeout(1000);
    
    const secondOutput = await this.getSinhalaOutput();
    
    // Check if output changed
    return firstOutput !== secondOutput && secondOutput.length > firstOutput.length;
  }

  /**
   * Find the input field using multiple possible selectors
   * @returns {Promise<string>} The working selector
   */
  async findInputField() {
    const possibleSelectors = [
      'textarea#singlish-input',
      'textarea[placeholder*="Singlish"]',
      'textarea[placeholder*="singlish"]',
      '#input-text',
      '.input-area',
      'textarea.input',
      'textarea[name="input"]',
      'textarea:first-of-type'
    ];

    for (const selector of possibleSelectors) {
      try {
        const element = this.page.locator(selector).first();
        if (await element.isVisible({ timeout: 2000 })) {
          return selector;
        }
      } catch (e) {
        continue;
      }
    }
    
    // Default to first textarea
    return 'textarea';
  }

  /**
   * Find the output field using multiple possible selectors
   * @returns {Promise<string>} The working selector
   */
  async findOutputField() {
    const possibleSelectors = [
      '#sinhala-output',
      '.output-area',
      '.sinhala-text',
      '#output-text',
      'div.output',
      '[name="output"]',
      'div:has(> p):last-of-type'
    ];

    for (const selector of possibleSelectors) {
      try {
        const element = this.page.locator(selector).first();
        if (await element.isVisible({ timeout: 2000 })) {
          return selector;
        }
      } catch (e) {
        continue;
      }
    }
    
    // Default
    return '.output-area';
  }

  /**
   * Take a screenshot of the current state
   * @param {string} name - Name for the screenshot file
   */
  async takeScreenshot(name) {
    await this.page.screenshot({ 
      path: `screenshots/${name}.png`,
      fullPage: true 
    });
  }

  /**
   * Wait for output to be updated
   * @param {number} timeout - Maximum time to wait in ms
   */
  async waitForOutput(timeout = 3000) {
    await this.page.waitForTimeout(Math.min(timeout, 3000));
  }
}
