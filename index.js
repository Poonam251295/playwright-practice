const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://playwright.dev/docs/intro');
  console.log(await page.title());

  await page.locator('.DocSearch-Button').click()
  await page.locator('#docsearch-input').fill("writing tests")

  await page.keyboard.press('Enter')

  setTimeout(async () => {
    await page.screenshot({ path: 'google-search.png' })
    await browser.close();
  }, 5000);

  console.log("poonam");
  } catch (error) {
    console.log(`Error occurred: ${error.message}`)
  }
})();
