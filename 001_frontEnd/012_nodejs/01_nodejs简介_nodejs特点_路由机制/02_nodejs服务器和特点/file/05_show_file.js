// 创建服务器用的
var http = require("http");
// 读取文件用的
var fs = require("fs");

var server = http.createServer(function(req, res){
    // ip地址
    var id = req.connection.remoteAddress;
    console.log(id + "来了! 开始读取文本文件！");

    // 来客人之后会做的事情,要去读取一个文本文件
    fs.readFile("./test_file/a.html", function (err,content) {
        // 把文本文件的内容进行呈现
        res.end(content);
        console.log(id + "读取文本文件完毕");
    });
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

});

server.listen(30000);