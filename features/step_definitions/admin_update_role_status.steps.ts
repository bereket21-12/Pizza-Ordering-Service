import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given(
  "I am logged in as an admin with email {string} and password {string} to update role status",
  { timeout: 60 * 1000 },
  async function (email: string, password: string) {
    await this.page.goto("https://2f-pizza-order.vercel.app/login");
    await this.page.getByLabel("Email Address", { exact: true }).click();
    await this.page.getByLabel("Email Address", { exact: true }).fill(email);
    await this.page.getByLabel("Password", { exact: true }).click();
    await this.page.getByLabel("Password", { exact: true }).fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
);

When(
  "I navigate to the admin manage order page to update role status",
  { timeout: 60 * 1000 },
  async function () {
    await this.page.waitForURL(
      "https://2f-pizza-order.vercel.app/admin/manage_order"
    );
    await this.page
      .locator("div")
      .filter({ hasText: /^\/admin\/manage_order$/ })
      .getByRole("button")
      .click();
    await this.page.getByText("Role").click();
  }
);

When(
  "I click on {string} to update role status",
  { timeout: 60 * 1000 },
  async function (buttonName: string) {
    await this.page.getByText(buttonName, { exact: true }).click();
  }
);

When(
  "I uncheck the checkbox for the role {string}",
  { timeout: 60 * 1000 },
  async function (roleName: string) {
    // await this.page
    //   .getByRole("row", { name: roleName })
    //   .getByRole("checkbox", { exact: true })
    //   .uncheck();
    const checkbox = this.page
      .getByRole("row", { name: roleName })
      .getByRole("checkbox", { exact: true });

    // await expect(checkbox).toBeChecked();

    await checkbox.click();
  }
);

Then(
  "I should see a success message indicating the role status was updated successfully",
  { timeout: 60 * 1000 },
  async function () {
    await this.page.getByRole("status").waitFor({ state: "visible" });
    await expect(this.page.getByRole("status")).toContainText(
      "Role status updated successfully!"
    );
  }
);
