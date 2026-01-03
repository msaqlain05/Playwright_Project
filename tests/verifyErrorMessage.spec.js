import { test, expect } from '@playwright/test';



test("Verify Error Message ", async function({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page.viewportSize().width)  
    console.log(await page.viewportSize().height) 

 

    await page.getByPlaceholder("Username").fill("Admin")
    await page.locator("input[name='password']").fill("admin12312");
    await page.locator("button[type='submit']").click()
    const error_msg  = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()
    console.log(error_msg)

    expect(error_msg.includes("Invalid")).toBeTruthy()
    expect(error_msg === "Invalid credentials").toBeTruthy()

    
})
