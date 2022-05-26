# React

## React 简介

1. 声明 和 命令

    1. 声明式: 不自己操作DOM, 只是声明一下数据流向
    
    2. 命令式: 自己操作DOM
    
2. 模块化 和 组件化
    
    * 模块化就是js模块编程
    * 组件化，就是把组件自身的东西，分成自己得组件中。(组件是包含功能模块, 或者页面的一个局部功能所有代码和资源的集合)

3. 描述
    
    * 用于动态构建用户界面的JavaScript库(专注于View)

4. 高效原因
    
    1. 虚拟DOM, 不总是直接操作Dom
    2. Dom diff算法, 最小界面重绘
    
## React 基本使用

1. hello
    
    ```html
    <!-- 引入核心库--> 
    <!--  引入dom -->
   
    <script type="text/babel">

    // 1. 创建虚拟dom
    let vDOM = <h1><h1>
    // 2. 借助react把虚拟Dom渲染到页面, 变为真实Dom
    ReactDOM.render(vDOM, document.querySelector('.box'))
 
    </script>
    ```
   
## 虚拟Dom的两种创建方式

1. js语法创建
    
    ```
    let myID = 'lcwspr'
    let myData = 'LCW'
    
    let vDOM = React.createElement('h2', {id: myID.toLowerCase()}, myID.toLowerCase()myID.toLowerCase())
    ReactDOM.render(vDOM, $box)
    ```

2. 使用jsx语法
    
    ```
    let vDOM = <h3 id={myID.toUpperCase()}> {myID.toUpperCase()} </h3>
    ```

3. jsx语法
    
    1. 只有一行可以不需要()括起来, 但是多行必须需要
    2. jsx写html标签中的class属性必须使用className
    3. jsx只能有一个根标签
    
## 虚拟dom

1. 虚拟dom的本质是什么
    
    * 本质就是js中的一般对象

2. 虚拟dom和真实dom有什么区别    

    *  虚拟dom比较轻量