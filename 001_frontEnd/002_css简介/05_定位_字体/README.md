# 定位

## 什么是定位

* 通过定位我们可以将元素摆放到页面的任意位置

* 使用position属性来设置元素的定位
    
    * static: 没有定位, 默认值
    * relative: 相对定位
    * absolute: 绝对定位
    * fixed: 开启固定定位
    
## 相对定位

1. 相对定位特点
    
    1. 开启相对定位，元素不会发生任何变化
    2. 开启相对定位，元素不会脱离标准里
    3. 相对定位，是相对于其在文档流中的位置进行定位的
    4. 相对定位会使元素提升一个层级。
    5. 相对定位不会改变元素的性质, 块还是块,行内还是行内
    
2. 当元素开启定位之后，可以通过四个方向的偏移量来控制元素的位置
    
    1. top: 元素与定位位置顶部的距离
    2. bottom: 元素与定位位置底部的距离
    3. left: 元素与定位位置左侧的距离
    4. right: 元素与定位位置右侧的距离

## 元素的层级

* 开启定位元素都会提升一个层级
    
    * 定位元素的层级可以通过z-index来设置
    * z-index需要一个整数作为参数，值越大层级越高
    * 如果z-index值相同，那么后面的元素会盖住前面的
    * 父元素层级再高，也不会盖住子元素
    
* rgba和opacity
    
    * rgba：这是一个透明的颜色
    * opacity: 让元素透明

## 绝对定位

* `position: absolute`: 开启绝对定位

* 特点
    
    1. 绝对定位会使元素完全脱离标准流
    2. 绝对定位会改变元素的性质，行内变块，块宽高被内容撑开
    3. 开启绝对定位后，如果不设置偏移量，元素的位置不会发生变化
    4. 绝对定位会相对于离他最近的开启了绝对定位的祖先元素进行定位
        * 如果所有的祖先都没有定位，相对于html标签定位
        * 子绝父相
    5. 绝对定位会使元素提升一个层级

## 盒子模型等式关系

1. 无定位水平等式
    * margin-left + border-left + padding-left + width + padding-right + border-right + margin-right = 包含块的宽度

2. 绝对定位水平等式
    * left + margin-left + border-left + padding-left + width + padding-right + border-right + margin-right + right = 包含块的宽度

## 固定定位

* 固定定位
    
    * `position:fixed`: 开启元素固定定位
    
* 特点
    
    * 固定定位的特点大部分都和绝对定位一样
    * 不同的是固定定位总是相对于浏览器窗口


## 粘滞定位

* sticky

## 字体族&字体图标

1. color : 设置字体颜色

2. 字体的分类
    
    1. 衬线字体 serif
        * 字体宽度各异, 有衬线
        * Times, Georgia, 宋体
        
    2. 无衬线字体 sans-serif
        * 字体宽度各异, 无衬线
        * Helvetica, Verdana, Arial, '微软雅黑'
    
    3. 等宽字体 monospace
        * 字体宽度一样, 一般用于代码或表格
        * Courier New, Consolas
    
    4. 草书字体 cursive
        * 模仿人手写的字体
        * Indie Flower, Comic Sana
    
    5. 装饰字体 fantasy
        * 没有什么统一特征, 不属于上述类别字体

3. 字体族
    
    * `font-family:serif`

4. 下载字体(必须是本地的字体)
    
    * `@font-face`
    * 通过@font-face可以使得浏览器自动应用服务器上的字体文件
        ```css
        @font-face {
          font-family: myFont;
          src: url("./xxx.ttf");        
        }
        ```

5. 图标字体

    * 图标字体库: xxx
    
    * 使用步骤
        
        1. 将css, font放到项目中
        2. 引入css文件

