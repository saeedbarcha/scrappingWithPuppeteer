const express=require("express")
const cheerio=require("cheerio")
const download=require("node-image-downloader")
const request=require("request")

const app=express()
const PORT=5045;

app.get("/" , (req,res) => {
    // codingshiksha
    var url="https://www.codingshiksha.com"
    request(url, (error,response,html) => {
        if(!error){
            var $ =cheerio.load(html) 

            var imagesrc=$(".oceanwp-about-me-avatar img").attr('src')
            download({
                imgs:[
                    {
                        uri:imagesrc  
                    }
                ],
                dest:"./"
            }).then((info) =>{
                console.log("download complete")
                process.exit(1)
            })
        }
    })
})

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})