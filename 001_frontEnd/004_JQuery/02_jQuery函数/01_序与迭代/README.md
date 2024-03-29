# 序列和迭代
## eq方法简介
1. 
    * [source](file/01_eq方法深入.html)
2. 如题
    * 我们选择box2里面的1号下标的p，有两种写法
        * `$(".box2 p").eq(1);`
        * `$("p").eq(5);`
    * $()函数将会返回一个对象队列，使用eq来精确选择这个队列中的某个元素，到底eq？是这个元素，仰赖于$()的序列是什么
    * 例子
        * [source](file/02_eq方法例题.html)
    * 也就是说，所有选中的孩子，直接排队，然后在根据选择下标为几的元素选择，同样的lt,gt,odd,even,first,last都是这个机理
    
## index方法
* 返回这个元素在亲兄弟之间的排名，无视选择器怎么选
* 例题
    * [source](file/03_index方法.html)
    * 和选择器怎么选无关，就是在亲兄弟之间的次序
    * `$(this).index()`这个写法很常见，表示触发事件的元素，在自己亲兄弟间的排名
    * 可以用来做对应
        * [source](file/04_对应.html)
    * 注意： index()是方法
        
## each 方法
* each() 表示遍历节点，也叫做迭代符合条件的节点
* each() 语句就好比一个侦察兵，挨家挨户去敲门，敲开门之后做什么事情写在function(){}里面，这里面的$(this)表示敲开门这家
    ```
        $("p").each(function (i) {
			$(this).css("width", 50 * i);
        })
    ```
* 例子
    1. [source](file/05_each方法.html)
    2. [source](file/06_each方法.html)

## size()方法和length属性
* $()或jQuery选中的元素的个数

## selector
* 返回传给jQuery()的原始选择器
* 换句话说，就是返回你用什么选择器来找到这个元素的，可以与context一起使用，用于精确检测选择器查询情况

## get()方法
* get()方法和eq()方法基本一致，都仰赖于$()的序列
* eq()返回的是jQuery对象，而get()返回的是原生JS对象.jQuery对象必须使用jQuery的方法，原生对象必须使用原生对象的方法
* 例子
    * [example](file/07_get方法和eq方法的区别.html)

## index方法
1. 概述
    * 搜索匹配的元素，并返回相应元素的索引值，从0开始计数
    * 如果不给.index()方法传递参数，那么返回值就是这个jQuery对象集合中第一个元素相对于其同辈元素的位置
    * 如果参数是一组DOM元素或者jQuery对象，那么返回值就是传递的元素相对于原先集合的位置
    * 如果参数是一个选择器，那么返回值就是原先元素相对于选择器匹配元素中的位置，如果找不到匹配的元素，那么返回-1
2. 例子
    * 传递一个选择器，返回#bar在所有li中的索引
        * `$('#bar').index('li')`
        

## 思考题
* [source](file/08_思考题.html)

        