import { test, expect } from '@playwright/test';
import { TranslatorPage } from '../../pages/translator.page.js';

/**
 * Positive Functional Tests - Set 1
 * Sentence Structures, Questions, Commands, Greetings
 * Student: IT23635302
 */

test.describe('Positive Functional Tests - Set 1 (12 tests)', () => {
  let translatorPage;

  test.beforeEach(async ({ page }) => {
    translatorPage = new TranslatorPage(page);
    await translatorPage.goto();
    await page.waitForTimeout(2000);
  });

  // Test from Excel - Pos_Fun_0001
  test('Pos_Fun_0001 - Convert a short daily greeting phrase', async () => {
    const input = 'oyaata kohomadha?';
    const expected = 'ඔයාට කොහොමද?';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
    
    expect(actual).toContain('ඔයාට');
    expect(actual).toContain('කොහොමද');
  });

  // Test from Excel - Pos_Fun_0002
  test('Pos_Fun_0002 - Long mixed-language input with slang', async () => {
    const input = 'machan mata adha meeting ekee Zoom link eka email ekak vidhihata evanna puLuvandha? Please send it before 3pm. Mama office yanna kalin check karanna oonea. Email ekak evanna amaarunam WhatsApp msg ekak dhaapan. Thx!';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    console.log(`Input length: ${input.length}`);
    console.log(`Actual: ${actual.substring(0, 100)}...`);
    
    expect(actual).toContain('මචන්');
    expect(actual).toContain('මට');
    expect(actual.length).toBeGreaterThan(50);
  });

  // Test from Excel - Pos_Fun_0003
  test('Pos_Fun_0003 - Convert a short request phrase', async () => {
    const input = 'mata help ekak karanna puLuvandha?';
    const expected = 'මට help එකක් කරන්න පුළුවන්ද?';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual).toContain('මට');
    expect(actual).toContain('පුළුවන්ද');
  });

  // Simple Sentences
  test('Pos_Fun_0004 - Simple sentence: mama gedhara yanavaa', async () => {
    const input = 'mama gedhara yanavaa.';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual).toContain('මම');
    expect(actual).toContain('ගෙදර');
    expect(actual).toContain('යනවා');
  });

  test('Pos_Fun_0005 - Simple sentence: mata bath oonee', async () => {
    const input = 'mata bath oonee.';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual).toContain('මට');
    expect(actual).toContain('බත්');
  });

  test('Pos_Fun_0006 - Simple sentence: api paasal yanavaa', async () => {
    const input = 'api paasal yanavaa.';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual).toContain('අපි');
    expect(actual).toContain('යනවා');
  });

  // Compound Sentences
  test('Pos_Fun_0007 - Compound sentence with conjunction', async () => {
    const input = 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual).toContain('මම');
    expect(actual.length).toBeGreaterThan(20);
  });

  test('Pos_Fun_0008 - Compound sentence: eat and watch movie', async () => {
    const input = 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual).toContain('අපි');
    expect(actual.length).toBeGreaterThan(20);
  });

  // Questions
  test('Pos_Fun_0009 - Question: kavadhdha enna hithan inne?', async () => {
    const input = 'oyaa kavadhdha enna hithan inne?';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual).toContain('ඔයා');
  });

  test('Pos_Fun_0010 - Question: hariyata vaeda karanavaadha?', async () => {
    const input = 'meeka hariyata vaeda karanavaadha?';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.length).toBeGreaterThan(10);
  });

  // Commands
  test('Pos_Fun_0011 - Command: vahaama enna', async () => {
    const input = 'vahaama enna.';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual).toContain('එන්න');
  });

  test('Pos_Fun_0012 - Command: issarahata yanna', async () => {
    const input = 'issarahata yanna.';
    
    await translatorPage.enterSinglish(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual).toContain('යන්න');
  });
});
