<?php
 header("Access-Control-Allow-Origin: *");
 $con = mysqli_connect("localhost","root","","sims") or die ("could not connect database");
?>

<?php
$data=array();
//$c = $_GET['c'];
//d2.CC_code ='".$c."' and 

//$q=mysqli_query($con,"select * from d4 WHERE Entry_Date>=DATE_ADD(curdate(), INTERVAL -3 DAY) AND QC = '2' and cluster is not null and block is not null");
$q=mysqli_query($con,"select d2.* from d2 LEFT join d4 on d2.Child_ID=d4.childID and d4.QC = '1'  where d2.QC='2' and  substring(d2.Child_ID,4,1) = '1'  and  d2.Q120='1' and d2.Cluster<>'' and d2.MPID<>'99999999999'  AND d4.childID is null and 
d2.Entry_Date>=DATE_ADD(NOW(), INTERVAL -30 day)");
while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);

?>
