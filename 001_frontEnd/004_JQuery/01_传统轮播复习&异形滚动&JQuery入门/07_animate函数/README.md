## jQuery 动画
```
    $("p").animate({"left":1000},2000,function(){
        $(this).css("background-color","red");
    });
```
* 我们骄傲的告诉大家，我们封装的animate语法基本和jQuery一样，只不过jQuery是对象打点：
* `$("选择器").animate(终点JSON,动画时间,回调函数);`
    * 有没有缓冲呢，有，jQuery需要插件来完成
    * jQuery默认不是匀速，是easeInOut
* 和我们封装的框架不一样，jQuery默认有一个处理机制，叫做动画排队。当一个元素接收到了两个animate命令之后，后面的animate会排队：
    ```
    $("p").animate({"left":1000},2000);
    $("p").animate({"top":400},2000);
    ```
    * 先2000毫秒横着跑，然后2000毫秒竖着跑。动画总时长4000。
* 如果想让元素斜着跑，就是同时变化left和top，就写在同一个JSON里面：
    * `$("p").animate({"left":1000,"top":400},2000);`
    * 注意，只有给同一个元素设置的多个动画才会排队，不同元素的多个动画不会排队
