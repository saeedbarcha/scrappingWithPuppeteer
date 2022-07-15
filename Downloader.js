const https=require('https');
const http=require('http');

const fs= require('fs');
const path= require('path');
const URl= require('url').URl

function download(url, filepath, callback){
    userURL = new URL(url);
    console.log(userURL.protocol)
    const requestCaller = userURL.protocol === "http:" ? http : https ;
 

    const filename=path.basename(url);

    const req = requestCaller.get(url, function(res){
        // const fileStream=fs.createWriteStream(filename);  
        const fileStream=fs.createWriteStream(path.resolve(filepath, filename));

        res.pipe(fileStream);

        fileStream.on("error", function(err){
            console.log("Error Writing to the Stream.")
            console.log(err)
        });

        fileStream.on("close", function(){
            callback(filename);
        });

        fileStream.on("finish", function(){
            fileStream.close();
            console.log("Done!")
        });


    });

    req.on("error", function(){
       console.log("Error downloading the file");
    //    console.log(err)
    })

}

module.exports.download=download;
