const https = require('https');
const http = require('http')
const fs = require('fs');
const path = require('path')

function download(url,filepath, callback){
    const filename = path.basename(url);

    const req = https.get(url, filepath, function(res){
        const fileStream = fs.createWriteStream(path.resolve(filepath, filename));
        res.pipe(fileStream);

        fileStream.on("error", function(err){
            console.log('error writing to the stream');
            console.log(err)
        });

        fileStream.on("close", function(){
            callback(filename)
        });

        fileStream.on("finish", function(){
            fileStream.close();
            // console.log("done");
        });
    });
    req.on("error",function(err){
        console.log("error downloading the file");
        console.log(err);
    });
}

module.exports.download = download