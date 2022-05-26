# 全局安装
* `npm install 包名字 -g`
    * 此时这个包(模块)将会被安装到全局，就是上午的`c:\user\Danny\appdata\Roming\npm`
    * 什么会安装到全局？ 一些CLI(命令行程序)，工程化的东西将会被安装到全局。随着学习的深入，我们将会遇到
    
## 淘宝镜像
* 淘宝为了方便中国程序员对抗GFW，此时发明了cnpm。你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。如何设置淘宝呢？一句话：
    * `npm install -g cnpm --registry=https://registry.npm.taobao.org`
    * 以后的npm活动都使用cnpm替代
* 最后说一句，有很多包非常大，自己也依赖别人，不用怕，他们的依赖也写在了他们自己的package.json里面。npm、cnpm能够深入读取每个人的package.json，将他们的依赖都下载下来。npm是个怎么样的世界？就是你站在巨人的肩膀上，他也站在别人的肩膀上……。