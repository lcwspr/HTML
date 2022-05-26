# 上节课复习
* 介绍一下node.js
    * Node.js是一个JavaScript的runtime,运行环境，实际上就是利用Chrome V8引擎，将他移植到了服务器上，用它来开发服务器程序，可以提供HTTP服务。
* node.js主要特点
    * Single Thread: 单线程
    * Non-blocking i/o 非阻塞I/O
    * Event Drivent 事件驱动
* 这三个特点是相辅相成的，是必须的选择，Node为了在低硬件服务器条件下高并发，所以就减少内存消耗，剑走偏锋，选择了单线程。
    * 必须要非阻塞式io,因为只有一个线程，所以必须当A用户去io的时候，处理B业务的事情，B业务区io的时候区处理c的业务。。。ABC都有回掉函数。为了让ABC不乱套，每个人都进行合理调度，谁先来就先处理谁，你不能让B一直等待，处理CDE。。。所以Node使用了一个机制，叫做事件环机制，采用事件驱动来调度事件
    
## 使用过模块
1. `fs.readFile("./test.txt"， function(err, data){  })`
    * 因为fs模块的readFile方法是异步方法，事实上Node中的fs模块，mongodb模块基本上都是异步方法。一定要记住： 异步函数不能通过return 返回，不能通过等号来接受数据。必须通过回掉函数传实参的模式来传输数据。

2. http模块，有什么功能，有哪些方法? req,res个有什么属性和方法?
    * http模块用于提供http服务的。最常用的: `http.createServer((req, res)=>{})`
        * 创建了一个服务器，req对象是封装了http上行请求的所有信息，常用属性req.url, req.connection.remoteAddress， req.type等等
        * res对象是服务器应该给出的下行响应，常用方法是req.write(), req.end()，req.setHeader()等等。
        
## NodeJS的顶层路由设计
* Apache和Node的模式是完全不一样的，Apache天生有静态资源服务，但是NodeJS不行，NodeJS必须使用路由清单给出明确的路由才行。
    ```
    var pathname = rul.parse(req.url).pathname;
    if(pathname == "/music"){
        res.end('音乐');
    }else if(){}
    ```
    * node即是语言也是平台，而apache是平台，php是语言
    
## CMD命令
1. cls
2. cd xxx
3. mkdir xxx
4. dir
5. node
6. ctrl + c































