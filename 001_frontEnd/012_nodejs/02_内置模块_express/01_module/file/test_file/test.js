var fs = require("fs");

console.log("你好, 我来自test.js");
fs.readFile("0.jpg", function (err, data) {
    console.log("你好，我是test.js回掉函数里面的语句");
});