const puppeteerCore = require('puppeteer-core');
const path=require("path")
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.google.com/');
  await page.screenshot({ path: 'screenshot1.png' });

  await browser.close();
})();