import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given(
  "I am on the pizza order home page",
  { timeout: 60 * 1000 },
  async function () {
    await this.page.goto("https://2f-pizza-order.vercel.app/");
  }
);

When(
  "I click on the {string} button to submit the registration form",
  { timeout: 60 * 1000 },
  async function (buttonName: string) {
    await this.page.getByRole("button", { name: buttonName }).click();
  }
);

When(
  "I select {string}",
  { timeout: 60 * 1000 },
  async function (linkText: string) {
    await this.page.getByRole("link", { name: linkText }).click();
  }
);

When(
  "I fill in {string} with {string}",
  { timeout: 60 * 1000 },
  async function (fieldLabel: string, value: string) {
    await this.page.getByLabel(fieldLabel, { exact: true }).click();
    await this.page.getByLabel(fieldLabel, { exact: true }).fill(value);
  }
);

When(
  "I check {string}",
  { timeout: 60 * 1000 },
  async function (checkboxLabel: string) {
    await this.page.getByLabel(checkboxLabel).check();
  }
);

When(
  "I fill in the registration form with an existing email",
  { timeout: 60 * 1000 },
  async function () {
    await this.page.getByLabel("Full Name").click();
    await this.page.getByLabel("Full Name").fill("full name");
    await this.page.getByLabel("Email Address").click();
    await this.page.getByLabel("Email Address").fill("someone@gmail.com");
    await this.page.getByLabel("Password", { exact: true }).click();
    await this.page.getByLabel("Password", { exact: true }).fill("123456");
    await this.page.getByLabel("Confirm Password").click();
    await this.page.getByLabel("Confirm Password").fill("123456");
    await this.page.getByLabel("Location").click();
    await this.page.getByLabel("Location").fill("Addis Ababa");
    await this.page.getByLabel("Phone Number").click();
    await this.page.getByLabel("Phone Number").fill("0987654321");
    await this.page.getByRole("button", { name: "Sign Up" }).click();
  }
);

Then("I should go to login page", { timeout: 60 * 1000 }, async function () {
  await expect(this.page).toHaveURL("https://2f-pizza-order.vercel.app/login");
});

Then(
  "I should see an error message {string}",
  { timeout: 60 * 1000 },
  async function (errorMessage: string) {
    await expect(this.page.getByRole("status")).toContainText(errorMessage);
  }
);

Then(
  "I should see an error message indicating the email already exists",
  { timeout: 60 * 1000 },
  async function () {
    await expect(this.page.getByRole("status")).toContainText(
      "Email already exists"
    );
  }
);
