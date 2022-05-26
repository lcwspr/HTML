var http = require("http");

var server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if(req.url === "/"){
        res.end("首页");
    }else if(req.url === "/music"){
        res.end("音乐频道")
    }else if(req.url === "/news") {
        res.end("新闻频道");
    }else if(/^\/student\/\d{6}$/.test(req.url)){
        var reg = /\/student\/(\d{6})/;
        var stuNum = reg.exec(req.url)[1];
        res.end("学生信息 学号为" + stuNum);
    }
    else{
        res.end("404 ")
    }
});
server.listen(30000);

console.log("服务器已经启动");




























