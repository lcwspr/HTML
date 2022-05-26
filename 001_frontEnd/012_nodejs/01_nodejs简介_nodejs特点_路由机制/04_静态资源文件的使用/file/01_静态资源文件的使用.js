var http = require("http");
var fs = require("fs");


http.createServer((req, res) => {

    if(req.url === "/haha.html"){
        res.setHeader('Content-Type', "text/html; charset=utf-8");
        fs.readFile("./test_file/b.html", function (err, data) {
            res.end(data);
        });
    }else if(req.url === "/css.css"){
        // 真的需要这个静态文件必须开路由
        res.setHeader('Content-Type', "text/css; charset=utf-8");
        fs.readFile("./test_file/css.css", function (err, data) {
            res.end(data);
        });
    }else if(req.url === "/0.jpg") {
        res.setHeader("Content-Type", "image/jpg");
        // 真的需要这个静态文件必须开路由
        // res.setHeader('Content-Type', "text/css; charset=utf-8");
        fs.readFile("../../../../999_img/dog/0.jpg", function (err, data) {
            res.end(data);
        });
    }else if(req.url === "/s.js"){
        res.setHeader("Content-Type", "text/javascript");
        // 真的需要这个静态文件必须开路由
        // res.setHeader('Content-Type', "text/css; charset=utf-8");
        fs.readFile("test_file/s.js", function (err, data) {
            res.end(data);
        });
    }
    else{
        res.setHeader("Content-Type", "text/html");
        res.end('没有这个页面');
    }

}).listen(30000);


console.log("server start at 30000 port");