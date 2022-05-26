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
		}

		td{
			width: 120px;
			height: 30px;
		}

		.pink{
			background-color: pink;
		}

	</style>
</head>
<body>
	<table>
		<?php
			for($i = 0; $i < 20; $i++){
		?>
		<tr <?php if($i %2 ==0) {echo "echo class=\"pink\"";} ?>>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<?php
			}
		?>
	</table>
</body>
</html>
