import { test, expect } from "@playwright/test";

test("Order pizza", async ({ page }) => {
  await page.goto("https://2f-pizza-order.vercel.app/login");
  await page.getByLabel("Email Address").click();
  await page.getByLabel("Email Address").fill("customer@gmail.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("123456");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForURL("https://2f-pizza-order.vercel.app/");
  await page
    .locator(".MuiCardContent-root > div:nth-child(3) > .MuiButtonBase-root")
    .first()
    .click();
  await page.getByLabel("Olives").check();
  await page.getByLabel("Bell Peppers").check();
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "Order" }).nth(1).click();
  await expect(page.getByRole("heading")).toContainText(
    "Your order has been successfully completed!"
  );
});
