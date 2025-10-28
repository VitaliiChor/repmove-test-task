## Automated UI tests for Login and Registration

# Setup

- To install the project follow these steps:

1. Install Node.js (version 18 or newer).

2. Install dependencies in the project root:

- npm install

3. Install Playwright browsers:

- npx playwright install

# How to run the tests

Run all tests (headless)

- npx playwright test

# Run tests in UI mode (see steps live)

- npx playwright test --headed

# Run only Login tests

- npx playwright test tests/auth/signIn

# Run only Registration tests

- npx playwright test tests/auth/signUp

# Open HTML report

- npx playwright show-report
