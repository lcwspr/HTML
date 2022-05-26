1. php的数据库连接
    ```
    // 创建一个连接，连接哪个数据库服务器，用户名，密码
    $conn = mysql_connect("localhost", "root", "123456");
    // 选择一个数据库
    mysql_select_db("lcwspr", $conn);
    // 设置一下字符集，也是执行一次查询
    mysql_query("SET NAMES UTF8");
    // 执行sql语句，sql是一种通用语言
    $result = mysql_query("SELECT * FROM news");
    
    // $result很像js中的类数组对象，但是还不是数组
    mysql_fetch_array($result);  // 能够将查询出来的结果一条一条的转换为数组 
    ```