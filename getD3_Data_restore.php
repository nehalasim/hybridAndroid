<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
?>

<?php
$con = mysqli_connect('localhost','root','','sims');
if (!$con) {die('Could not connect: ' . mysqli_error($con));}

$c = $_GET['c'];
//$b = $_GET['b'];

$data=array();
$q=mysqli_query($con," SELECT * FROM `da3` WHERE DA3_Q106_code = '".$c."' and SUBSTRING(DA3_childID,4,1)='1'");
while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);
?>