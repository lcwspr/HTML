# clientX,clientY,screenX,screenY
* 都是event对象的属性，全线兼容，表示事件触发这一瞬间的鼠标位置
    * event.clientX
    * event.clientY
    * event.screenX
    * event.screenY
* clientX表示鼠标的位置距离视口(浏览器显示窗口)左边的距离
* clientY表示鼠标的位置距离视口(浏览器显示窗口)上边的距离
* screenX表示鼠标的位置距离屏幕左边的距离
* screenY表示鼠标的位置距离屏幕上边的距离


## 案例和说明
* 案例
    1. 拖拽案例
        * [](file/02_拖拽.html)
    2. 按住之后拖拽
        * [](file/03_按住之后能够拖拽.html)
    3. 按住之后拖拽，保持鼠标位置
        * [](file/04_拖拽_保持鼠标位置.html)
* 说明
    * IE浏览器不兼容event对象，ie浏览器的event对象是window对象的属性，而不是事件的实参