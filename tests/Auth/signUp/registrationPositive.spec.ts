import { test } from "../../_fixtures/fixtures";
import { UserGenerator } from "../../../src/data/userGenerator";

test.describe("Registration Positive", () => {
  test("User can successfully register with valid data", async ({
    registrationPage,
  }) => {
    const user = {
      firstName: "John",
      lastName: "Doe",
      companyName: "QA Test GmbH",
      industry: "Medical",
      email: UserGenerator.uniqueEmail("repmove"),
      country: "+43",
      phone: UserGenerator.randomPhone(),
      password: UserGenerator.strongPassword(),
    };

    await registrationPage.open();
    await registrationPage.register(user);
    await registrationPage.expectSuccess();
  });
});
