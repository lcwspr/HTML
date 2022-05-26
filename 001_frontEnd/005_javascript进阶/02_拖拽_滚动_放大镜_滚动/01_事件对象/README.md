# 事件对象
* 我们可以把事件的处理函数，当作一个回掉函数，click事件发生的时候，才调用这个function(){}
    * `oDiv.onclick = function(){}`
* 浏览器在调用这个事件处理函数，调用的时候还传进去一个实际的参数，这个参数是一个对象，表示这次点击事件的所有细节，比如按的什么按钮，点击的位置
* 所以我们的事件处理函数需要一个参数来接受 `oDiv.onclick = function(event){}`
    * [获得鼠标的位置](file/01_event对象.html)
        * event.clientX表示触发事件的时候，鼠标的位置，相对于视口
    * 不同的事件就有不同的event值，可以想象到不同的事件就没有鼠标的位置
        * [获取键盘的值](file/02_键盘事件.html)

## IE 6,7,8的事件对象兼容性
* 在调用事件处理函数的时候，高级浏览器是传给这个事件处理函数一个实际参数event对象，但是IE6,7,8是给window对象绑定一个当前的event属性。
    *　兼容性处理: `var event = event || window.event;`
    * || 或就是逻辑短路运算符，如果Event有定义那么就返回定义，否则返回window属性
* IE中有很多方法的名字和高级浏览器不一样，比如昨天说的
    * `event.preventDefault();` 阻止默认事件， 在IE中是一个属性 `event.returnValue=true;`
    * 这些兼容性问题就使用能力检测来解决： [preventDefault方法兼容](file/)
    
## IE中的事件对象
* IE在使用DOM0级别方法添加事件处理程序时，event对象作为window对象的一个属性存在，
    * 如果事件处理程序时使用attachEvent()添加的，那么就会有一个event对象作为参数被传入事件处理程序函数中。
    * IE不支持，preventDefault(), stopPropagation()方法
    * IE 不兼容的方法
        * cancelBubble   设置为true即可相当于stopPropagation()
        * returnValue    设置为false就相当于preventDefault
        * srcElement     事件的目标，与DOM中的target相同
        * type           事件的类型

