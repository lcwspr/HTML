# 变量类型的转换
## String -> Number
* 先来学习一个语句，这个语句和alert差不多，也是弹窗，弹出的是输入框
    `prompt('')` // adj. 敏捷的，迅速的，立刻的，准时的； v 促使，导致，鼓励，提示； n 激励，提示符，提示
    * 用于弹出提示框，提示用户输入(第一个参数是提示信息，第二个参数是默认值)
    * 这些小功能，就是程序提供给我们的API，每个API都有自己不同的语法
        `prompt('提示文本','默认值');`
* 可以把用户的输入值存入变量
    ```
        <script type="text/javascript">
            输入框
            第一步先让输入电话号码，存入变量
            var a = prompt("请输入你的电话","139");
            //第二步显示用户输入的电话
            alert("哈哈，你输入的电话是" + a);
        </script>
    ```
    * 注意
        * 用prompt接受的任何东西都是字符串，那么是输入的一个数字也是一个字符串

* 字符串转换为数字
    * 有一些方法可以将内存中表示一个数字的字符串转换为对应的数字
        * parseInt()
            * parseInt 就是将一个string转为一个整数，不会四舍五入，直接截取整数部分，如果这个string有乱七八糟的东西，那么就只截取前面的数字部分
            * 例子
                ```
                    var a = '123';
                    var b = parseInt(a);  // parseInt 就把字符串123转换为数字123了
                    console.log(b);       // 123
                    console.log(typeof b);// number
                ```
                ```
                    console.log(parseInt("123"));	         //123
                    console.log(parseInt("123.6"));	         //123
                    console.log(parseInt("123年都会很爱你"));	 //123
                    console.log(parseInt("123年11月"));		 //123
                    console.log(parseInt("123px"));		     //123
                    console.log(parseInt("-123.99999999"));  //-123
                ```
            * parseInt() 不仅仅能够进行一个转为整数，还能够解析任何进制的字符串。第二个参数输入要解析的进制数
                ```
                    下面的结果都是15
                    console.log(parseInt(15,10));
                    console.log(parseInt(17,8));
                    console.log(parseInt(1111,2));
                    console.log(parseInt("0xf",16));
                    console.log(parseInt("f",16));
                    console.log(parseInt(16,9));
                    console.log(parseInt("15e6",10));
                    console.log(parseInt("15*6",10));
                ```
            * 如果parseInt不能进行转换，那么就会返回NaN
                 ```
                    parseInt('hell0',43)   // NaN
                    parseInt('234', 3)     // NaN
                 ```
                 * 又一种NaN的方式，6/0得到Infinity,0/0得到NaN
        * parseFloat()
            * 尽可能的将字符串转换为浮点数，如果浮点数字之后有其他非数字内容，直接舍弃
            ```
                var a = "123.67.88";
                var b = parseFloat(a);   
                console.log(b);         // 123.67
                
                console.log(parseFloat("123.67年"));		//123.67
                console.log(parseFloat("哈哈123.67年"));	    //NaN                 
            ```
        * 数字类型都是number，不分整数和浮点数，但是转换的时候分

## Number -> String
* 将一个数字，与一个空字符串进行连字符运算，那么就是自动转为字符串了。
    ```
        var a = 123;
        var b = a + "";
        console.log(b);         // 123
        console.log(typeof b);  // String
    ```




















    