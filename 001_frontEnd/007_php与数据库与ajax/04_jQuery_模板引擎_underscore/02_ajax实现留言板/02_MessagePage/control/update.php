<?php

    $id = $_GET["id"];
    $content = $_GET["content"];

    header("Content-Type: application/json");

    $conn = mysql_connect("localhost", "root", "123456");
    mysql_select_db("messagepage",$conn);

    mysql_query("SET NAMES UTF8");

    $res = mysql_query("UPDATE messagepage SET content = '{$content}' WHERE id = '{$id}'");

    if($res == 1){
    	echo '{"result": "ok"}';
    }else{
    	echo '{"result": "wrong"}';
    }

    mysql_close($conn);
?>