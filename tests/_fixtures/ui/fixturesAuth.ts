import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../../../pages/auth/LoginPage";
import { RegistrationPage } from "../../../pages/auth/RegistrationPage";

export const test = base.extend<{
  loginPage: LoginPage;
  registrationPage: RegistrationPage;
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistrationPage(page);
    await use(registrationPage);
  },
});

export { expect };
