# 瀑布流
* 提到Ajax，首先想到瀑布流，永远拉不到底，图片一张一张列出来。瀑布流是2011年出现的，北欧的一个设计师发明的。
* 瀑布流(waterfall)是一列一列的，列的宽度是固定的（定列宽瀑布流），每个列里面是小grid，每个grid都不一样高。为什么不一样高，因为里面的内容不一样高，图片不一样高。

* 瀑布流原理
    * 瀑布流的原理就是绝对定位，每个grid有不同的绝对定位的top、left值。
    * 其中每个grid的top值，都是它上面的grid的height的累加。每个grid的left值，都是自己(序号%3)*270。
    
* 瀑布流实现有很多种算法： 绝对定位， 浮动算法
    1. 0， 1， 2| 3， 4， 5| 6， 7， 8| 9， 10， 11
        ```
        window.onload = function(){
			// 得到所有的grid
			$grids = $(".grid");
			$grids.each(function(){

				// 遍历得到他上面的人的总高度
				var height = 0;
				for(var i = $(this).index() - 3; i >=0 ; i -= 3){
					height += $grids.eq(i).outerHeight();
					height += 20;
				}
				$(this).css({
					"top": height,
					"left": ($(this).index() % 3) * 270
				}, 3000)
			})
		}
        ```
        * 这种排序的方法，有一个非常大的毛病，就是某一列有多个瘦子，矮子，让列非常难看，底部参差不齐
    2. 算法2
        * 每个格格不一定往自己序号%3这个列插入，看哪个列目前最矮，插在哪里
        * showCode
            * [最短列插入算法](file/01_show_water_fall.html)
            
## 实例
* [瀑布流实例](file/02_waterFallShow.html)