<?php
	session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		if($_SESSION["reg"] == 1){
			echo "尊敬的会员,登陆成功！";
		}else{
			echo "没有登陆";
		}

	?>
</body>
</html>