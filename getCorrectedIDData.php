<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
?>

<?php
$con = mysqli_connect('localhost','root','','sims');
if (!$con) {die('Could not connect: ' . mysqli_error($con));}

$data=array();
$q=mysqli_query($con," SELECT * FROM `correctedid` WHERE EnDt > DATE_ADD(CURDATE(), INTERVAL -14 DAY)");
while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);
?>