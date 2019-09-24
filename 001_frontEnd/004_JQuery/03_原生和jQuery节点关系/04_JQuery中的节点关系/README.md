# jQuery中的节点关系
## 查找
1. children
2. closese
3. find
4. next
5. nextAll
6. nextUnitl
7. offsetParent
8. parent
9. parents
10. parentsUnitl
11. prev
12. prevall
13. prevUntil
14. siblings
## 一些方法
1. 注意都是方法，因为里面含有迭代器。
2. 方法
    1. children()
        * 所有的儿子节点，注意只会选择亲儿子不会选择后代，
        * 已经屏蔽掉了浏览器兼容问题，会屏蔽掉空文本，事实上，children返回的只能够是节点，所有的文本都已经不算做是儿子了
            * `$('.box').children().css();`
        * 儿子有很多，我们可以使用选择器表示怎么样的儿子
            * `$('.box').children('.ss')`
        * 也可以使用筛选器
            * `$('.box').children(':odd')`
    2. find()
        * 表示所有后代元素,和children()有所不同，children会返回自己的亲儿子列表，find返回自己的所有后代的列表
        * 注意和children()方法不一样，find方法必须传入参数，表示后代的谁（find就是寻找的意思，就是在后代中寻找谁）
        * 如果在find中传入*,会列出所有的标签，会一层一层的迭代
    3. parent() 和 parents()
        * parent 就是父亲
            * [案例](file/01_点击父亲变色.html)
        * parents
            * 这个元素所有符合条件的祖先节点
    4. siblings()
        * 表示所有亲兄弟，(不包括堂兄弟)，但不一定是同种元素
        * 同样的，jQuery只返回节点元素，对于文本注释都不视为兄弟，
        *　排他操作
            * `$(this).css("background-color",'red').siblings().css('background-color','green')`
            * `$(this).addClass('cur').siblings().remove('cur')`
            * 注意css方法也可以链式调用 
    5. prev() 和 next(), prevAll(), nextAll()
        * 前一个兄弟，后一个兄弟，前所有兄弟，后所有兄弟

* 注意，jQuery值选择nodeType为1的元素，不选择文本，注释等等。并且不需要for循环，一次性就能够得到所有的东西
        
## 案例
1. [手风琴效果](file/02_手风琴效果.html)
2. [手风琴效果改](file/03_手风琴效果_改.html)