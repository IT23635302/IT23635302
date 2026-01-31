/**
 * Helper Utilities for Test Automation
 * Student: IT23635302
 */

/**
 * Wait for a specific duration
 * @param {number} ms - Milliseconds to wait
 */
export async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Compare two strings ignoring whitespace differences
 * @param {string} str1 
 * @param {string} str2 
 * @returns {boolean}
 */
export function compareIgnoringWhitespace(str1, str2) {
  const normalize = (str) => str.replace(/\s+/g, ' ').trim();
  return normalize(str1) === normalize(str2);
}

/**
 * Check if string contains Sinhala characters
 * @param {string} text 
 * @returns {boolean}
 */
export function containsSinhala(text) {
  const sinhalaRegex = /[\u0D80-\u0DFF]/;
  return sinhalaRegex.test(text);
}

/**
 * Count Sinhala characters in string
 * @param {string} text 
 * @returns {number}
 */
export function countSinhalaCharacters(text) {
  const sinhalaRegex = /[\u0D80-\u0DFF]/g;
  const matches = text.match(sinhalaRegex);
  return matches ? matches.length : 0;
}

/**
 * Generate test case ID
 * @param {string} type - 'Pos_Fun', 'Neg_Fun', 'Pos_UI', 'Neg_UI'
 * @param {number} number - Test case number
 * @returns {string}
 */
export function generateTestId(type, number) {
  const paddedNumber = String(number).padStart(4, '0');
  return `${type}_${paddedNumber}`;
}

/**
 * Log test information
 * @param {string} testId 
 * @param {string} input 
 * @param {string} output 
 */
export function logTestInfo(testId, input, output) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Test ID: ${testId}`);
  console.log(`Input: ${input}`);
  console.log(`Output: ${output}`);
  console.log(`${'='.repeat(60)}\n`);
}

/**
 * Sanitize text for comparison (remove extra spaces, special chars)
 * @param {string} text 
 * @returns {string}
 */
export function sanitizeText(text) {
  return text
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[^\u0D80-\u0DFF\s\w]/g, '');
}

/**
 * Check if output is valid Sinhala
 * @param {string} output 
 * @returns {boolean}
 */
export function isValidSinhalaOutput(output) {
  // Should contain Sinhala characters and not be empty
  return output.length > 0 && containsSinhala(output);
}

/**
 * Get input length classification
 * @param {string} input 
 * @returns {string} 'S', 'M', or 'L'
 */
export function getInputLengthType(input) {
  const length = input.length;
  if (length <= 30) return 'S';
  if (length <= 299) return 'M';
  return 'L';
}

/**
 * Format test duration
 * @param {number} ms 
 * @returns {string}
 */
export function formatDuration(ms) {
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(2)}s`;
}

export default {
  wait,
  compareIgnoringWhitespace,
  containsSinhala,
  countSinhalaCharacters,
  generateTestId,
  logTestInfo,
  sanitizeText,
  isValidSinhalaOutput,
  getInputLengthType,
  formatDuration
};
