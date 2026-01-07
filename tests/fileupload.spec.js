import { test, expect } from '@playwright/test';
import { step, attachment } from 'allure-js-commons';

test("Verify file upload functionality", async ({ page }) => {

    await step("Navigate to file upload page", async () => {
        await page.goto("https://the-internet.herokuapp.com/upload");
    });

    await step("Upload the file", async () => {
        await page.locator("//input[@id='file-upload']").setInputFiles("./uploads/images.jpg");
        await page.locator("//input[@id='file-submit']").click();
    });

    await step("Verify 'File Uploaded!' message", async () => {
        await expect(page.locator("div[class='example'] h3")).toContainText("File Uploaded!");

        // Take screenshot
        const screenshot = await page.screenshot({ fullPage: true });
        // Attach to Allure report
        attachment("Uploaded File Screenshot", screenshot, "image/png");
    });

    await page.waitForTimeout(2000);
});
