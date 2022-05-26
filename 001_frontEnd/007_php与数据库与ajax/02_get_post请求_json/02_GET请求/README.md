# GET请求
1. get请求概述
    * 当我们的JavaScript程序需要让用户输入一些信息，有什么办法？
        * `prompt("请输入你的年龄")`
        * `var age = ageTxt.value;`
            * 人的数据，与js交互
    * 那我们现在来看看服务器上面的PHP程序，如何得到人的数据？
        * 最简单的办法就是GET请求，很简单，使用URL来传递数据
            * `http://www.lcwspr.top/aaa/a.html?k=v&k=v&k=v;`
            * 注意?后面的部分，不会影响我们访问哪一个网页，这后面的k-v的数据就是给后台语言看的。对于前台意义不大
        * php中可以使用非常简单的小语法来得到我们GET请求中的任何部分的值: `$_GET["old"];`
        
2. get请求表单
    * method属性，提交表单的方法，是get还是post.如果写了get的话，那么提交表单的时候，就会通过url地址?来传递参数。
    * action属性，处理表单的程序
    ```
    <form method="get" action="01_getData.php">
		<p>
			请输入您的姓名：
			<input type="text" name="xingming" id="">
		</p>
		<p>
			请输入您的qq号码:
			<input type="text" name="qq" id="">
		</p>
		<p>
			请输入您的年龄：
			<input type="text" name="old" id="">
		</p>
		<p>
			<input type="submit" value="submit">			
		</p>
	</form>
    ```
    * GET请求有两个非常严重的不足
        1. 容易暴露隐私，所有表单字段的值都是通过URL来传输的，明码传输，能够看见浏览器的历史记录，就能够看见某一次表单值
        2. 数据量不大，也就是说GET请求限制数据量的大小
            * get方法提交的表单，html页面就会自动把所有有name属性的表单控件(没有name属性就不会提交)，里面的值使用k=v&k=v&k=v,追加到action那个网址后面。
    * 优点就是便于分享
        * 如果我把这个网址分享给好友，那么好友直接打开也会是这篇文章。

3. 数据库的写入
    * sql语句中的查询，检索所有数据库条目。
        * `SELECT * FROM news;`
    * 检索某一条语句
        * `SELECT * FROM news WHERE title = "one";`   

4. 增加
    * `INSERT INTO stu (name, old, qq) values ('lcwspr', 34, 12345);`
    * 公式
        * `INSERT INTO 表名(字段1， 字段2， 字段3) VALUES (v1, v2, v3);`
        
   