import { test, expect } from "../../_fixtures/fixtures";

test.describe("Login Positive flow", () => {
  test("User can successfully sign in", async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login("valid_user@test.com", "ValidPassword123!");
    await expect(loginPage.currentPage).toHaveURL(/\/dashboard$/);
  });
});
