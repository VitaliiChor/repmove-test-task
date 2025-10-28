import { Locator, expect, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class LoginPage extends BasePage {
  readonly email: Locator;
  readonly password: Locator;
  readonly signInBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.email = page.locator('input[type="email"]');
    this.password = page.locator('input[type="password"]');
    this.signInBtn = page.getByRole("button", { name: "Sign In", exact: true });
  }

  get currentPage() {
    return this.page;
  }

  async open() {
    await super.open("/auth/sign-in");
    await expect(this.signInBtn).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.signInBtn.click();
  }
}
