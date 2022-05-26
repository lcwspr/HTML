# DOM 2 级事件绑定
## addEventListener
* DOM 1级别中没有对事件进行改动
* DOM 2级中做了新的规范，不用onXXX来绑定监听了，而是使用一个方法
    * `addEventListener();`
    * 接受的三个参数
        * 什么事件
            * 事件名不需要写on, 就是使用click, mouseover, mouseout
        * 函数
            * 函数可以使用匿名或者有名函数
        * 是否在捕获阶段监听
            * 传入一个boolean值，true表示监听捕获阶段，false表示监听冒泡阶段
    * 例如
        * `oBox.addEventListener("click", function(){}, false)`
* DOM 2级
    * [能够设定监听的阶段](file/01_DOM2级绑定监听的方法_能够自由设置监听哪个阶段.html)
    * [哪个会先弹出来](file/02_哪个先弹出来.html)

## this是什么
* [this是什么](file/03_DOM2级绑定监听this是什么.html)
    * this 就是触发函数的这个元素
    
## addEventListener 可以重复添加相同事件名的事件
* [source](file/04_DOM2级绑定监听this是什么.html)
* 我们给box1绑定了两个事件冒泡阶段的监听，不会覆盖，两个监听的函数都会执行，按照代码执行顺序。

## 低版本IE的事件绑定
* IE 6， 7， 8 不支持addEventListener()方法，支持自己的
    * 支持`oDiv.attachEvent("onclick", 函数)`
    * 没有第三个参数，也就是说，不能选择监听捕获，冒泡，只能监听冒泡
        * [source](file/05_低版本IE的绑定监听.html)
    * 注意，第一个参数必须要写on,其实和onXXX的语法是一样的
* 低版本IE的事件监听attachEvent,事件处理函数里面的this,不是触发事件的这个元素，而是window对象
    * [解决ie中this不指向事件对象](file/06_低版本IE的绑定监听_this问题.html)
    
## iE 同名事件函数会反着执行
* [source](file/07_低版本IE的绑定监听_同名函数的监听会反着执行.html)

## 经典轮子
* show
    1. 得到计算后样式
        * fetchComputedStyle
    2. 运动框架
        * animate
    3. addEvent
    4. getElementsByClassName

* [IE 兼容轮子](file/08_事件监听的处理.html)
  
 
## 总结
* 事件流永远是先下后上，先捕获后冒泡，但是不同的添加监听的方式，决定了能够监听那一部分
* DOM 0级别的方式
    * 只能监听冒泡阶段
    * 不能有同名的事件，会覆盖，
    * this是触发事件的这个元素，
    * 高版本浏览器会冒泡到window,低版本浏览器会冒泡到document.
* DOM 2 级别，addEventListener()
    * 可以自由设置冒泡，捕获，true就是捕获，false就是冒泡，第三个参数就是use capture,
    * 事件名不加on
    * 可以用同名事件，会顺序执行，不会覆盖
    * this是触发事件的这个元素，会冒泡到window
* IE 6,7,8, 是自己的方法，attachEvent()
    * 只能监听冒泡阶段，没有第三个参数，
    * 事件名写必须on
    * 可以有同名事件，但是会反着执行（事件栈）
    * this是window而不是触发事件的元素，事件仅仅会冒泡到document

* JQuery中使用的就是我们的DOM 2级，也有轮子，也就是说事件同名不会被覆盖

 