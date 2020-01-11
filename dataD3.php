

<?php
error_reporting(E_ALL ^ E_DEPRECATED);
error_reporting(0);
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Max-Age: 90000');
header("Access-Control-Allow-Credentials", "true");
header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
?>

<?php
$con = mysqli_connect("localhost", "root", "", "sims");
?>

<?php
if(isset($_POST['Entry_Date']) && !empty($_POST['Entry_Date']))
 {
$DA3_childID=$_POST['DA3_childID'];
$DA3_Q101_code =$_POST['DA3_Q101_code'];
$DA3_Q102_code =$_POST['DA3_Q102_code'];
$DA3_Q103_code =$_POST['DA3_Q103_code'];
$DA3_Q104_code =$_POST['DA3_Q104_code'];
$DA3_Q105_code =$_POST['DA3_Q105_code'];
$DA3_Q106_code =$_POST['DA3_Q106_code'];
$DA3_Q107 =$_POST['DA3_Q107'];
$DA3_Q108_code =$_POST['DA3_Q108_code'];
$DA3_Q109 =$_POST['DA3_Q109'];
$DA3_Q110 =$_POST['DA3_Q110'];
$DA3_Q111 =$_POST['DA3_Q111'];
$DA3_Q112 =$_POST['DA3_Q112'];
$DA3_Q113 =$_POST['DA3_Q113'];
$DA3_Q114 =$_POST['DA3_Q114'];
$DA3_Q115 =$_POST['DA3_Q115'];
$DA3_Q116 =$_POST['DA3_Q116'];
$DA3_Q117Date =$_POST['DA3_Q117Date'];
$DA3_Q117Time =$_POST['DA3_Q117Time'];
$DA3_Q201 =$_POST['DA3_Q201'];
$DA3_Q202a =$_POST['DA3_Q202a'];

$DA3_Q202b =$_POST['DA3_Q202b'];

$DA3_Q202c =$_POST['DA3_Q202c'];

$DA3_Q202d =$_POST['DA3_Q202d'];

$DA3_Q203 =$_POST['DA3_Q203'];
$DA3_Q204 =$_POST['DA3_Q204'];
$DA3_Q204O =$_POST['DA3_Q204O'];
$DA3_Q205 =$_POST['DA3_Q205'];
$DA3_Q206=$_POST['DA3_Q206'];
$DA3_Q207 =$_POST['DA3_Q207'];
$DA3_Q301 =$_POST['DA3_Q301'];
$DA3_Q302 =$_POST['DA3_Q302'];
$DA3_Q303 =$_POST['DA3_Q303'];
$DA3_Q400 =$_POST['DA3_Q400'];
$Entry_User_ID =$_POST['Entry_User_ID'];
$Entry_Date=$_POST['Entry_Date'];

$QCUser=$_POST['Entry_User_ID'];


 for($count = 0; $count<count($DA3_childID); $count++){

$DA3_childID_clean = mysqli_real_escape_string($con,$DA3_childID[$count]);
$DA3_Q101_code_clean = mysqli_real_escape_string($con,$DA3_Q101_code[$count]);
$DA3_Q102_code_clean = mysqli_real_escape_string($con,$DA3_Q102_code[$count]);
$DA3_Q103_code_clean = mysqli_real_escape_string($con,$DA3_Q103_code[$count]);
$DA3_Q104_code_clean = mysqli_real_escape_string($con,$DA3_Q104_code[$count]);
$DA3_Q105_code_clean = mysqli_real_escape_string($con,$DA3_Q105_code[$count]);
$DA3_Q106_code_clean = mysqli_real_escape_string($con,$DA3_Q106_code[$count]);
$DA3_Q107_clean = mysqli_real_escape_string($con,$DA3_Q107[$count]);
$DA3_Q108_code_clean = mysqli_real_escape_string($con,$DA3_Q108_code[$count]);
$DA3_Q109_clean = mysqli_real_escape_string($con,$DA3_Q109[$count]);
$DA3_Q110_clean = mysqli_real_escape_string($con,$DA3_Q110[$count]);
$DA3_Q111_clean = mysqli_real_escape_string($con,$DA3_Q111[$count]);
$DA3_Q112_clean = mysqli_real_escape_string($con,$DA3_Q112[$count]);
$DA3_Q113_clean = mysqli_real_escape_string($con,$DA3_Q113[$count]);
$DA3_Q114_clean = mysqli_real_escape_string($con,$DA3_Q114[$count]);
$DA3_Q115_clean = mysqli_real_escape_string($con,$DA3_Q115[$count]);
$DA3_Q116_clean = mysqli_real_escape_string($con,$DA3_Q116[$count]);
$DA3_Q117Date_clean = mysqli_real_escape_string($con,$DA3_Q117Date[$count]);
$DA3_Q117Time_clean = mysqli_real_escape_string($con,$DA3_Q117Time[$count]);
$DA3_Q201_clean = mysqli_real_escape_string($con,$DA3_Q201[$count]);
$DA3_Q202a_clean = mysqli_real_escape_string($con,$DA3_Q202a[$count]);

$DA3_Q202b_clean = mysqli_real_escape_string($con,$DA3_Q202b[$count]);

$DA3_Q202c_clean = mysqli_real_escape_string($con,$DA3_Q202c[$count]);

$DA3_Q202d_clean = mysqli_real_escape_string($con,$DA3_Q202d[$count]);

$DA3_Q203_clean = mysqli_real_escape_string($con,$DA3_Q203[$count]);
$DA3_Q204_clean = mysqli_real_escape_string($con,$DA3_Q204[$count]);
$DA3_Q204O_clean = mysqli_real_escape_string($con,$DA3_Q204O[$count]);
$DA3_Q205_clean = mysqli_real_escape_string($con,$DA3_Q205[$count]);
$DA3_Q206_clean = mysqli_real_escape_string($con,$DA3_Q206[$count]);
$DA3_Q207_clean = mysqli_real_escape_string($con,$DA3_Q207[$count]);
$DA3_Q301_clean = mysqli_real_escape_string($con,$DA3_Q301[$count]);
$DA3_Q302_clean = mysqli_real_escape_string($con,$DA3_Q302[$count]);
$DA3_Q303_clean = mysqli_real_escape_string($con,$DA3_Q303[$count]);
$DA3_Q400_clean = mysqli_real_escape_string($con,$DA3_Q400[$count]);
$Entry_User_ID_clean = mysqli_real_escape_string($con,$Entry_User_ID[$count]);
$Entry_Date_clean = mysqli_real_escape_string($con,$Entry_Date[$count]);
$QC_cleanUser = mysqli_real_escape_string($con, $QCUser[$count]);




  if(!empty($Entry_Date_clean)){  
  if($QC_cleanUser=='5551' || $QC_cleanUser=='5552' || $QC_cleanUser=='5553'){$QC_clean = '1';} else{$QC_clean ='2';}

$q .= 'INSERT ignore INTO `da3`(
`QC`,`DA3_childID`,`DA3_Q101_code`,`DA3_Q102_code`,`DA3_Q103_code`,`DA3_Q104_code`,`DA3_Q105_code`,`DA3_Q106_code`,`DA3_Q107`,`DA3_Q108_code`,`DA3_Q109`,`DA3_Q110`,`DA3_Q111`,`DA3_Q112`,`DA3_Q113`,`DA3_Q114`,`DA3_Q115`,`DA3_Q116`,`DA3_Q117Date`,`DA3_Q117Time`,`DA3_Q201`,`DA3_Q202a`,`DA3_Q202b`,`DA3_Q202c`,`DA3_Q202d`,`DA3_Q203`,`DA3_Q204`,`DA3_Q204O`,`DA3_Q205`,`DA3_Q206`,`DA3_Q207`,`DA3_Q301`,`DA3_Q302`,`DA3_Q303`,`DA3_Q400`,`Entry_User_ID`,`Entry_Date`, `dataTransferredOn`) VALUES("'.$QC_clean.'","'.$DA3_childID_clean.'","'.$DA3_Q101_code_clean.'","'.$DA3_Q102_code_clean.'","'.$DA3_Q103_code_clean.'","'.$DA3_Q104_code_clean.'","'.$DA3_Q105_code_clean.'","'.$DA3_Q106_code_clean.'","'.$DA3_Q107_clean.'","'.$DA3_Q108_code_clean.'","'.$DA3_Q109_clean.'","'.$DA3_Q110_clean.'","'.$DA3_Q111_clean.'","'.$DA3_Q112_clean.'","'.$DA3_Q113_clean.'","'.$DA3_Q114_clean.'","'.$DA3_Q115_clean.'","'.$DA3_Q116_clean.'","'.$DA3_Q117Date_clean.'","'.$DA3_Q117Time_clean.'","'.$DA3_Q201_clean.'","'.$DA3_Q202a_clean.'","'.$DA3_Q202b_clean.'","'.$DA3_Q202c_clean.'","'.$DA3_Q202d_clean.'","'.$DA3_Q203_clean.'","'.$DA3_Q204_clean.'","'.$DA3_Q204O_clean.'","'.$DA3_Q205_clean.'","'.$DA3_Q206_clean.'","'.$DA3_Q207_clean.'","'.$DA3_Q301_clean.'","'.$DA3_Q302_clean.'","'.$DA3_Q303_clean.'","'.$DA3_Q400_clean.'","'.$Entry_User_ID_clean.'",
"'.$Entry_Date_clean.'", CURDATE());';

 }
 } 

 if($q!=''){
mysqli_multi_query($con,$q);
 }

 else{
  echo "error";     
 }
echo "success";
 }
 ?>