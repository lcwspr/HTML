# instanceof 运算符
* 类在英语里面叫做class,实例在英语里面叫做instance.
* instanceof运算符 `A instanceof B` ，验证A是不是B的实例

* 例子
    ```
    // 类，构造函数
    function Dog(){
    }
    // 实例化一个对象
    var d = new Dog();
    // 验证d是不是Dog的实例
    console.log(d instanceof Dog)
    ```
* 例二
    ```
    // 类构造函数
    function Dog(){}
    function Cat(){}
    Cat.prototype = new Dog();    // 继承
    var hellokitty = new Cat();   // 通过Cat来实例一个
    
    console.log(hellokitty.constructor);
    console.log(hellokitty instanceof Dog);
    console.log(hellokitty instanceof Cat);
    ```

* 说明
    * instanceof运算符的机理： 遍访hellokitty这个对象原型链上的每个原型对象，如果遍访到的原型对象是某个构造函数的prototype,那么就认为hellokitty是这个类型的实例
    
## 一些小坑
```
    var arr = []; console.log(typeof arr);
    var obj = {}; console.log(typeof obj);
    var reg = []; console.log(typeof reg);
```
* 使用instanceof运算符能够轻松解决数组的识别问题：
    ```
    var arr = []; console.log(arr instanceof Array);
    ```
    * 或者使用EcamScript 5的方法Array.isArray();
* 总结一些，A instanceof B,不能证明A是new B()出来的，因为可能是继承    
    
    
    