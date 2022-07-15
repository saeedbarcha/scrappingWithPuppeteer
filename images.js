const puppeteer = require('puppeteer');
const Downloader = require('./Downloader');
const path =require("path");

const filepath = path.resolve(__dirname, "images");

(async () => { 
  
    const browser=await puppeteer.launch({headless:false});
    const page=await browser.newPage();
    // await page.goto("http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html")
    await page.goto("https://dawaai.pk/?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf1-Zwq3SC08tYEJjC2FnN_aEsjDlogyjNVQobFeTjWscaxiyIvg-HRoCb-gQAvD_BwE")

    const imageURl=await page.$eval(".featured_product_1 .card_image", img => img.src); // for single image
   
    // console.log(imageURl)
    Downloader.download(imageURl, filepath , function(filename){
        console.log("Download complete for" + filename)
    }) 

})();