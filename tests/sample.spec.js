import { test, expect } from '@playwright/test';


test("My First Test", async function({page}) {
    expect(12).toBe(12)

})

test.skip("My Second Test", async function({page}) {
    expect(100).toBe(101)
    
})


test("My thirt Test", async function({page}) {
    //
    expect("Mukesh Otwani").toContain("Mukesh")
    
})

test("My forth Test", async function({page}) {
    //
    expect(false).toBeFalsy()
    
})


test("My six Test", async function({page}) {
    //
    expect("Mukesh Otwani".includes("Otwani")).toBeTruthy()  
    
})


