# 应用场景
* 在共性中有某个元素有特性
* 案例演示
    ```
        比如，现在想让所有的li都是一个颜色，但是就第一个li颜色不同：
            <div class="nav">
                <ul>
                    <li class="no1">网站栏目</li>
                    <li>网站栏目</li>
                    <li>网站栏目</li>
                    <li>网站栏目</li>
                    <li>网站栏目</li>
                    <li>网站栏目</li>
                    <li>网站栏目</li>
                </ul>
            </div>
        正确写法：(尽量只这样写，可读性高)
            <style type="text/css">
                .nav ul li{   ← 先给所有人设置一个颜色
                    color:blue;
                }
                .nav ul li.no1{   ← 再给这个人单独设置一个
                    color:red;
                }
            </style>
            
    ```
* 总结
    * 如果想让一个特性层叠掉共性的内容，那么这个特性的选择器的前半部分一定要和共性的相同
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
