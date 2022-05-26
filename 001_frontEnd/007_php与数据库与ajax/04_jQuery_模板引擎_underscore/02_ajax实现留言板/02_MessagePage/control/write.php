<?php

	header("Content-type: application/json");
	
	// 得到信息
	$userName = $_POST["username"];
	$qq = $_POST["qq"];
	$content = $_POST["content"];

//   设置时区
	date_default_timezone_set("Asia/Shanghai");
	$dateTime = date('y-m-d H:i:s', time());


// 数据库操作
	$con = mysql_connect("localhost", "root", "123456");
	if(!$con){
		mysql_error();
	}
	mysql_select_db("messagepage", $con);

	mysql_query("SET NAMES UTF8");
	$result = mysql_query("INSERT INTO messagepage (name, date, qq, content) VALUES ('{$userName}','{$dateTime}',{$qq},'{$content}')");
	

	$resArr = array("res" => "wrong");

	if($result == 1){
		$resArr["res"] = "good";
	}
	
	echo json_encode($resArr);

	mysql_close($con);

?>