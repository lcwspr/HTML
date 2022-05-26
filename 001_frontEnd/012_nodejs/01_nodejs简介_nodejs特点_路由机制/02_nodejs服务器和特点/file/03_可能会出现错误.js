var http = require("http");

var server = http.createServer(function(req, res){
    // 来一个访问者就是随机一个数字
    var num = parseInt(Math.random() * 10);

    // 如果随机到了6666, 就会主动抛出错误
    if(num === 6){
        throw new Error("错误   呵呵呵  " + req.connection.remoteAddress);
    }
    res.end("你的数字是" + num);
});

server.listen(30000);