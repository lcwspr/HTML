# npm世界
* 我们刚才封装了一个数学函数math-tool很好用，此时node开发者也发现了这个事情，如果让全球开发者贡献自己的实用模块那该多好，让大家不要重复造轮子。
* 说一下什么是模块，一个math-tool就是一个模块，但是如果5、6个js文件都是服务于数学方面的，他们整体又成为一个大模块。比如：
* 如下
    ```
    │  01.js
    └─ math-tool
          ┝ base.js
          ┝ circle.js
          ┝ index.js
    ```
    * math-tool整体就是一个大模块，所以node.js主导了一个社区，叫做npm,(node package management，node包管理器)。

## npm的使用
* 官网：　https://www.npmjs.com
* 淘宝:  http://npm.taobao.org
    * 此时我们就可以去上面找我们要的东西，比如现在有需求 ，把公历变为农历，第一时间就要想到，不要重新造轮子，要先去nmp社区找找看
* 点击详情，可以看到api
* 直接使用npm命令就可以下载，npm是随着node安装的，我们可以直接在cmd中使用
    * 比如，看上了一个农历-公里相互转换的npm包，我们呢可以直接下载使用。此时可以直接使用 `npm install solarlunar`,在联网环境下面，这个模块就会自动的被下载到你的项目的node_modules文件夹中。
    * 通过查看api就可以查看业务逻辑关系了  
    