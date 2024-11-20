import { test, expect } from "@playwright/test";
let isChecked = false;

test("Update role status", async ({ page }) => {
  await page.goto("https://2f-pizza-order.vercel.app/login");
  await page.getByLabel("Email Address").click();
  await page.getByLabel("Email Address").fill("Admin@gmail.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("123456");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForURL("https://2f-pizza-order.vercel.app/admin/manage_order");
  await page
    .locator("div")
    .filter({ hasText: /^\/admin\/manage_order$/ })
    .getByRole("button")
    .click();
  await page.getByText("Role").click();
  await page.waitForURL("https://2f-pizza-order.vercel.app/admin/role");
  isChecked = await page
    .getByRole("row", { name: "kitchen manager 11/6/2024, 2:" })

    .getByRole("checkbox")
    .isChecked();
  if (isChecked) {
    await page
      .getByRole("row", { name: "kitchen manager 11/6/2024, 2:" })

      .getByRole("checkbox")
      .uncheck();
  } else {
    await page
      .getByRole("row", { name: "kitchen manager 11/6/2024, 2:" })

      .getByRole("checkbox")
      .check();
  }
  await expect(page.getByRole("status")).toContainText(
    "Role status updated successfully!",
    { timeout: 50000 }
  );
});
