# 节点操作
* html节点我们原来最多就是改改html属性，比如src属性改改，或者改改css样式，比如.style或者.css().
* 而现在我们想要增加节点，删除节点，移动节点，替换节点。
## 原生js中的节点操作
1. 创建节点和节点追加
    * [source](file/01_节点操作.html)
        ```
            var oUl = document.getElementsByTagName('ul')[0];
            // 创建一个li标签，用变量oLi表示。创建出来的节点不是任何节点的儿子
            // 也就是说没有在dom树上
            var oLi = document.createElement('li');
            oLi.innerHTML = "DDDD";
    
            oUl.appendChild(oLi);
        ```
    * 创建节点的API
        * `document.createElement()`
        * create创建，Element 元素，接受一个参数，就是创建的标签是什么
    * 追加节点的API
        * 创建出来的节点不在dom树上，所以就应该使用appendChild来添加到dom树上
        * `父亲.appendChild(新儿子)`
    * 小案例
        * [点击添加](file/02_按我添加.html)
        * [创建option](file/03_创建option.html)
2. appendChild() 一般来说就是用于追加新创建的节点，如果试图把页面上已有的节点appendChild()到其他的地方,那么这个节点将会移动，也就是说同一个节点不可能在页面上两个地方出现。
    * [移动位置](file/04_appendChild已有节点，将会移动.html)
    * 其实一般情况下很少使用createElement()，因为innerHTML也能够创建节点，甚至效率要高于createElement.

3. innerHTML创建节点
    1. [innerHTML 创建节点](file/05_innerHTML创建节点.html)
    2. [innerHTML 创建option](file/06_innerHTML创建opt.html)    

4. insertBefore
    * 我们可以在任意位置添加
    * 语法: `父亲.insertBefore(新节点，原有的标杆儿子)`
    * 注意： 通过getElementXXX获取到的东西都是鲜活的，动态的，会随着dom结构改变
        * [每次都插入第一个位置](file/07_inserBefore.html)
        
5. removeChild
    * 小例子
        * ![删除儿子](file/08_removeChild.html)
        * ![删除操作](file/09_删除操作.html)  
    * 如果要自杀，也要找到爸爸
        * `this.parentNode.removeChild(this);`
        
6. replaceChild()
    * 例子
        * ![](file/10_replaceChild.html)
    * `父节点.replaceChild(新节点,oAB);` 
    
7. 节点克隆
    * cloneNode()
    * 克隆节点，参数true表示深度复制，节点里面的内容也会一同被复制
    * 复制之后的节点是个孤儿节点，所以也需要使用appendChild,insertBefore,replaceChild来添加到Dom树 
      
 