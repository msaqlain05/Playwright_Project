import { test, expect } from '@playwright/test';


test("Verify file upload functionality", async function({ page }) {
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("//input[@id='file-upload']").setInputFiles("./uploads/images.jpg");
    await page.locator("//input[@id='file-submit']").click();

    await expect(page.locator("div[class='example'] h3")).toContainText("File Uploaded!");


    await page.waitForTimeout(2000);

});