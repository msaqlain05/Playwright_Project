import { test, expect } from '@playwright/test';

test('valid login', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');

  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin@email.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('admin@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForTimeout(2000);
  await page.locator("div[class='nav-menu-item-manage'] span").hover();
  await page.waitForTimeout(2000);
  await page.locator("//a[normalize-space()='Manage Categories']").click();
  await page.waitForTimeout(2000);

});