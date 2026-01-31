/**
 * Constants for Test Automation
 * Student: IT23635302
 */

// Application URLs
export const BASE_URL = 'https://www.swifttranslator.com/';

// Timeouts (in milliseconds)
export const TIMEOUTS = {
  SHORT: 1000,
  MEDIUM: 3000,
  LONG: 5000,
  NETWORK: 30000,
  ACTION: 15000
};

// Input Length Classifications
export const INPUT_LENGTH = {
  SHORT: 30,      // S: ≤ 30 characters
  MEDIUM: 299,    // M: 31-299 characters
  LONG: 300       // L: ≥ 300 characters
};

// Test Case Prefixes
export const TEST_PREFIXES = {
  POSITIVE_FUNCTIONAL: 'Pos_Fun',
  NEGATIVE_FUNCTIONAL: 'Neg_Fun',
  POSITIVE_UI: 'Pos_UI',
  NEGATIVE_UI: 'Neg_UI'
};

// Sinhala Unicode Range
export const SINHALA_UNICODE = {
  START: '\u0D80',
  END: '\u0DFF',
  REGEX: /[\u0D80-\u0DFF]/g
};

// Common Singlish to Sinhala mappings
export const COMMON_WORDS = {
  'mama': 'මම',
  'oyaa': 'ඔයා',
  'api': 'අපි',
  'gedhara': 'ගෙදර',
  'yanavaa': 'යනවා',
  'enna': 'එන්න',
  'mata': 'මට',
  'hari': 'හරි',
  'naee': 'නැහැ'
};

// Test Categories
export const TEST_CATEGORIES = {
  SENTENCE_STRUCTURE: 'Sentence Structure',
  INTERROGATIVE: 'Interrogative',
  IMPERATIVE: 'Imperative',
  DAILY_LANGUAGE: 'Daily Language',
  GREETING: 'Greeting',
  REQUEST: 'Request',
  RESPONSE: 'Response',
  TENSE: 'Tense',
  MIXED_LANGUAGE: 'Mixed Language',
  PUNCTUATION: 'Punctuation',
  FORMATTING: 'Formatting',
  EDGE_CASE: 'Edge Case'
};

// Test Status
export const TEST_STATUS = {
  PASS: 'Pass',
  FAIL: 'Fail',
  SKIP: 'Skip',
  PENDING: 'Pending'
};

export default {
  BASE_URL,
  TIMEOUTS,
  INPUT_LENGTH,
  TEST_PREFIXES,
  SINHALA_UNICODE,
  COMMON_WORDS,
  TEST_CATEGORIES,
  TEST_STATUS
};
