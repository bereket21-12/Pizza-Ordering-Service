import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

Given(
  "I am on the login page to add pizza",
  { timeout: 60 * 1000 },
  async function () {
    await this.page.goto("https://2f-pizza-order.vercel.app/login");
  }
);

When(
  "I log in with email {string} and password {string} to add pizza",
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
  "I navigate to the admin manage order page to add a pizza",
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
    await this.page.getByText("Add Menu").click();
  }
);

When(
  "I click on {string} to add a pizza",
  { timeout: 60 * 1000 },
  async function (buttonName: string) {
    await this.page.getByText(buttonName, { exact: true }).click();
  }
);

When("I fill in the pizza details", { timeout: 60 * 1000 }, async function () {
  await this.page.fill('input[name="Name"]', "Pepperoni Pizza");
  await this.page.fill('input[name="Price"]', "12");

  const toppings = ["Mozzarella", "Onions"];
  for (const topping of toppings) {
    await this.page.getByLabel(topping).check();
  }
});

When("I upload the pizza image", { timeout: 60 * 1000 }, async function () {
  const imagePath = resolve(__dirname, "pizza1.jpeg");
  await this.page.setInputFiles('input[type="file"]', imagePath);
});

When(
  "I click on the {string} button to add the pizza",
  { timeout: 60 * 1000 },
  async function (buttonName: string) {
    await this.page.getByRole("button", { name: buttonName }).click();
  }
);

Then(
  "I should see a success message indicating the menu was added successfully",
  { timeout: 60 * 1000 },
  async function () {
    await expect(
      this.page.locator("text=Menu added successfully")
    ).toBeVisible();
  }
);
