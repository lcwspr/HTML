<?php

	// 得到信息
	$id = $_GET["id"];

// 数据库操作
	$con = mysql_connect("localhost", "root", "123456");
	if(!$con){
		mysql_error();
	}
	mysql_select_db("messagepage", $con);

	mysql_query("SET NAMES UTF8");

	$result = mysql_query("DELETE FROM messagepage WHERE id = {$id}");

	if($result == 1){
		echo "ok";
	}else{
		echo "wrong";
	}

	mysql_close($con);

?>