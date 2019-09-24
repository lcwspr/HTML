# delay()
* delay,可以使用连续打点，必须放在运动语句之前，(有点像SetTimeOut)
* 例子
    * [source](file/01_delay()方法.html)
    * [图片延迟不同时间显示](file/02_delay()方法小窍门.html)
* delay技巧
    1. delay延迟，可以使用连续打点，必须放在运动语句之前。
        ```
            $("div").delay(1000).animate({"left":500},1000);
            $("div").delay(1000).slideUp();
            $("div").delay(1000).hide(1);   //必须写1，写1了就是运动
        ```
    2. 小窍门，让所有的img元素，都延迟不同的时间入场：
        ```
        $("img").each(function(i){
        	//attr就表示得到标签内的属性
        	$(this).delay(i * 1000).fadeIn(1000);
        });
        ```
    
