import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { closeBrowser } from "./../../playwrightHelper.ts";
import { Browser, chromium, expect, Page } from "@playwright/test";

let browser: Browser;
let page: Page;

Before(async () => {
  browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
});

Given("I am on the login page", { timeout: 600000 }, async () => {
  await page.goto("https://2f-pizza-order.vercel.app/login");
});

When("I enter a valid email and password", { timeout: 600000 }, async () => {
  await page.fill('input[name="email"]', "Admin@gmail.com");
  await page.fill('input[name="password"]', "123456");
});

When("I enter an invalid email or password", { timeout: 600000 }, async () => {
  await page.fill('input[name="email"]', "invalid@gmail.com");
  await page.fill('input[name="password"]', "invalidPassword");
});

When(
  "I leave the email or password field empty",
  { timeout: 600000 },
  async () => {
    await page.fill('input[name="email"]', "");
    await page.fill('input[name="password"]', "");
  }
);

When("I click on the login button", { timeout: 600000 }, async () => {
  await page.click('button[type="submit"]');
});

Then(
  "I should be redirected to the dashboard",
  { timeout: 600000 },
  async () => {
    await page.waitForURL("https://2f-pizza-order.vercel.app");
    const currentUrl = page.url();
    expect(currentUrl).toBe("https://2f-pizza-order.vercel.app");
  }
);

Then("I should see a welcome message", { timeout: 600000 }, async () => {
  const welcomeMessage = await page.textContent("#welcome-message");
  expect(welcomeMessage).toContain("Welcome");
});

Then(
  "I should see an error message indicating invalid login",
  { timeout: 600000 },
  async () => {
    const errorMessage = await page.textContent("#error-message");
    expect(errorMessage).toContain("Invalid login");
  }
);

Then(
  "I should see an error message prompting me to fill in all fields",
  { timeout: 600000 },
  async () => {
    const errorMessage = await page.textContent("#error-message");
    expect(errorMessage).toContain("Please fill in all fields");
  }
);
After(async () => {
  await closeBrowser();
});
