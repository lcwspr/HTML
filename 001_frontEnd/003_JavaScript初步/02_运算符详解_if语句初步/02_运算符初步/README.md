# 运算符
## 简介
* 运算符
    * 是发起运算的最简单形式
* 运算符分类
    1. 数学运算符
    2. 比较运算符
    3. 逻辑运算符
    4. 赋值运算符
    5. 按位运算符
    6. 条件(三元)运算符
    
## 数学运算符
1. 注意%是求余运算符
2. 要知道运算顺序，先乘除求余，在加减
3. 隐式类型转换
    ```
        // 隐士类型转换：就是没有写paresInt()，parseFloat()自己帮你转换格式
        console.log(3 * '8')        // 24
        console.log('3' * '8');     // 24
        console.log('48' / '2');    // 24
        console.log('24' % 55);     // 24
    ```
    * 数学运算中，纯数字的字符串，布尔值，null会被自动进行隐式转换
    * NaN和undefined会转换成nan
    * 加法比较特殊，因为+号同时是加法和连字符的符号，所以加法在面对字符串的时候是没有隐式转换
        ```
            console.log(3 + '8');         // 38
            console.log(3 + undefined)    // NaN
            console.log(3 + null)         // 3
            console.log(3 + true)         // 4
        ```
    * 总结
        * 算数运算符，在运算过程中，只要出现了undefined参与了运算，结果就是NaN,
        * 然后 '4',false, true,null都是能够进行隐式类型转换的
        * 加号比较特殊，在面对与字符串类型的时候是没有隐式类型转换的

4. 特殊计算
    ```
        Infinity + Infinity = Infinity
        Infinity - Infinity = NaN
        Infinity * Infinity = Infinity
        Infinity * 0 = NaN
        NaN 任意都是NaNcy  
    ```