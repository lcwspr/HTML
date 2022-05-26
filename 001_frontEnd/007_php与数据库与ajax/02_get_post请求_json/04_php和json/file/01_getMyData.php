<?php
	$con = mysql_connect("localhost", "root", "123456");
	mysql_select_db("lcwspr", $con);

	mysql_query("SET NAMES UTF8");
	$res = mysql_query("SELECT * from stu_info");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
<?php

	// 存放总结果的数据,有一个键 是一个数组
	$jieguo = array("res" => array());

	// 查询到的结果不是一个数组
	while($row = mysql_fetch_array($res)){
		array_push($jieguo["res"], $row);
	}
	print_r(json_encode($jieguo));

	// 关闭数据库
	mysql_close($con);
?>
</body>
</html>