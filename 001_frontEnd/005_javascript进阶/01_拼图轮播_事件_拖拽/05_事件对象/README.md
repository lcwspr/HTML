# 事件对象
* 任何的事件处理函数，我们的浏览器，JS引擎会默认往里面传一个实际参数，就是事件对象.事件对象通常用event来接受
    ```
    oDiv.onclick = function(event){
        console.log(event);
    }
    ```
    * 所有这次事件的细节，都被封装到了这个event对象中
    * 比如clientX, clientY 就是这次点击的位置(相对于客户端)
    

## 通用事件对象属性和方法
### 属性
1. event.type
    * 事件的类型，字符串,没有on
    * 例如, click
2. event.target
    * 事件触发的元素
    * 返回你点击的最小的哪个元素，即使这个元素身上没有监听，也会返回他。
3. event.currentTarget
    * 返回自己，this一定和event.currentTarget是一个元素，都是自己
4. event.bubbles
    * 返回一个布尔值，表示这个事件是否冒泡
    * onmouseover和onmouseenter的区别
        * [example](file/03_事件是否会冒泡.html)
        * 我们可以看到onmouseover中event.bubbles为true,onmouseenter中event.bubbles为false,
        * 所以onmouseover冒泡，onmouseenter中不冒泡
    * onmouseover,onmouseenter IE 6,7,8,9,10全面兼容，但是chrome 30 之前不兼容，现在可以看作全线兼容
    * 例子
        * [source](file/04_是否冒泡的区别.html)
5. even.cancelable   
    * 表示事件是否拥有可取消的默认动作
6. even.Phase
    * 当前事件的阶段
7. timeStamp

### 方法
1. stopPropagation()
    * 停止传播事件流
2. preventDefault()
    * 阻止默认事件
    *　组织默认事件
        * [source](file/06_preventDefault取消默认事件.html)
3. initEvent()
    * 初始化新创建的Event对象
 