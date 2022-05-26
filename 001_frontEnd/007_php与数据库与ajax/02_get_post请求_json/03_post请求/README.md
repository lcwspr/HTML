# post请求
* post请求也可以让用户的数据传输到服务器上面，但是不是利用URL,而是利用HTTP request报文头。HTTP是报文，request,response都是以报文的形式传输的。报文的内容就是html文档，就是页面内容，而且报文的头部携带有很多的信息。
    * GET请求非常好产生，我们每一次输入网址打开网页都是一次GET请求，GET请求利用的是URL。
    * POST请求非常难以自己产生，必须借助表单产生。
* php接受post请求
    * `$_POST["name"]
* post优缺点
    * post请求好处
        1. 安全，相对的安全，不会通过网址来暴露我们的数据
        2. 内部不限量，表单域填写多少都可以
    * post请求缺点
        * 链接不可以分享，post请求不会影响url
        
## 用途(优缺点)
1. GET请求通常用于检索数据库的某一个条目，比如news.php?id=4
2. post请求通常用于提交表单    

## 表单提交
1. [表单请求提交](file/01_survey.html)
2. [php存储数据](file/02_getResponse.php)





