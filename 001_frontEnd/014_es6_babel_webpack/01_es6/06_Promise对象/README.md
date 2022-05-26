## ES6中的Promise对象
1. Promise的含义
    * Promise是异步编程的一种解决方案，比传统的解决方案--回调函数和事件--更合理和更加强大。她由社区最早提出和实现，ES6将其写进了语言标准中，统一了用法，原生提供了Promise对象。
        * 传统编程写异步函数，经常遇见回调套回调
    * 所谓Promise,简单说就是一个容器，里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果。从语法上说，Promise是一个对象，从他可以获取异步操作的消息。Promise提供统一的API,各种异步操作都可以用同样的方法进行处理。
    * Promise对象有以下两个特点
        1. 对象的状态不受外界影响。Promise对象代表一个异步操作
            * 有三种状态: Pending(进行中)， Resolved(已完成, 又称为Fulfilled)和Rejected(已失败)
            * 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。 
            * 这就是Promise这个名字的由来，他的英语意思就是承诺，表示其他手段无法改变
        2. 一旦状态改变，就不会在变，任何时候都可以得到这个结果。
            * Promise对象的状态改变，只有两种可能
                1. 从Pending变为Resolved
                2. 从Pending变为Rejected
            * 只要这两种情况发生了，状态就凝固了，不会再变了，会一直保持这个结果
                * 如果改变已经发生了，在对Promise对象添加回调函数，也会立即得到这个结果
                * 这与事件(Event)不同,事件的特点是，如果你错过他，再去监听，是得不到结果的
    * 有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数 。此外，Promise对象提供统一的接口，使得控制异步操作更加容易
    * Promise也有一些缺点。
        1. 首先无法取消Promise,一旦新建他就会立即执行，无法中途取消 
        2. 如果不设置回调函数，Promise内部抛出的错误，不会反映到外部
        3. 当处于Pending状态时，无法得知目前进展到哪一个阶段(刚刚开始还是即将完成)
    * 如果有些事件不断反复发生，一般来说，使用stream模式是比部署Promise更好的选择  
        
2. 基本用法
    * ES6规定，Promise对象是一个构造函数，用来生成Promise实例。    
    * Promise构造函数接受一个函数作为参数，该函数的两个参数分别为resolve和reject。他们是两个函数，由JavaScript引擎提供，不用自己部署
        * resolve函数的作用是，将Promise对象的状态从"未完成"到"成功"(Pending->Resolved),在异步操作成功时调用，并将异步操作的结果，作为参数传递出去
        * reject函数的作用是，将Promise对象的状态从"未完成"变成"失败"(从Pending变成Rejected),在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去    
        ```
        var promise = new Promise(function(resolve, reject){
            // ... some code
            if(/* 异步操作成功 */){
                resolve(value);
            }else{
                reject(error);
            }
        });
        ```
    * Promise实例生成后，可以使用then方法分别指定Resolved状态和Reject状态的回调函数
        ```
        promise.then(function(value)){
            // success
        }, function(error){
            // failure
        }
        ```
        * then方法可以接受两个回调函数作为参数，其中，第二个函数是可选的，这两个函数都接受Promise对象传出的值作为参数
            * 第一个回调函数是Promise对象的状态变为Resolved时调用
            * 第二个回调函数是Promise对象的状态变为Reject时调用
        
## 读取文件例子
1. 异步读取文件
    ```
    var fs = require("fs");
    function read(url){
        return new Promise(function(resolve,reject){
            fs.readFile(url,function(err,data){
                resolve(data.toString());
            });
        });
    }
    read("./test.txt")
    .then(function(data){
        console.log(data);
    })
    .then(function(){
        read("./test2.txt").then(function(data){
            console.log(data);
        });
    });
    ```
    * 无非就是将回调函数换了一种方法写出来了，原来一个异步函数是要传入callback的，但是现在一个异步函数可以返回一个Promise对象，此时就不需要传入callback了。.then().then().then()语法好看，简单清晰。

2. 异步加载图片
    ```
    function loadImageAsync(url){
        return new Promise(function(resolve, reject){
            var image = new Image();
            
            image.onload = function(){
                resolve(image);
            }
            
            image.onerror = function(){
                reject(new Error('Could not load image'))
            }
            image.src = url;
        })
    }
    
    loadPic("0.jpg").then(function(img){
        
    }, function(){
        alert("失败");
    })
    ```
    * Promise实例具有then方法，也就是说，then方法是定义在原型对象。then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。       


## Promise错误处理
* 异常语句如果在try...catch..中，不会终止程序的运行， 用来捕获错误，来进行错误处理操作
* 例如能力检测实现
    ```
    try{
        box.addEventListener("click", function(){
            alert("hahah")
        }, false);
    }catch{
        box.attachEvent("click", function(){
            alert("添加事件")
        })
    }
    ```
* try...catch不能捕获处理异步的异常
    ```
    try{
        setTimeout(function(){
            throw new Error("错误")
        }, 2000)
    }catch(exp){
        console.log("Error")
    }// BBB不能输出，控制台还是会报错
    ```
    ```
    setTimeout(function(){
        try{
            throw new Error("Error");
        }catch(exp){
            console.log("BBB");
        }
    }, 2000)
    ```
* Es6中提供了catch()方法表示捕获异常
    ```
    function getInfo(){
        return new Promise(function(resolve, reject){
            setTimeout(resolve, 2000);
        })
    }
    getInfo().then(function(){
        throw new Error("");
    }).catch(err => {
        console.log("catch the Error")
    })
    ```
## promise中的all方法
1. Promise.all方法接受一个数组作为参数，p1, p2, p3都是Promise对象的实例，如果不是，就会先调用下面的Promise.resolve方法， 将参数转为Promise实例，在进一步处理
    * 只有p1, p2, p3的状态都变成fulfill, p的状态才会变为fulfill
    * 只要有一个被rejected，就全都rejected

2. 例子
    ```
    var fs = require("fs");
    function getJson(url){
        return new Promise(function(resolve, reject){
            fs.readFile(url, function(){
                if(err){
                    reject(err);
                    return;
                }
                resolve(data.toString());
            });
        });
    }
    var arr = [1, 2, 3];
    var promises = arr.map(function(item){
        // item 会依次成为1, 2, 3
        return getJson("./test"+item+".txt");
    });
    // Promise.all(数组)表示数组中的Promise实例都执行完毕之后做的事情。all()函数也返回一个Promise对象，所以也可以调用then方法，then方法接受实参为posts，表示数组中所有的promise对象resolve的实参组成的数组。
    Promise.all(promises);  // 表示所有Promise都完成
    ```

## Promise.resolve()
* 有时候需要将现有对象转换为Promise对象，Promise.resolve方法就起到这个作用



## 小例子
```
再来一个例子，比如mongoose中可以封装一个Promise的静态方法：
userSchema.static.findById = function(id){
	var self = this;
	return new Promise(function(resolve,reject){
		self.find({id : id} , function(err,results){
			resolve(results);
		});
	});
}

中间件的调用：
exports.showStudentById = function(req,res){
	User.findById(id).then(function(results){

	});
}
```
     
        