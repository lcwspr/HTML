# 模块化

## 理解

1. 什么是模块/模块化
    
    * 将一个复杂的程序依据一定的规则(规范)拆分为几个块(文件), 并进行组合在一起
    * 块的内部数据或实现是私有的，只是向外暴露一些接口(方法)与外部其他模块通信

2. 为什么要模块

3. 模块化的好处

4. 页面引入加载script

## 模块化规范

1. CommonJS
    
    * 规范
        
        * 每个文件都可当作一个模块
        * 在服务端： 模块的加载是运行时同步加载到
        * 浏览器端： 模块需要提前编译打包处理
    
    * 实现
        
        * 服务端实现： nodejs
        
        * 浏览器端实现: browserify

    * 基本语法
        
        * 暴露模块
            
            ```
            module.exports = value
            exports.xxx = value
            // 问题： 暴露的本质到底是什么 exports对象
            ```
      
        * 引入模块
            
            * require('xxx')

2. AMD


3. CMD


4. ES6


### CommonJs服务端模块化教程

* 创建项目结构
    
    ```diff
    |- modules
        |- modules1.js
        |- modules2.js
        |- modules3.js
    |- app.js
    |- package.json

    ```

* 暴露
    ```js
    // 1. module.exports = value
    module.exports = {
        data: 'job',
        test() {
            console.log(this.data)
        }
    }
    
    // 2. module.exports = value
    exports.haha = () => {
        console.log("hello")
    }
  
    // 3. require
    require('./modules/module1')
    ```





















