


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
 if(isset($_POST['EN_DATE']) && !empty($_POST['EN_DATE']))
 {

 $DA1_CARD=$_POST['DA1_CARD'];
 $C_ID=$_POST['C_ID'];
 $DA1_MPID=$_POST['DA1_MPID'];
 $DA1_CPID=$_POST['DA1_CPID'];
 $CC_NAME=$_POST['CC_NAME'];
 $C_NAME=$_POST['C_NAME'];
 $C_M_NAME=$_POST['C_M_NAME'];
 $C_F_NAME=$_POST['C_F_NAME'];
 $C_DOB=$_POST['C_DOB'];
 $C_AGE=$_POST['C_AGE'];
 $C_SEX=$_POST['C_SEX'];
 $C_CHP=$_POST['C_CHP'];
 $V_DATE=$_POST['V_DATE'];
 $V_TIME=$_POST['V_TIME'];
 $Q_201=$_POST['Q_201'];
 $Q_202=$_POST['Q_202'];
 $Q_203=$_POST['Q_203'];
 $Q_204=$_POST['Q_204'];
 $Q_205=$_POST['Q_205'];
 $Q_206=$_POST['Q_206'];
 $Q_207=$_POST['Q_207'];
 $Q_208=$_POST['Q_208'];
 $Q_209=$_POST['Q_209'];
 $Q_210=$_POST['Q_210'];
 $EN_TIME=$_POST['EN_TIME'];
 $EN_USER=$_POST['EN_USER'];
 $EN_DATE=$_POST['EN_DATE']; 
 $QCUser=$_POST['EN_USER'];

 

 for($count = 0; $count<count($C_ID); $count++){

  $DA1_CARD_clean = mysqli_real_escape_string($con, $DA1_CARD[$count]);
  $C_ID_clean = mysqli_real_escape_string($con, $C_ID[$count]);
  $DA1_MPID_clean = mysqli_real_escape_string($con, $DA1_MPID[$count]);
  $DA1_CPID_clean = mysqli_real_escape_string($con, $DA1_CPID[$count]);
  $CC_NAME_clean = mysqli_real_escape_string($con, $CC_NAME[$count]);
  $C_NAME_clean = mysqli_real_escape_string($con, $C_NAME[$count]);
  $C_M_NAME_clean = mysqli_real_escape_string($con, $C_M_NAME[$count]);
  $C_F_NAME_clean = mysqli_real_escape_string($con, $C_F_NAME[$count]);
  $C_DOB_clean = mysqli_real_escape_string($con, $C_DOB[$count]);
  $C_AGE_clean = mysqli_real_escape_string($con, $C_AGE[$count]);
  $C_SEX_clean = mysqli_real_escape_string($con, $C_SEX[$count]);
  $C_CHP_clean = mysqli_real_escape_string($con, $C_CHP[$count]);
  $V_DATE_clean = mysqli_real_escape_string($con, $V_DATE[$count]);
  $V_TIME_clean = mysqli_real_escape_string($con, $V_TIME[$count]);
  $Q_201_clean = mysqli_real_escape_string($con, $Q_201[$count]);
  $Q_202_clean = mysqli_real_escape_string($con, $Q_202[$count]);
  $Q_203_clean = mysqli_real_escape_string($con, $Q_203[$count]);
  $Q_204_clean = mysqli_real_escape_string($con, $Q_204[$count]);
  $Q_205_clean = mysqli_real_escape_string($con, $Q_205[$count]);
  $Q_206_clean = mysqli_real_escape_string($con, $Q_206[$count]);
  $Q_207_clean = mysqli_real_escape_string($con, $Q_207[$count]);
  $Q_208_clean = mysqli_real_escape_string($con, $Q_208[$count]);
  $Q_209_clean = mysqli_real_escape_string($con, $Q_209[$count]);
  $Q_210_clean = mysqli_real_escape_string($con, $Q_210[$count]);
  $EN_TIME_clean = mysqli_real_escape_string($con, $EN_TIME[$count]);
  $EN_USER_clean = mysqli_real_escape_string($con, $EN_USER[$count]);
  $EN_DATE_clean = mysqli_real_escape_string($con, $EN_DATE[$count]);
  $QC_cleanUser = mysqli_real_escape_string($con, $QCUser[$count]);

if(!empty($EN_DATE_clean)){  
if($QC_cleanUser=='5551' || $QC_cleanUser=='5552' || $QC_cleanUser=='5553'){$QC_clean = '1';} else{$QC_clean ='2';}
  
$q .= 'INSERT ignore INTO `das`(`QC`,`CardAvailable`,`Child_ID`, `MPID`, `CPID`, `CC_Code`, `CName`, `MName`, `FName`, `CDOB`,`CAge`, `CSex`,`CHCP`, `Visit_Date`,`Start_Time`, `Q201`, `Q202`, `Q203`, `Q204`, `Q205`, `Q206`, `Q207`, `Q208`, `Q209`, `Q210`, `End_Time`, `Entry_User_ID`,`Entry_Date`, `dataTransferredOn` ) VALUES("'.$QC_clean.'","'.$DA1_CARD_clean.'","'.$C_ID_clean.'", "'.$DA1_MPID_clean.'", "'.$DA1_CPID_clean.'",   "'.$CC_NAME_clean.'", "'.$C_NAME_clean.'", "'.$C_M_NAME_clean.'", "'.$C_F_NAME_clean.'", "'.$C_DOB_clean.'", "'.$C_AGE_clean.'", "'.$C_SEX_clean.'", "'.$C_CHP_clean.'", "'.$V_DATE_clean.'", "'.$V_TIME_clean.'", "'.$Q_201_clean.'", "'.$Q_202_clean.'", "'.$Q_203_clean.'", "'.$Q_204_clean.'", "'.$Q_205_clean.'", "'.$Q_206_clean.'", "'.$Q_207_clean.'", "'.$Q_208_clean.'", "'.$Q_209_clean.'", "'.$Q_210_clean.'", "'.$EN_TIME_clean.'", "'.$EN_USER_clean.'", "'.$EN_DATE_clean.'", CURDATE());';
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