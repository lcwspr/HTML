<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		for($j = 0; $j < 20; $j++){
			for($i = 1; $i <= 6; $i++){
	?>
	<h<?php echo $i; ?> >哈哈哈</h<?php echo $i; ?> >
	<?php
			}
		}
	?>
</body>
</html>