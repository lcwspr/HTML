# json处理
* 之前讲的事情都是发请求，对于前端来说，主要就是
    1. 准确的发送请求
    2. 根据收到的请求进行处理
* 注意： 接收到的东西永远是string,无论多么像是json
    
## 字符串转换为json
1. 方法1: eval语句
    * eval语句，eval语句很神奇，能够识别字符串，并且把字符串当作js语句执行。
    * eval -> `evaluate 评价`
    * 先说eval是什么
        ```
        var a = "alert(1+2+4);";
        eval(a);
        ```
        * 一个字符串被eval之后，能够把字符串当作语句来执行
    * 回到ajax，data是一个string,可以使用eval转换为json,但是需要注意的是，json需要先通过圆括号的拼接，变为表达式
  
    
2. 方法2： 使用new Function()的奇淫技巧
    ```
    var data = new Function("return " + data)();
    console.log(data);
    ```
    * 说白了，我们之前定义函数的时候使用的是函数的字面量，实际上能够通过new Function()来定义一个函数，
    * 说白了，我们之前定义函数的时候使用的是函数的字面量，实际上能够通过new Function()来定义一个函数，
    * 也就是说，new Function也有一个功能，就是把字符串当作语句执行
    
3. 方法3： json.parse内置函数
    * `var dataJson = JSON.parse(data);`
        * ie6
    * JSON对象注意，不是一个构造函数，就是一个内置对象，这个对象有两个方法
        1. JSON.parse() : 字符串->JSON
        2. JSON.stringify : JSON->字符串
    * 兼容性处理
        * 老道，JSON作者帮我们写了一个 shim,shim就是桌脚垫，计算机世界中指的就是，计算机本身没有这个功能，但是可以利用现有功能模拟一个这种功能。
        * `https://github.com/douglascrockford/JSON-js`
