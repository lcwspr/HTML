# $()函数简介
## jQuery 选择出来的对象不是原生对象
1. $()函数，是招牌功能，能够根据CSS选择元素。
2. $()选择出来的东西，是一个类数组对象，是jQuery自己的对象(***不是原生js对象***)
    * 例子： [source](file/01_$( )函数.html)
    * 这个jQuery对象后面不能够跟着原生的JS语法
        * `$("#box").style.backgroundColor = "red";`
        * 因为.style.backgroundColor是原生的语法，$()选择的jQuery对象，不能直接跟着原生
    * 所以，如果想把jQuery对象转换为原生对象，加上[0]就好了，其实是一个类数组对象
        * `$("#box")[0].style.backgroundColor = "red"`
    * 注意： $ === jQuery

## 基本选择器 
1. 基本语法： $("选择器")
    * 注意引号不能丢！！在jQuery世界中，只有三个东西不能加引号，其他必须加引号：
        * $(this)
        * $(document)
        * $(window)

2. 支持的选择器
    1. 支持所有css2.1层面的选择器
        1.	`$("p")`
        2.	`$(".box")`   
        3.	`$("#box")`   
        4.	`$("#box ul li")`   
        5.	`$("li.special")`   
        6.	`$("ol , ul")`
        7.	`$("*")`  
    2. 支持部分css3的选择器
        
## 筛选器























        