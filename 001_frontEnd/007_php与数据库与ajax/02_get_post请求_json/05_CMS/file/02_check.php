<?php
	session_start();
	// 会话开始。同一个用户的同一次登陆，叫做一次会话
	// 小明和小红的登陆，是不同的会话
	// 小明今天上午和下午的登陆，也是不同的会话(cookie 保存会话)
?>

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

		$password = md5($password);
		$result = mysql_query("SELECT * FROM register WHERE username = '$username' and password = '$password'");
		$number = mysql_num_rows($result);

		if($number > 0){
			echo "登陆成功";
			$_SESSION["reg"] = 1;
		}else{
			echo "错误";
		}


		mysql_close($conn);
	?>
</body>
</html>