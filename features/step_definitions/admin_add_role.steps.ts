import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given(
  "I am on the login page to add a role",
  { timeout: 60 * 1000 },
  async function () {
    await this.page.goto("https://2f-pizza-order.vercel.app/login");
  }
);

When(
  "I log in with email {string} and password {string} to add a role",
  { timeout: 60 * 1000 },
  async function (email: string, password: string) {
    await this.page.getByLabel("Email Address", { exact: true }).click();
    await this.page.getByLabel("Email Address", { exact: true }).fill(email);
    await this.page.getByLabel("Password", { exact: true }).click();
    await this.page.getByLabel("Password", { exact: true }).fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
);

When(
  "I navigate to the admin manage order page to add a role",
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
    await this.page.getByText("Role", { exact: true }).click();
    // await this.page.getByRole("button", { name: "Add Role" }).click();
  }
);

When(
  "I click on {string} to add a role",
  { timeout: 60 * 1000 },
  async function (buttonName: string) {
    await this.page.getByText(buttonName, { exact: true }).click();
    // await this.page
    //   .getByRole("button", { exact: true }, { name: buttonName })
    //   .click();
  }
);

When("I fill in the role details", { timeout: 60 * 1000 }, async function () {
  await this.page.getByLabel("Role Name", { exact: true }).click();
  await this.page.getByLabel("Role Name", { exact: true }).fill("role");
});

When(
  "I select the role permissions",
  { timeout: 60 * 1000 },
  async function () {
    await this.page.getByLabel("See Order").check();
    await this.page.getByLabel("Add User").check();
    await this.page.getByLabel("See Customer").check();
  }
);

Then(
  "I should see a success message indicating the role was created successfully",
  { timeout: 60 * 1000 },
  async function () {
    await expect(this.page.getByRole("status")).toContainText(
      "Role created successfully!"
    );
  }
);
