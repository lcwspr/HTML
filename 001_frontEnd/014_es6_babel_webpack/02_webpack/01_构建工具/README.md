# 构建工具

## 什么是构建

*  就是把写好的没有加工过的源码加工处理

* 前端项目约定
    
    1. src 源代码
    2. dist/build 加工之后的代码

* 构建： 将程序写的源代码，经过编译，压缩，语法检查，兼容性处理， 生成浏览器可以高效，稳定运行的代码

## 常见的前端构建工具

1. grunt
2. gulp

## Webpack

1. Webpack相关
    
    * 什么是Webpack
        
        * webpack是一个模块打包器(bundler)
        * 在webpack看来，前端的所有资源都会作为模块处理
        * 他将根据模块的依赖关系进行静态分析，生成对应的静态资源
        
    * 五个核心概念
        
        * Entry: 入口起点(entry point)指示webpack应该使用哪个模块，来作为构建器内部依赖图的开始
        * Output: output属性告诉webpack在哪里输出他所创建的bundles, 以及如何命名这些文件
        * Loader: loader让webpack能够处理那些非JavaScript文件(webpack自身只能处理JavaScript, json)
        * Plugins: 插件可以用于执行范围更加广阔的任务
        * Mode: 有生产模式(production) 和 开发模式(development)
        
    * 理解loader
        
        * webpack本身只能加载js/json模块，如果要加载其他类型的文件(模块)， 就需要使用对应的loader进行转换/加载
        * Loader 本身也是运行在node.js环境的JavaScript模块
        * 它本身也是一个函数，接受源文件作为参数，返回转换结果
        * loader一般以`xxx-loader`命名， xxx代表了要转换的功能

    * 理解Plugins
        
        * 插件可以完成一些loader不能完成的功能
        * 插件的使用一般是在webpack的配置信息plugins选项中指定的
    
    * 配置文件(默认)
        
        * `webpack.config.js`: 是一个node模块,返回一个json格式的配置信息对象
        
    * 入口文件(index.js)
        
        * 这个js和模块化的js不一样，模块化的js只用于汇总所有的js模块
        * 该js是webpack的入口文件，用于汇总所有静态资源
    
2. 开启项目
    
    1. 初始化项目, 生成package.json
    2. 安装webpack
        * `npm install webpack webpack-cli -g`
        * `npm install webpack webpack-cli -D`
    3. 结果说明
        * webpack能够编译打包js和json文件
        * 能够将es6的模块化语法转换成浏览器能够识别的语法
        * 能够压缩代码
    * 缺点
        * 不能够打包css, img等文件
        * 不能将js的es6基本语法转换为es5以下语法  
    
3. 创建配置文件
    
    * `webpack.config.js`

4. 安装配置less-loader
    
    ```
    {
       test: /\.less$/,  // 检查文件是否以less结尾
       use: [
           'style-loader',     // create style nodes from js string
           'css-loader',       // translates css into CommonJs
           'less-loader',      // compiles less to css
       ]   
    }
    ``` 

5. js语法检查
    
    * 概述: 对js基本语法错误/隐患, 进行提前检查
    * 安装
        * `npm install eslint-loader eslint -D`
    * 按照文档配置
    
6. js语法转换

    * 概述: 将浏览器不能识别得新语法转换为原来的旧语法,做兼容处理
    * loader
        * `npm install babel-loader @babel/core @babel/preset-env -D`
    
    
7. js兼容处理
    
    1. 使用经典得polyfill
        
        * `npm install @babel/polyfill`
        * 不管用了哪些新语法, 所有语法都转换, 解决(按需引入)
    
    2. 安装: `npm install core-js`
    
    3. 配置loader
        
        ```
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', {
                    useBuiltIns: 'usage',
                    corejs: { version: 3 },
                    targets: { "chrome": "58", "ie": "9", }
                  }]
                }
              }
            }
          ]
        }
        ```

8. url-loader解析样式中的图片
    
    * 使用url-loader处理样式中的图片
    
    * 使用
        
        ```
        {
        	test: /\.(png|jpg|gif)$/,
        	use: {
        	  loader: 'url-loader',
        	  options: {
        	    limit: 8192, // 8kb --> 8kb以下的图片会base64处理
        	    outputPath: 'images', // 决定文件本地输出路径
        	    publicPath: '../build/images',  // 决定图片的url路径
        	    name: '[hash:8].[ext]' // 修改文件名称 [hash:8] hash值取8位  [ext] 文件扩展名
        	  }
        	}
        },
        ```

9. 打包html

    * 概述: html文件webpack不能解析，需要借助插件编译解析
    
    * 添加html文件
        * `src/index.html`: 在html中不引入任何css和js
    
    * 安装
        
        * `npm install html-webpack-plugin -D`
    
    * 在webpack中引入插件 (插件都需要手动引入, loader会自动加载)
        
        * `const HtmlWebpackPlugin = require('html-webpack-plugin')`
    
    * 配置
        
        ```html
        var HtmlWebpackPlugin = require('html-webpack-plugin');
        plugins: [
          new HtmlWebpackPlugin({
            template: './src/index.html', // 以当前文件为模板创建新的HtML(1. 结构和原来一样 2. 会自动引入打包的资源)
          }),
        ]
        ```
    
    

14. devtool
    
    * 概述: 一种将压缩/编译文件中的代码映射回源文件中的原始位置得技术，方便调试代码
    
    * 详细配置将官网: 配置 -> devtool
    
    * 介绍
        * cheap 只保留行, 编译速度快
        * eval webpack生成的代码（每个模块彼此分开，并使用模块名称进行注释）, 编译速度快
        * inline 以base64方式将source-map嵌入到代码中，缺点造成编译后代码体积很大
    
    * 推荐使用：
        * 开发环境： cheap-module-eval-source-map
        * 生产环境： cheap-module-source-map
    
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
    
    
    
    
    
    
    
    
    
    
    