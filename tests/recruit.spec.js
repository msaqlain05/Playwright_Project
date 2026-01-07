import { test, expect } from '@playwright/test';

test("Recruit Central Application test",async({page}) =>{


    await page.goto("https://app.recruitcentral.net/login")
    await page.locator("input[placeholder='Enter your email']").fill("javedboqo@gmail.com")
    await page.locator("input[placeholder='Enter your password']").fill("superadmin123")
    await page.locator("button[type='submit'] span[class='block']").click()

    await expect(page).toHaveURL(/super-admin/)

    // await page.locator("$(.text-xl.font-semibold.capitalize.truncate)").click()

    await page.waitForTimeout(2000)

});