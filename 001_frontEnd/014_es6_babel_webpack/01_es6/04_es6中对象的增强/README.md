# ES6中对象的增强
1. 如果kv一致可以省略v
    ```
    let a = 100;
    let obj = {
        a,
        b: 200,
        c: 300
    };
    ```
2. 属性名表达式
    ```
    var str = "name";
    var obj = {
        [str]: "小明",
        age: 10,
        sex: '男'
    }
    ```
    * 对象的键也可以使用变量了
    
3. 对象合并语法
    ```
    var target = {a: 1};
    var s1 = {b : 2};
    var s2 = {c : 3};
    Object.assign(target, s1, s2);
    ```
    * 冲突的项，以后面的为准
4. 得到对象的所有的键
    ```
    var obj = {"a": 1, "b": 2, "c": 3};
    console.log(Object.keys(obj));
    // 返回键的数组
    ```
5. 拓展运算符
    ```
    let z = {a: 3, b: 4};
    let n = {...z};     // n = {a: 3, b:4}
    ```
    * 例子： 想要拿所有的属性，只改变一个
        ```
        var obj = {
            "a": 1, 
            "b": 2,
            "c": 3
        }
        ```
6. 增加了数组的遍历方法
    ```
    arr = [1, 2, 3, 4, 5]
    for(let i of arr){
        console.log(i);
    }
    ```
