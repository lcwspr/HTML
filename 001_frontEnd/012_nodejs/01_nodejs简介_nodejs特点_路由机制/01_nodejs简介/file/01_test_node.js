// 读取内置模块，file system，文件系统
var fs = require("fs");

// 读取文件
fs.readFile("./test_file/test.txt", function(err, data){
   // 回掉函数，读取文件之后做的事情
   console.log(data.toString());
});

var sum = 0;
for(var i = 0; i <= 100; i++){
    sum += i;
}
console.log(sum);