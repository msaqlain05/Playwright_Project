import { test, expect } from '@playwright/test';

test('test', async function({page}) {
    await page.goto("https://www.selenium.dev/selenium/web/web-form.html")
    await page.getByRole('textbox', { name: 'First' }).fill('John')
})