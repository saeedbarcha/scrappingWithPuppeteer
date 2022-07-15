const puppeteer = require('puppeteer');
const fs = require('fs');

async function run() {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1200 });
    await page.goto('https://www.google.com/search?q=porn%20images%20of%20pakistani%20girls&rlz=1C1SQJL_en__962__962&sxsrf=APq-WBswEDSfBTQWPbpvXWXXTIIjlQ2g3g%3A1650385350920&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiC59XExKD3AhVNuKQKHatnBoMQ_AUoAXoECAEQAw&biw=742&bih=683&dpr=0.9&fbclid=IwAR25lSYJpEk1doVJ67zSAiaTa9gGcEYc5YZW2-Ao-aRYXq9behIgxMMUw1Y');

    const IMAGE_SELECTOR = '.islrc .isv-r.PNCib.MSM1fd.BUooTd .bRMDJf.islir img';
    let imageHref = await page.evaluate((sel) => {
        return document.querySelector(sel).getAttribute('src').replace('/', '');
    }, IMAGE_SELECTOR);

    console.log("https://www.google.com/" + imageHref);
    var viewSource = await page.goto("https://www.google.com/" + imageHref);
    fs.writeFile(".googles-20th-birthday-us-5142672481189888-s.png", await viewSource.buffer(), function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

    browser.close();
}

run();







// const puppeteer = require("puppeteer");
// const downloader = require("./fdown");
// const fs = require("fs/promises");
// const path = require("path");

// const filepath = path.resolve(__dirname, "downloadImages");

// (async () => {
//   const browser = await puppeteer.launch({ headless: false ,
//     args: ['--disable-dev-shm-usage']});
//   const page = await browser.newPage();
//   await page.setDefaultNavigationTimeout(0);
//   await page.goto(
//     "https://www.google.com/search?q=porn%20images%20of%20pakistani%20girls&rlz=1C1SQJL_en__962__962&sxsrf=APq-WBswEDSfBTQWPbpvXWXXTIIjlQ2g3g%3A1650385350920&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiC59XExKD3AhVNuKQKHatnBoMQ_AUoAXoECAEQAw&biw=742&bih=683&dpr=0.9&fbclid=IwAR25lSYJpEk1doVJ67zSAiaTa9gGcEYc5YZW2-Ao-aRYXq9behIgxMMUw1Y"
//   );

//   // const names = await page.evaluate(() => {
//   //   return Array.from(document.querySelectorAll("._1xHGtK._373qXS")).map((x) => x.textContent);
//   // });
//   // console.log(names);

//   // const button = await page.$("a._1LKTO3");

//   // while (button) {
//     // await button.evaluate((b) => b.click());
// // 
//     const image_urls = await page.$$eval(
//       ".islrc .isv-r.PNCib.MSM1fd.BUooTd .bRMDJf.islir img",
//       (imgsAll) => imgsAll.map((img) => img.src)
//     );

//     console.log(image_urls);

//     image_urls.forEach((image_url) => {
//       downloader.download(image_url, filepath, function (filename) {
//         console.log("download complete" + filename);
//       });
//     });
//     // const names = await page.evaluate(() => {
//     //   return Array.from(document.querySelectorAll("a.s1Q9rs")).map(
//     //     (x) => x.textContent
//     //   );
//     // });
//     // console.log(names);
//   // }
// //   await fs.writeFile("names.txt", names.join("\r\n"));

//   await browser.close();
// })();