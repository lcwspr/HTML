# 变量的类型
## 概述
* JavaScript中的值，无论是字面量还是变量，都有明确的类型
* 基本类型有5种
    1. Number 
        * 数字类型
    2. String 
        * 字符串类型
    3. undefined 
        * undefined类型，变量未定义时的值，这个值自己是一种类型
    4. Boolean 
        * 布尔类型，仅仅有两个值true,false,
    5. null
* 引用类型
    * 数组
    * 函数
    * 正则表达式
    * 各类对象。。。
    
## typeof关键字
* 用于检测一个变量的类型
* 数字类型
    ```
    //下面定义的变量都是number类型
        var a = 100;
        var b = 234243245345;
        var c = -345345435435;
        var d = 345.3245234;
        var e = .5e6;
        var f = 0xff;
        var g = 017;
        var h = Infinity;
        var i = NaN;
        
        console.log(typeof a);
        console.log(typeof b);
        console.log(typeof c);
        console.log(typeof d);
        console.log(typeof e);
        console.log(typeof f);
        console.log(typeof g);
        console.log(typeof h);
        console.log(typeof i);
        都为数字类型
    ```
    * js中所有的数字都是number类型的，不在细分为整形int,浮点型float这些东西。
    * number 类型的东西：所有数字(部分正负，不分浮点，不分大小，不分进制)、Infinity、NaN
* String类型   
    ```
        //以下都是字符串类型的
            var m1 = "哈哈";
            var m2 = "123";	
            var m3 = "";		//空字符串，也是字符串
            console.log(typeof m1);  // string
            console.log(typeof m2);  // string
            console.log(typeof m3);  // string
    ```
    * 注意，这个变量是什么类型，和赋的值有关系，和定义的时候没有关系。定义的时候，都是使用var关键字定义的。`var a;`
    ```
        var mm = 123;
        console.log(typeof mm);  // number
        mm = 'haha';
        console.log(typeof mm);  // string  改变类型是合法的
    ```
    * 我们说js这个语言叫做动态数据类型，原因就在这，就是赋值的时候决定这个变量的类型，甚至可以改变这个变量的值为其他类型的值。变量的类型是自动检测的，而不是规定的
    * 也就是说，变量是无类型的，值是有类型的，变量可以引用任何类型的值
    
## undefined 类型
```
    var nn;
    console.log(nn);
    console.log(typeof nn);
    
```   
* 之前说过，一个变量只var过，没有赋过初始值，他的默认值就是undefined
* 这个undefined是自成一家的，自己是自己的类型，他的类型也叫作undefined,所以说，undefined类型的值就只有undefined一个

## Boolean 类型
* 有两个值，true,false代表真和假
* 用于进行逻辑判断

## null 类型
* 代表空对象指针，所有想要赋值的对象还没有赋值，都应该手动赋值null.

## 一个运算符 +
* 加号是一个运算符，我们先提前说一下。
* 加号两边都是数字的时候，那么就是数学加法；两边不都是数字的时候，那么就是连字符，结果是字符串。
    * `console.log("你" + "好");` // 你好
    * `console.log(1 + "2");`    // 12
        * 因为2被引号引起来了，所有就是字符串，所以+就是连字符
    ```
        var a = "1";
        var b = "2";
        console.log('a' + 'b') // ab   就是两个字符串连接
        console.log(a + b);   // 12
    ```
    ```
        var a = 1;
        var b = 2;
        console.log("a" + b);	//a2  注意 这个'a'根本就不是变量
    ```
    * 多个加号，从左到右计算
        ```
           var a = 1;
           var b = 2;
           var c = 3;
        console.log("a" + a + b + "c");  // a12c
        ```
    * 注意，多个加号，从左到右，依次计算
        ```
            var a = 1;
            var b = 2;
            var c = 3;
            console.log(a + b + "c")   // 3c
        ```