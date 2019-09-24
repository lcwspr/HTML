# stop() finish()
## stop()
1. 停止当前的animate动画，但是不清除队列，立即执行后面的animte动画
    * `$('div').stop();`
2. 停止当前的animate动画，并且清除队列，盒子留在此时的位置
    * `$('div').stop(true);`
3. 瞬间完成当前的animate动画，并且清除动画队列
    * `$('div').stop(true,true);`
4. 瞬间完成当前的animate动画，但是不清除队列，立即执行后面的动画
    * `$('div').stop(false,true);`

* 公式
    * `stop(是否清除队列，是否瞬间完成当前动画)`    
    * 如果没有写ture,false， 默认就会是false    
    
## finish()
1. finish() 瞬间完成所有动画队列
    * `$('div').finish();`
    
## stop可以用来防止动画的积累
* [source](file/02_stop可以用来防止动画的积累.html)

## 百叶窗案例
* [source](file/03_百叶窗.html)