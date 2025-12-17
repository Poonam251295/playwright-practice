const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://playwright.dev/docs/intro');
  console.log(await page.title());

  // Validated Search functionality
  await page.locator('.DocSearch-Button').click()
  await page.locator('#docsearch-input').fill("Writing Tests");
  // await page.locator('.DocSearch-Hit-Container').click();
  await page.locator('.DocSearch-Dropdown').waitFor();
  await page.locator('.DocSearch-Hit').first().click();
  console.log(await page.title())

  // validated if text is visible or not
  const visible = await page.locator('#introduction').isVisible()
  // introduction
  if (visible) {
  console.log("text is visible")
  }
  else{
    console.log("text is not visible")
  }
  // click on link and validated if this opening properly or not
  await page.locator('a[href="/docs/api/class-playwright"]').click();
  const visibleText = await page.locator('#properties').isVisible()
  if (visibleText){
    console.log("link is properly opening")
  }
  else{
    console.log("link is not properly opening")
  }

  // screenshot should capture after this time
  setTimeout(async () => {
    await page.screenshot({ path: 'google-search.png' })
    await browser.close();
  }, 10000);
  } catch (error) {
    console.log(`Error occurred: ${error.message}`)
  }
})();
