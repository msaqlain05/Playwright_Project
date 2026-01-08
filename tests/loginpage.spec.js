import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login";

test("login to application", async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    const loginPage = new LoginPage(page);
    await loginPage.loginToApplication();
});
