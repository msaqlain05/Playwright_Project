import { test, expect } from '@playwright/test';


test.use({viewport:{width:866 ,height:633}})

test("Valid Login", async function({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click()
    
    await expect(page).toHaveURL(/dashboard/);
    await page.getByAltText("profile picture").click()
    await page.getByText("Logout").click()
    await expect(page).toHaveURL(/login/)
    
    
})





// test("Valid Login", async ({ page }) => {

//   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//   await page.getByPlaceholder("Username").fill("Admin");
//   await page.locator("input[name='password']").fill("admin123");

//   await page.getByRole('button', { name: 'Login' }).click();

//   // Assertion: Dashboard should be visible after login
//   await expect(page).toHaveURL(/dashboard/);
// });