[TOC]



## 上网的过程

### 什么是上网

上网就是请求数据宏观的过程 ，网页是真实的物理存在的    所以我们就能够通过网址来访问这个文件也就是上网就是一个请求数据的过程。

### 上网的流程

当我们输入一个网址，<www.lcwspr/aaa/1.html> 的时候，我们计算机对于远程服务器发出http请求，我想要你aaa文件夹下的1.html文件，服务器响应了这个请求，将1.html文件通过http请求传输到用户的计算机中，用户的浏览器对于这个文件进行渲染和解析.

要知道网址的含义 <http://www.lcwspr.cn/aaa> 请求的是lcwspr.cn服务器上的aaa文件夹中的index.html文件，服务器可以进行默认页面的配置，比如配置为default.html或者default.php等，默认为index.html

## http协议

### 作用

超文本传输协议(Hypertext Transfer Protocal)就是浏览器和服务器之间传输文件使用的。

### 组成

http是由两部分组成的 **请求** **响应** 当输入网址的时候 ，浏览器会发送一个http请求，请求服务器上的响应页面，服务器收到请求之后，会再次通过http将页面传输回来，注意：***访问一个网页不一定只执行一次http请求***    ***注意 不只有网址会产生http请求  超链接也能发送http请求***。

## 服务器

服务器就是计算机，也要cpu、硬盘、内存、也安装软件，可能没有显示器、鼠标、键盘、服务器上存放文件，要24小时开机，不能断电，我们可以通过软件远程管理服务器。

## 浏览器

就是渲染网页的一个软件，安装在客户电脑上，http的发起、接收、都是浏览器完成的，浏览器有版本的区别**兼容问题** 浏览器都有临时文件夹。

## html初步

html的全程叫做 Hypertext Markup Language超文本传标记语言，是网页的格式，网页的格式还有 php、jsp、asp等等，那么html是最基本的网页文件格式，纯文本传输，txt是纯文本，没有任何其他东西，没有颜色，字体，字号，html是纯文本文件。

html是描述语义的脚本语言，一些是真正的文本，一些用来描述文本的语义。

## Sublime (宏达 壮丽)

* 非常流行的编辑器  java php c

* 能够高亮显示代码，（注意 html只用来增加语义  不要关心样式）

* 能够自动提示代码

* 有很丰富的插件

* 常用快捷键
	> ctrl + n 新建
	> ctrl + s 保存
	> ctrl + f 查找
	> ctrl + z 撤销
	> ctrl + x 删除

    

## DTD文档声明

- 就是所谓DocType Definition 文档类型定义（或DocType Declartion 文档类型声明）
- 其实就是用来告诉浏览器我使用什么版本html (但浏览器不一定完全参考)

### 常见的文档声明
#### html 4.01 有三个小版本

* strict&emsp; 严格版 不能使用font等废弃的字体标签，不能使用框架
* transitional&emsp; 可以使用字体标签 但不能使用框架
* frameset &emsp; 可以使用框架集
  
#### xml三个版本

w3c为了解决html不够严格，推出xhtml,必须所有镖旗小写，所有属性双引号封闭，必须有结尾的反斜杠。
    
* xml 1.0 strict
* xml 1.0 transitional
* xml 1.0 frameset
  
我们一般只使用 strict 或 transitional   
    
## 命名空间

在dtd下面一行 就是html标签对
    
```html
<html xmlns="<http://www.w3.org/1999/xhtml>" xml:lang="en">
</html>
```

html是一个标签， xmlns 是一个属性,xml:lang也是一个属性，xml全称为xml namespace,就是说明你使用的标签代表什么。xml:lang="en" 表示所有标签的语言是英文
    
## 字符集

```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
```

## meta标签

页面描述标签 `<meta name='description' content="描述信息">` 网页元信息，能够显著提升SEO，（search engine optimization）搜索引擎优化
    
`<meta name="keywords" content="hello world">`  让搜索引擎知道我们干什么
    
## html对换行tab不敏感

html只描述语义，还描述页面层次结构，就是标签谁包裹谁，和缩不缩进无关，但是缩进可读性强
    
> 空白折叠现象
>
> html中的文字，不管多少个空格，换行，都会被折叠为一个空格



## h标签和p标签

### 两种级别元素

- 容器级别:	里面谁都可以装，甚至包裹和自己一样的标签
- 文本级别标签 : 只能放文字、图片、超链接

***注意： 所谓的“容器级”和“文本级”不是官方的分类，而是有经验的程序员分出来的类别***

*html 4.01层面， 容器级别标签只有 div li dd dt  td 其余标签都是文本级的*

### h标签

一共有6个，一般来说，一个页面只会有一个h1标签，其他标签个数不定(搜索引擎规则)

h1标签权重很高，搜素引擎会特别注意抓取里面的文字，***文本级别标签***

### p标签 

paragraph(段落)&nbsp; ***p中只能够放文字，图片，表单元素*** 

***文本级别***

## img 和 a标签

img图片&nbsp; `<img src="path" />`   img是image缩写，src是source缩写。

这个标签不是一个对(单标签) 

a标签  相对路径和绝对路径
