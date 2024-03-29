[TOC]

## 表格的基本使用

### 表格单元格的合并

* 单元格的合并，单元格的合并属性，colspan、 rowspan.***一定要写在 td 或者 th 上面 ， tr没有这两个属性***，colspan我们叫做列跨度，rowspan我们叫做行跨度。这两个属性，***都是小格格的属性，不是行的特性***

### 表格的完整结构

* 一个完整的表格，是有caption、thead、tbody三个部件的，thead就是表格的头部的意思，tbody就是表格的内容体的意思，caption就是表格的标题

## div 和 span标签

### div标签

* div是标签 division分割的意思，在页面上表示荣过期，将相同语义的一组元素放在同一个div里面。div是典型的容器级别标签，可以包裹任何的东西。

* 从语义上来说，所有相同语义，相关语义的元素，都要放到一个div里面

    ```html
    <div>
                <h3>中国主要城市</h3>
                <ul>
                    <li>北京</li>
                    <li>哈尔滨</li>
                    <li>吉林</li>
                    <li>长春</li>
                </ul>
            </div>	
            <div>
                <h3>中国著名男演员</h3>
                <ul>
                    <li>郭德纲</li>
                    <li>刘德华</li>
                    <li>邓超</li>
                    <li>胡歌</li>
                </ul>
            </div>
    ```

* div 标签，浏览器没有任何的默认样式。div这个东西能够把层次分的很清楚 。 div是网页布局使用的最常用的标签，div+css制作网页

* ***  div负责描述页面的结构，  css负责描述页面的样式  ***

#### 网页的三层结构

> ​	html     网页的结构层    从语义的角度描述页面的结构
>
> ​	css      样式层        从审美的角度装饰页面
>
> ​	js         行为层       从交互的角度增加运动效果

### span

* span表示跨度，就是文本级别的div.就是把一些语义相近、功能相同的文本标签，都包裹在一起。注意 直觉上觉得span比a大，比p小。

* span也没有任何的默认样式，都是配合样式表使用

## html杂项

### 注释

* 任何语言都有注释，***注释是不会当做程序执行的，是给程序员自己看的***

* html中注释的语言  `<!--这是网页的头部-->`   注意 换行是合法的

### 字符实体

* 也被称之为转义字符,因为在写html页面的时候，经常会有误会，比如<就不正常出现。为了防止html页面认为这是一个html标签，所以都应该写成转义字符 `&字母;`

    ```html
    &lt;     就是<      lt就是英语less than小于
    &gt;     就是>      gt就是英语greater than大于
    &copy;              就是版权符号
    &nbsp;              就是空格
    ```

*** 注意   有一个非常重要的转义字符就是nbsp, non-breaking  space, 不可打断空格 ***

### 废弃标签介绍

* 其实现在的html只负责语义，结构，不负责样式，但是在2008年之前，html也是负责样式的。但是html中有一些标签具有浓厚的样式色彩。（也就是一些标签不负责样式，只负责语义），2008年开始废弃了这些标签。

    ```html
    <b></b>
    <u></u>
    <i></i>
    <del></del>
    ```

* 看不出来丝毫的语义，只能够看到样式，所以被废弃了。其实还有点用，可以当做css钩子。。。。

* 还有一些标签是擦边球，就是有自己的一些语义，但是也有一些样式色彩，这些标签可以合理的使用

    ```html
    <p><strong>我是一个文字</strong></p>
    <p><em>我是一个文字</em></p>
    
    strong表示的是强调的意思
    em是emphasize  表示的也是强调的意思
    ```

## html总结

* html 现在就是用来负责页面语义和结构的，所以标签极大的简化。页面上常用的标签实际上就只有几个

    ```html
    容器标签     div  ul(li)    ol   dl   table   td
    放文字的     h系列标签    p   span    a
    文本流       img     input
    当做css钩子  b  u  i
    ```
