# 作用域和暴露
1. js文件天生隔离作用域
    ```
    01.js
    test1.js
    ```
    * [test](file/01.js)
    * [show](file/test.js)
    * 结论
        * 在node.js中，每个js文件是单独的作用域，和dom浏览器开发不一样，
            * 在浏览器中，var a，a就自动成为window对象的属性，此时js文件和js文件可以共享作用域。
            * 在node中，每个js文件是铜墙铁壁，天生隔离作用域。
        
2. 使用exports.xx = xx的语法暴露
    * 例如
        1. 01.js
            ```
            var test = require("./test.js");
            console.log("我是01.js，我认识a么？" + test.a);
            console.log("我是01.js，我认识b么？" + test.b);
            console.log("我是01.js，我认识c么？" + test.c);
            
            var result = test.zonghe();
            console.log("总和是" + result);

            ```
        2. test.js
            ```
            var a = 100;
            var b = 200;
            var c = 300;
            
            exports.a = a;
            exports.b = b;
            exports.c = c;
            
            function zonghe(){
                return a + b + c;
            }
            
            exports.zonghe = zonghe;
            ```
    * 我们如果想要把变量或者函数向外面暴露，此时可以使用exports.***=***向外面暴露，此时引用这个模块的文件将使用等号来接受，等号左边的变量将会自动成为exports对象。上面的例子中，,var test这个变量就接受了exports对象。
    * 注意： 接收的变量和模块名尽量要有关系。而且要暴露的变量是什么，exports的属性名尽量叫做什么
    * 这种暴露非常好用，通常用于类似的功能向外暴露，比如数学函数：
    * 例子：
        ```
        // math-toos.js
        //求和函数，可以计算所有实参列表的和
        function sum(){
        var result = 0;
        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
        }
        
        //平均数函数
        function average(){
            var _sum = sum.apply(null,arguments);
            return _sum / arguments.length;
        }
        
        //平方函数
        function pingfang(a){
            return a * a;
        }
        
        //最大值函数
        function zuidazhi(){
            return Math.max.apply(null,arguments);
        }
        
        exports.sum = sum;
        exports.average = average;
        exports.pingfang = pingfang;
        exports.zuidazhi = zuidazhi;

        ```    
        
        
3. 使用module.exports暴露
    * 刚才我们一个js文件中向外暴露了多个东西，比如sum、average、pingfang等等。如果一个js文件中，仅仅向外暴露一个东西，此时用module.exports不方便，比如我们要向外暴露一个类。
    * 02.js
        ```
        var People = require("./People.js");
        var xiaoming = new People.People("小明","男",12);
        xiaoming.sayHello();

        ```
    * People.js
        ```
        function People(name,sex,age){
            this.name = name;
            this.sex = sex;
            this.age = age;
        }
        People.prototype.sayHello = function(){
            console.log("你好我是" + this.name);
        }
        exports.People = People;
        ```    
    * 调用函数的时候，要使用People.People()写法，非常的不方便。
    * 原因是，使用exports是因为认为可能会暴露很多东西。如果js文件中仅仅会暴露一个东西此时可以使用module.exports = xx的写法
    * 01.js文件改为
        ```
        var People = require("./People.js");
        var xiaoming = new People("小明","男",12);
        xiaoming.sayHello();
        ```
    * People.js文件的暴露语法改变了
        ```
        function People(name,sex,age){
            this.name = name;
            this.sex = sex;
            this.age = age;
        }
        People.prototype.sayHello = function(){
            console.log("你好我是" + this.name);
        }
        module.exports = People;
        ```
        * 如果使用这种暴露语法，那么此时module.exports等号右边的东西，将会自动传递给02.js中var接受的那个变量
        * 如果一个js文件要向外暴露多个变量，函数，那么此时exports.xx = xx; 如果仅仅暴露一个东西，通常是构造函数，那么此时的语法为`module.exports = xx;`
  