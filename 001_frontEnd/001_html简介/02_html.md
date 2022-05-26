[TOC]

## 图片

### 基本使用

* 在html页面中要插入图片，使用img`<img src="shishi.jpg" />`
  * img 是英文img的简称 图片的意思
  * src是英语source的简称，资源的意思
  * src属性中的值，就是图片的路径
  * img 标签是一个自封闭的标签，也称为单标签，并不是一对(目前有两个meta  img)
  * 网页中能够插入的图片格式 jpg、jpeg、 png、 bmp、gif 不能 插入图片的格式 psd

### 图片的宽度高度

* 不设置宽度高度 `<img src="lcwspr.jpg" />`
* 通过width 设置宽度  通过height设置高度 `<img src="lcwspr.jpg" width="500px" height="300px">`
* 如果我们仅仅设置其中一个属性,另一个属性将按比例自动设置.
  * `<img src="lcwspr.jpg" width="100">`

### 图片是"文字"

* 图片img 元素，不是普通的html标签，和p这种东西不一样，img标签实际上也是一个文字。img标签就是文字

## 相对路径和绝对路径

### 相对路径

* 从html页面出发 ，找到图片， 这种路径的描述方式，叫做相对路径。 当html文件和图片文件在同一个目录下，那么可以直接输入文件名

* 如果位于更深的目录文件夹`<img src = "images/long.jpg">` 可以有很多层 

* 如果图片位于更浅一层的文件夹 那么可以使用`../`表示上一级文件夹 只能出现在开头

### 绝对路径

* 所有以https://开头的路径，或者以/开头的路径，我们都称他为绝对路径

  `<img src="http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png" /> ` 绝对的网址  绝对路径

* 以/开头的路径，表示当前服务器的根目录`<img src="/1.jpg">`  表示***当前服务器根目录*** 找到1.jpg

  等价于`<img src=”http://www.shaoshanhuan.com/1.jpg” /> `

### alt属性

`<img src="eee.jpg" alt="这是一只考拉" />`  alt是altemate替换的意思，就是当图片不能被显示的时候（路径错误、服务器错误）显示的替换文字

### 图片的格式问题

1. jpeg(jpg)
    
    * 支持的颜色比较丰富，不支持透明效果
    * 适合用来显示招聘
    
2. gif
    
    * 支持的颜色比较少，支持简单的透明，支持动图
    * 颜色单一的图片(logo)
        * 简单透明的图片， 动图

3. png
    
    * 支持的颜色丰富，支持复杂透明
    
4. webp
    
    * google专门位网页设计的一种图片格式
    * 支持的颜色丰富，支持复杂透明，支持动图，占用空间特别小
    * 但是他的兼容性不是很好，主要不支持ie
    
5. 透过base64编码的图片
    
* 说明，效果一致用小的，效果不一致，用效果相对好的

## 超级链接

### 基本使用

* 超级链接，把网页和网页连接起来，互联网是"网"的原因。使用a标签来制作，a是英语anchor锚的意思

* `<a href="temp.html">我是一个超级链接</a>`  href是英语 hypertext reference 超级文本引用的意思

* 类似于img的src    ***注意 href 读作 何瑞福 ***

> href里面的值，就是要跳转到的页面的地址，相对路径，绝对路径都可以
>
> ```html
> <a href="../../aaa/bbb/1.html/">链接</a>
> <a href="/1.html/">链接</a>
> <a href="http://www.sina.com/">链接</a>
> ```

### 常见属性

* title属性， 就是鼠标悬停的时候的提示文本
* target属性，设置是否在新窗口打开链接 ，如果想要在新窗口打开**`target="_blank"`**

### 页面内锚点

* 我们可以通过下面这种特殊形式的a，在页面中放置锚点：`<a name="pos"></a>`  
* a标签有一个name属性，而没有href属性和链接中的文字，这种a标签叫做锚点。
* 可以使用网址`test.html#pos`来定位这个锚点  来跳转到当前位置
* 在一个页面中，可以跳转到这个锚点链接的位置  `<a href="#pos">带我去哪？</a>`
* 甚至可以在其他页面跳转到该页面某个位置  `<a href="test.html#pos">我要和你一起</a>`

* 最后， 如果我们想要把一个段落中所有的文字，都是超级链接，那么应该使用p包裹a，因为感觉p比a大，a只是一个文字：`<p> <a href="#"></a> </p>`

## 列表

### 无序列表

```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>
```

* ul 是英文 unordered list,无序列表。表达的是没有顺序关系的列表。  li是英语list item 列表项的意思

* ***注意  ul的儿子标签，只能是li标签 ，不能是别的东西***

    ```html
    1	<h3>中国著名城市</h3>
    2	<ul>
    3		<li>北京</li>
    4		<li>上海</li>
    5		<li>广州</li>
    6	</ul>
    ```

* 注意  li标签的数量是没有限制的，可以有无限多个。 li是一个非常经典的容器级别标签，里面可以放任何东西，甚至，在放置一个ul(二级列表)，甚至三级列表。

    ```html
    	<ul>
    			<li>
    				<h4>直辖市</h4>
    				<ul>
    					<li>北京</li>
    					<li>天津</li>
    					<li>上海</li>
    					<li>重庆</li>
    				</ul>
    			</li>
    			<li>
    				<h4>广东省</h4>
    				<ul>
    					<li>广州</li>
    					<li>深圳</li>
    					<li>东莞</li>
    					<li>珠海</li>
    					<li>佛山</li>
    				</ul>
    			</li>
    			<li>
    				<h4>江苏省</h4>
    				<ul>
    					<li>南京</li>
    					<li>无锡</li>
    					<li>苏州</li>
    					<li>常州</li>
    					<li>扬州</li>
    				</ul>
    			</li>
    		</ul>
    
    ```

### 有序列表

* ol 就是ordered list

```html
1	<ol>
2		<li></li>
3		<li></li>
4		<li></li>
5	</ol>
```

* 所有的注意事项都和ul是一样的

### 定义列表

* 定义列表表示定义某事的一个列表

    ```html
    <dl>
                <dt>HTML语言</dt>
                <dd>HTML语言是基本的描述文字语义的语言，负责页面的结构</dd>
        
                <dt>CSS语言</dt>
                <dd>CSS是负责描述页面样式的语言</dd>
                
                <dt>JavaScript语言</dt>
                <dd>JavaScript是负责描述页面交互的语言</dd>		
    </dl>
    ```

* dl是英语definition list定义列表的意思
* dt是英语definition title定义标题的意思
* dd是英语definition description定义描述的意思

* dl中，交替的出现dt和dd.dd是dt的解释说明，dd负责解释，描述，定义dt.

* **可以出现连续多个dd,在语义上，他们都是上面dt的描述，也可以一个dt没有dd**

```html
<dl>
    <dt>杨幂</dt>
    <dd>出生在北京</dd>
    <dd>出演过古剑奇谭</dd>
    
    <dt>刘诗诗</dt>
    <dd>老公是吴奇隆</dd>
    <dd>出演过步步惊心</dd>
    
    <dt>范冰冰</dt>
    
    <dt>angelbaby</dt>
    <dd>老公是黄晓明</dd>
</dl>
```

* **也可以单独成为一个dt和dd组，大部分这样做   这样更好控制样式** 

    ```html
    <ul>
        <li>
            <dl>
                <dt>杨幂</dt>
                <dd>出生在北京</dd>
                <dd>出演过古剑奇谭</dd>
            </dl>
        </li>
        <li>
            <dt>刘诗诗</dt>
            <dd>老公是吴奇隆</dd>
            <dd>出演过步步惊心</dd>
        </li>
        <li>
            <dt>angelbaby</dt>
            <dd>老公是黄晓明</dd>
        </li>
    </ul>
    ```

* 注意  dt和dd都是非常经典的容器级别标签  里面什么东西都能放



## 表单元素

### form标签

表单中的所有元素，都要放在一个form标签中 `<form></form>` 

form就是英语表格的意思。这个标签是一个功能型的标签，不是一个结构型标签，form标签是后台进行配置的，Ajax中我们将会讲解更多的表单提交的原理， form表单的两个属性method、action.

### 单行文本框

`<input type="text" />` input是英语输入的意思，表示这是一个输入控件，所谓控件就是用户能点、能填的东西。 type是英语类型的意思，text是文本的意思。

这是一个自封闭标签，不是一个标签对，他不需要给别的文字添加语义。

*value属性表示表单的值*

### 单选按钮

```html
<input type="radio" name="sex">男
<input type="radio" name="sex"> 女
```

* radio是收音机的意思，老式的收音机，就是按其中一个键，其他的就弹起来，所以就沿用了这个名字

* 单选按钮，必须是互斥的，不能同时选中多个，所以他们必须有相同的name属性。至于是什么name无所谓但必须相同

* 一个提升用户体验的东西，叫做label标签。点击字的时候，小圆点能够被选择上。

```html
<input type="radio" name="sex" id="nan">
<label for="nan">男</label>
```

* label就是标签，id就是id的意思
* 现在，这个for属性和id的值是一样的，产生了绑定关系，这是第一个有绑定关系的标签，后面还要学习一个，就是把某一个label和input产生绑定关系

### 复选框

```html
	<input type="checkbox" name="hobby" /> 篮球
	<input type="checkbox" name="hobby" /> 足球
	<input type="checkbox" name="hobby" /> 羽毛球

```

* checkbox就是复选框的意思，name属性虽然现在感觉没什么用，但是还是应该设置相同。

### 密码框

* `<input type="password" />`

### 三种按钮

```html
<input type="button" value="我是一个普通按钮哈哈" />
<input type="submit" value="提交按钮哈哈" />
<input type="reset" value="复位重置按钮哈哈" />
```

* button普通按钮    submit提交按钮   reset重置按钮

### 下拉列表

```html
<select>
    <option>1950</option>
    <option>1951</option>
    <option>1952</option>
    <option>1953</option>
</select>
```

* select 表示选择的意思，option是选项的意思，这是一个组合使用的标签组，和ul、li 的关系一样的

### 文本域

* 能够换行的输入文本的控件
* `<textarea cols="40" rows="20">什么都没有</textarea>`  text文本，area区域，cols多少列，rows多少行，我们一般使用css进行控制。这是一个标签对  里面的内容时默认文字。

## 表格

### 基本表格

* table就是表格 桌子，tr就是table row表格行的意思，td就是table dock表格小格的意思

### 表头语义

具有表头语言的小格，用td替代td即可

### 表格的合并

> rowspan   行跨度
>
> colspan    列跨度


## h5新增的语义化标签

1. header: 标识网页的头部，主要用于放置一些logo, 导航，搜索框等内容
2. main: main标识网页中的主体内容
3. footer: 表示网页的底部： footer主要放置一些版权信息，友情链接，联系方式
4. nav: 表示导航栏
5. article: 表示网页中的一块内容
6. hgroup: 表示标题组
7. aside: 侧边栏
8. section: 表示一块独立的区域

## 其他常用的标签

1. p: 段落标签
    
    * p标签不能放任何的块元素
2. em: 表示强调，默认浏览器会以斜体显示em中的文字
3. strong标签： 表示强调，默认浏览器会加粗显示，表示语义上的重要性
4. i标签： 斜体
5. b标签： 粗体
6. q标签： 表示引用，表示段引用
7. blockquote标签: 标识长引用
8. sub
9. sup

## 内联框架

1. 引入一个外部网页
    
    * `<iframe src="" width="500"/></iframe>`

## 音频标签

1. 使用audio标签引入一个外部的音频标签, 一般使用mp3
    
    * `<audio src="src/audio.mp3"></audio>`
        
        * 默认情况下不会在页面显示和播放
        * controls, 用来设置是否允许用户控制音频的播放， 单属性值属性
        * autoplay
        * loop
        
    * 不支持ie8及一下浏览器
    
2. 其他使用
    
    ```
    <audio controls>
        对不起不支持格式
        <source src="src/audio.mp3">
    </audio>
   
    ```
   
   ```
   <embed src="src/autio.mp3" type="audio/mp3">
   ```

## 视频

* 和audio基本一样，video标签

