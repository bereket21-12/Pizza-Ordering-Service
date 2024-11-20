import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given(
  "I am on the login page to manage orders",
  { timeout: 60 * 1000 },
  async function () {
    await this.page.goto("https://2f-pizza-order.vercel.app/login");
  }
);

When(
  "I log in with email {string} and password {string} to manage orders",
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
  "I change the order status to {string}",
  { timeout: 60 * 1000 },
  async function (status: string) {
    await this.page
      .locator('button:has-text("' + status + '")')
      .first()
      .click();
  }
);

Then(
  "I should see the order status updated to {string}",
  { timeout: 60 * 1000 },
  async function (status: string) {
    await this.page.getByRole("status").waitFor({ state: "visible" });
    await expect(this.page.getByRole("status")).toContainText(status);
  }
);
