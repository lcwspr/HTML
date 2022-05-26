# 模块
* 模块我们叫做module,指的是一系列有关系的js程序的集合。
    * module => n. 模块，组件
* 后面我们学习的mvc中的m指的是model, (模型，典型，模拟)
    * 模型，模型是实现最基本的算法的程序单位。

## 内置模块
* NodeJS中内置了很多模块，可以直接使用require来进行引用，国际惯例是： 你接受的名字最好和模块的名字一致
    * `var http = require("http");`
* 内置模块的引用使用require函数，require表示引用的意思。
    * 引用是无条件的，不需要提前引入什么 
    * 引用是无路径的，在任何文件夹下面，都是通过require("http")来引用内置http模块，而不需要指定路径
    * 内置模块是node.js天生旧有的，Node.js手册就是按照模块来进行区分的,注意记忆常用方法
        * url.parse()
        * querystring.parse()
        * path.extname()

## 自定义模块
* 每一个js文件就是一个模块，Node.js使用CMD(通用模块定义)规范。后面我们将会知道webpack,seajs也是用的是CMD规范， 而Angular, requirejs等等他们使用的是AMD(异步模块定义)
    * 必须要了解node.js模块的一些特性，而这些特性今后在webpack,seajs的时候都是通用的。
    
1. 什么是模块
    * 一个文件夹中有两个文件，01.js, test.js
    * 实验
        * 01.js
            ```
            require("./test.js");
            console.log("你好，我是01.js");
            ```
        * test.js
            ```
            console.log('test.js');
            ```
        * 运行01.js的时候输出
            ```
            test.js
            你好，我是01.js
            ```
    * 结论
        * require()谁，就会运行谁， 
        * 注意`require("./test.js")`中的./不能省略，如果你省略了，表示读取node_modules文件夹中的内容
        
2. 调用函数如果有异步语句
    * [test_js](test_file/test.js)
    * [js](01_自定义模块的尝试.js)   
    * 如果require的js文件如果有异步函数，将node不会等待他结束，会返回指定主文件，程序，如文件读取完毕，执行回掉函数

3. 连续require
    * 例子
        ```
        01.js
        test1.js
        test2.js
        ```
    * 01.js
        ```
        require("./test1.js");
        console.log("我是01.js")
        ```
    * test1.js
        ```
        require("./test2.js");
        console.log('test01')
        ```
    * test2.js
        ```
        console.log('test02');
        ```
    * 结果
        ```
        test02
        test01
        01.js
        ```
4. 循环引用
    * 如果A引用B，B引用A会怎样    
    * 会自动阻止第二次引用
    
    
5. 文件夹的层次
    * 从当前文件出法的相对路径
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    