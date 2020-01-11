<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
?>

<?php
$con = mysqli_connect('localhost','root','','sims');
if (!$con) {die('Could not connect: ' . mysqli_error($con));}

//$c = $_GET['c'];
//$b = $_GET['b'];

$data=array();

//$q=mysqli_query($con,"select distinct a.Village_Code, a.Village_Name, a.Union_Code, b.PCV_Cluster from village a inner join tbl_pcv_cluster_div b on a.Union_Code = b.Union_Code");

$q=mysqli_query($con,"SELECT a.*, b.PCV_Cluster FROM `village` a left join tbl_pcv_cluster_div b on a.Village_Code = b.VILL_Code group by a.Village_Code");



while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);
?>