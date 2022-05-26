# 对象与属性
## in 运算符
* 返回一个布尔值，表示这个属性是不是对象的属性
    ```
    var obj = {
        a: 1,
        b: 2,
        c: false
    }
    console.log("a" in obj)   // true
    console.log("b" in obj)   // true
    console.log("c" in obj)   // true
    console.log("d" in obj)   // false
    
    obj.__proto__ = {d: ""hello}
    console.log("d" in obj)   // true
    
    ```
    * in 不仅仅是检测自己有没有这个属性，如果原型链上有这个属性，那么也会返回true，整个原型链上没有这个属性返回false
    * for in 遍历会遍历原型链上所有的属性
        ```
        for(var k in obj){
            console.log(k);
        }
        ```
        * 会遍历所有的可枚举的属性，默认的属性 比如constructor属性就都是不可枚举的。也就是for in能够把程序员手动添加的属性罗列出来，要注意：罗列的不仅仅是自己身上的属性，还有原型链上的所有属性

## hasOwnProperty方法
* 这个方法定义在了Object.prototype对象上面，所以任何一个Object上面都拥有这个方法，会返回false, true, 表示自己身上是不是有这个属性
    ```
    for(var k in obj){
        obj.hasOwnProperty(k) && console.log(k);
    }
    ```
    * 罗列自己身上的属性输出
    
## 对象直接打点验证
* 可以通过值是否是undefined来验证， 会遍历原型链，
* 会有误会，如果一个属性的值就是undefined那么就会出现无法判断的情况
        
       