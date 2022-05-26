# Babel
## 工程化
* 很厉害，比如可以自动生成css精灵
    ```
    .logo{
        background: url(logo.jpg);
    }
    .h4{
        background: url(title.jpg);
    }
    ```
    * 此时使用一个叫做gulp的工程化工具(也是基于NodeJS平台的), 此时可以自动将两个jpg文件合成一个css精灵文件。 并且自动帮助你改变css
    ```
    .logo{
        background:url(sprite.jpg) no-repeat -10px -10px;
    }
    .h4{
        background:url(sprite.jpg) no-repeat -110px -10px;
    }
    ```
* 所有的工程化的东西，webpack, babel, loader, grunt, gulp, fis等等都是基于NodeJS的， 他们都是NodeJS程序

## Babel简介和安装
1. 简介
    * Babel是一个compiler编译器，可以将ES6的代码翻译为ES5的代码， 增加兼容的浏览器数量
    * babel是一个node程序，天生没有babel命令，确保NodeJS和npm都安装好了的情况下
2. 安装
    * `npm install --save-dev babel-cli babel-preset-env`
        * --save-dev: 指定该程序为开发时候的依赖，程序运行时并不需要
    * `npm install -g babel-cli babel-preset-env`
        * -g表示安装在全局，cli表示command line interface命令行接口，就是cmd面板命令，npm安装的cli通常都可以成为命令行命令
        * 安装完毕之后，电脑上面就可以使用babel命令了
3. 配置
    * 在项目文件根目录，创建一个.babelrc文件(注意windows不允许我们.开头，所以创建一个a.txt, 然后rename a.txt .babelrc)
    * .babelrc文件中
        `{"presets": ["es2015"]}`
        * presets表示要安装多少翻译器，babel可以翻译es2015也可以翻译react语法,预设
        * 要安装babel-preset-es2015
    * 此时就可以使用babel命令来翻译js文件了
        * `babel 0.js -o 00.js`
        * rest: 插件
            * `babel-plugin-transform-object-rest-spread`
 
 4. 翻译文件夹的内容
    * `babel src --out-dir lib`        