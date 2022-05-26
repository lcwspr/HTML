# 跨域
* Ajax不能跨域，比如您是www.baidu.com,您就不能请求www.163.com的文件，但是您可以请求www.baidu.com/1.json ; ent.baidu.com/1.json
* 这是因为安全原因，对于任何后台语言来说、服务器程序来说，所有的XHR类型的请求，如果来自其他的服务器，将不予应答。
* 为了安全，所有的服务器对来自其它服务器的XHR类型的HTTP请求，不予应答。浏览器也不予发送前往不同服务器的XHR类型请求。
# jsonp跨域
* 无法用XMLHttpRequest对象请求其他服务器的内容。这个现象持续到了2008年。
2008年有一个天才、或者是疯子，发明了一个东西，震惊了全球。叫做JSONP。
* 怎么写?
    * 一般是先定义函数，然后在调用
    * 那么如果我在script标签中调用函数，然后主程序中写他的调用那? 又会怎么样？
        * script能够加载远程服务器上的js文件

## jsonp跨域的实用函数封装
* 外部文件中存放的是一个函数的调用，实参是我们需要的数据，一般来说是json
    ```
    fun(
        {
            "result": [
                {
                    "name": "小明",
                    "age": 12,
                    "sex": "男"
                },
                {
                    "name": "小红",
                    "age": 14,
                    "sex": "女"
                }
            ]
        }
    );
    ```
    * 内部是数据部分，是JSON,外面的fun(); 是函数的调用，是padding补充部分。所以是JSON + Padding , jsonp
    * 然后在主程序定义函数，获取数据.
        * 注意： 在html内部一定要先定义函数，然后在引包
    * [json测试](file/01_点击按钮实用jsonp请求数据.html)
    
* jsonp的使用非常拧巴，要先定义函数，然后创建script标签，设置script标签的src属性发出请求。
所以拧巴，不是“正向编程”。
    * 那么我们就要封装一个实用轮子，解决这个事情，最最重要的语句，就是在window中注册一个传进来的函数名字，函数的名字指向你传进来的回调函数。
    * [jsonp工具函数的编写](../../../999_js/myajax.js)
    * 这样就实现了正向编程


## jquery中的jsonp
* jQuery用同样的原理帮我们实现了框架正向编程。创建script标签，添加src，注册系统的全局的函数名。           
* 实用$.ajax函数
    ```
    $.ajax({
        "dataType": "jsonp",
        "url": "www.163.com",
        "callback",
        "jsonpCallback": "kaola",
        "success": function(data){}
    })
    ```   
* show
    ```
	$.ajax({
		"dataType" : "jsonp",
		"url" : "www.163.com",    //jsonp的网址
		"jsonpCallback" : "haha",     //jsonp的网址是一句调用，所以这里要在window对象上注册一个函数，和jsonp那个调用同名。
		"success" : function(data){   //成功的回调函数
		      console.log(data);
		}
	});

    ```
    * 用什么get、post、jsonp要看服务器给你什么
    
  