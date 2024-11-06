import { test, expect } from "@playwright/test";

test("Update Order Status", async ({ page }) => {
  await page.goto("https://2f-pizza-order.vercel.app/login");
  await page.getByLabel("Email Address").click();
  await page.getByLabel("Email Address").fill("Admin@gmail.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("123456");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "PENDING" }).click();
  await page.getByLabel("Status", { exact: true }).click();
  await page.getByRole("option", { name: "Delivered" }).click();
  await page.getByRole("button", { name: "Close" }).click();
  await expect(page.locator("tbody")).toContainText("DELIVERED");
});
