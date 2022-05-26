# Symbol&Set&Map
## Symbol
* ES6引入了一种新的原始数据类型Symbol, 表示独一无二的值。他是JavaScript语言的第七种数据类型，前六种是
    * Undefined
    * Null
    * 布尔类型(Boolean)
    * 字符串(String)
    * 数值(Number)
    * 对象(Object)
    
* 例如
    * `let s = Symbol(); typeof(s) `: symbol

* 可以用作对象的key
    ```
    var str = Symbol();
    var obj = {
        [str]: 10
    };
    ```

## es6中的Set
* Set是不能有重复项的数组， es6使用add方法添加元素
* 实例化的时候，能够直接传入数组，是数组去重的最好的方法
    ```
    let s = new Set([1, 2, 3,4, 1, 2, 3]);
    console.log(s);
    s = [...s]
    ```
* 数据去重的最快的方法
    ```
    let s = [1, 2, 1, 2, 3, 21, 4, 2];
    s = [...new Set(s)];
    ```
* size方法表示集合的长度

## ES6中的Map
* Map是可以用引用类型值当作key的对象。Map是映射的意思
    ```
    var xiaoming = {"name": "小明", "age": 12, "sex": "男"};    
    var xiaohong = {"name": "小红", "age": 13, "sex": "女"};
    
    var m = new Map([
        [xiaoming, "好的"],
        [xiaohong, "huaide"]
    ])
    
    m.set(xiaoming, "坏的")
    ```
