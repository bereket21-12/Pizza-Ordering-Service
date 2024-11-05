import { test, expect } from "@playwright/test";

test("I am on the login page and enter valid credentials", async ({ page }) => {
  await page.goto("https://2f-pizza-order.vercel.app/login");

  await page.fill('input[name="email"]', "Admin@gmail.com");
  await page.fill('input[name="password"]', "123456");
  await page.click('button[type="submit"]');
  await page.waitForURL("https://2f-pizza-order.vercel.app/admin/manage_order");
  const currentUrl = page.url();
  expect(currentUrl).toBe(
    "https://2f-pizza-order.vercel.app/admin/manage_order"
  );

  // const welcomeMessage = await page.textContent("#welcome-message");
  // expect(welcomeMessage).toContain("Welcome");
});

test("I am on the login page and enter invalid credentials", async ({
  page,
}) => {
  await page.goto("https://2f-pizza-order.vercel.app/login");

  await page.fill('input[name="email"]', "jjj@gmail.com");
  await page.fill('input[name="password"]', "111111111");
  await page.click('button[type="submit"]');
  await page.waitForURL("https://2f-pizza-order.vercel.app/login");
  const currentUrl = page.url();
  expect(currentUrl).toBe("https://2f-pizza-order.vercel.app/login");

  // const welcomeMessage = await page.textContent("#welcome-message");
  // expect(welcomeMessage).toContain("Welcome");
});
