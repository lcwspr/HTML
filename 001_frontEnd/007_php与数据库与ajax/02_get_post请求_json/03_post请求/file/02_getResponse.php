<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		$con = mysql_connect("localhost", "root", "123456");
		if (!$con)
		{
			die('Could not connect: ' . mysql_error());
		}


		mysql_select_db("lcwspr", $con);

		mysql_query("SET NAMES UTF8");

		$qu01 = $_GET["question01"];
		$qu02 = $_GET["question02"];
		$qu03 = $_GET["question03"];

		$sql = "INSERT INTO request (question01, question02, question03) values ('{$qu01}', '{$qu02}', '{$qu03}')";
		
		if (!mysql_query($sql))
		{
			die('Error: ' . mysql_error());
		}

		mysql_close($con);
	?>
</body>
</html>