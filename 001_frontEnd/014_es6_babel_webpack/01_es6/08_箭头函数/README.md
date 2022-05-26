# 箭头函数
## 小尝试
1. 初步认识
    ```
    var sum = (a, b) => {
        return a + b;
    }
    var s = sum(10, 20);
    console.log(s);
    ```
2. 如果函数体中只有一条语句，此时不需要写大括号，也不需要写return
    * `var sum = (a, b) => a + b;`
3. 任何需要出现函数的地方都可以出现箭头
    ```
    let arr = [23, 12, 43, 32, 48, 32, 34];
    arr.forEach((item) => {
        if(item % 2 == 0){
            console.log(item);
        }
    })
    ```
    ```
    var arr = [2, 3, 52, 3, 843];
    var fun = (a, b, ..c){
        console.log(a, b, c)
    }
    ```
## 注意事项
1. 注意事项
    1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
    3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。 
    4. 不可以使用yield，不能做生成器函数
2. 解析
    1. 通常函数的this在定义函数的时候是不知道指代谁，要看如何调用。
        ```
        function fun(){
            console.log(this.a);
        }
        var obj = {
            a: 100,
            f: fun
        }
        obj.f(); 
        ```
    2. 但是箭头函数的this在定义函数的时候就能够确定
        ```
        var fun = ()=>{
            console.log(this.a);
        }
        var obj = {
            a: 100,
            f: fun
        }
        obj.f()             // undefined
        obj.f.call(obj);    // undefined    
        ```
        ```
        a = 800;
        var obj ={
            a: 100,
            b: () =>{
                console.log(this.a);
            }
        }
        var obj2 = {
            a: 400
        }
        obj.b();            // 800
        obj.b.call(obj2);   // 800
        obj.b.apply(obj2);  // 800
        ```
    3. 会去上层作用域找this
        ```
        function foo(){
            return () => {
                return () => {
                    return () => {
                        console.log('id:', this.id);
                    };
                };
            };
        }
        var f = foo.call({id: 1});
        var t1 = f.call({id: 2})()();   // id: 1
        var t2 = f().call({id: 3})();   // id: 1
        var t3 = f()().call({id: 4});   // id: 1
        ```
3. bind函数，固定函数的上下文， 不管如何调用函数，上下文都不会改变




















