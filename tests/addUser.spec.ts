import { test, expect } from "@playwright/test";

test("add user by admin", async ({ page }) => {
  await page.goto("https://2f-pizza-order.vercel.app/login");
  await page.getByLabel("Email Address").click();
  await page.getByLabel("Email Address").fill("Admin@gmail.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("123456");
  await page.getByRole("button", { name: "Login" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^\/admin\/manage_order$/ })
    .getByRole("button")
    .click();
  await page.getByText("User").click();
  await page.getByRole("button", { name: "Add User" }).click();
  await page.getByLabel("Name", { exact: true }).click();
  await page.getByLabel("Name", { exact: true }).fill("New User");
  await page.getByLabel("Email", { exact: true }).click();
  await page.getByLabel("Email", { exact: true }).fill("jo@gmail.com");
  await page.getByLabel("Location").click();
  await page.getByLabel("Location").fill("Addis Ababa");
  await page.getByLabel("Phone Number", { exact: true }).click();
  await page.getByLabel("Phone Number", { exact: true }).fill("1234567890");
  await page.getByLabel("Password", { exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("123456");
  await page.getByLabel("Confirm Password").click();
  await page.getByLabel("Confirm Password").fill("123456");
  await page.getByLabel("Role").click();
  await page.getByRole("option", { name: "kitchen manager" }).click();
  await page.getByRole("button", { name: "Add User" }).click();
  await expect(page.getByText("User added successfully!")).toBeVisible();
});
