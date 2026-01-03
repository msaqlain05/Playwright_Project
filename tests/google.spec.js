import { test, expect } from '@playwright/test';
import { url } from 'node:inspector';




test("Verify Application Title ", async function({page}) {

    await page.goto("https://google.com")

    const url = await page.url()
    console.log("URL is this: ",url)

    const title  =  page.title()
    console.log("Title is : ",title)


    await expect(page).toHaveTitle("Google")
    // await expect(page).toHaveTitle("Yahoo")

    



})

