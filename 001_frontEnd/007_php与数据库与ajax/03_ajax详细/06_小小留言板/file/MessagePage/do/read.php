<?php

	if(isset($_GET["order"])){
		$order = $_GET["order"];
	}else{
		$order = 1;
	}

	// 数据库操作
	$con = mysql_connect("localhost", "root", "123456");
	if(!$con){
		mysql_error();
	}
	mysql_select_db("messagepage", $con);

	mysql_query("SET NAMES UTF8");

	if($order == 1){
		$sql = "SELECT id, name, date, qq, content from messagepage";
	}else if($order == 0){
		$sql = "SELECT id, name, date, qq, content from messagepage order by id desc";
	}
	$result = mysql_query($sql);

	$resArrJSON = array("res" => array());

	while($row = mysql_fetch_array($result)){
		array_push($resArrJSON["res"], $row);
	}	
	
	echo json_encode($resArrJSON);

	mysql_close($con);
?>