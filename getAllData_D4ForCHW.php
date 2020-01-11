<?php
 header("Access-Control-Allow-Origin: *");
 $con = mysqli_connect("localhost","root","","sims") or die ("could not connect database");
?>

<?php
$data=array();
//$c = $_GET['c'];
//d2.CC_code ='".$c."' and 
$q=mysqli_query($con,"select distinct childID from d4 where QC = '2' and Entry_Date > DATE_ADD(CURDATE(), INTERVAL -15 day)");
while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);

?>
