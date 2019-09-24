# 复习
## 工作的时候使用原生写效果，还是使用jQuery
* 其实即便使用原生JS开发效果，我们也会使用一些轮子，我们关心的永远是上层业务逻辑，而不是底层的一些浏览器兼容问题，所以即便使用原生JS开发效果，也用到了fetchComputedStyle(),animate()函数，其实已经屏蔽到了一些js纯底层的东西，所以工作中如果因为各种理由不使用jquery，也会有各种js的轮子，其实jQuery没有为我们简化业务逻辑，不过一些事情会变得方便

## jQuery复习
1. 基本语法复习
    * [source](file/01_review.html)
    * `$("#box").css("background-color","green");`
        * 必须加引号的几个
            1. $(this)
            2. $(document)
            3. $(window)
    * jQuery返回的对象不是js原生对象，如果想要转换可以使用[n]返回第n个元素,JQuery对象也有length属性，可以获得长度
    * $和jQuery是同名函数

2. 选择器和筛选器
    * 选择器支持css2.1层面所有css选择器，支持部分css3选择器
    * 筛选器
        * 写在引号里面，用冒号当作筛选器，
            1. 选择第一个元素: `$('p:first')`
            2. 选择最后一个元素: `$('p:last')`
            3. 选择第n个元素 `$('p:eq(n)')`
                * 能够提炼为方法： `$('p').eq(3)`
            4. 选择小于n的 `$('p:lt(n)')`
            5. 选择大于n的 `$('p:gt(n)')`
            6. 选择奇数 `$('p:odd')`
            7. 选择偶数 `$('p:even')`

3. CSS 方法
    * Css函数用来读取，设置元素的样式，可以读取计算后的样式 
        * 读取的时候就一个参数
            * `$("div:eq(4)").css('width');`
        * 设置的时候，逗号隔开
            * `$("div:eq(5)").css("height", 200);`
            * 可以使用JSON来简化
                * `$("div:eq(5)").css(JSON);`
            * 可以在原来值基础上，加上值
                ```
                $('div').click(function(){
                    $(this).css("width","+=10px");
                })
                ```
4. animate()方法
    ```
        $("div:odd").animate(json,1000,function(){...})
    ```
    * background 在JQuery中是不能渐变的，页面上如果想要使用颜色的渐变，必须使用css3
    * jQuery中提供了动画队列功能，相同元素的animate会累计，不同元素的动画是同时进行的
    
5. 添加监听
    * `$("div:even").click(function(){...})`
    
6. 注意
    * 一定要知道一个事情，jQuery中所有的事情都是批量的，并且不需要写循环语句
    * $()函数返回的是一组元素，每个方法比如css内部都有for循环迭代，其实也就是说明，不是没有for循环，而是for循环被隐藏到css(animate,click)方法中了