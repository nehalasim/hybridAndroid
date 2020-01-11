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
$q=mysqli_query($con,"select distinct a.* from tbl_HH a inner join tbl_PCV_Cluster_Div b on a.Village_Code = b.VILL_Code where b.PCV_Cluster = '".$c."'");
while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);
?>