# JQuery 整体感知
1. 选择元素问题，轻松解决
    * $()函数就是JQuery的核心函数，query就是查询的意思，也就是说jQuery的核心招牌功能就是选择元素
    * [整体感知](file/01_JQuery整体感知.html)
    * $("#box ul li.haha span").css("background-color","red");
    * 语法
        * $("选择器")
        * 选择的就是所有符合条件的元素，不是一个
        * 注意
            * $可以使用jQuery来代替，$和jQuery是同一个函数
            * jQuery("#box ul li.haha span").css();
    * 基本上，就可以替代document.getElementById();jQuery所有浏览器兼容
    
2. 样式问题，轻松解决
    * $(".box").css("width");
    * 通过$()函数选择出来的对象，都是jQuery对象，所有的jQuery对象，都可以继续打点调用css函数，css函数已经封装了计算后样式
    * [得到计算后样式](file/02_得到计算后样式.html)
        * 可以设置样式
            * `$(".box").css("width","200");`
        * 可以设置多条样式
            * ```
                $(".box").css({
                    "width":700,
                    "heigth":300,
                    "opacity":0.4
                })
              ```
        * 语法
            * $("选择器").css(JSON);
    
3. 动画问题
    * jQuery运动框架
        ```
        $(".box").animate({"left":900},4000,function(){
		    alert("运动完成");
	    });

        ```
    * [jQuery运动](file/03_jQuery运动.html)
    
4. 节点层次
* 所有的li都有监听了：
    ```
        $(".circles ol li").mouseenter(function(){
            //自己变红，自己的兄弟恢复为橙色
            $(this).css("background-color","red").siblings().css("background-color","orange");
        });
    ```
    * [节点操作](file/04_节点层次.html)
* siblings()表示兄弟节点。
    
    