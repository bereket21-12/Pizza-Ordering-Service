import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";

let browser: Browser;
let page: Page;

BeforeAll({ timeout: 60 * 1000 }, async function () {
  browser = await chromium.launch({ headless: false, timeout: 100000 });
});

Before({ timeout: 60 * 1000 }, async function () {
  const context = await browser.newContext();
  page = await context.newPage();
  this.page = page;
  this.browser = browser;
});

After(async function () {
  if (this.page) {
    await this.page.close();
  }
});

AfterAll({ timeout: 60 * 1000 }, async function () {
  if (browser) {
    await browser.close();
  }
});
