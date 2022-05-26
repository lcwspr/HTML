# 窗口的卷动事件
1. 窗口卷动的时候触发的事件 `window.onscroll = function(){}`
    * 更改的值，卷动值
        * `document.body.scrollTop || document.documentElement.scrollTop`
2. 卷动值不是可读的，也可以进行设置
    * 例子 ： [source](file/01_设置卷动值.html)
    
## 元素的尺寸，位置
1. oDiv.offsetLeft
2. oDiv.offsetTop
3. oDiv.clientWidth      // width + padding 
4. oDiv.clientHeight
5. oDiv.offsetWidth      // width + padding + border
6. oDiv.offsetHeight

## event对象的鼠标当前位置
1. event.clientX         // 鼠标到视口
2. event.clientY
3. event.screenX         // 鼠标到屏幕
4. event.screenY      

5. event.offsetX         // 以event.target对象的左上角为参考点
6. event.offsetY         // 鼠标到盒子的距离

7. event.pageX
8. event.pageY

## 窗口的
1. document.body.scrollTop || document.documentElement.scrollTop  // 卷动值


2. document.body.clientWidth || document.documentElement.clientWidth  // 视口宽度

























