// var a="https://www.google.com/search?q=porn+images+of+pakistani+girls&bih=694&biw=1517&rlz=1C1SQJL_en__962__962&hl=en&sxsrf=APq-WBsjGAWA6W4HQJeicfbOloyKjzvScA%3A1650472204844&ei=DDVgYpqQM4KZkwXCs7O4BA&ved=0ahUKEwiaxuyLiKP3AhWCzKQKHcLZDEcQ4dUDCA8&uact=5&oq=porn+images+of+pakistani+girls&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGAFKBAhGGABQAFgAYJ8KaAFwAHgAgAEAiAEAkgEAmAEAwAEB&sclient=gws-wiz"
// var b="https://www.google.com/search?q=porn+images+of+pakistani+girls&rlz=1C1SQJL_en__962__962&hl=en&sxsrf=APq-WBsjGAWA6W4HQJeicfbOloyKjzvScA:1650472204844&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiaxuyLiKP3AhWCzKQKHcLZDEcQ_AUoAXoECAEQAw&cshid=1650472210314048&biw=1517&bih=694&dpr=0.9"
const puppeteer = require('puppeteer');
// const Downloader = require('./Downloader');
const fs =require("fs");
const path =require("path");


(async()=>{
    const browser=await puppeteer.launch();
    const page =await browser.newPage();
    page.on("response", async (response) => {
        const url=response.url();

        if(response.request().then((file)=>{
            const fileName = url.split("/").pop();
            const filePath=path.resolve(__duename, fileName);
            const writeStream =fs.createWriteStream(filePath);
            writeStream.write(file);
        }))
    }
});
await page.goto("https://en.wikipedia.org/wiki/Zareen_khan")
await browser.close(
})();