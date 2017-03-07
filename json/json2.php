<?php 
$array = file_get_contents("php://input");

$fp = fopen('user.json', 'w');
fwrite($fp, stripslashes($array));
fclose($fp);

echo json_encode(array("jsonfile"=>$array));