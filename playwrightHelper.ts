import { chromium, Browser, Page } from "@playwright/test";

let browser: Browser;
let page: Page;

export async function getPage(): Promise<Page> {
  if (!page) {
    browser = await chromium.launch({ headless: true });
    page = await browser.newPage();
  }
  return page;
}

export async function closeBrowser(): Promise<void> {
  await browser?.close();
}
