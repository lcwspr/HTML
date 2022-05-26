# class
## demo
* 注意： 语法换了，但是构造函数，构造函数的原型，实例的关系还是原来的样子
    * 底层还是prototype那套东西，也就是说构造函数还是存在的，只不过写在了class里面的constructor里面了，window还是有一个Prople函数属性
    * People函数还是有prototype，我们写的成员函数还是在prototype上面
```
class People{
    constructor(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    
    syaHello(){
        console.log(`你好， 我是${this.name}, 今年${this.old}`;)
    }
}
```
## 继承
* 学生是人，所以学生类继承人类，学生类比人更具体，属性更多
* demo
    ```
    class People{
        constructor(name, age, sex){
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        sayHello(){
            console.log(`hello, 我是${this.name}, 今年${this.age}岁`)
        }
    }
    
    class Student extents People{
        constructor(name, age, sex, xuehao, banji){
            super(name, age, sex);
            this.xuehao = xuehao;
            this.banji = banji;
        }
        xuehao(){
            console.log(`我是${this.name}, 我正在学习, 我是${this.xuehao}`)
        }
    }
    var mingming = new Student("mingmign", 12, "男", 1000, "一班级")
    ```
* 老的继承: 事实上es6中也是这个机理
    ```
    function People(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    
    People.prototype.sayHello = function(){
        console.log("我是"+this.name);
    }
    
    function Student(name, age, sex, xuehao, banji){
        this.name = name;
        this.age = age;
        this. sex = sex;
        this.xuehao = xuehao;
        this.banji = banji;
    }
    Student.prototype = new People();
    Student.prototype.xuexi = function(){
        console.log(`我是${this.name}, 我正在学习, 我是${this.xuehao}`)
    }
    ```
