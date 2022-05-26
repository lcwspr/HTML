var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var querystring = require("querystring");

http.createServer((req, res) => {
    // 转为对象
    var urlJson = url.parse(req.url, true);
    console.log(urlJson.query.id);

    //1. 得到文件路径
    var pathname = urlJson.pathname;
    //2.  得到拓展名
    var extName = path.extname(pathname);
    //3. 得到路径名
    var pathName = path.pathname(pathname);
    console.log(pathname, extName);

    // 4. 得到查询字符串
    var qs = urlJson.query;  // 是一个字符串

    // 5. 转换为查询对象，和url.parse加上true非常类似
    var qsjson = querystring.parse(qs);
    console.log(qsjson);




    res.end();
}).listen(30000);


console.log("server start at 30000 port");






















