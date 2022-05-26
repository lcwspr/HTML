# 循环语句
## break语句
* 使用break语句来终止循环，switch,或者是链接到label语句， 当你使用不带label的break时，他会立即终止当前所在的while, do-while, for或者switch并把控制权交给这些结构后面的语句
* 当你使用带label的break，他会终止指定的标记(label)的语句
    ```
    outer: for(var i = 1; i <= 10; i++){
        for(var j = 1; j <= 10; j++){
            if(j == 5){
                break outer
            }
        }
    }
    ```
## continue
* 跳过本次迭代的剩余语句，继续执行下一次迭代
* 同样： continue只能中断当前最内层的循环，想要中断外层循环需要加label
* 例题
    1. 寻找100内的所有质数
        ```
        outer: for(var i = 2; i <= 100; i++){
            for(var j = 2; j < Math.sqrt(i); j++){
                if(i % j == 0){
                    continue outer;
                }
            }
            console.log(i);
        }
        ```
## do while 语句
1. 语法格式
    ```
    var i = 1;
    do{
        console.
        log(i++);
    }while(i <= 100)
    ```
    * 程序一开始就会执行一次语句，然后验证条件是否为真(也就是说会至少执行一次)
2. 使用条件 
    * 当不明确直到语句要执行的次数的时候
    
    
## while
* 和do while语句一样，不过是先进行条件的验证
* 随机数: Math.random(),会生成一个`[0,1)`区间的数字
    * Math.pow
    * Math.sqrt
    * Math.PI
* 生成固定范围的随机数
    1. `[0, 8)`的随机数，能够取到0，但是不能够取到8
        * `parseInt(Math.random() * 8)`
    2. `[3, 11)`的随机数，能够取到3， 但是取不到11
        * `parseInt(Math.random() * 8) + 3`
    3. `[3, 11]`的随机数，都能够取到
        * `parseInt(Math.random() * 9) + 3`
    4. 如果想要在`[a, b]`闭区间取到随机数，
        * `parseInt(Math.random() * (b - a + 1)) + a`
      