# 鼠标位置
## 四个值是全线兼容的
1. 四个兼容属性值
    1. `event.clientX`
        * 距离视口左边的x值
    2. `event.clientY`
    3. `event.screenX`
        * 距离屏幕左边的x值
    4. `event.screenY`
2. 图解
    * ![](01_event.clientX_event.screenX_图解.png)
    * 注意：获取到的四个值都没有单位
3. 滚动条模拟
    * [source](file/04_模拟滚动条.html)
    * 注意：浏览器默认是按住底下选择上面
    
## 拖着子盒子在父盒子中移动
* ![](file/02_拖拽固定鼠标问题.png)