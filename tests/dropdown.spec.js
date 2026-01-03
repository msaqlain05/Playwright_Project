
import { test, expect } from '@playwright/test';


test("Verify dropdown functionality", async function({ page }) {
  await page.goto("https://freelance-learn-automation.vercel.app/signup");
  await page.locator("#state").selectOption({label:"Goa"});
  //  await page.waitForTimeout(2000);

  // await page.locator("#state").selectOption({value:"Haryana"});
  // await page.waitForTimeout(2000);
  // await page.locator("#state").selectOption({index:10});



  // const value = await page.locator("#state").textContent();
  // await expect(value.includes("Keraddla")).toBeTruthy();
  const state = await page.$("#state");
  const options = await state.$$("option");
  console.log("Number of options:", options.length);

  // log all option texts
  // for (let i = 0; i < options.length; i++) {
  //   const option = options[i];
  //   const text = await option.textContent();
  //   console.log(`Option ${i}: ${text}`);
  // }

  // let addState = false;
  // for (const option of options) {
  //   const text = await option.textContent();
  //   if (text === "Kerala") {
  //     addState = true;
  //     console.log("Kerala is present in the options");
  //     break;
  //   }
  // }
  // await expect(addState).toBeTruthy();
  

  // await page.waitForTimeout(5000);
  // Select multiple hobbies
  await page.locator("#hobbies").selectOption(['Playing','Swimming']);
  await page.waitForTimeout(5000);










});

