var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var querystring = require("querystring");

// 准备一个映射关系对
var mime = {
    ".jpg": "image/jpg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".png": "image/png",
    ".html": "text/html; charset=UTF-8",
    ".css": "text/css",
    ".js": "application/x-javascript",
    ".mp3": "audio/mpeg"
};



// 基本思想其实就一句话，用户输入什么url,我就真的使用fs模块去读取这个文件
http.createServer((req, res)=>{
    // 得到用户读取什么,比如用户输入
    // http://127.0.0.1/0.jpg
    var pathname = url.parse(req.url).pathname;
    var extname = path.extname(pathname);
    // 如果url不存在拓展名，那么此时表示这是一个文件夹，此时自动补全index.html
    if(!extname){
        // 如果不是以/结尾，此时会造成浏览器识别图片路径层次有问题
        // 比如http://127.0.0.1/b和http://127.0.0.1/b/不一样，同样的图片如0.jpg
        // 前者认为是同级目录下的图片，后者会认为是b文件夹中的
        if(pathname.substr(-1) !== "/"){
            console.log("跳转");
            res.writeHead(302, {"Location": pathname + "/"});
        }

        pathname += "/index.html";
    }

    // 去读取这个文件 读取myweb中的相应文件
    fs.readFile("./myweb/"+pathname , function (err, data) {
        if(err){
            res.end("文件不存在");
            return;
        }
        // 检查是否属于我已经知道的mime类型
        if(mime.hasOwnProperty(extname)){
            res.setHeader("Content-Type", mime[extname]);
        }

        res.end(data);
    });
}).listen(3000);
console.log("server start at 3000 port");






































