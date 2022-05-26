var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
    // 统一设置一下header
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    // 所谓路由表
    if(req.url === "/"){
        res.end("首页");
    }else if(req.url === "/music"){
        res.end("音乐频道")
    }else if(req.url === "/news") {
        res.end("新闻频道");
    }else if(/^\/student\/\d{6}$/.test(req.url)){
        var reg = /\/student\/(\d{6})/;
        var stuNum = reg.exec(req.url)[1];
        fs.readFile("./test_file/db.json", function (err, data) {
            if(err){
                console.log("读取数据失败");
                return;
            }else{
                // 将字符串转换为对象，注意使用readFile读取进来的文件一定要toString()一下
                var dataObj = JSON.parse(data.toString());

                // 看看是数据库是否有这个数据
                if(!dataObj.hasOwnProperty(stuNum)){
                    res.end("请输入正确的学号");
                    return;
                }

                res.write("<h1>学生信息 学号为" + stuNum +"</h1>");
                res.write("<h2>姓名" + dataObj[stuNum]['xingming']+"</h2>");
                res.write("<h2>语文成绩" + dataObj[stuNum]['yuwen']+"</h2>");
                res.write("<h2>数学成绩" + dataObj[stuNum]['shuxue']+"</h2>");
                res.end();
            }

        });
        // 读取文本文件就是模拟数据库
    }
    
    else{
        res.end("404 ")
    }
});
server.listen(30000);

console.log("服务器已经启动");




























