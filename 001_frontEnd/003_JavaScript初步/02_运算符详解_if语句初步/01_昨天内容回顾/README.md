# 复习
## JavaScript 书写环境
* \<script>标签
    ```
        <script type = "text/javascript">
            
        </script>
    ```
* alert()函数，一个系统提供的api.用于弹出警告框
    * alert('hello world');
* 控制台，快捷键f12,console就是用来检测程序有没有错误的
    * console.log('你好');
    * 两种常见错误
        * SyntaxError  语法错误
            * 比如符号是中文的
        * ReferenceError 引用错误
            * 比如变量没有声明
## 直接量
* 数字的直接量
    * 数字
    * NaN
    * Infinity
* 数字直接量的特点
    * 有很多进制
        ```
            15
            017
            0O17
            0o17
            0xf
        ```
    * 浮点数有很多种表示
        ```
            0.04
            4e-2
            0.4e-1
            .4e-1
        ```
        * 注意
            * 6 / 0 是Infinity
            * 0 / 0 是NaN
* 字符串直接量： 单引号或者双引号
    ```
        'hello'
        "hello"
        ''
    ```

## 变量
* 变量的命名规则，变量的命名开头必须是字母、美元符号、下划线、后续的可以有字母、美元符号、下划线、数字；换句话说，不能够以数字开头，不能有怪异符号，不能是保留字或关键字
* 变量的定义，或者叫做变量的声明，使用var
    `var a = 100`
    * var 一次以后，就可以不用var了。可以用逗号隔开多个变量同时声明 `var a = 100, b = 200;`
* js中变量声明可以提升，也就是说，可以先使用变量，然后再声明，
    ```
        a = 100;
        var a;
    ```
* 一个变量如果仅仅var了，但是没有赋值，默认的值是undefined
* 变量的类型实际上就是所有值的类型
* 基本类型，实际上就是所有值的类型
    1. number 
        * 数字、NaN、Infinity
    2. string 
        * 字符串
    3. undefined
        * 只有一个值，就是undefined
    4. null 
        * 只有一个值，就是null
    5. boolean
        * 只有两个值true和false
* 引用类型
    * 数组
    * 函数
    * 各种对象。。

## 变量类型检测
* 使用typeof能够检测值的类型
* parseInt、parseFloat
    * parseInt
        ```
            parseInt(3.988)        // 3
            parseInt('3年3月')      // 3
            parseInt('哈哈3年3月')   // NaN
        ```
        * 能够解析各类进制的字符串，就算是数字也会转换成字符串在计算
        ```
            parseInt('0xf', 16);    // 15
            parseInt(0xf, 16);      // 21
        ```
    * parseFloat
        * 解析字符串中的浮点数，没有进制转换功能，不能写第二个参数

## 数学运算符
* \+ \- \* / %
* % 叫做求余数，也有的书上叫做求模
    ```
        100 % 10    // 0
        15 % 5      // 0
    ```
* 运算顺序
    * 先乘性的，然后是加性的
    * 可以使用小括号改变运算顺序()
