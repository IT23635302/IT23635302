import { test, expect } from '@playwright/test';
import { TranslatorPage } from '../../pages/translator.page.js';

/**
 * UI Tests
 * Real-time conversion behavior
 * Student: IT23635302
 */

test.describe('UI Tests', () => {
  let translatorPage;

  test.beforeEach(async ({ page }) => {
    translatorPage = new TranslatorPage(page);
    await translatorPage.goto();
    await page.waitForTimeout(2000);
  });

  // Test from Excel - Pos_UI_0001 (First one)
  test('Pos_UI_0001 - Sinhala output updates automatically in real-time', async ({ page }) => {
    const input = 'man gedhara yanavaa';
    const expectedContains = 'මන්';
    
    // Clear any existing input
    await translatorPage.clearInput();
    await page.waitForTimeout(500);
    
    console.log('Testing real-time conversion...');
    
    // Type first part
    await translatorPage.typeSinglish('man');
    await page.waitForTimeout(1000);
    
    const firstOutput = await translatorPage.getSinhalaOutput();
    console.log('After typing "man":', firstOutput);
    
    // Type more text
    await page.keyboard.type(' gedhara yanavaa');
    await page.waitForTimeout(1500);
    
    const finalOutput = await translatorPage.getSinhalaOutput();
    console.log('Final output:', finalOutput);
    
    // Verify output updated in real-time
    expect(finalOutput.length).toBeGreaterThan(firstOutput.length);
    expect(finalOutput).toContain('මන්');
    expect(finalOutput).toContain('යනවා');
  });

  // Test from Excel - Pos_UI_0002 (Second Pos_UI_0001 - Clear Future Time)
  test('Pos_UI_0002 - Clear Future Time Reference Sentence', async () => {
    const input = 'oyaa enne dhavasakata passe.';
    const expected = 'ඔයා එන්නෙ දවසකට පස්සෙ.';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
    
    expect(actual).toContain('ඔයා');
    expect(actual).toContain('එන්නෙ');
    expect(actual).toContain('පස්සෙ');
  });
});
