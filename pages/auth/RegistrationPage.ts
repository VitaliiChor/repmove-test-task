import { Locator, expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class RegistrationPage extends BasePage {
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly companyName: Locator;
  readonly industryDropdown: Locator;
  readonly email: Locator;
  readonly countryDropdown: Locator;
  readonly phone: Locator;
  readonly password: Locator;
  readonly signUpBtn: Locator;

  constructor(page: any) {
    super(page);

    this.firstName = page
      .locator("app-input")
      .filter({ hasText: "First Name" })
      .getByRole("textbox");

    this.lastName = page
      .locator("app-input")
      .filter({ hasText: "Last Name" })
      .getByRole("textbox");

    this.companyName = page
      .locator("app-input")
      .filter({ hasText: "Company Name" })
      .getByRole("textbox");

    this.industryDropdown = page
      .locator("ng-select")
      .filter({ hasText: "Industry" })
      .getByRole("combobox");

    this.email = page.locator('input[type="email"]');

    this.countryDropdown = page
      .locator("app-phone-number")
      .getByRole("combobox");

    this.phone = page
      .locator("app-input")
      .filter({ hasText: "Phone" })
      .locator('input[type="text"]');

    this.password = page.locator('input[type="password"]');
    this.signUpBtn = page.getByRole("button", { name: "Sign Up", exact: true });
  }

  async open() {
    await super.open("/auth/sign-up");
    await expect(this.signUpBtn).toBeVisible();
  }

  async register(user: {
    firstName: string;
    lastName: string;
    companyName: string;
    industry: string;
    email: string;
    country: string;
    phone: string;
    password: string;
  }) {
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.companyName.fill(user.companyName);
    await this.selectOption(this.industryDropdown, user.industry);
    await this.email.fill(user.email);
    await this.selectOption(this.countryDropdown, user.country);
    await this.phone.fill(user.phone);
    await this.password.fill(user.password);
    await this.signUpBtn.click();
  }

  private async selectOption(dropdown: Locator, value: string) {
    await dropdown.click();
    const option = this.page
      .locator(".ng-dropdown-panel .ng-option")
      .filter({ hasText: value });
    await expect(option).toBeVisible();
    await option.click();
  }

  async expectSuccess() {
    await this.waitForUrl(/\/dashboard$/);
  }

  async expectErrorMessage(message: string) {
    await expect(this.page.getByText(message, { exact: false })).toBeVisible();
  }
}
