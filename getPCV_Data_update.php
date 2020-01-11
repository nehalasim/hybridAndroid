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
$q=mysqli_query($con," SELECT a.* FROM pcvmaster_update a WHERE CURDATE() < DATE_ADD(a.CDOB, INTERVAL 59 Month) and a.CPID not in (select b.CPID from pcvmaster b) ");
while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);
?>