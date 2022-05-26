<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		*{
			margin: 0;
			padding: 0;
		}
		table, tr, td{
			border: 1px solid #000;
			border-collapse: collapse;
		}
		td{
			height: 30px;
			width: 200px;
			text-align: center;
			line-height: 30px;
		}
	
	</style>
</head>
<body>
	<table>
	<?php
		// 连接数据库，php和mysql是好兄弟，只需要一条命令，就能够连接数据库
		// $con 就是一个变量，表示一次连接
		$con = mysql_connect("localhost","root","123456");

		if (!$con)
		{
			die('Could not connect: ' . mysql_error());
		}
		// 选择连接哪一个数据库
		mysql_select_db("lcwspr", $con);

		// 更改数据操作字符集
		mysql_query("SET NAMES UTF8");

		// 执行sql语句，就把检索结果放到了$result变量中。
		$result = mysql_query("SELECT * FROM news");

		// 循环读取
		while($row = mysql_fetch_array($result))
		{
	?>
			<tr>
				<td><a href="<?php echo "news.php?id={$row['id']}"; ?>"> <?php echo $row['title']?> </a></td>
			</tr>

	<?php
		}

		mysql_close($con);
	?>
	</table>
</body>
</html>