import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://2f-pizza-order.vercel.app/");
  await page.getByRole("button", { name: "Register" }).click();
  await page.getByRole("link", { name: "Register Self" }).click();
  await page.getByLabel("Full Name").click();
  await page.getByLabel("Full Name").fill("full name");
  await page.getByLabel("Full Name").press("Tab");
  await page.getByLabel("Email Address").fill("someone@gmail.com");
  await page.getByLabel("Password", { exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("123456");
  await page.getByLabel("Password", { exact: true }).press("Tab");
  await page.getByLabel("Confirm Password").fill("123456");
  await page.getByLabel("Location").click();
  await page.getByLabel("Location").fill("Addis Ababa");
  await page.getByLabel("Phone Number").click();
  await page.getByLabel("Phone Number").fill("1234567890");
  await page.getByRole("button", { name: "Sign Up" }).click();
  await expect(page.getByRole("status")).toContainText("Email already exists");
});
