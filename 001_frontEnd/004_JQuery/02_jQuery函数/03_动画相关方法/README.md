# 动画相关方法
* 除了animate方法外，jQuery方法还有好多内置的方法
## 内置的show(),hide(),toggle()方法
1. show()显示，hide()隐藏，toggle()切换
    * toggle (ta gou)
        * n, 触发器，套锁钉
        * vt, 转换
2. 方法说明
    1. 	$("div").show();		
        * 让一个本身是display:none;元素显示
    2. 	$("div").hide(); 		
        * 隐藏元素display:none;
    3.	$("div").toggle();		
        * 切换显示状态。
        * 自行带有判断，如果可见，就隐藏；否则显示。

3. 特别的，如果show()、hide()、toggle()里面有数值，将变为动画：
    * show时，display:none;的元素，将从左上角徐徐展开。动画机理：
    * 这个display:none;的元素会变为显示的，然后瞬间将宽度、高度、opacity设为0，然后徐徐展开。
    * 触碰提示文本

4. 甚至可以加回掉函数
    ```
    	$("div").toggle(1000,function(){
		alert("土狗完毕！");
	    });	
    ```
    
5. 语法为
    ```
	$("div").show([时间],[回调函数]);
    []表示这个参数可选。
    ```
6. example
    * [source](file/01_show_hide_toggle方法.html)
    * [source](file/02_鼠标触碰提示文本.html)

## slideDown slideUp slideToggle
* slide
    * vt. 滑动，平稳的走，逐渐恶化，贬值
    * n. 滑动，变糟，发夹

1. slideDown
    * [source](file/03_slideDown()、slideUp()、slideToggle()方法.html)
    * slideDown()的起点一定是display\:none;换句话说，只有display:none的元素才能够调用slideDown()
    * 动画机理
        * 一个display:none的元素，瞬间显示，瞬间宽度高度变化为0，然后jQuery自己捕捉原有的height设置为动画的终点,(其实就是高度进行变化)
        * 等价于
            ```
            $("div").show();    // 瞬间显示
            var oldHeight = $("div").css("height");  // 原有高度
            $("div").css("height",0);   // 高度变为0
            $("div").animate({"height": oldHeight},1000);  // 动画
            ```
2. slideUp
    * 就是收回去，就是从当前高度变为0，然后display:none;
    * 

3. slidToggle

## 水平菜单特效
* [source](file/04_水平菜单.html)
* 注意水平菜单的html结构
    ```
    <div class="nav">
        <ul>
            <li>
                <a href="#"></a>
                <div class="dropdown">
                    <div class="inner">
                    </div>
                </div>
            </li>
        </ul>
    </div>
    ```
* 注意css:
    * .dropdown这个盒子，一定要绝对定位，top值必须和nav高度一致，必须紧密贴合nav
    * 所以如果想要表现菜单和nav不贴合，那么必须套一个inner,使用padding表示缝隙
* js事件
    * 注意事件加给li,不要给a
