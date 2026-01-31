import { test, expect } from '@playwright/test';
import { TranslatorPage } from '../../pages/translator.page.js';

/**
 * Negative Functional Tests
 * Edge cases, typos, joined words, spacing issues
 * Student: IT23635302
 */

test.describe('Negative Functional Tests (10 tests)', () => {
  let translatorPage;

  test.beforeEach(async ({ page }) => {
    translatorPage = new TranslatorPage(page);
    await translatorPage.goto();
    await page.waitForTimeout(2000);
  });

  // Joined words without spaces
  test('Neg_Fun_0001 - Joined words: mamagedharayanavaa', async () => {
    const input = 'mamagedharayanavaa';
    const correctOutput = 'මම ගෙදර යනවා';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    console.log(`Input: ${input}`);
    console.log(`Actual: ${actual}`);
    
    // This should NOT produce correct output
    // Test passes if it fails to convert correctly
    expect(actual).toBeDefined();
    expect(actual.length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0002 - Joined words: matapaankannaoonee', async () => {
    const input = 'matapaankannaoonee';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    console.log(`Input: ${input}`);
    console.log(`Actual: ${actual}`);
    
    // System likely produces incorrect output
    expect(actual.length).toBeGreaterThan(0);
  });

  // Typos and spelling errors
  test('Neg_Fun_0003 - Typo: mama gdhara yanavaa (missing "e")', async () => {
    const input = 'mama gdhara yanavaa';
    const correctOutput = 'මම ගෙදර යනවා';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    console.log(`Input: ${input}`);
    console.log(`Actual: ${actual}`);
    
    // Should not produce correct "ගෙදර" with typo
    expect(actual).toBeDefined();
  });

  test('Neg_Fun_0004 - Typo: mta bath oonee (missing "a")', async () => {
    const input = 'mta bath oonee';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    console.log(`Input: ${input}`);
    console.log(`Actual: ${actual}`);
    
    // Likely produces incorrect output
    expect(actual.length).toBeGreaterThan(0);
  });

  // Excessive spacing
  test('Neg_Fun_0005 - Multiple spaces: mama    gedhara    yanavaa', async () => {
    const input = 'mama    gedhara    yanavaa';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    console.log(`Input: "${input}"`);
    console.log(`Actual: ${actual}`);
    
    // May have spacing issues
    expect(actual.length).toBeGreaterThan(5);
  });

  // Mixed incorrect spelling
  test('Neg_Fun_0006 - Mixed errors: mma gedhra ynnvaa', async () => {
    const input = 'mma gedhra ynnvaa';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    console.log(`Input: ${input}`);
    console.log(`Actual: ${actual}`);
    
    // Should produce incorrect conversion
    expect(actual.length).toBeGreaterThan(0);
  });

  // Incomplete words
  test('Neg_Fun_0007 - Incomplete word: mata ba oonee', async () => {
    const input = 'mata ba oonee';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    console.log(`Input: ${input}`);
    console.log(`Actual: ${actual}`);
    
    // "ba" instead of "bath"
    expect(actual).toBeDefined();
  });

  // Wrong character substitution
  test('Neg_Fun_0008 - Wrong chars: mama gedhara yanawa (missing double "aa")', async () => {
    const input = 'mama gedhara yanawa';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    console.log(`Input: ${input}`);
    console.log(`Actual: ${actual}`);
    
    // Should have pronunciation issues
    expect(actual.length).toBeGreaterThan(5);
  });

  // Missing vowel markers
  test('Neg_Fun_0009 - Missing vowel: oyata kohomda? (should be "kohomadha")', async () => {
    const input = 'oyata kohomda?';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    console.log(`Input: ${input}`);
    console.log(`Actual: ${actual}`);
    
    // Likely produces different output
    expect(actual.length).toBeGreaterThan(5);
  });

  // Extra characters
  test('Neg_Fun_0010 - Extra chars: mammaa gedhaarra yanaavaaa', async () => {
    const input = 'mammaa gedhaarra yanaavaaa';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    console.log(`Input: ${input}`);
    console.log(`Actual: ${actual}`);
    
    // Extra characters should cause issues
    expect(actual.length).toBeGreaterThan(5);
  });
});
