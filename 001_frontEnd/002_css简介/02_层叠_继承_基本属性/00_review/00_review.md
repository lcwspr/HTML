# 层叠&继承&基本属性
## 复习
1. html表格、table、tr、td(th)、thead、tbody、caption
    * 注意：一定要会根据图形，制作表格
2. html注释
    * \<!--注释在这个里面-->
3. 字符实体(转义字符)
    1. \&nbsp;   &nbsp;空格
    2. \&gt;     &nbsp;大于号
    3. \&lt;     &nbsp;小于号
    4. \&copy;   &nbsp;版权符号
4. 废弃标签
    * b
    * u
    * i
    * del
    * strong
    * em
5. 两个标签
    * 标签功能
        * br  换行
        * hr  分割线 
            * 现在都使用盒子的边框模拟线
    * 已学自封闭标签
        * \<meta name = "kewywords" content="=" />
        * \<img src="1.jpg"/>
        * \<input type="radio"/>
        * \<br />
    * 说明
        * 在2007-2008年，所有的换行都是使用\<br />来完成的
        * 而现在br已经被废弃，现在使用p、div、h系列来进行换行，通过css控制样式
    * br作用
        * br并不是完全没有用处，就是有些时候，极其特殊的情况使用标签来打断(换行)语义不合适，没辙了，只能使用\<br />
        * 比如
            ```
            <p>
                <a href="">高级</br >搜索</a>
            </p>
            ```
        * 如果使用两个p不合适，就使用br换行
6. CSS： cascading style sheet 层叠式样式表
    1. 一些专有名词英文
        * HTML
            * hypertext markup language
        * HTTP 
            * hypertext transfer protocal
    2. CSS 舞台
        ```
            <style type="text/css">
            </style>
        ```        
    3. 语法
        ```
            <style type="text/css">
                h1{
                    k:v;
                    k:v;
                    k:v;
                }
            </style>
        ``` 
    4. 几个属性
        1. font-size:40px;
        2. color:red;
        3. background-color:yellow;
        4. border: 1px solid red;    
    5. 选择器
        * 基本选择器
            1. 标签选择器
                * 语法： `p{text-align:center;}`
                * 注意：所有的p都会被选择到，无论藏得多深
                * 可以用于所有的标签元素
            2. id选择器
                * 语法：
                    ```
                        <p id="pp"></p>
                        #pp{  }
                    ```
                * id页面唯一，只要是合法的命名，可以随便任取id。合法的命名：英语字母开头(AA和aa不同)、数字、下划线、横杆。
            3. 类选择器
                * 多个标签可以携带同一个个class
                * 同一个标签可以携带多个class，用空格隔开
                * 语法
                    ```
                        <p class='warning'></p>
                        .warning{  }  
                    ```
                * 类的使用，要注意使用原子类，可以把一个标签携带多个class，简化我们的页面制作，各取所需。
        
        * 高级选择器
            1. 后代选择器
                * 语法
                    ```
                    div p{}
                    
                    div的后代p，都会被选择
                    ```
                * 注意 
                    * 选择的是后代而不是儿子
                * 例 
                    ```
                        div.haha ul.xixi li.hehe p
                        有haha类的div的后代 有xixi类的ul的后代 有hehe类的li的后代中的p 
                    ```
            2. 交集选择器
                * div.haha (又是div,又有haha类)
            3. 并集选择器
                ```
                    div.haha ul li, div.xixi p{
                    }
                    等价于
                    div.haha ul li{
                    }
                    div.xixi p{
                    }
                ```
            4. 通配符
                * 通配符选择器
                    * 用法，比如清除元素的默认padding,margin
    