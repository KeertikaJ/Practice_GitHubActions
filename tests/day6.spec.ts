import { test } from "@playwright/test"

test("Handling Drop Down", async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('//input[@id="username"]').fill("democsr2");
    await page.locator('//input[@id="password"]').fill("crmsfa");
    await page.locator('//input[@class="decorativeSubmit"]').click();
    await page.locator('//a[contains(text(),"CRM")]').click();
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Create Lead"]').click();
    
    await page.locator('//input[@id="createLeadForm_companyName"]').fill("Testleaf");
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Keertika");
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("J");
    const industryOptions = page.locator('//select[@id="createLeadForm_industryEnumId"]/option');
    const industryOptionCount = await industryOptions.count();

    for (let index = 0; index < industryOptionCount; index++) {
        let industryValues = await industryOptions.nth(index).innerText();
        console.log(industryValues);
    }
})
