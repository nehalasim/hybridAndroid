<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
?>

<?php
$con = mysqli_connect('localhost','root','','sims');
if (!$con) {die('Could not connect: ' . mysqli_error($con));}

//$c = $_GET['c'];

//$b = $_GET['b'];
//PCV_Cluster='".$c."' and  

$data=array();
$q=mysqli_query($con,"select * from da3_soundfile");
while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);
?>