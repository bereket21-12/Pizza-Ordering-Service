import { test, expect } from "@playwright/test";

test.describe("Role Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://2f-pizza-order.vercel.app/login");

    await page.fill('input[name="email"]', "Admin@gmail.com");
    await page.fill('input[name="password"]', "123456");
    await page.click('button[type="submit"]');

    await page.waitForURL(
      "https://2f-pizza-order.vercel.app/admin/manage_order"
    );

    await page.goto("https://2f-pizza-order.vercel.app/admin/role");
  });

  test("should render the roles and allow toggling active status", async ({
    page,
  }) => {
    await expect(page.locator("text=Admin")).toBeVisible();

    const activeSwitch = page
      .getByRole("row", { name: "kitchen manager 11/3/2024, 9:" })
      .getByRole("checkbox");
    await expect(activeSwitch).toBeChecked({ timeout: 500000 });

    await activeSwitch.click();
    await page.locator("text=Role status updated successfully!");

    await expect(activeSwitch).not.toBeChecked({ timeout: 500000 });
  });
});
