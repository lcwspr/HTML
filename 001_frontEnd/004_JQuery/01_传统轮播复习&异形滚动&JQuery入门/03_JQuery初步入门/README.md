# JQuery
## js编程恶心的地方
1. 选择元素麻烦，全线兼容的方法只有getElementById()和getElementsByTagName()两个。其他的方法是不都兼容的。getElementsByClassName()通过类名选择元素，IE9开始兼容。
2. 样式操作麻烦，得到原生样式，需要我们自己造轮子fetchComputedStyle()
3. 动画麻烦，需要我们自己造轮子animate();
4. 批量控制麻烦，大量出现的for循环语句；排他操作麻烦
5. HTML节点操作麻烦
## 怎么办
1. 恶心的东西，能用“轮子”来解决，事实上我们已经造了两个轮子：fetchComputedStyle、animate。能不能把所有轮子组合起来，成为一个框架呢？jQuery就是这样的一个东西。
## JQuery
* jQuery是DOM编程领域的霸主，极大的简化了原生JavaScript的DOM编程。
* jQuery中含有丰富的轮子，完美解决了选择元素难、样式难、动画难、批量操作难等各种兼容问题，让工程师只需要思考业务，而不必思考细枝末节的兼容问题。

## 简介
* 官网：www.jquery.com
* 口号
    * 写更少的代码，做更多的事情
* 官方简介
    * jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.
    * 简单翻译：jQuery是一个快速、小型的、特性很多的JS库，它把很多事儿都变得简单。jQuery是免费的、开源的。

## JQuery版本
* jQuery有两条版本线：1.X、2.X。
    * jQuery 2.x has the same API as jQuery 1.x, but does not support Internet Explorer 6, 7, or 8. 
    * jQuery2.X和1.X的功能完全一致，API完全一致，但是2.X不兼容IE6、7、8。

* 下载的时候有两个选择：
    1. download the compress，
        * 压缩版本的JQuery，生产环境
    2. download the uncompressed
        * 没压缩版本的，开发环境

