import { Page, expect } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  async open(path: string) {
    await this.page.goto(path, { waitUntil: "domcontentloaded" });
  }

  async expectUrlContains(fragment: string | RegExp) {
    await expect(this.page).toHaveURL(fragment);
  }

  async expectVisible(selector: string) {
    await expect(this.page.locator(selector)).toBeVisible();
  }

  async takeScreenshot(name = "screenshot") {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }

  async waitForUrl(path: string | RegExp) {
    await this.page.waitForURL(path);
  }

  async expectErrorMessage(text: string) {
    await expect(this.page.getByText(text, { exact: false })).toBeVisible();
  }
}
