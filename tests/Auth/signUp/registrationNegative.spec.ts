import { test } from "../../_fixtures/fixtures";
import { UserGenerator } from "../../../src/data/userGenerator";

test.describe("Registration Negative", () => {
  test("Show error message when First Name is empty", async ({
    registrationPage,
  }) => {
    await registrationPage.open();

    const user = {
      firstName: "",
      lastName: "Doe",
      companyName: "Test GmbH",
      industry: "Medical",
      email: UserGenerator.uniqueEmail("noFirstName"),
      country: "+43",
      phone: "232321453",
      password: UserGenerator.strongPassword(),
    };

    await registrationPage.register(user);

    await registrationPage.expectErrorMessage("The First Name is required");
  });

  test("Show error message for invalid email format", async ({
    registrationPage,
  }) => {
    await registrationPage.open();

    const user = {
      firstName: "John",
      lastName: "Doe",
      companyName: "Test GmbH",
      industry: "Medical",
      email: "gijj",
      country: "+43",
      phone: "232321453",
      password: UserGenerator.strongPassword(),
    };

    await registrationPage.register(user);

    await registrationPage.expectErrorMessage("Invalid email address");
  });
});
