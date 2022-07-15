const cherio=require("cherio");
const request=require("request");
const fs= require("fs");
const download=require("node-image-downloader")


var WriteStream =fs.createWriteStream("ImagesLink.txt", "UTF-8");

request("https://www.kiu.edu.pk/", (err, res, html) => {
    if(!err && res.statusCode ==200){
        console.log("Request was success");
        const $ =cherio.load(html);

        $("img").each((index,image)=>{
            var img =$(image).attr('src');
            var baseUrl="https://www.kiu.edu.pk/";
            // var baseUrl="https://www.bridgeport.edu";
            // var baseUrl="https://www.antarvasnaphotos.com";

            // var Links=baseUrl + img;
            var Links=img;
            WriteStream.write(Links);
            WriteStream.write("\n ");
            console.log(Links)
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

          
        })
    }else{
        console.log("request Failed")
    }
})
