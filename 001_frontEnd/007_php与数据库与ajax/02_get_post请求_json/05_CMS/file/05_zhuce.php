<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php

		// 得到用户名
		$username = $_POST["username"];
		$password = $_POST["password"];


		$conn = mysql_connect("localhost", "root", "123456");
		mysql_select_db("lcwspr", $conn);


		mysql_query("SET NAMES UTF8");

		// 验证是不存在用户名
		$result = mysql_query("SELECT * FROM register where username = '{$username}' ");
		$number = mysql_num_rows($result);

		

		if($number > 0){
			echo "用户名已经比注册";
		}else{
			$password = md5($password);
			$result = mysql_query("INSERT INTO register (username, password) VALUES ('{$username}', '{$password}')");
			echo "success";			
		}


		mysql_close($conn);
	?>
</body>
</html>