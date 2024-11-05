import { test } from "@playwright/test";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test.describe("Add Menu Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://2f-pizza-order.vercel.app/login");

    await page.fill('input[name="email"]', "Admin@gmail.com");
    await page.fill('input[name="password"]', "123456");
    await page.click('button[type="submit"]');

    await page.waitForURL(
      "https://2f-pizza-order.vercel.app/admin/manage_order"
    );

    await page.goto("https://2f-pizza-order.vercel.app/admin/menu");
  });

  test("should successfully submit the form with all fields filled", async ({
    page,
  }) => {
    await page.fill('input[name="Name"]', "Pepperoni Pizza");
    await page.fill('input[name="Price"]', "12");

    const toppings = ["Mozzarella", "Onions"];
    for (const topping of toppings) {
      await page.getByLabel(topping).check();
    }

    const imagePath = resolve(__dirname, "pizza1.jpeg");
    await page.setInputFiles('input[type="file"]', imagePath);

    await page.click('button[type="submit"]');
    await page.locator("text=Menu added successfully");

    await page.waitForURL("https://2f-pizza-order.vercel.app/admin/menu");
  });

  test("should show error when required fields are missing", async ({
    page,
  }) => {
    await page.click('button[type="submit"]');
    await page.locator("text=Failed to add menu");
  });
});
