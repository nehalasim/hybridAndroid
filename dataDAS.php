

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

if(isset($_POST['DAS_Entry_Date']) && !empty($_POST['DAS_Entry_Date']) && !empty($_POST['DAS_RoundNo']))
 {
$DAS_RoundNo=$_POST['DAS_RoundNo'];
$DAS_VisitNo=$_POST['DAS_VisitNo'];
$DAS_Q106=$_POST['DAS_Q106'];
$DAS_Q101=$_POST['DAS_Q101'];
$DAS_Q102=$_POST['DAS_Q102'];
$DAS_Q103=$_POST['DAS_Q103'];
$DAS_Q104=$_POST['DAS_Q104'];
$DAS_Q105=$_POST['DAS_Q105'];
$DAS_Q107=$_POST['DAS_Q107'];
$DAS_Q108=$_POST['DAS_Q108'];
$DAS_Q109=$_POST['DAS_Q109'];
$DAS_Q110=$_POST['DAS_Q110'];
$DAS_Q111=$_POST['DAS_Q111'];
$DAS_Q112=$_POST['DAS_Q112'];
$DAS_Q113=$_POST['DAS_Q113'];
$DAS_Q114=$_POST['DAS_Q114'];
$DAS_Q115Date=$_POST['DAS_Q115Date'];
$DAS_Q115Time=$_POST['DAS_Q115Time'];
$DAS_Q116=$_POST['DAS_Q116'];
$DAS_Q116Other=$_POST['DAS_Q116Other'];
$DAS_Q117=$_POST['DAS_Q117'];
$DAS_Q117Other=$_POST['DAS_Q117Other'];
$DAS_Q201=$_POST['DAS_Q201'];
$DAS_Q202_a=$_POST['DAS_Q202_a'];
$DAS_Q202_a_day=$_POST['DAS_Q202_a_day'];
$DAS_Q202_b=$_POST['DAS_Q202_b'];
$DAS_Q202_b_day=$_POST['DAS_Q202_b_day'];
$DAS_Q202_c=$_POST['DAS_Q202_c'];
$DAS_Q202_c_day=$_POST['DAS_Q202_c_day'];
$DAS_Q202_d=$_POST['DAS_Q202_d'];
$DAS_Q202_d_day=$_POST['DAS_Q202_d_day'];
$DAS_Q202_e=$_POST['DAS_Q202_e'];
$DAS_Q202_e_day=$_POST['DAS_Q202_e_day'];
$DAS_Q203=$_POST['DAS_Q203'];
$DAS_Q203_day=$_POST['DAS_Q203_day'];
$DAS_Q204=$_POST['DAS_Q204'];
$DAS_Q204_day=$_POST['DAS_Q204_day'];
$DAS_Q205=$_POST['DAS_Q205'];
$DAS_Q205_day=$_POST['DAS_Q205_day'];
$DAS_Q301=$_POST['DAS_Q301'];
$DAS_Q302=$_POST['DAS_Q302'];
$DAS_Q302_other=$_POST['DAS_Q302_other'];
$DAS_Q401=$_POST['DAS_Q401'];
$DAS_Q402_a=$_POST['DAS_Q402_a'];
$DAS_Q402_b=$_POST['DAS_Q402_b'];
$DAS_Q402_c=$_POST['DAS_Q402_c'];
$DAS_Q403=$_POST['DAS_Q403'];
$DAS_Q404=$_POST['DAS_Q404'];
$DAS_Q405=$_POST['DAS_Q405'];
$DAS_Q501=$_POST['DAS_Q501'];
$DAS_Q502=$_POST['DAS_Q502'];
$DAS_Q503=$_POST['DAS_Q503'];
$DAS_Q504=$_POST['DAS_Q504'];
$DAS_Q505=$_POST['DAS_Q505'];
$DAS_Q506=$_POST['DAS_Q506'];
$DAS_Q601=$_POST['DAS_Q601'];
$DAS_Q602=$_POST['DAS_Q602'];
$DAS_Q603=$_POST['DAS_Q603'];
$DAS_Q604a=$_POST['DAS_Q604a'];
$DAS_Q604b=$_POST['DAS_Q604b'];
$DAS_Q605_1=$_POST['DAS_Q605_1'];
$DAS_Q605_2=$_POST['DAS_Q605_2'];
$DAS_Q606_1=$_POST['DAS_Q606_1'];
$DAS_Q606_2=$_POST['DAS_Q606_2'];
$DAS_Q607=$_POST['DAS_Q607'];
$DAS_Q608=$_POST['DAS_Q608'];
$DAS_Q609=$_POST['DAS_Q609'];
$DAS_Q701=$_POST['DAS_Q701'];
$DAS_Q701O=$_POST['DAS_Q701O'];
$DAS_Q801=$_POST['DAS_Q801'];
$DAS_Q802=$_POST['DAS_Q802'];
$DAS_Q803=$_POST['DAS_Q803'];
$DAS_Q804=$_POST['DAS_Q804'];
$DAS_Q805=$_POST['DAS_Q805'];
$DAS_Q806a=$_POST['DAS_Q806a'];
$DAS_Q806b=$_POST['DAS_Q806b'];
$DAS_Q806c=$_POST['DAS_Q806c'];
$DAS_Q806d=$_POST['DAS_Q806d'];
$DAS_Q806e=$_POST['DAS_Q806e'];
$DAS_Q806f=$_POST['DAS_Q806f'];
$DAS_Q806g=$_POST['DAS_Q806g'];
$DAS_Q806h=$_POST['DAS_Q806h'];
$DAS_Q806i=$_POST['DAS_Q806i'];
$DAS_Q806j=$_POST['DAS_Q806j'];
$DAS_Q806k=$_POST['DAS_Q806k'];
$DAS_Q806kOth=$_POST['DAS_Q806kOth'];
$DAS_Q900=$_POST['DAS_Q900'];
$Entry_User_ID=$_POST['DAS_Entry_User_ID'];
$Entry_Date=$_POST['DAS_Entry_Date'];

$QCUser=$_POST['DAS_Entry_User_ID'];


 

 for($count = 0; $count<count($DAS_Q106); $count++){
$DAS_RoundNo_clean=mysqli_real_escape_string($con,$DAS_RoundNo[$count]);
$DAS_VisitNo_clean=mysqli_real_escape_string($con,$DAS_VisitNo[$count]);
$DAS_Q106_clean=mysqli_real_escape_string($con,$DAS_Q106[$count]);
$DAS_Q101_clean=mysqli_real_escape_string($con,$DAS_Q101[$count]);
$DAS_Q102_clean=mysqli_real_escape_string($con,$DAS_Q102[$count]);
$DAS_Q103_clean=mysqli_real_escape_string($con,$DAS_Q103[$count]);
$DAS_Q104_clean=mysqli_real_escape_string($con,$DAS_Q104[$count]);
$DAS_Q105_clean=mysqli_real_escape_string($con,$DAS_Q105[$count]);
$DAS_Q107_clean=mysqli_real_escape_string($con,$DAS_Q107[$count]);
$DAS_Q108_clean=mysqli_real_escape_string($con,$DAS_Q108[$count]);
$DAS_Q109_clean=mysqli_real_escape_string($con,$DAS_Q109[$count]);
$DAS_Q110_clean=mysqli_real_escape_string($con,$DAS_Q110[$count]);
$DAS_Q111_clean=mysqli_real_escape_string($con,$DAS_Q111[$count]);
$DAS_Q112_clean=mysqli_real_escape_string($con,$DAS_Q112[$count]);
$DAS_Q113_clean=mysqli_real_escape_string($con,$DAS_Q113[$count]);
$DAS_Q114_clean=mysqli_real_escape_string($con,$DAS_Q114[$count]);
$DAS_Q115Date_clean=mysqli_real_escape_string($con,$DAS_Q115Date[$count]);
$DAS_Q115Time_clean=mysqli_real_escape_string($con,$DAS_Q115Time[$count]);
$DAS_Q116_clean=mysqli_real_escape_string($con,$DAS_Q116[$count]);
$DAS_Q116Other_clean=mysqli_real_escape_string($con,$DAS_Q116Other[$count]);
$DAS_Q117_clean=mysqli_real_escape_string($con,$DAS_Q117[$count]);
$DAS_Q117Other_clean=mysqli_real_escape_string($con,$DAS_Q117Other[$count]);
$DAS_Q201_clean=mysqli_real_escape_string($con,$DAS_Q201[$count]);
$DAS_Q202_a_clean=mysqli_real_escape_string($con,$DAS_Q202_a[$count]);
$DAS_Q202_a_day_clean=mysqli_real_escape_string($con,$DAS_Q202_a_day[$count]);
$DAS_Q202_b_clean=mysqli_real_escape_string($con,$DAS_Q202_b[$count]);
$DAS_Q202_b_day_clean=mysqli_real_escape_string($con,$DAS_Q202_b_day[$count]);
$DAS_Q202_c_clean=mysqli_real_escape_string($con,$DAS_Q202_c[$count]);
$DAS_Q202_c_day_clean=mysqli_real_escape_string($con,$DAS_Q202_c_day[$count]);
$DAS_Q202_d_clean=mysqli_real_escape_string($con,$DAS_Q202_d[$count]);
$DAS_Q202_d_day_clean=mysqli_real_escape_string($con,$DAS_Q202_d_day[$count]);
$DAS_Q202_e_clean=mysqli_real_escape_string($con,$DAS_Q202_e[$count]);
$DAS_Q202_e_day_clean=mysqli_real_escape_string($con,$DAS_Q202_e_day[$count]);
$DAS_Q203_clean=mysqli_real_escape_string($con,$DAS_Q203[$count]);
$DAS_Q203_day_clean=mysqli_real_escape_string($con,$DAS_Q203_day[$count]);
$DAS_Q204_clean=mysqli_real_escape_string($con,$DAS_Q204[$count]);
$DAS_Q204_day_clean=mysqli_real_escape_string($con,$DAS_Q204_day[$count]);
$DAS_Q205_clean=mysqli_real_escape_string($con,$DAS_Q205[$count]);
$DAS_Q205_day_clean=mysqli_real_escape_string($con,$DAS_Q205_day[$count]);
$DAS_Q301_clean=mysqli_real_escape_string($con,$DAS_Q301[$count]);
$DAS_Q302_clean=mysqli_real_escape_string($con,$DAS_Q302[$count]);
$DAS_Q302_other_clean=mysqli_real_escape_string($con,$DAS_Q302_other[$count]);
$DAS_Q401_clean=mysqli_real_escape_string($con,$DAS_Q401[$count]);
$DAS_Q402_a_clean=mysqli_real_escape_string($con,$DAS_Q402_a[$count]);
$DAS_Q402_b_clean=mysqli_real_escape_string($con,$DAS_Q402_b[$count]);
$DAS_Q402_c_clean=mysqli_real_escape_string($con,$DAS_Q402_c[$count]);
$DAS_Q403_clean=mysqli_real_escape_string($con,$DAS_Q403[$count]);
$DAS_Q404_clean=mysqli_real_escape_string($con,$DAS_Q404[$count]);
$DAS_Q405_clean=mysqli_real_escape_string($con,$DAS_Q405[$count]);
$DAS_Q501_clean=mysqli_real_escape_string($con,$DAS_Q501[$count]);
$DAS_Q502_clean=mysqli_real_escape_string($con,$DAS_Q502[$count]);
$DAS_Q503_clean=mysqli_real_escape_string($con,$DAS_Q503[$count]);
$DAS_Q504_clean=mysqli_real_escape_string($con,$DAS_Q504[$count]);
$DAS_Q505_clean=mysqli_real_escape_string($con,$DAS_Q505[$count]);
$DAS_Q506_clean=mysqli_real_escape_string($con,$DAS_Q506[$count]);
$DAS_Q601_clean=mysqli_real_escape_string($con,$DAS_Q601[$count]);
$DAS_Q602_clean=mysqli_real_escape_string($con,$DAS_Q602[$count]);
$DAS_Q603_clean=mysqli_real_escape_string($con,$DAS_Q603[$count]);
$DAS_Q604a_clean=mysqli_real_escape_string($con,$DAS_Q604a[$count]);
$DAS_Q604b_clean=mysqli_real_escape_string($con,$DAS_Q604b[$count]);
$DAS_Q605_1_clean=mysqli_real_escape_string($con,$DAS_Q605_1[$count]);
$DAS_Q605_2_clean=mysqli_real_escape_string($con,$DAS_Q605_2[$count]);
$DAS_Q606_1_clean=mysqli_real_escape_string($con,$DAS_Q606_1[$count]);
$DAS_Q606_2_clean=mysqli_real_escape_string($con,$DAS_Q606_2[$count]);
$DAS_Q607_clean=mysqli_real_escape_string($con,$DAS_Q607[$count]);
$DAS_Q608_clean=mysqli_real_escape_string($con,$DAS_Q608[$count]);
$DAS_Q609_clean=mysqli_real_escape_string($con,$DAS_Q609[$count]);
$DAS_Q701_clean=mysqli_real_escape_string($con,$DAS_Q701[$count]);
$DAS_Q701O_clean=mysqli_real_escape_string($con,$DAS_Q701O[$count]);
$DAS_Q801_clean=mysqli_real_escape_string($con,$DAS_Q801[$count]);
$DAS_Q802_clean=mysqli_real_escape_string($con,$DAS_Q802[$count]);
$DAS_Q803_clean=mysqli_real_escape_string($con,$DAS_Q803[$count]);
$DAS_Q804_clean=mysqli_real_escape_string($con,$DAS_Q804[$count]);
$DAS_Q805_clean=mysqli_real_escape_string($con,$DAS_Q805[$count]);
$DAS_Q806a_clean=mysqli_real_escape_string($con,$DAS_Q806a[$count]);
$DAS_Q806b_clean=mysqli_real_escape_string($con,$DAS_Q806b[$count]);
$DAS_Q806c_clean=mysqli_real_escape_string($con,$DAS_Q806c[$count]);
$DAS_Q806d_clean=mysqli_real_escape_string($con,$DAS_Q806d[$count]);
$DAS_Q806e_clean=mysqli_real_escape_string($con,$DAS_Q806e[$count]);
$DAS_Q806f_clean=mysqli_real_escape_string($con,$DAS_Q806f[$count]);
$DAS_Q806g_clean=mysqli_real_escape_string($con,$DAS_Q806g[$count]);
$DAS_Q806h_clean=mysqli_real_escape_string($con,$DAS_Q806h[$count]);
$DAS_Q806i_clean=mysqli_real_escape_string($con,$DAS_Q806i[$count]);
$DAS_Q806j_clean=mysqli_real_escape_string($con,$DAS_Q806j[$count]);
$DAS_Q806k_clean=mysqli_real_escape_string($con,$DAS_Q806k[$count]);
$DAS_Q806kOth_clean=mysqli_real_escape_string($con,$DAS_Q806kOth[$count]);
$DAS_Q900_clean=mysqli_real_escape_string($con,$DAS_Q900[$count]);
$Entry_User_ID_clean=mysqli_real_escape_string($con,$Entry_User_ID[$count]);
$Entry_Date_clean=mysqli_real_escape_string($con,$Entry_Date[$count]);

$QC_cleanUser = mysqli_real_escape_string($con, $QCUser[$count]);

  if(!empty($Entry_Date_clean)){  

if($QC_cleanUser=='5551' || $QC_cleanUser=='5552' || $QC_cleanUser=='5553'){$QC_clean = '1';} else{$QC_clean ='2';}
  
$q .= 'INSERT ignore INTO `das_chw`(
`QC`,
`DAS_RoundNo`,
`DAS_VisitNo`,
`DAS_Q106`,
`DAS_Q101`,
`DAS_Q102`,
`DAS_Q103`,
`DAS_Q104`,
`DAS_Q105`,
`DAS_Q107`,
`DAS_Q108`,
`DAS_Q109`,
`DAS_Q110`,
`DAS_Q111`,
`DAS_Q112`,
`DAS_Q113`,
`DAS_Q114`,
`DAS_Q115Date`,
`DAS_Q115Time`,
`DAS_Q116`,
`DAS_Q116Other`,
`DAS_Q117`,
`DAS_Q117Other`,
`DAS_Q201`,
`DAS_Q202_a`,
`DAS_Q202_a_day`,
`DAS_Q202_b`,
`DAS_Q202_b_day`,
`DAS_Q202_c`,
`DAS_Q202_c_day`,
`DAS_Q202_d`,
`DAS_Q202_d_day`,
`DAS_Q202_e`,
`DAS_Q202_e_day`,
`DAS_Q203`,
`DAS_Q203_day`,
`DAS_Q204`,
`DAS_Q204_day`,
`DAS_Q205`,
`DAS_Q205_day`,
`DAS_Q301`,
`DAS_Q302`,
`DAS_Q302_other`,
`DAS_Q401`,
`DAS_Q402_a`,
`DAS_Q402_b`,
`DAS_Q402_c`,
`DAS_Q403`,
`DAS_Q404`,
`DAS_Q405`,
`DAS_Q501`,
`DAS_Q502`,
`DAS_Q503`,
`DAS_Q504`,
`DAS_Q505`,
`DAS_Q506`,
`DAS_Q601`,
`DAS_Q602`,
`DAS_Q603`,
`DAS_Q604a`,
`DAS_Q604b`,
`DAS_Q605_1`,
`DAS_Q605_2`,
`DAS_Q606_1`,
`DAS_Q606_2`,
`DAS_Q607`,
`DAS_Q608`,
`DAS_Q609`,
`DAS_Q701`,
`DAS_Q701O`,
`DAS_Q801`,
`DAS_Q802`,
`DAS_Q803`,
`DAS_Q804`,
`DAS_Q805`,
`DAS_Q806a`,
`DAS_Q806b`,
`DAS_Q806c`,
`DAS_Q806d`,
`DAS_Q806e`,
`DAS_Q806f`,
`DAS_Q806g`,
`DAS_Q806h`,
`DAS_Q806i`,
`DAS_Q806j`,
`DAS_Q806k`,
`DAS_Q806kOth`,
`DAS_Q900`,
`Entry_User_ID`,
`Entry_Date`,
`dataTransferredOn`) VALUES(
"'.$QC_clean.'",
"'.$DAS_RoundNo_clean.'",
"'.$DAS_VisitNo_clean.'",
"'.$DAS_Q106_clean.'",
"'.$DAS_Q101_clean.'",
"'.$DAS_Q102_clean.'",
"'.$DAS_Q103_clean.'",
"'.$DAS_Q104_clean.'",
"'.$DAS_Q105_clean.'",
"'.$DAS_Q107_clean.'",
"'.$DAS_Q108_clean.'",
"'.$DAS_Q109_clean.'",
"'.$DAS_Q110_clean.'",
"'.$DAS_Q111_clean.'",
"'.$DAS_Q112_clean.'",
"'.$DAS_Q113_clean.'",
"'.$DAS_Q114_clean.'",
"'.$DAS_Q115Date_clean.'",
"'.$DAS_Q115Time_clean.'",
"'.$DAS_Q116_clean.'",
"'.$DAS_Q116Other_clean.'",
"'.$DAS_Q117_clean.'",
"'.$DAS_Q117Other_clean.'",
"'.$DAS_Q201_clean.'",
"'.$DAS_Q202_a_clean.'",
"'.$DAS_Q202_a_day_clean.'",
"'.$DAS_Q202_b_clean.'",
"'.$DAS_Q202_b_day_clean.'",
"'.$DAS_Q202_c_clean.'",
"'.$DAS_Q202_c_day_clean.'",
"'.$DAS_Q202_d_clean.'",
"'.$DAS_Q202_d_day_clean.'",
"'.$DAS_Q202_e_clean.'",
"'.$DAS_Q202_e_day_clean.'",
"'.$DAS_Q203_clean.'",
"'.$DAS_Q203_day_clean.'",
"'.$DAS_Q204_clean.'",
"'.$DAS_Q204_day_clean.'",
"'.$DAS_Q205_clean.'",
"'.$DAS_Q205_day_clean.'",
"'.$DAS_Q301_clean.'",
"'.$DAS_Q302_clean.'",
"'.$DAS_Q302_other_clean.'",
"'.$DAS_Q401_clean.'",
"'.$DAS_Q402_a_clean.'",
"'.$DAS_Q402_b_clean.'",
"'.$DAS_Q402_c_clean.'",
"'.$DAS_Q403_clean.'",
"'.$DAS_Q404_clean.'",
"'.$DAS_Q405_clean.'",
"'.$DAS_Q501_clean.'",
"'.$DAS_Q502_clean.'",
"'.$DAS_Q503_clean.'",
"'.$DAS_Q504_clean.'",
"'.$DAS_Q505_clean.'",
"'.$DAS_Q506_clean.'",
"'.$DAS_Q601_clean.'",
"'.$DAS_Q602_clean.'",
"'.$DAS_Q603_clean.'",
"'.$DAS_Q604a_clean.'",
"'.$DAS_Q604b_clean.'",
"'.$DAS_Q605_1_clean.'",
"'.$DAS_Q605_2_clean.'",
"'.$DAS_Q606_1_clean.'",
"'.$DAS_Q606_2_clean.'",
"'.$DAS_Q607_clean.'",
"'.$DAS_Q608_clean.'",
"'.$DAS_Q609_clean.'",
"'.$DAS_Q701_clean.'",
"'.$DAS_Q701O_clean.'",
"'.$DAS_Q801_clean.'",
"'.$DAS_Q802_clean.'",
"'.$DAS_Q803_clean.'",
"'.$DAS_Q804_clean.'",
"'.$DAS_Q805_clean.'",
"'.$DAS_Q806a_clean.'",
"'.$DAS_Q806b_clean.'",
"'.$DAS_Q806c_clean.'",
"'.$DAS_Q806d_clean.'",
"'.$DAS_Q806e_clean.'",
"'.$DAS_Q806f_clean.'",
"'.$DAS_Q806g_clean.'",
"'.$DAS_Q806h_clean.'",
"'.$DAS_Q806i_clean.'",
"'.$DAS_Q806j_clean.'",
"'.$DAS_Q806k_clean.'",
"'.$DAS_Q806kOth_clean.'",
"'.$DAS_Q900_clean.'",
"'.$Entry_User_ID_clean.'",
"'.$Entry_Date_clean.'",
CURDATE());';
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