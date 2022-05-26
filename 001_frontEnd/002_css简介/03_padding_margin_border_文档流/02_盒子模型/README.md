# 盒模型
* 网页中所有标签都是盒子，都是矩形，都有width,height,padding,border,margin属性
    * 最重要的一个知识点，就是width和真实宽度的关系。
* 要能够看懂盒模型
    ```
        div{
            width:200px;
            background-color:greenyellow;
            padding:20px;
            border:30px solid red;
        }
    ```
    * 也就是说padding和border都是外扩的
   
## padding内边距
1. padding就是内边距，指的是边框内侧到内容的距离 
2. padding有很多设置的方法
    * padding:50px;
        * 设置四个方向的padding都是50px
    * padding：10px 20px 30px 40px
        * 等价于单独设置了上，右，下，左的padding分别是10,20,30,40
    * 为什么要有小属性
        * 小属性可以层叠掉大的属性
        ```
            padding: 50px;
            padding-left:30px;
        ```
3. 注意，一些元素默认带有padding,使用通配符清除所有的padding

## border边框
1. 边框的三要素： 粗细，线性，颜色
    * border: 1px solid red;
    * 1px就是边框的宽度，solid就是线性，red就是颜色
2. 边框的线性
    * solid
    * dashed
        * 只能够使用这两个，其他的都有兼容性问题，如果想要制作其他的边框，必须进行切图   
3. 三要素分别对应了三个小属性
    * border: 10px solid red;
    * 等价于
        * border-width: 10px;
        * border-style: solid; 
        * border-color: red;
    * 那么如果我们想要为某一个边，单独设置三要素，那么可以拆分为12个小属性
        * border-top-width:10px;
        * border-top-style:solid;
        * border-top-color:red;
        * .......
    * 并且所有的复合属性，都可以按照上右下左的顺序来书写
        * border-color: red yellow green;
        
4. 使用边框制作小三角    
    * 如果某一个边框不想要，那么可以使用none

## margin     
* 自己这个盒子的边框外侧，到其他盒子边框外侧的距离  
    * 注意，垂直方向的margin，margin小的会陷入margin大的值中，以大的为准，就是margin的塌陷现象
    
## 盒子模型相关的几个属性

1. overflow
    
    * 设置元素如何处理溢出的内容
    * 可选值
        * `visible`: 不处理溢出的内容在盒子外部显示
        * `hidden`: 溢出的内容会被裁剪不在页面显示
        * `scroll`: 生成水平和垂直双方向滚动条
        * `auto`: 根据需要生成滚动条
    * display
        * 设置元素显示类型
        * 可选值
            * block
            * inline
            * inline-block
            * none
            * table元素作为一个表格显示
            * flex：元素作为一个弹性容器显示
            * inline-flex: 元素作为一个行内弹性容器显示
    * visibility
        
        * 设置元素的显示状态
        * 可选值
            * visible: 默认，正常显示
            * hidden: 元素在页面中隐藏，占据页面位置
    
## 外边距折叠

* 垂直方向相邻的外边距会发生重叠现象
    
    * 兄弟元素间，相邻的垂直外边距会取最大值
        
        * 两正，取最大
        * 两负数，取绝对值最大的
        * 一正一负，求和
    
    * 父子元素间，子元素的上外边距会传递给父元素
        
        ```css
        .box1::before{
          content: '';
          display: table;
        } 
        ```

## 文档流

- 文档（document），文档就是网页
- 文档流是网页的一个基础位置，页面中的所有元素默认都在文档流中排列

* 块元素在文档流中的特点：
    * 在页面中自上至下排列
    * 默认跨度是父元素的全部
    * 默认高度被内容撑开

* 行内元素在文档流中的特点
    * 在页面中自左向右顺序排列，一行占满换到第二行继续自左向右
    * 默认宽度和高度都是被内容撑开

* 行内元素的盒模型
    * 行内元素不支持设置宽度和高度
    * 行内元素支持水平方向的内边距、边框、外边距
    * 可以设置垂直方向的内边距、边框、外边距，但是不会影响布局
       