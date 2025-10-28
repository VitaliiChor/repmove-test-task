import { test as base, expect } from "@playwright/test";
import { test as authTest } from "./ui/fixturesAuth";

export const test = authTest;
export { expect };
