# 使用package.json管理依赖
* 说明
    * 很明显，我们现在项目03.js依赖了两个别人的，从npm上面下载的两个模块。分别是
        1. chinese-finance-number
        2. solarLunar
    * 显然node_modules文件夹是不能够删除的，如果删除会报错。如果删除了这个文件夹，此时将会报错。
    * 但是如果我们使用U盘拷贝项目给别人，那么此时完全没有必要去拷贝node_modules文件夹，因为这里面的东西完全可以联网下载(npm)线上，npm很稳定，随时可以线上下载安装。
## package.json
* npm有一个创造性的举动，可以让开发者声明自己的项目的全部依赖，我可以告诉别人我这个项目依赖什么。在项目的目录下创建一个文件，package.json
    ```
    {
        "dependencies": {
            "solarLunar": "latest",
            "chinese-finance-number": "latest"
        }
    }
    ```
* dependencies是英语依赖的意思,此时我们在项目根目录(就是package.json这一层目录)，在cmd中输入 `npm install`，此时npm软件将会自动安装package.json里面的所有声明的依赖项。
* 所以package.json文件非常关键，就是项目的身份证，事实上，里面还有很多的配置项目
    * 我们可以使用 `npm init`,此时，npm将会有一个表单，用来引导我们去创建一个较为完整的package.json文件。
    * 此时我们仅仅需要回答一些问题，默认的内容在圆括号中，如果想要使用默认的就直接按回车。帮我们生成json文件
        ```
        {
          "name": "day2",   //项目名字
          "version": "0.0.1", //版本
          "description": "案例", //描述
          "main": "01.js", //入口文件
          "scripts": {  //测试命令，后面使用webpack、gulp、grunt等工程化软件的时候很好用
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "keywords": [ //关键词，方便其他人在npm上搜索你，当然你得发布
            "考拉",
            "牛逼"
          ],
          "author": "hahah",  //作者
          "license": "ISC"  //版权协议
        }
        ```
        * 但是没有dependencies项目，需要自己手动的去写一个
            ```
            "dependencies": {
                "solarlunar": "latest",
                "chinese-finance-number": "latest"
            }
            ```
* npm手册
    * package.json版本限制,有很多符号表示要依赖的版本是什么
        ```
          "dependencies" : {
            "aa" : "1.0.0",   //必须明确限制为1.0.0版本
            "bb" : "~1.0.0" ,  //大约近似等于1.0.0版本，如果有这个版本，一定使用这个版本。如果没有找最近的。
            "cc" : "^1.0.0" ,  //寻找和1.0.0版本兼容的版本，如果有1.0.0就用，如果没有就找近似的。和~实测是一样的。
            "dd" : "^1.0.0" ,  //寻找和1.0.0版本兼容的版本，如果有1.0.0就用，如果没有就找近似的。和~实测是一样的。
            "ee" : "1.2.x",
            "ff" : "*",  //匹配任何版本，实测和latest效果一样，会寻找最新版本
            "gg" : "latest"  //寻找最新版本
              }
        ``` 
    * 但还是不方便，如果我们安装一个依赖的时候，想让他能过够自动进入到package.json中，那么直接使用--save参数就好了
        * `npm install solarLunar --save`
        * 此时依赖将会被安装，并且会自动将solarLunar写入到package.json文件的dependencies对象中。
        * 如果想要限制版本： 那么可以直接使用
            * `npm install solarlunar#^1.0.0 --save`
        * 卸载
            * `npm uninstall`
            
* review
    ```
     npm init    //帮我们创建一个package.json文件的，项目开发的第一件事儿就是这个。
     npm install    //根据package.json文件，安装全部的项目依赖。
     npm install solarLunar  //指名道姓安装某一个
     npm install solarLunar --save  //指名道姓安装某一个，并且把它写入package.json依赖项中。
    ```    
    
   