const puppeteer = require('puppeteer');
const Downloader = require('./Downloader');
const path =require("path");

const filepath = path.resolve(__dirname, "allimages");

(async () => { 
  
    const browser=await puppeteer.launch({headless:false});
    const page=await browser.newPage();
    await page.goto("http://books.toscrape.com/index.html")
    const imageURls=await page.$$eval(".product_pod .thumbnail", imgsAll => imgsAll.map( img => img.src)); // for multiple
  
  
    // console.log(imageURls)
    imageURls.forEach(imageURl =>{
        Downloader.download(imageURl, filepath , function(filename){
            console.log("Download complete for" + filename)
        }) 
        
    })


})();