# IT23635302 - Playwright Test Project Summary

## Assignment Details
- **Course**: IT3040 - ITPM
- **Assignment**: Assignment 1 - Semester 1
- **Student**: IT23635302
- **Application**: Singlish to Sinhala Translator
- **URL**: https://www.swifttranslator.com/
- **Framework**: Playwright (JavaScript)

---

## Test Case Summary

### Total Test Cases: 36 Tests

#### 1. Positive Functional Tests: 26 Tests
| File | Test Count | Category |
|------|-----------|----------|
| 01-sentence-structures.spec.js | 7 | Simple, Compound, Complex Sentences |
| 02-questions-commands.spec.js | 7 | Interrogative & Imperative Forms |
| 03-daily-language.spec.js | 10 | Greetings, Requests, Expressions |
| 04-grammatical-forms.spec.js | 12 | Tenses, Negation, Pronouns |

**Test IDs**: Pos_Fun_0001 to Pos_Fun_0036

#### 2. Negative Functional Tests: 10 Tests
| File | Test Count | Category |
|------|-----------|----------|
| 01-edge-cases.spec.js | 10 | Joined words, Typos, Spacing Issues |

**Test IDs**: Neg_Fun_0001 to Neg_Fun_0010

#### 3. UI Tests: 1 Test
| File | Test Count | Category |
|------|-----------|----------|
| 01-ui-behavior.spec.js | 1 | Real-time Conversion |

**Test IDs**: Pos_UI_0001

---

## Coverage Matrix

### What is Covered by Tests

✅ **Sentence Structures**
- Simple sentences
- Compound sentences (with conjunctions)
- Complex sentences (with conditions, cause/effect)

✅ **Interrogative Forms**
- Questions with different question words
- Different question structures

✅ **Imperative Forms**
- Commands
- Requests
- Instructions

✅ **Daily Language Usage**
- Common greetings (aayuboovan, kohomadha)
- Polite requests (karuNaakaralaa)
- Responses (hari, naee)
- Frequently used expressions

✅ **Grammatical Forms**
- Past tense
- Present tense
- Future tense
- Negation patterns
- Singular pronouns (mama, oyaa)
- Plural pronouns (api, oyaalaa)

✅ **Input Length Variations**
- Short inputs (S: ≤30 characters)
- Medium inputs (M: 31-299 characters)
- Long inputs (L: ≥300 characters)

✅ **Edge Cases & Negative Scenarios**
- Joined words without spaces
- Typos and spelling errors
- Excessive spacing
- Mixed incorrect spelling
- Incomplete words
- Wrong character substitutions
- Missing vowel markers
- Extra characters

✅ **UI Behavior**
- Real-time output updates

---

## Project Structure

```
IT23635302-playwright-project/
│
├── 📁 tests/
│   ├── 📁 positive-functional/
│   │   ├── 01-sentence-structures.spec.js      [7 tests]
│   │   ├── 02-questions-commands.spec.js        [7 tests]
│   │   ├── 03-daily-language.spec.js            [10 tests]
│   │   └── 04-grammatical-forms.spec.js         [12 tests]
│   │
│   ├── 📁 negative-functional/
│   │   └── 01-edge-cases.spec.js                [10 tests]
│   │
│   └── 📁 ui/
│       └── 01-ui-behavior.spec.js               [1 test]
│
├── 📁 pages/
│   └── translator.page.js                       [Page Object Model]
│
├── 📁 fixtures/
│   └── test-data.json                           [Test data]
│
├── 📁 utils/
│   ├── helpers.js                               [Helper functions]
│   └── constants.js                             [Constants]
│
├── 📄 playwright.config.js                      [Configuration]
├── 📄 package.json                              [Dependencies]
├── 📄 README.md                                 [Full documentation]
├── 📄 QUICKSTART.md                             [Quick start guide]
├── 📄 PROJECT_SUMMARY.md                        [This file]
└── 📄 repository-link.txt                       [GitHub repo URL]
```

---

## Key Features

### 1. Page Object Model (POM)
- All page interactions centralized in `translator.page.js`
- Reusable methods across tests
- Easy maintenance when UI changes

### 2. Robust Selector Strategy
- Multiple fallback selectors
- Auto-detection of input/output fields
- Handles website changes gracefully

### 3. Comprehensive Test Coverage
- **26 positive tests**: Testing correct conversion
- **10 negative tests**: Testing error handling
- **1 UI test**: Testing interface behavior

### 4. Professional Structure
- Organized by test category
- Clear naming conventions
- Well-documented code
- Modular and maintainable

### 5. Detailed Reporting
- HTML reports with screenshots
- JSON reports for integration
- JUnit XML for CI/CD
- Console logs for debugging

---

## Test Execution Flow

```
1. Initialize Playwright
   ↓
2. Navigate to https://www.swifttranslator.com/
   ↓
3. Wait for page load
   ↓
4. Enter Singlish text
   ↓
5. Wait for real-time conversion (1-2 seconds)
   ↓
6. Capture Sinhala output
   ↓
7. Verify against expected output
   ↓
8. Take screenshot if failed
   ↓
9. Generate report
```

---

## Installation Commands

```bash
# Clone repository
git clone [repository-url]
cd IT23635302-playwright-project

# Install dependencies
npm install

# Install browsers
npx playwright install

# Run tests
npm test

# View report
npm run report
```

---

## Expected Results

### Positive Tests (26)
- **Expected**: Most should PASS
- **Reason**: Testing correct Singlish → Sinhala conversion
- **If FAIL**: Website might have issues or changed behavior

### Negative Tests (10)
- **Expected**: Most should FAIL (this is correct!)
- **Reason**: Testing incorrect inputs and edge cases
- **Purpose**: Verify system handles errors appropriately

### UI Tests (1)
- **Expected**: Should PASS
- **Reason**: Testing real-time conversion feature
- **If FAIL**: Real-time conversion might not be working

---

## Assignment Requirements Checklist

✅ **Functional Requirements**
- [x] 24+ positive functional test cases (we have 26)
- [x] 10+ negative functional test cases (we have 10)
- [x] 1 UI test case (we have 1)
- [x] Tests automated using Playwright
- [x] Real-time output testing

✅ **Code Requirements**
- [x] Page Object Model implemented
- [x] Organized test structure
- [x] Configuration file (playwright.config.js)
- [x] Helper utilities
- [x] Test data fixtures

✅ **Documentation**
- [x] README.md with installation instructions
- [x] Quick start guide
- [x] Code comments
- [x] Project summary (this file)

✅ **Deliverables**
- [x] Full Playwright project
- [x] Git repository structure
- [x] Repository link file
- [x] .gitignore configured
- [x] Excel file mapping (separate)

---

## Technologies Used

- **Playwright**: v1.40.0
- **Node.js**: v16+
- **JavaScript**: ES6+
- **Test Framework**: @playwright/test

---

## Key Design Decisions

1. **Sequential Execution**: Tests run one at a time for stability
2. **No Parallel Execution**: Ensures consistent timing for real-time conversion
3. **Multiple Selectors**: Handles website changes automatically
4. **Timeout Configuration**: Generous timeouts for network delays
5. **Screenshot on Failure**: Visual debugging aid

---

## Maintenance Notes

### If Selectors Break
1. Inspect website using browser DevTools
2. Update selectors in `pages/translator.page.js`
3. The `findInputField()` and `findOutputField()` methods try multiple selectors

### If Tests Timeout
1. Increase timeouts in `playwright.config.js`
2. Check internet connection
3. Verify website is accessible

### Adding New Tests
1. Choose appropriate test file or create new one
2. Follow naming convention: `Pos_Fun_XXXX`, `Neg_Fun_XXXX`, `Pos_UI_XXXX`
3. Use Page Object Model methods
4. Add to Excel documentation

---

## Contact & Support

**Student**: IT23635302  
**Course**: IT3040 - ITPM  
**Institution**: BSc (Hons) in Information Technology - Year 3  
**Date**: January 2026

---

## License

This project is submitted for academic evaluation as part of IT3040 - ITPM Assignment 1.

**© 2026 IT23635302. All rights reserved.**
