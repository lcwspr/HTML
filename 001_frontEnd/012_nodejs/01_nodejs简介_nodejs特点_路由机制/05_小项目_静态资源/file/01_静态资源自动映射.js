var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var querystring = require("querystring");


// 基本思想其实就一句话，用户输入什么url,我就真的使用fs模块去读取这个文件
http.createServer((req, res)=>{
    // 得到用户读取什么,比如用户输入
    // http://127.0.0.1/0.jpg
    var pathname = url.parse(req.url).pathname;
    // 去读取这个文件 读取myweb中的相应文件
    fs.readFile("./myweb/"+pathname , function (err, data) {
        if(err){
            res.end("文件不存在");
            return;
        }
        res.end(data);
    });
}).listen(3000);
console.log("server start at 3000 port");






































