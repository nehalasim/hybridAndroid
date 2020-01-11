


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
 if(isset($_POST['DA3_b_childID']) && !empty($_POST['DA3_b_childID']))
 {
$DA3_b_childID=$_POST['DA3_b_childID'];
$DA3_b_CPID=$_POST['DA3_b_CPID'];
$DA3_b_CName=$_POST['DA3_b_CName'];
$DA3_b_MName=$_POST['DA3_b_MName'];
$DA3_b_MPID=$_POST['DA3_b_MPID'];

$DA3_b_RecordingDate=$_POST['DA3_b_RecordingDate'];
$DA3_b_RecordingTime=$_POST['DA3_b_RecordingTime'];

$DA3_b_VisitDate=$_POST['DA3_b_VisitDate'];
$DA3_b_VisitTime=$_POST['DA3_b_VisitTime'];

$DA3_b_Q201a=$_POST['DA3_b_Q201a'];
$DA3_b_Q201b=$_POST['DA3_b_Q201b'];
$DA3_b_Q201c=$_POST['DA3_b_Q201c'];
$DA3_b_Q202a=$_POST['DA3_b_Q202a'];
$DA3_b_Q202b=$_POST['DA3_b_Q202b'];
$DA3_b_Q202c=$_POST['DA3_b_Q202c'];
$DA3_b_Q203a=$_POST['DA3_b_Q203a'];
$DA3_b_Q203b=$_POST['DA3_b_Q203b'];
$DA3_b_Q203c=$_POST['DA3_b_Q203c'];
$DA3_b_Q204a=$_POST['DA3_b_Q204a'];
$DA3_b_Q204b=$_POST['DA3_b_Q204b'];
$DA3_b_Q204c=$_POST['DA3_b_Q204c'];
$DA3_b_Entry_User_ID=$_POST['DA3_b_Entry_User_ID'];
$DA3_b_Entry_Date=$_POST['DA3_b_Entry_Date'];



 

 for($count = 0; $count<count($DA3_b_childID); $count++){

$DA3_b_childID_clean = mysqli_real_escape_string($con, $DA3_b_childID[$count]);
$DA3_b_CPID_clean = mysqli_real_escape_string($con, $DA3_b_CPID[$count]);
$DA3_b_CName_clean = mysqli_real_escape_string($con, $DA3_b_CName[$count]);
$DA3_b_MName_clean = mysqli_real_escape_string($con, $DA3_b_MName[$count]);
$DA3_b_MPID_clean = mysqli_real_escape_string($con, $DA3_b_MPID[$count]);

$DA3_b_RecordingDate_clean = mysqli_real_escape_string($con, $DA3_b_RecordingDate[$count]);
$DA3_b_RecordingTime_clean = mysqli_real_escape_string($con, $DA3_b_RecordingTime[$count]);

$DA3_b_VisitDate_clean = mysqli_real_escape_string($con, $DA3_b_VisitDate[$count]);
$DA3_b_VisitTime_clean = mysqli_real_escape_string($con, $DA3_b_VisitTime[$count]);

$DA3_b_Q201a_clean = mysqli_real_escape_string($con, $DA3_b_Q201a[$count]);
$DA3_b_Q201b_clean = mysqli_real_escape_string($con, $DA3_b_Q201b[$count]);
$DA3_b_Q201c_clean = mysqli_real_escape_string($con, $DA3_b_Q201c[$count]);
$DA3_b_Q202a_clean = mysqli_real_escape_string($con, $DA3_b_Q202a[$count]);
$DA3_b_Q202b_clean = mysqli_real_escape_string($con, $DA3_b_Q202b[$count]);
$DA3_b_Q202c_clean = mysqli_real_escape_string($con, $DA3_b_Q202c[$count]);
$DA3_b_Q203a_clean = mysqli_real_escape_string($con, $DA3_b_Q203a[$count]);
$DA3_b_Q203b_clean = mysqli_real_escape_string($con, $DA3_b_Q203b[$count]);
$DA3_b_Q203c_clean = mysqli_real_escape_string($con, $DA3_b_Q203c[$count]);
$DA3_b_Q204a_clean = mysqli_real_escape_string($con, $DA3_b_Q204a[$count]);
$DA3_b_Q204b_clean = mysqli_real_escape_string($con, $DA3_b_Q204b[$count]);
$DA3_b_Q204c_clean = mysqli_real_escape_string($con, $DA3_b_Q204c[$count]);
$DA3_b_Entry_User_ID_clean = mysqli_real_escape_string($con, $DA3_b_Entry_User_ID[$count]);
$DA3_b_Entry_Date_clean = mysqli_real_escape_string($con, $DA3_b_Entry_Date[$count]);







if(!empty($DA3_b_Entry_User_ID_clean)){  
 $q .= 'INSERT ignore INTO da3_b(`childID`, `CPID`, `CName`, `MName`, `MPID`, `RecordingDate`, `RecordingTime`,`VisitDate`,`VisitTime`, `Q201a`, `Q201b`, `Q201c`, `Q202a`, `Q202b`, `Q202c`, `Q203a`, `Q203b`, `Q203c`,  `Q204a`, `Q204b`, `Q204c`, 
 `Entry_User_ID`,`Entry_Date`) VALUES   ("'.$DA3_b_childID_clean.'",   "'.$DA3_b_CPID_clean.'",    "'.$DA3_b_CName_clean.'",    "'.$DA3_b_MName_clean.'",    "'.$DA3_b_MPID_clean.'",    "'.$DA3_b_RecordingDate_clean.'",    "'.$DA3_b_RecordingTime_clean.'",    "'.$DA3_b_VisitDate_clean.'",    "'.$DA3_b_VisitTime_clean.'",    "'.$DA3_b_Q201a_clean.'",    "'.$DA3_b_Q201b_clean.'",    "'.$DA3_b_Q201c_clean.'",    "'.$DA3_b_Q202a_clean.'",    "'.$DA3_b_Q202b_clean.'",    "'.$DA3_b_Q202c_clean.'",    "'.$DA3_b_Q203a_clean.'", 
  "'.$DA3_b_Q203b_clean.'",    "'.$DA3_b_Q203c_clean.'",    "'.$DA3_b_Q204a_clean.'",    "'.$DA3_b_Q204b_clean.'",    "'.$DA3_b_Q204c_clean.'",     "'.$DA3_b_Entry_User_ID_clean.'" ,     "'.$DA3_b_Entry_Date_clean.'");';
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
 