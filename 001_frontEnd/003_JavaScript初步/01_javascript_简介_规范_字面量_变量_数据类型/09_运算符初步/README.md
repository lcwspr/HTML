# 运算符
* 运算符叫做operator, 也可以叫做操作符。
* 运算符有很多种，
    * 一元运算符
    * 二元运算符
    * 数学运算符
    * 逻辑运算符

## 算数运算符
* \+
    * 加法
* \-
    * 减法
* \*
    * 乘法
* /
    * 除法
* % 
    * 取余数
* ()
    * 用于提升算数优先级

* 例子
    ```
    // 下面的结果都是3
        console.log(1 + 2);
        console.log(8 - 5);
        console.log(1.5 * 2);
        console.log(12 / 4);
        console.log(13 % 5);	//13÷5=2……3 得几不重要，要的是余数
    ```
    * 取余数这个运算也是除，不过结果是余数
        ```
        // 取余数
            console.log(12 % 3);	//0
            console.log(121 % 11);	//0
            console.log(5 % 8);		//5
            console.log(8 % 5);		//3
            console.log(5 % 5);		//0
        ```
    * 默认的计算顺序
        * 先乘除后加减，乘除取余是平级，先遇见谁就算谁
        ```
            console.log(1 + 2 * 3);		//7
            console.log(1 + 2 * 3 % 3);	//1
            console.log(1 + 2 % 3 * 3);	//7
        ```
    * 我们可以用小括号来改变计算先后顺序，注意没有中括号和大括号，一律用小括号。
        ```
            var a = 4 * (3 + (1 + 2) * 3);
            alert(a);
        ```

## 特殊的运算
* 很多公司会考，考察对于面试的重视程度，因为这个知识一辈子也用不到
    ```
        console.log(Infinity * Infinity)    // Infinity
        console.log(Infinity / Infinity)    // NaN
        console.log(Infinity - Infinity)    // NaN
        console.log(Infinity + Infinity)    // Infinity
        
    ```
* 隐式的类型转换
    ```
        var a = '3' * 8;
        console.log(a);
    ```
* js 中的乘方               
    * 3 ^ 4
        * Math.pow(3, 4);
    * 这是一个新的API，记住就行了，后面的课程将会告诉你，Math是一个内置对象，pow是它的一个方法。
    * Math就是数学，pow就是power乘方。    
* 根号就是 Math.sqrt(x);       
        