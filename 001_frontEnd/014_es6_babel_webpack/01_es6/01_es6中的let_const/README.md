# es6

## es6简述
1. ecmascript 6于2015年6月正式发布，目标是使得JavaScript可以用于编写复杂的大型应用程序，成为企业级开发语言，又称为ES2015
2. ECMAScript 和 JavaScript的关系，前者是后者的规格，后者是前者的实现，符合ECMAScript规则的还有Flash中的ActionScript和TypeScript
3. 可以在NodeJS中测试ES6,或者使用Webpack + Babel将ES6翻译为ES5
    * node支持绝大多数es6语法
4. es6的细枝末节特别多，(因为大家知道js是一个千疮百孔的语言，所以es6在定稿的时候就特别的细致)，下面总结es6经常使用的，面试常考的es6语法

## es6中的let
* es5中只有var能够定义变量,作用域是在function
* es6中可以使用let来定义变量,它定义出的变量是块级作用域变量
    ```
    var arr = [];
    for(let i = 0; i < 10; i++){
        arr[i] = function(){
            console.log(i);
        }
    }
    arr[6]();   // 6
    ```
    * 比如循环语句中定义函数,此时如果使用var,那么会输出10而不是6,因为函数中的i是全局作用域的i,定义其他函数的时候,扰动了i的值.
    * 但是如果使用let定义,就相当于定义在了循环体中
        * 也就是除了循环体就没有定义了
* let变量,没有变量声明的提升
* let会引发暂时性死区(常考)
    ```
    var m = 10;
    function fun(){
        m = 20;
        let m;
        
        console.log(m);   
    }
    fun();   // 会报错
    ```
    * 当一个大括号内部出现let之后,相当于这个区域被let封死了
        * 不允许对变量m操作先于let声明存在
        * 必须先用let声明变量，在使用
    * 只要块级作用域内存在let命令，它所声明的变量就绑定(binding)这个区域，不再受到外部影响
        ```
        var tmp = 123;
        if(true){
            tmp = 'abc';  // ReferenceError
            let tmp;
        }
        ```
        * 上面代码中，存在全局变量tmp,但是块级作用域内let又声明了一个局部变量tmp,导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错
        * ES6明确规定，如果区块内存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭的作用域，凡是在声明之前就使用这些变量的，就会报错。总之，在代码块内，使用let声明变量之前，改变量都是不可用的，这在语法上面称之为 暂时性死区
    * 是一个特别好的特性，比如一个经典面试题
        ```
        var m = 10;
        function fun(){
            m = 10;
            var m = 30;
        }
        fun();
        console.log(m);  // 输出10，因为函数里面有变量声明的提升，所以改变的是局部变量m,没有改变全局变量m的值
        ```
    * 如果使用let会立刻报错，出现暂时性死区，不能对m在let之前操作。
 
 
## es6中的const
* 表示定义一个常量，不能更改
    ```
    const pi = 3.14;
    console.log(pi);
    pi = 333;       // 报错
    ```
    * 可以指向一个引用类型值，对这个引用类型值的操作是允许的，但是不能去指向别的引用指
        ```
        const arr = [1, 2, 3, 4];
        arr.push(6);
        console.log(arr);   // 指的是指向内存中固定的位置
        arr = []            // 报错， arr是常量
        ```   
    * 要冻结对象，可以使用Object.freeze()
        ```
        const arr = Object.freeze([1, 2, 3]);
        console.log(arr);
        arr.push(4);     // 报错，对象已经被冻结，但是只会冻结第一层
        ```
        ```
        const arr = Object.freeze({"a": 1, "b":2, "c": [1, 2]});
        // 数组是可以修改的
        arr.c.push("a");   // 能够成功压入，只能冻结一层
        ```
        
## 注意
* let和const出来的东西都不是window对象的属性