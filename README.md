# Singlish to Sinhala Translator - Automated Testing Project

## Student Information
- **Registration Number**: IT23635302
- **Assignment**: IT3040 - ITPM Assignment 1
- **Application Under Test**: https://www.swifttranslator.com/
- **Testing Framework**: Playwright with JavaScript

## Project Overview
This project contains automated test cases for testing the Singlish to Sinhala translator application. The test suite includes:
- **36 Positive Functional Tests**: Testing correct conversion scenarios (includes all 3 from Excel)
- **10 Negative Functional Tests**: Testing edge cases and failure scenarios
- **2 UI Tests**: Testing user interface behavior (includes all 2 from Excel)
- **Total: 48 automated tests** (exceeds the 35 minimum requirement)

## Project Structure
```
IT23635302-playwright-project/
│
├── tests/
│   ├── positive-functional/          # Positive test cases (24+)
│   │   ├── 01-sentence-structures.spec.js
│   │   ├── 02-questions-commands.spec.js
│   │   └── 03-daily-language.spec.js
│   │
│   ├── negative-functional/          # Negative test cases (10+)
│   │   └── 01-edge-cases.spec.js
│   │
│   └── ui/                           # UI test cases (1)
│       └── 01-ui-behavior.spec.js
│
├── pages/
│   └── translator.page.js            # Page Object Model
│
├── fixtures/
│   └── test-data.json                # Test data
│
├── utils/                            # Helper utilities
│
├── test-results/                     # Generated test reports
│
├── screenshots/                      # Screenshots on failure
│
├── playwright.config.js              # Playwright configuration
├── package.json                      # Project dependencies
└── README.md                         # This file
```

## Prerequisites
Before running the tests, ensure you have the following installed:

### Required Software
1. **Node.js** (v16 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Git** (for cloning repository)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

## Installation Instructions

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd IT23635302-playwright-project
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- Playwright Test framework
- All required dependencies

### Step 3: Install Playwright Browsers
```bash
npx playwright install
```

This installs Chromium, Firefox, and WebKit browsers required by Playwright.

### Step 4: Verify Installation
```bash
npx playwright --version
```

You should see the Playwright version number displayed.

## Running the Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Headed Mode (with browser visible)
```bash
npm run test:headed
```

### Run Tests with UI Mode (interactive)
```bash
npm run test:ui
```

### Run Specific Test Suites

#### Run Only Positive Functional Tests
```bash
npm run test:positive
```

#### Run Only Negative Functional Tests
```bash
npm run test:negative
```

#### Run Only UI Tests
```bash
npm run test:ui-tests
```

### Run Tests in Debug Mode
```bash
npm run test:debug
```

## Viewing Test Reports

### HTML Report (Recommended)
After running tests, view the HTML report:
```bash
npm run report
```

This opens an interactive HTML report in your browser showing:
- Test execution results
- Screenshots of failures
- Detailed error messages
- Execution timeline

### Other Report Formats
Test results are also available in:
- **JSON**: `test-results/results.json`
- **JUnit XML**: `test-results/junit.xml`

## Test Coverage

### Positive Functional Tests (24 tests)
Tests covering successful conversion scenarios:

1. **Sentence Structures (7 tests)**
   - Simple sentences
   - Compound sentences
   - Complex sentences

2. **Interrogative and Imperative Forms (7 tests)**
   - Questions (interrogative)
   - Commands (imperative)

3. **Daily Language Usage (10 tests)**
   - Greetings
   - Requests and responses
   - Polite vs informal phrasing
   - Common expressions

### Negative Functional Tests (10 tests)
Tests covering failure scenarios and edge cases:
1. Joined words without spaces
2. Typos and spelling errors
3. Excessive spacing
4. Mixed incorrect spelling
5. Incomplete words
6. Wrong character substitution
7. Missing vowel markers
8. Extra characters
9. Various input errors
10. Edge case handling

### UI Tests (1 test)
Testing user interface behavior:
1. Real-time output conversion updates

## Test Case Mapping
All test cases in this automation project correspond to the test cases documented in the Excel file (`IT23635302.xlsx`). Each test case follows the naming convention:
- `Pos_Fun_XXXX` - Positive Functional Tests
- `Neg_Fun_XXXX` - Negative Functional Tests
- `Pos_UI_XXXX` - Positive UI Tests

## Page Object Model
The project uses the Page Object Model (POM) design pattern for maintainability:
- **File**: `pages/translator.page.js`
- **Purpose**: Encapsulates all interactions with the translator UI
- **Benefits**: 
  - Easier maintenance when UI changes
  - Reusable methods across tests
  - Better code organization

## Configuration
Key configuration in `playwright.config.js`:
- **Base URL**: https://www.swifttranslator.com/
- **Browser**: Chromium (can be extended to Firefox/WebKit)
- **Timeout**: 15 seconds for actions, 30 seconds for navigation
- **Retries**: 2 retries on CI environments
- **Screenshots**: Captured on failure
- **Videos**: Recorded on failure
- **Parallel Execution**: Disabled (sequential execution)

## Troubleshooting

### Issue: Tests fail with "Timeout" errors
**Solution**: Increase timeout in `playwright.config.js`:
```javascript
actionTimeout: 20000,  // Increase from 15000
navigationTimeout: 45000,  // Increase from 30000
```

### Issue: Cannot find selectors
**Solution**: 
1. Inspect the actual website elements
2. Update selectors in `pages/translator.page.js`
3. The Page Object Model has multiple fallback selectors

### Issue: Browser not launching
**Solution**: Reinstall browsers:
```bash
npx playwright install --force
```

### Issue: Module not found errors
**Solution**: Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tests pass locally but fail in different environment
**Solution**: 
1. Check network connectivity to https://www.swifttranslator.com/
2. Ensure website is accessible
3. Increase wait times for slower networks

## Best Practices Followed

1. **Page Object Model**: All page interactions centralized
2. **Explicit Waits**: Proper waiting for elements and network
3. **Error Handling**: Try-catch blocks for robust selectors
4. **Modular Structure**: Tests organized by category
5. **Meaningful Names**: Descriptive test and variable names
6. **Clean Code**: Well-commented and formatted
7. **Reusability**: Shared fixtures and utilities

## Notes

### Important Limitations
- The application is designed for standard Singlish transliteration
- Chat-style shorthand (e.g., "Thx", "u", "gr8") is not tested as per assignment guidelines
- Refer to the application's Help page for correct Singlish character combinations

### Selector Configuration
The selectors in `translator.page.js` are designed with multiple fallbacks. If the website structure changes:
1. Inspect the website elements using browser DevTools
2. Update the selectors in `translator.page.js`
3. The findInputField() and findOutputField() methods try multiple selectors automatically

## Assignment Deliverables
1. ✅ Full Playwright project repository
2. ✅ Git repository (publicly accessible)
3. ✅ README.md with installation and execution instructions
4. ✅ 24+ Positive Functional test cases
5. ✅ 10+ Negative Functional test cases
6. ✅ 1 UI test case
7. ✅ Excel file with test case documentation

## Contact Information
For any questions or issues:
- **Student**: IT23635302
- **Course**: IT3040 - ITPM
- **Semester**: 1

## License
This project is created for academic purposes as part of IT3040 - ITPM Assignment 1.

---

**Last Updated**: January 2026
**Playwright Version**: 1.40.0
**Node Version**: 16+
