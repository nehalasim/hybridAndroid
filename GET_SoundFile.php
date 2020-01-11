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
$q=mysqli_query($con,"select * from da3 WHERE CURDATE()  <= DATE_ADD(Entry_Date, INTERVAL 3 Day) and (DA3_Q202a='1' or DA3_Q202b='1' or DA3_Q202c='1' or DA3_Q202d='1' )  AND DA3_childID not in (select ChildID from da3_b) AND QC = '2'");
while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);
?>