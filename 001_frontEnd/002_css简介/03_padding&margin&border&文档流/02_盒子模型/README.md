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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    