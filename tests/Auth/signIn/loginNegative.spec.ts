import { test, expect } from "../../_fixtures/fixtures";

test.describe("Login Negative", () => {
  test("shows error message when email is empty", async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login("", "somePassword123!");
    await loginPage.expectErrorMessage("Please, enter your email address");
  });

  test("shows error message when password is empty", async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login("user@example.com", "");
    await loginPage.expectErrorMessage("The Password is required");
  });
});
