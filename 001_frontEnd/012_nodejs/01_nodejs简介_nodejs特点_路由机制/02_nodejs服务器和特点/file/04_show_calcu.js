// 创建服务器用的
var http = require("http");
// 读取文件用的
var fs = require("fs");

var server = http.createServer(function(req, res){
    // ip地址
    var id = req.connection.remoteAddress;
    console.log(id + "来了! 开始读取文本文件！");

    //这是一段计算
    for(var i = 1000; i <= 9999 ; i++){
        var ge = i % 10,
            shi = parseInt(i / 10) % 10,
            bai = parseInt(i / 100) % 10,
            qian = parseInt(i / 1000);
        var sum = Math.pow(ge,4) + Math.pow(shi,4) + Math.pow(bai,4) + Math.pow(qian,4);
        if(sum == i){
            console.log(ip + "算出了水仙花数" + i);
        }
    }

    console.log(ip + "已经计算出了全部水仙花数，开始读取文本文件");

    //再去读取一个文本文件：
    fs.readFile("./test_file/a.html",function(err,filecontent){
        //设置response响应头部
        res.setHeader("Content-Type","text/html;charset=UTF-8");
        //把文本文件的内容进行呈递：
        res.end(filecontent);
        //提示
        console.log(ip + "读取文本文件完毕！");
    });
});

server.listen(30000);