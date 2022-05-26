// 读取内置模块http, 这个用于模块开发服务器使用

var http = require("http");

// 创建一个服务器
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': "text/html; charset=utf-8"});
    res.end("<h1>我好开心呀，我买了一个iPhone" + (3 + 4) + "Plus, 我好开心! </h1>");
});

// 监听
server.listen(30000, "127.0.0.1");
console.log("服务器已经运行在30000端口")