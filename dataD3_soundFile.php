


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


$childID=$_POST['childID'];
$CPID=$_POST['CPID'];
$CName=$_POST['CName'];
$MName=$_POST['MName'];
$MCID=$_POST['MCID'];
$MPID=$_POST['MPID'];
$CDOB=$_POST['CDOB'];
$Csex=$_POST['Csex'];
$Q202a=$_POST['Q202a'];
$Q501=$_POST['Q501'];
$Q202b=$_POST['Q202b'];
$Q502=$_POST['Q502'];
$Q202c=$_POST['Q202c'];
$Q503=$_POST['Q503'];
$Q202d=$_POST['Q202d'];
$Q504=$_POST['Q504'];
$Entry_User_ID=$_POST['Entry_User_ID'];
$Entry_Date=$_POST['Entry_Date'];


 

 for($count = 0; $count<count($childID); $count++){


$childID_clean = mysqli_real_escape_string($con, $childID[$count]);
$CPID_clean = mysqli_real_escape_string($con, $CPID[$count]);
$CName_clean = mysqli_real_escape_string($con, $CName[$count]);
$MName_clean = mysqli_real_escape_string($con, $MName[$count]);
$MCID_clean = mysqli_real_escape_string($con, $MCID[$count]);
$MPID_clean = mysqli_real_escape_string($con, $MPID[$count]);
$CDOB_clean = mysqli_real_escape_string($con, $CDOB[$count]);
$Csex_clean = mysqli_real_escape_string($con, $Csex[$count]);
$Q202a_clean = mysqli_real_escape_string($con, $Q202a[$count]);
$Q501_clean = mysqli_real_escape_string($con, $Q501[$count]);
$Q202b_clean = mysqli_real_escape_string($con, $Q202b[$count]);
$Q502_clean = mysqli_real_escape_string($con, $Q502[$count]);
$Q202c_clean = mysqli_real_escape_string($con, $Q202c[$count]);
$Q503_clean = mysqli_real_escape_string($con, $Q503[$count]);
$Q202d_clean = mysqli_real_escape_string($con, $Q202d[$count]);
$Q504_clean = mysqli_real_escape_string($con, $Q504[$count]);
$Entry_User_ID_clean = mysqli_real_escape_string($con, $Entry_User_ID[$count]);
$Entry_Date_clean = mysqli_real_escape_string($con, $Entry_Date[$count]);


if(!empty($Entry_User_ID_clean)){  
 $q .= 'INSERT ignore INTO `da3_soundfile` (`childID`, `CPID`, `CName`, `MName`, `MCID`, `MPID`, `CDOB`, `Csex`, `Q202a`, `Q501`, `Q202b`, `Q502`, `Q202c`, `Q503`, `Q202d`, `Q504`, `Entry_User_ID`, `Entry_Date`) VALUES  ("'.$childID_clean.'", "'.$CPID_clean.'", "'.$CName_clean.'", "'.$MName_clean.'", "'.$MCID_clean.'", "'.$MPID_clean.'", "'.$CDOB_clean.'", "'.$Csex_clean.'", "'.$Q202a_clean.'", "'.$Q501_clean.'", "'.$Q202b_clean.'", "'.$Q502_clean.'", "'.$Q202c_clean.'", "'.$Q503_clean.'", "'.$Q202d_clean.'", "'.$Q504_clean.'", "'.$Entry_User_ID_clean.'", "'.$Entry_Date_clean.'");';
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
 