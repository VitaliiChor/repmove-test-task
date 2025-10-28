export class UserGenerator {
  static uniqueEmail(prefix = "qa"): string {
    return `${prefix}+${Date.now()}@example.com`;
  }

  static strongPassword(): string {
    return `Qa!${Date.now()}aA`;
  }

  static randomPhone(): string {
    return `170${Math.floor(1000000 + Math.random() * 8999999)}`;
  }
}
