# 面向对象的好处
* 面向对象能够解决什么问题? 
    * 让一个气球运动--面向过程
        ```
        var top = 600;
        setInterval(function(){
            top -= 2;
            oDiv.style.top = top + 'px';
        }, 30);
        ```
    * 让三个气球运动？  -- 面向过程
        ```
        var top1 = 600;
        var top2 = 600;
        var top3 = 600;
        
        setInterval(function(){
            top1 -= 2;
            top2 -= 4;
            top3 -= 6;
            if(top1 < 0){}
            if(top2 < 0){}
            if(top3 < 0){}
            ....
        })
        ```
        *　这种编程风格就是保姆式，什么都要操心，看看自己的每个气球有没有小于０，如果小于0...
        * 函数编程思维，注重的是情况的检测，每种情况做什么
        
* 面向对象
    ```
    function Balloon(){
        
    }
    Ballon.prototype.fly = function(){
        var self = this;
        this.timer = setInterval(function(){
            self.top -= 2;
        }, 20)
    }
    ```
    * 面向对象就是让每个对象有智商，教会他们每件事情怎么做，教会他们自己判断自己的处境，要做什么事情，不需要我们一个个操心了。
    * 就是把信号量绑给自己的过程，面向对象的思维注重的是每个对象的能力