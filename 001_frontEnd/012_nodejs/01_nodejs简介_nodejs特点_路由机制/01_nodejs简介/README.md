# nodejs 简介
* 我们学习很多js的新潮文艺: Node,MongoDB,Angular,React,Vue..最好的快速认知方法，就是看官方网站的开门注
* 官网  https://nodejs.org/en
    * Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js 
        * 是一个构建在Chrome浏览器V8引擎上的JavaScript运行环境
    * Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
        * Nodejs使用了事件驱动，非阻塞IO模型，这都使他轻量，好用
    * Node.js package ecosystem(生产环境), npm, is the largest ecosystem of open source libraries in the world
        * Node.js的包生态，(npm)是世界上最大的开源库生态系统
        
## 安装nodejs
* 只有真正安装了nodejs才会知道什么是nodejs
* Node.js可以在任何操作系统上安装，底层是Chrome V8引擎，使用c++开发
    * LTS 最新稳定版本
    * Current最新版本
* cmd窗口，CMD就是commond的简写，表示命令，类似dos,Linux系统使用命令来操作系统
    * win + R 
    * 此时输入命令`node -v`
        * 可以查看nodejs的版本号。注意$符号是linux系统中，命令行中普通用户的表示符号，注意不要输入$.
        * 注意安装路径不要有中文
    * 为什么可以输入node命令那？也就是系统去哪里寻找node命令？
        * node的安装目录有一个node.exe文件，所有的系统中都有一个全局的环境变量，
* 此时我们有了第二个js执行环境，nodejs,是另外一个JavaScript runtime，javascript运行环境。
    
 ## 创始人和node的诞生
 1. 简介
     * 2004年，在纽约罗切斯特大学数学系读博士，研究一些分形，分类以及p-adic分析。2006年，也许是厌倦了赌博的无聊，产生了世界这么大我想去看看的欲望，做出了退学的决定，来到了智利的小镇。
     * Ryan Dahl不知道是不是因为生活的关系，他开始学习了网站开发，走上了码农的道路
     * 那个时候，Ruby on Rails很火，他也学习了他，Ryan Dahl的生活方式就是接项目，然后去客户的地方工作，在他眼中，工作就和就不同的地方旅行一样。。。
2. 起源
    * Ryan Dahl经过两年的工作之后，成为了高性能Web服务器的专家，从接开发应用到变成专门帮客户解决性能问题的装甲，期间他开始写一些开源项目，帮助客户解决Web服务器的高并发性能问题，尝试过的语言有Ruby,c,Lua，当然这些都失败了，只有通过c写的HTTP服务库lieebb项目稍有起色，
    * 这些失败各有原因，Ruby是因为虚拟机性能太烂而无法解决根本问题，c代码性能高，但是让业务通过C进行开发显然是无法实现的事情，Lua则是已有的同步I/O导致无法发挥性能又是，虽然经历过了失败，但是Ryan Dahl大致感觉到解决问题的关键是 ***要通过事件驱动和异步I/o来完成目的***
        * 异步I/O： 绝大多数的网站I/O是非常多的，I就是input数据的读取，O就是Output数据的写入，但是I/O的时候CPU命令磁盘去做事情，此时CPU就被闲置了
            * 两种io模型
                1. 同步io
                    * ![](img/01_同步io模型.png)
                    * ![](img/02_同步io模型.png)
                    * 同步(synchronous):当系统遇到了一个需要耗费大量时间的事情的时候，选择死等。
                2. 异步io
                    * 异步(Asynchronous):当系统遇到了一个需要耗费大量时间的事情的时候，不会死等，先做后面的事情，耗时的事情完成之后，执行回掉函数
            * 以php语句来举例子
                ```
                <?php
                    $file_path = "tesh.txt";
                    $fp = fopen($file_path, "r");
                    $str = fread($fp, filesize($file_path)); // 这里是一个同步语句，cpu此时命令磁盘驱动器读取文件，此时cpu闲置，而后面有一个计算任务，cpu命名能够在等待i/o结束的时候把他提前做到。(注意后面的计算不能依赖io任务)
                    // 其他任务，网络请求之类的io
                ?>
                ```
3. 诞生
    * 在他快要绝望的时候，V8引擎来了，v8满足了他关于高性能web服务器的想象(2008年，Google发布了Chrome浏览器，使用了V8引擎来解析js程序，非常的快，都是异步I/O,闭包特性方便)
        * 没有历史包袱，没有同步i/o,不会出现一个同步I/o导致事件循环性能极具降低的情况
        * V8性能足够的好，远远比python,Ruby等脚本语言的引擎块
        * JavaScript语言的闭包特性非常方便，比C中的回掉函数好用得多。
    * 于是，在2009年，按新的想法，他提交了第一行代码，这个项目的名字最终被命名为node
    * 2009年5月，Ryan Dahl正式向外界宣布这个他的项目，2009年底，Ryan Dahl在柏林举行的JSConf EU 会议发表关于node.js的演讲，
    * 这就是node.js的由来，是一个专注于实现高性能Web服务器优化的专家，几经探索，几经挫折，遇到V8而诞生的项目
    * 核心思想，与其一堆服务员闲着，不如一个服务员往死里用
  
## 演示
1. 先读取文件，然后进行计算，看看node中是怎么解决的
    * [node文件读取+计算](file/01_test_node.js)
        * 这个时候真的是先会输出5050,然后输出哈哈，此时可以证明读取Test.txt文件是异步的，cpu命令磁盘驱动器工作之后，cpu去执行后面的语句，等到io结束之后，执行回掉函数
    * 严禁使用绝对路径进行拖拽，因为fs读取文件的时候，是相对于当前工作目录的  
    
## node.js版本
* 自从2009年诞生以来，Node.js的版本号码，一直都是0.x.x，node.js向下兼容做的非常好，所有的高版本都会deprecate(建议放弃)一些老的版本的api，但不会完全不支持
* 2014年12月，多位重量级Node.js开发者不满Joyent对于Node.js的管理，自立门户创建了io.js.io.js的发展速度特别快，先是与2015年发布了1.0版本，并且很快就达到了2.0版本，社区非常活跃，但是io.js很快就又宣布，将这两个项目合并到Node基金会上，并且暂时由"Node.js和io.js"核心技术团队联合监督运行     
* 在Node.js和io.js首次合并的4.0.0版本，开发者可以看到其对于ES6特性的拓展支持，并且大多都是默认启用的，比如classes, typed arrays, generators, Promises, Symbols, conllections, arrow, functions, block scoping, template strings
    
    
## node函数特点

1. node中任何一个模块(js文件), 都被一个外层函数所包裹
    
    * 外层函数接受了什么参数?
    * (exports, require, module, __filename, __dirname)
        * exports, require, module
        * `__filename`: 文件绝对路径 
        * `__dirname`: 文件夹名

2. 为什么要有这个外层函数，(这个外层函数有什么作用?)
    
    1. 用于支持模块化语法
    

## node中的global

1. 浏览器端口，js由哪几部分组成
    
    1. BOM: windows 浏览器对象模型
    2. DOM: document 文档对象模型
    3. ES规范: ES5, ES6
    
2. Node端，js由于几部分组成
    
    1. global
    2. ES规范 
    
3. global常用方法
    
    1. `setImmediate`: 立即执行函数
    2. `clearImmediate`
    
4. 事件循环模型
    
    1. timers (定时器阶段 - setTimeout, setInterval)
        * 开始计时
        * 执行定时器的回调
    2. pending callbacks (系统阶段)
    3. idle, prepare (准备阶段)
    4. poll (轮询阶段)
        * 如果回调队列里面有待执行的回调函数， 从回调队列中取出回调函数，同步执行，直到回调队列为空，或系统最大限度
        * 如果回调队列为空
            * 如果有设置过setImmediate, 进入下一个check阶段
            * 如果没有设置过setImmediate, 等待下一个回调函数
    5. check
        * 用于执行setImmediate所设置的回调
    6. close callbacks
    
5. `process.nextTick()`
    
    
## 包结构
    
* 实际上就是一个压缩文件，解压以后还原为目录
    
    * package.json
    * bin
    * lib
    * doc
    * test   
    
     