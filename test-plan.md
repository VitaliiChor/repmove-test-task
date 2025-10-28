## Test Plan – Login & Registration (RepMove)

1. Scope

# We test Login and Registration pages on

https://dev-repmove-enterprise.web.app/

# Focus:

- Check input validation (required fields, wrong formats)

- Check successful login and registration

- Check redirection to /dashboard

# Out of scope:

- Password reset

- Email verification

- API, performance, mobile view

2. Tools & Setup

- Playwright with TypeScript

- Test structure: Page Object Model (BasePage, LoginPage, RegistrationPage)

- Fixtures for reusable pages

- Unique test data from UserGenerator

# Run tests:

- npx playwright test
- npx playwright show-report

3. Positive Scenarios

# Login

- Valid email + valid password → redirect to /dashboard

# Registration

- Fill all fields correctly → redirect to /dashboard

4. Negative Scenarios

# Login

- Empty email → show message “Please, enter your email address”

- Empty password → show message “The Password is required”

# Registration

- Empty first name → show message “The First Name is required”

- Invalid email → show message “Invalid email address”

5. Edge Cases

- Submit with all empty fields

- Wrong email format (e.g. abc)

- Duplicate email (already registered)

6. Assumptions

- The staging site is available

- Dashboard opens after successful login/registration

- Error messages are visible in the UI

7. Reporting

- Playwright HTML report

- Traces, screenshots, and videos saved for failed tests
