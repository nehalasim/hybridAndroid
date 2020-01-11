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
//a.cluster = '102' AND
$data=array();
$q=mysqli_query($con,"select * FROM das_chw a INNER JOIN(SELECT DAS_Q106, MAX(DAS_VisitNo) 'LVDate'  FROM das_chw GROUP BY DAS_Q106)c ON a.DAS_Q106=c.DAS_Q106 AND a.DAS_VisitNo=c.LVDate WHERE  a.QC = '2' AND a.DAS_roundNo is not null AND a.cluster is not null AND a.block is not null AND left(a.Entry_Date,10)>= date_add(curdate(), INTERVAL -3 day)");
while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);
?>