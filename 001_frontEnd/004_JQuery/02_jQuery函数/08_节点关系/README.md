# 节点关系
## 原生js中的nodeType nodeName nodeValue
1. 例如
    ```
    <div id="box">
    
        <!--我是注释-->
        <p>ppp<span>ppp</span></p>
    </div>
    ```
    * 其实不光标签是一个节点，注释，文本也是一个节点
    
2. 节点类型属性
    * 节点类型属性可以用来区分不同类型的节点，比如元素，文本，注释    
        * 节点类型
            1. Node.ELEMENT_NODE
                * 一个元素节点
                * 1
            2. Node.TEXT_NODE
                * 一个文本节点
                * 3
            3. Node.COMMENT_NODE
                * 一个comment节点
                * 5
            4. Node.DOCUMENT_NODE
                * 一个document节点
                * 9
            5. Node.DOCUMENT_TYPE_NODE
                * 描述文档类型的Document_Type节点，就是DOCTYPE
                * 10
        * 任何html元素都有nodeType属性值为1~11
    * 例子
        1. 一个任意的节点
            ```
            var box = document.getElementById("box");
            alert(box.nodeType);
            ```
        2. 一个结构
            ```
            <div id="box">文本<p></p></div>
            var box = document.getElementById("box");
            alert(box.nodeType);   // 1
            alert(box.childNodes[0].nodeType)  // 3
            alert(box.childNodes[1].nodeType)  // 1
            ```
        3. document_Node
            ```
            alert(document.nodeType);  //9
            ```
3. nodeName和nodeValue
    * nodeName返回当前节点的节点名称，对于元素节点，nodeName中保存的始终都是元素的标签名，而nodeValue的值始终都是null

## 节点关系
1. 概述
    1. 节点间关系可以使用传统的家族关系来描述，相当于家族树
    2. 子元素，父元素，同胞元素
    3. 每个节点都有一个childNodes属性，他是一个类数组对象，用于保存一组有序的节点，可以通过item()方法或者方括号来访问这些节点。
        * 注意，这个属性的值，是动态的，一次获取，随节点变化的改变而改变，并不是一个快照
    4. firstChild属性，lastChild属性
    5. hasChildNodes()比检查childNodes.length属性要方便
    6. 每一个节点都有一个parentNode属性，指向文档树中的父节点
    7. previousSibling, nextSibling同胞节点

2. 任何节点都有childNodes属性，是一个类数组对象，存放着所有自己的儿子。
    * 注意，有重大兼容性问题
        * 结构
        ```
            <div id="box">
                <p></p>
            </div>
        ```
        * chrome，IE9,IE10 会将折叠的空行也当作是一个文本节点，如`box.childNodes[0].nodeType  // 3`             
    * 所以为了没有兼容性问题
        1. 需要遍历节点的时候，HTML结构就不能由空格
        2. 重新筛选所需要的元素节点,放弃原有的数组
            ```
            var childs = [];
        	for(var i = 0 ; i < box.childNodes.length ; i++){
        	 	if(box.childNodes[i].nodeType == 1){
        	 		childs.push(box.childNodes[i]);
        	 	}
        	}
        	 childs[1].style.background = "red";

            ```
    * firstChild属性、lastChild属性： 也不好用，IE6、7、8认为firstChild是节点， 而Chrome认为firstChild是空文本
    * 题目
        ```
        <div id="box">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
        ```   
        * `document.getElementByid("box").childNodes.length`  
            * 高级浏览器是9， 低级是4

3. 父亲节点
    * 注意childNodes儿子可以有很多，parendNode父亲只有一个
        * `某个元素.parentNode`
        
4. previousSibling, nextSibling
    * 上一个同胞兄弟，下一个同胞兄弟
    * 需要注意的是有一个兼容性问题，对于文本节点的定义不同
        ```
        <div id="box">
            <p>AAA</p>
            <p>BBB</p>
            <p>CCC</p>
            <p>DDD</p>
        </div>
        ```    
    * `ps[2].previousSibling   //低级浏览器就是BBB那个p，高级浏览器是空文本节`     
    * 如果想让CCC之前的所有节点背景都变为红色
        ```
        var prev = xiaoming;
	 		while((prev = prev.previousSibling) != null){
	 			if(prev.nodeType == 1){
	 				prev.style.background = "red";
	 			}
	 		}
        ```
            