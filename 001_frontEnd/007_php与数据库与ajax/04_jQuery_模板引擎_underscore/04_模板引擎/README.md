# 模板引擎
1. 拼接字符串非常不爽，还非常容易出错，所以就有工程师在大量的实践中，提出了模板引擎的概念，就是在一个完整的字符串中，把未定的量使用特殊的语法来表示，然后把数据替换这些标记，这个操作叫做数据绑定
    * `@name@`
    1. 模板引擎原理
        * [source](file/01_template_show.html)
    2. 模板原理
        * [source](file/)
        
2. 模板
    * 模板一般都会放在页面的`<script type="text/template"></script>`, 标签对里面，字典都是从Ajax读取过来的
    ```
    s = s.replace(/@([a-z]+)@/g, function (match, $1, startIndex, originString) {
            console.log(match, $1, startIndex, originString);
            return dict[$1];
        });
    ```

3. 使用
    * [模板的使用](file/03_模板使用.html)
    * [字典修正原理](file/04_字典修正原理.html)
    
    
        