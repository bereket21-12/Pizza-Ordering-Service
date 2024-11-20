import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given(
  "I am on the pizza ordering service login page",
  { timeout: 60 * 1000 },
  async function () {
    await this.page.goto("https://2f-pizza-order.vercel.app/login");
  }
);

When(
  "I log in with email {string} and password {string}",
  { timeout: 60 * 1000 },
  async function (email: string, password: string) {
    await this.page.getByLabel("Email Address").click();
    await this.page.getByLabel("Email Address").fill(email);
    await this.page.getByLabel("Password").click();
    await this.page.getByLabel("Password").fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
);

When("I select a pizza to order", async function () {
  await this.page.waitForNavigation();
  await this.page
    .locator(
      "div:nth-child(3) > .MuiCardContent-root > div:nth-child(3) > .MuiButtonBase-root"
    )
    .click();
});

When(
  "I choose toppings {string}, {string}, and {string}",
  { timeout: 60 * 1000 },
  async function (topping1: string, topping2: string, topping3: string) {
    await this.page.waitForNavigation();
    await this.page.getByLabel(topping1).check();
    await this.page.getByLabel(topping2).check();
    await this.page.getByLabel(topping3).check();
  }
);

When(
  "I adjust the quantity by decreasing once and increasing once",
  async function () {
    await this.page.getByRole("button", { name: "-" }).click();
    await this.page.getByRole("button", { name: "+" }).click();
  }
);

Then(
  "I should see the total price as {string}",
  async function (totalPrice: string) {
    await expect(this.page.locator("body")).toContainText(totalPrice);
  }
);

When("I place the order", async function () {
  await this.page.getByRole("button", { name: "Order" }).nth(1).click();
});

Then(
  "I should see a confirmation message {string}",
  async function (confirmationMessage: string) {
    await expect(this.page.getByRole("heading")).toContainText(
      confirmationMessage
    );
  }
);
