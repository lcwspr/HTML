# jQuery节点操作
1. 添加操作
    * 父亲.append(儿子)
    * `$("#box").append("<p>么么么</p>")`
    * 其实就是使用innerHTML添加的
    * 特别的
        * 如果我们想要先创建一个孤儿节点，给这个孤儿节点加样式，监听，动画，都是可以的，那么创建孤儿节点也是使用$()函数，$函数不仅仅能选择页面上的节点，还能够创建孤儿节点

2. 儿子加到父亲
    * `$("<p>mememem</p>").appendTo($("#box"));`    
         
3. 在第一个儿子添加
    * `$("#box").prepend("<p>hello world</p>");`
    * `$("<p>ewjofewj</p>").prependTo($("#box"))`

4. 在每一个兄弟元素后插入
    ```
        <div id="box">
            <p>哈哈</p>
            <p>嘻嘻</p>
        </div>
    ```
    * 执行代码
        * `$("p").after("<h3>ewjioeioej<h3>")`        
        
5. 在每一个兄弟前插入
    * before()

6. 在指定位置插入(insertBefore, insertAfter)
    * `$("<p>么么么</p>").insertBefore($("p")[2])`
            
7. 分别包裹起来
    ```
        <a href="">hahah</a>
        <a href="">hahah</a>
        <a href="">hahah</a>
    ```   
    * `$('a').wrap("<span></span>")`     

8. 包裹在一个里面
    ```
        <a href="">hahah</a>
        <a href="">hahah</a>
        <a href="">hahah</a>
    ```   
    * `$('a').wrapAll("<span></span>")` 
        
   
9. 替换
    * `$('a').replaceWith("<span></span>");`     
        
10. empty()
    * `$("p").html('')`      
        
11. remove()
    * 删除自己
    
12. clone()
    * 克隆方法
    * 克隆匹配的DOM，一个布尔值指示事件处理函数是否被复制
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        