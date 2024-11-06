import { test as setup, expect } from "@playwright/test";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page }) => {
  await page.goto("https://2f-pizza-order.vercel.app/login");

  await page.fill('input[name="email"]', "Admin@gmail.com");
  await page.fill('input[name="password"]', "123456");
  await page.click('button[type="submit"]');

  await page.waitForURL("https://2f-pizza-order.vercel.app/admin/manage_order");

  await page.goto("https://2f-pizza-order.vercel.app/admin/menu");

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});
