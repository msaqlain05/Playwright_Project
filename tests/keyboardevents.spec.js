import { test, expect } from '@playwright/test';


test("Key board events functionality", async function({ page }) {
    await page.goto("https://google.com");
    // await page.locator("//textarea[@id='APjFqb']").type("Playwright");
    // await page.keyboard.press("Enter");


    await page.keyboard.type('Hello World!');
await page.keyboard.press('ArrowLeft');

await page.keyboard.down('Shift');
for (let i = 0; i < ' World'.length; i++)
  await page.keyboard.press('ArrowLeft');
await page.keyboard.up('Shift');

await page.keyboard.press('Backspace');
// Result text will end up saying 'Hello!'
    await page.waitForTimeout(8000);
});