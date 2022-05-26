(function () {
    // 只接受一个参数，JSON类型的参数

    window.Slider = function(argsJSON) {
        // 参数检验
        if(!argsJSON.ID){
            throw new Error("对不起，传入的参数中必须要有ID");
        }

        this.carousel = document.getElementById(argsJSON.ID);  // 最大的盒子
        // 创建Dom
        this.init();

        // 得到自己的Dom元素
        // init一般用于创建dom使用
        this.leftBtn = this._findMyElemsByClassName("leftBtn");
        this.leftBtn = this.leftBtn.length ? this.leftBtn[0] : null;

        this.rightBtn = this._findMyElemsByClassName("rightBtn");
        this.rightBtn = this.rightBtn.length ? this.rightBtn[0] : null;

        this.imageList = this._findMyElemsByClassName("imageList")[0];
        this.imageLis = this.imageList.getElementsByTagName("li");
        this.circle = this._findMyElemsByClassName("circles")[0];
        this.imageLength = this.imageLis.length;
        this.circleLis = this.circle.getElementsByTagName("li");

        // 定时器间隔时间
        this.interval = argsJSON.interval || 20;

        // 自动播放时间
        this.autoplayInterval = argsJSON.autoplayInterval || 2000;

        // 缓冲公式
        // 用户可以传递进来，也可以不传进来使用默认的
        this.tween = argsJSON.tween || function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        };

        // 信号量
        this.idx = 0;

        // 定时器
        this.timer = null;       // 负责运动的动画
        this.autoTimer = null;   // 负责轮播的动画

        // 绑定监听
        this._bindEvent();

        // 自动运行
        this._autoplay();


    };

    Slider.prototype.init = function(){
        this.carousel.innerHTML = ["<div class='imageList'>",
            "    <ul>",
            "        <li class='first'><a href='#'><img src='../../../../999_img/dog/0.jpg' alt=''></a></li>",
            "        <li><a href='#'><img src='../../../../999_img/dog/1.jpg' alt=''></a></li>",
            "        <li><a href='#'><img src='../../../../999_img/dog/2.jpg' alt=''></a></li>",
            "        <li><a href='#'><img src='../../../../999_img/dog/3.jpg' alt=''></a></li>",
            "        <li><a href='#'><img src='../../../../999_img/dog/4.jpg' alt=''></a></li>",
            "    </ul>",
            "</div>",
            "<div class='circles'>",
            "    <ol>",
            "        <li class='current'></li>",
            "        <li></li>",
            "        <li></li>",
            "        <li></li>",
            "        <li></li>",
            "    </ol>",
            "</div>"].join("");
    };

    Slider.prototype._bindEvent = function(){
        // 按钮 小圆点
        var self = this;

        if(this.leftBtn != null){
            this.leftBtn.onclick = function () {
                self._prev.call(self);
            };
        }

        if(this.rightBtn != null){
            this.rightBtn.onclick = function () {
                self._next.call(self);
            };
        }


        for(var i = 0; i < this.circleLis.length; i++){
            this.circleLis[i].index = i;

            this.circleLis[i].onclick = function () {
                self._goto(this.index);
            }
        }

        // 当鼠标进入的时候，去除timer2的监听
        this.carousel.onmouseover = function () {
            clearInterval(self.autoTimer);
        };
        // 鼠标离开的时候重新设置
        this.carousel.onmouseout = function () {
            self._autoplay();
        };
    };



// 这个方法是函数自己的方法，函数自己内部使用的方法，外部不用实例来调用
// 习惯上这种内部使用的方法要加上_开头
    Slider.prototype._findMyElemsByClassName = function (className) {
        var arr = [];
        // 先得到这个元素的所有后代，然后筛选
        var elems = this.carousel.getElementsByTagName("*");

        // 遍历所有的后代，看看谁有这个类名就返回
        var reg = new RegExp("\s*"+ className + "\s*", "g");

        for(var i = 0; i < elems.length; i++){
            if(elems[i].nodeType === 1 && elems[i].className.indexOf(className) !== -1){
                arr.push(elems[i]);
            }
        }

        // 返回的是数组。即使只有一个结果，也返回的是数组
        return arr;
    };


    /*
        第一种函数截流的方式    lock
        第二种函数截流的方式    if(:animate)
        第三种函数截流的方式


     */

// 切换为下一张图片
    Slider.prototype._next = function () {

        // 函数截流，
        if(this.timer){
            return;
        }
        var oldidx = this.idx;
        this.idx ++;
        if(this.idx > this.imageLength - 1){
            this.idx = 0;
        }

        // 这里最神奇的是，不需要瞬移就位，因为我们内部的_animate函数指定了初始位置所以会依据初始位置计算每一帧该位于那个位置
        this.animate([
            {
                "obj": this.imageLis[oldidx],
                "start": 0,
                "target": -560,
            },
            {
                "obj": this.imageLis[this.idx],
                "start": 560,
                "target": 0,
            }
        ], 1000);

        this._changeCircle();
    };


    Slider.prototype._prev = function () {

        if(this.timer){
            return;
        }
        var oldidx = this.idx;
        this.idx --;
        if(this.idx < 0){
            this.idx = this.imageLength - 1;
        }

        // 这里最神奇的是，不需要瞬移就位，因为我们内部的_animate函数指定了初始位置所以会依据初始位置计算每一帧该位于那个位置
        this.animate([
            {
                "obj": this.imageLis[oldidx],
                "start": 0,
                "target": 560,
            },
            {
                "obj": this.imageLis[this.idx],
                "start": -560,
                "target": 0,
            }
        ], 1000);
        this._changeCircle();

    };

// 跳转到某个图片去
    Slider.prototype._goto = function (num) {

        if(this.timer){
            return;
        }

        // 记录老的信号量， 更新新的信号量
        var oldidx = this.idx;
        this.idx = num;

        // 这里最神奇的是，不需要瞬移就位，因为我们内部的_animate函数指定了初始位置所以会依据初始位置计算每一帧该位于那个位置

        if(this.idx > oldidx){
            this.animate([
                {
                    "obj": this.imageLis[oldidx],
                    "start": 0,
                    "target": -560
                },

                {
                    "obj": this.imageLis[this.idx],
                    "start": 560,
                    "target": 0
                }
            ], 1000);
            console.log("big");

        }else if(this.idx < oldidx){
            this.animate([
                {
                    "obj": this.imageLis[oldidx],
                    "start": 0,
                    "target": 560,
                },
                {
                    "obj": this.imageLis[this.idx],
                    "start": -560,
                    "target": 0,
                }
            ], 1000);
            console.log("small");

        }

        this._changeCircle();

    };




// 简易的运动框架，只能更改obj的style.left属性，改不了别的属性
    Slider.prototype.animate = function (arr, time) {

        // 备份自己的this.
        var self = this;

        // 当前帧编号
        var currentFrame = 0;

        // 总帧数
        var maxFrame = parseInt(time / this.interval);

        // // 变化量
        // var delta = target - start;


        // 设置表先关
        clearInterval(this.timer);
        // 定时器
        this.timer = setInterval(function () {
            // 帧数+1
            currentFrame ++;
            if(currentFrame >= maxFrame){
                clearInterval(self.timer);
                self.timer = null;
            }
            // 改变
            for(var i = 0; i < arr.length; i++){
                var delta = arr[i].target - arr[i].start;
                arr[i].obj.style.left = self.tween(currentFrame, arr[i].start, delta, maxFrame) + "px";
            }
        }, this.interval);

    };


// 改变小圆点
// 让信号量那个人有current
    Slider.prototype._changeCircle = function () {
        for(var i = 0; i < this.circleLis.length; i++){
            this.circleLis[i].className = "";
        }

        this.circleLis[this.idx].className = "current";
    };


    Slider.prototype._autoplay = function () {

        var self = this;

        this.autoTimer && clearInterval(self.autoTimer);
        this.autoTimer = setInterval(function () {
            self._next();
        }, this.autoplayInterval);
    };



})();