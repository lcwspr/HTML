// 证明NodeJs是单线程的
var http = require("http");

// 在服务器程序外面我们定义一个a变量
var a = 0;

var server = http.createServer(function (req, res) {
    // 让a数值+1
    a++;
    // 设置response 相应头部
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    // 显示a的值,end里面必须是一个字符串
    res.end(a.toString());
}).listen(3000);
console.log('服务器已经运行在3000端口');



