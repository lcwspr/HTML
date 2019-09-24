# fadeIn fadeOut fadeTo fadeToggle
1. fadeIn()
2. fadeOut()
3. fadeTo()
4. fadeToggle()

## fadeIn
* 注意，fadeIn()的起点是display\:none,也就是说，只有display:none的元素才能执行fadeIn()
* 动画机理
    * 一个display:none的元素，瞬间可见，然后瞬间变为opacity:0,往自己的opactiy上变，如果没有设置opactiy就往1变化
    
## fadeOut 淡出
* opactiy从当前值变化直到0，然后display变为none,opactiy变为    

## fadeTo
* 把所有匹配元素的不透明度以渐进方式调整到指定的不透明度，并在动画完成后可选的触发一个回掉函数
    * 这个动画只调整元素的不透明度
* fadeTo有三个参数，第一个参数是动画时常，第二个参数是要变到的透明度，第三个参数是回掉函数
* fadeTo的起点不一定是display:none  

## 优点
1. IE 6,7,8兼容，不用关心filter这个东西了，jQuery已经写了
2. 呼吸轮播简单





  