$(document).on("ready", function(){
databaseHandler.createDatabase();
});

function childID(){
var ChildID_1 = $("#ChildID_1").val();
var ChildID_2_MAIN = $("#ChildID_2").val();

if(ChildID_1=="" || ChildID_1.length>2 || ChildID_1.length<2){
alert("প্রথম বক্সে কমিউনিটি ক্লিনিক এর কোড দিন।");
}

else if(ChildID_2_MAIN=="" || ChildID_2_MAIN.length>5 || ChildID_2_MAIN.length<5){
alert("দ্বিতীয় বক্সে শিশুর আইডি দিন।");
}

else {
// window.location.href='#review';
var chidlID  = document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
duplicateChk.dupData(chidlID);
$("#ChildID_1").val();
$("#ChildID_2").val();
 window.location.href='#identification_2';
}

}


function welcomeScreen() {
  setTimeout(function(){ window.location.href='#DateTimeChk'; }, 3000);
}



function ChildInfo(){
var ChildName = $("#Q102").val();
var ChildMName = $("#Q103").val();
var ChildDob = $("#Q104").val().split('/');
var Child_NO_Dob = $("#Q105").val();
var Child_Sex = $("#Q106").val();

var IsCard = document.getElementById("IsCard").value;
var Q105NoCard = document.getElementById("Q105").value;

var Q104_card = document.getElementById("Q104_card").value;
var Q105_card = document.getElementById("Q105_card").value;
var Q106_Card = document.getElementById("Q106_card").value;



var DobNo = document.getElementById("DobNo").value;


var dob = new Date(ChildDob).getTime();
var today = new Date().getTime();


var timeDiff = Math.abs(today - dob);
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));


var CDate = new Date();

var CYear = CDate.getFullYear();

var CM = CDate.getMonth()+1;
if(CM.toString().length<2){
var CMonth = "0"+CM;
}
else{
var CMonth = CM;
}

var CD = CDate.getDate();

if(CD.toString().length<2){
var CDay = "0"+CD;
}
else{
var CDay = CD;
}

var H = CDate.getHours();
if(H.toString().length<2){
var CHour = "0"+H;
}
else{
var CHour = H;
}
var M = CDate.getMinutes();
if(M.toString().length<2){
var CMin = "0"+M;
}
else{
var CMin = M;
}


if(IsCard==""){
alert("মায়ের কার্ড কি আছে? হাঁ বা না নির্বাচন করুন।");
}
else if(ChildName==""){
alert("শিশুর সঠিক নাম দিন।");
}
else if(ChildMName==""){
alert("শিশুর মায়ের সঠিক নাম দিন।");
}
else if(DobNo=="" && IsCard=="2"){
alert("শিশুর জন্ম তারিখ কি জান। হাঁ বা না নির্বাচন করুন।");
}

else if((ChildDob=="dd/mm/yyyy" || ChildDob=="" || dob >= today)&& document.getElementById("DobNo").selectedIndex==1 && IsCard=="2"){
alert("সঠিক জন্ম তারিখ দিন।");
}
else if(document.getElementById("DobNo").selectedIndex==2  && IsCard=="2" && (Child_NO_Dob=="" || Child_NO_Dob.length>2 || Child_NO_Dob.length<2 || Child_NO_Dob < 0)){
alert("শিশুর সঠিক বয়স(মাস) দিন।");
}
else if(Child_Sex=="" && IsCard=="2" ){
alert("শিশুটি ছেলে না মেয়, তা নির্বাচন করুন।");
}
else if(Q105NoCard=="" && IsCard=="2" ){
alert("শিশুর সঠিক বয়স নেই। শিশুর সঠিক জন্ম তারিখ দিয়ে, খালি জায়গায় একবার চাপ দিন এবং লক্ষ করুন জন্ম তারিখ এর নিচে বয়স আসছে কি না।");
}

else if(document.getElementById("Q105").value=="" && document.getElementById("Q105_card").value==""){
alert("শিশুর সঠিক জন্ম তারিখ বা বয়স সঠিক আছে কিনা, তা ভাল করে দেখুন।");
}


else if(IsCard=="1" && Q104_card==""){
alert("শিশুর জন্ম তারিক নেই।");
}
else if(IsCard=="1" && Q105_card==""){
alert("শিশুর সঠিক বয়স নেই।");
}
else if(IsCard=="1" && Q106_Card==""){
alert("শিশু ছেলে না মে। সঠিক তথ্য নেই।");
}

else if(document.getElementById("Q101_code").value==""){
alert("কমিউনিটি ক্লিনিকের কোড আসেনি। পুনরায় অ্যাপটি বন্ধ করে আবার শুরু করুন।");
}


else {
document.getElementById("Q108Date").value = CDay+"/"+CMonth+"/"+CYear;
document.getElementById("Q108Time").value = CHour+":"+CMin;

if(Child_NO_Dob>59 || Q105_card >59){
window.location.href='#NotEligible';
document.getElementById("Age5YearMore").innerHTML = "আপনি জন্ম তারিখ "+ ChildDob +" "+Child_NO_Dob+" ( বছর / মাস / দিন ) বা (মাস) এন্ট্রি দিয়েছেন। এই জন্ম তারিখ ৫ বছরের উপরে আছে। আপনি কি নিশ্চিত এই জন্ম তারিখ সঠিক করে এন্ট্রি দিয়েছেন। হ্যাঁ হলে (হ্যাঁ) ক্লিক করুন। যদি না হয়, তাহলে (না) তে ক্লিক করুন।";
}
else{
//window.location.href='#identification_4';
window.location.href='#inclusion_1';
//transfer MPID and CPID to DA2 form
document.getElementById("DA2_Q111").value=document.getElementById("PCV_MPID").value;
document.getElementById("DA2_Q107").value=document.getElementById("PCV_CPID").value;

//transfer MPID and CPID to DA3 form
document.getElementById("DA3_Q111").value=document.getElementById("PCV_MPID").value;
document.getElementById("DA3_Q107").value=document.getElementById("PCV_CPID").value;


}



if(Child_NO_Dob>59 || Q105_card >59){
document.getElementById("Q201").value = "2";
document.getElementById("Q201Display").value = "না";
}
else{
document.getElementById("Q201").value = "1";
document.getElementById("Q201Display").value = "হ্যাঁ";
}

}

}



function ChilDOB_M(){

if(document.getElementById("DobNo").value=="yes"){
var ChildDob = document.getElementById("Q104").value;

var dob = new Date(ChildDob).getTime();
var today = new Date().getTime();


var timeDiff = Math.abs(today - dob);
var diffDays = (Math.ceil(timeDiff / (1000 * 3600 * 24))-1);
var mn = (diffDays/30.4);


document.getElementById("Q105").value = mn.toString().split(".")[0];
}
}


function CARD_ChilDOB_M(){

var ChildDob = document.getElementById("Q104_card").value;
var dob = new Date(ChildDob).getTime();
var today = new Date().getTime();



var timeDiff = Math.abs(today - dob);
var diffDays = (Math.ceil(timeDiff / (1000 * 3600 * 24))-1);


var mn = (diffDays/30.4);
//alert(mn);
//alert(mn.toString().split(".")[0]); ///before
document.getElementById("Q105_card").value = mn.toString().split(".")[0];


}



function dob(){

if(document.getElementById("DobNo").selectedIndex==2){
document.getElementById("Q104").value="";
document.getElementById("Q104").disabled = true;
document.getElementById("Q105").disabled = false;
document.getElementById("YesDOB").style.display = "none";
document.getElementById("NoDOB").style.display = "block";
}
else if(document.getElementById("DobNo").selectedIndex==1){
document.getElementById("Q104").disabled = false;
document.getElementById("Q105").disabled = true;
document.getElementById("YesDOB").style.display = "block";
document.getElementById("NoDOB").style.display = "none";
}
else{
alert(" শিশুর জন্ম তারিখ আছে কি নেই, এই মেনু থেকে যে কোন একটি নির্বাচন করুন।");
}

}




function adminL(){

var pin = document.getElementById("pin").value;

if(pin=="8184662"){
 window.location.href='#BackupPage';
}
else{
alert("আপনার দেয়া পিন নাম্বারটি সঠিক নয়। পুনরায় পিন নাম্বার দিন।");
}

}

function adminLogOut(){
 window.location.href='#login';
 document.getElementById("pin").value="";
}


function adminBack(){
 window.location.href='#login';
 document.getElementById("pin").value="";
}








function userLogOut(){


document.getElementById("ChildID_2").value="";

document.getElementById("Q102").value="";
document.getElementById("Q103").value="";
document.getElementById("Q104").value="";
document.getElementById("Q105").value="";
document.getElementById("Q106").value="";


document.getElementById("Q108Time").value="";
document.getElementById("Q108Date").value="";


document.getElementById("Q201").value="";
document.getElementById("Q202").value="";
document.getElementById("Q203").value="";
document.getElementById("Q204").value="";
document.getElementById("Q205").value="";
document.getElementById("Q206").value="";
document.getElementById("Q207").value="";
//document.getElementById("Q208").value="";
document.getElementById("Q209").value="";
document.getElementById("Q210").value="";

document.getElementById("Q301").value="";
document.getElementById("Q300").value="";


document.getElementById("CardAvail_Yes").style.display="none";
document.getElementById("Q106_card").value ="";
document.getElementById("Q105_card").value ="";
document.getElementById("Q104_card").value ="";
document.getElementById("CardAvail_No").style.display="none";

document.getElementById("DobNo").value="";
$('#DobNo').selectmenu().selectmenu('refresh', true);
document.getElementById("Q104").value="";
document.getElementById("Q105").value="";
document.getElementById("Q106").value="";
$('#Q106').selectmenu().selectmenu('refresh', true);

document.getElementById("Q103Father").value="";
document.getElementById("Q103").value="";
document.getElementById("Q102").value="";
document.getElementById("PCV_CPID").value="";
document.getElementById("PCV_MPID").value="";
document.getElementById("IsCard").value="";
$('#IsCard').selectmenu().selectmenu('refresh', true);
document.getElementById("CardAvail").style.display="none";

document.getElementById("NoDOB").style.display="none";
document.getElementById("YesDOB").style.display="none";
document.getElementById("ChildID_1").value="";
document.getElementById("ChildID_2").value="";


document.getElementById("Q202").value="";
$('#Q202').selectmenu().selectmenu('refresh', true);

document.getElementById("Q203").value="";
$('#Q203').selectmenu().selectmenu('refresh', true);

document.getElementById("Q204").value="";
$('#Q204').selectmenu().selectmenu('refresh', true);

document.getElementById("Q205").value="";
$('#Q205').selectmenu().selectmenu('refresh', true);

document.getElementById("Q201").value="";
document.getElementById("Q201Display").value="";

document.getElementById("Q207").value="";
$('#Q207').selectmenu().selectmenu('refresh', true);


document.getElementById("Q210").value="";
$('#Q210').selectmenu().selectmenu('refresh', true);


 window.location.href='#login';
}


function CHCP(){
var CHCP = $("#Q107").val();

if(CHCP=="" || CHCP.length>4 || CHCP.length<4){
alert("CHCP কোড সঠিক নয়।");
}
else {
 window.location.href='#inclusion_1';
}

}



function inclusion(){
var Q201 = $("#Q201").val();
var Q202 = $("#Q202").val();
var Q203 = $("#Q203").val();
var Q204 = $("#Q204").val();
var Q205 = $("#Q205").val();

var CHCP = $("#Q107").val();
var CC_VDT = $("#Q108Date").val();
var CC_TIME = $("#Q108Time").val();

if(Q201==""){
alert("প্রশ্ন Q2.01 থেকে একটি নির্বাচন করুন।");
}
else if(Q202==""){
alert("প্রশ্ন Q2.02 থেকে একটি নির্বাচন করুন।");
}
else if(Q203==""){
alert("প্রশ্ন Q2.03 থেকে একটি নির্বাচন করুন।");
}
else if(Q204==""){
alert("প্রশ্ন Q2.04 থেকে একটি নির্বাচন করুন।");
}
else if(Q205==""){
alert("প্রশ্ন Q2.05 থেকে একটি নির্বাচন করুন।");
}
else if(CHCP.length!=4 || CC_VDT=="" || CC_TIME==""){
alert("CHCP, তারিখ এবং সময় এর কিছু তথ্য সঠিক নয়। অ্যাপটি বন্ধ করে আবার শুরু করুন।");
}

else {

if(Q201=="1" && (Q202=="1" || Q203=="1" || Q204=="1" || Q205=="1")){
document.getElementById("Q206").value = "1";
document.getElementById("Q206Display").value = "হাঁ";
}
else{
document.getElementById("Q206").value = "2";
document.getElementById("Q206Display").value = "না";
}
 window.location.href='#inclusion_2';

}

}





function inclusionQ206(){
var Q206 = $("#Q206").val();

if(Q206=="2"){

// document.getElementById("Q207").selectedIndex = "0";
  //document.getElementById("Q208").selectedIndex = "0";
 document.getElementById("Q207").value = "";
 $('#Q207').selectmenu().selectmenu('refresh', true);

 document.getElementById("Q208").value = "";
document.getElementById("Q208_Display").value = "";
document.getElementById("Q208_Card").value = "";
document.getElementById("Q208_Card_Display").value = "";

 window.location.href='#exclusion_3';
 document.getElementById("Q209").value = "2";
 document.getElementById("Q209Display").value = "না";
document.getElementById("reviewForQ206").style.display = "none";
}
else{
 document.getElementById("Q209").value = "";
  document.getElementById("Q209Display").value = "";
 window.location.href='#exclusion_1';
 document.getElementById("reviewForQ206").style.display = "none";

}
}






function inclusionQ207DropDown(){
var Q207 = $("#Q207").val();
var IsCard = $("#IsCard").val();
if(Q207==""){
alert("প্রশ্ন Q2.07 থেকে একটি নির্বাচন করুন।");
}

else if(Q207=="1"){
  document.getElementById("Q208_Display").value = "";
  document.getElementById("Q208").value = "";

  document.getElementById("Q208_Card").value = "";
  document.getElementById("Q208_Card_Display").value = "";

//  window.location.href='#exclusion_3';
  document.getElementById("Q209").value = "2";
  document.getElementById("Q209Display").value = "না";
}
else if(Q207=="2" && IsCard=="2"){
  document.getElementById("Q208_Display").value = "না";
  document.getElementById("Q208").value = "2";

  document.getElementById("Q209").value = "2";
  document.getElementById("Q209Display").value = "না";
}
else{
 PCV_DATA_FOR_SCREENING_30day();
// document.getElementById("Q209").value = "";
// document.getElementById("Q209Display").value = "";
// window.location.href='#exclusion_2';
// window.location.href='#exclusion_3';

}

}


function inclusionQ207(){
var Q207 = $("#Q207").val();
var Q208 = $("#Q208").val();
var Q208_Card = $("#Q208_Card").val();
var Q206 = $("#Q206").val();
var IsCard = $("#IsCard").val();

if(Q207==""){
alert("প্রশ্ন Q2.07 থেকে একটি নির্বাচন করুন।");
}

//else if(Q206=="1" && Q207=="2" && Q208_Card=="2" && IsCard=="1"){
else if(Q206=="1" && Q207=="2" && IsCard=="1"){
document.getElementById("Q209").value = "1";
document.getElementById("Q209Display").value = "হাঁ";
window.location.href='#exclusion_3';
}
//else if( IsCard=="1" && (Q206=="2" || Q207=="1" || Q208_Card=="1")){
else if( IsCard=="1" && (Q206=="2" || Q207=="1")){
document.getElementById("Q209").value = "2";
document.getElementById("Q209Display").value = "না";
window.location.href='#exclusion_3';
}
//else if(Q206=="1" && Q207=="2" && Q208=="2" && IsCard=="2"){
else if(Q206=="1" && Q207=="2" && IsCard=="2"){
document.getElementById("Q209").value = "1";
document.getElementById("Q209Display").value = "হাঁ";
window.location.href='#exclusion_3';
}
//else if( IsCard=="2" && (Q206=="2" || Q207=="1" || Q208=="1")){
else if( IsCard=="2" && (Q206=="2" || Q207=="1")){
document.getElementById("Q209").value = "2";
document.getElementById("Q209Display").value = "না";
window.location.href='#exclusion_3';
}

}


function inclusionQ209Back(){
var Q206 = $("#Q206").val();
var Q207 = $("#Q207").val();

if(Q206=="2"){
 window.location.href='#inclusion_2';
document.getElementById("reviewForQ209").style.display = "none";
}
else if(Q207=="1"){
 window.location.href='#exclusion_1';
document.getElementById("reviewForQ209").style.display = "none";
}
else{
 window.location.href='#exclusion_1';
document.getElementById("reviewForQ209").style.display = "none";
}

}


function inclusionQ208(){
var Q208 = $("#Q208").val();
var Q208_Card = $("#Q208_Card").val();
var Q206 = $("#Q206").val();
var Q207 = $("#Q207").val();
var IsCard = $("#IsCard").val();

if(Q208=="" && IsCard=="2"){
alert("প্রশ্ন Q2.08 থেকে একটি নির্বাচন করুন।");
}
else if(Q208_Card=="" && IsCard=="1"){
alert("প্রশ্ন Q2.08 এ সঠিক তথ্য নেই।");
}
else if(Q206=="1" && Q207=="2" && Q208_Card=="2" && IsCard=="1"){
document.getElementById("Q209").value = "1";
document.getElementById("Q209Display").value = "হাঁ";
window.location.href='#exclusion_3';
}
else if( IsCard=="1" && (Q206=="2" || Q207=="1" || Q208_Card=="1")){
document.getElementById("Q209").value = "2";
document.getElementById("Q209Display").value = "না";
window.location.href='#exclusion_3';

}
else if(Q206=="1" && Q207=="2" && Q208=="2" && IsCard=="2"){
document.getElementById("Q209").value = "1";
document.getElementById("Q209Display").value = "হাঁ";
window.location.href='#exclusion_3';
}
else if( IsCard=="2" && (Q206=="2" || Q207=="1" || Q208=="1")){
document.getElementById("Q209").value = "2";
document.getElementById("Q209Display").value = "না";
window.location.href='#exclusion_3';
}
else{
alert("আপনার তথ্য সঠিক নয়।");
}
}




function inclusionQ209(){

document.getElementById("reviewForQ209").style.display = "none";

var Q201Val = $("#Q201").val();
var Q202Val = $("#Q202").val();
var Q203Val = $("#Q203").val();
var Q204Val = $("#Q204").val();
var Q205Val = $("#Q205").val();
var Q206Val = $("#Q206").val();
var Q207Val = $("#Q207").val();
var Q209Val = $("#Q209").val();
var Q210Val = $("#Q210").val();

var Q201;
var Q202;
var Q203;
var Q204;
var Q205;
var Q206;
var Q207;
var Q209;
var Q210v;

if(Q201Val=="1"){Q201 = "হ্যাঁ"}else{Q201 = "না"}
if(Q202Val=="1"){Q202 = "হ্যাঁ"}else{Q202 = "না"}
if(Q203Val=="1"){Q203 = "হ্যাঁ"}else{Q203 = "না"}
if(Q204Val=="1"){Q204 = "হ্যাঁ"}else{Q204 = "না"}
if(Q205Val=="1"){Q205 = "হ্যাঁ"}else{Q205 = "না"}
if(Q206Val=="1"){Q206 = "হ্যাঁ"}else{Q206 = "না"}
if(Q207Val=="1"){Q207 = "হ্যাঁ"} else if(Q207Val=="2"){Q207 = "না"} else{Q207 = ""}
if(Q209Val=="1"){Q209 = "হ্যাঁ"} else if(Q209Val=="2"){Q209 = "না"} else{Q209 = ""}
if(Q210Val=="1"){Q210v = "হ্যাঁ"} else if (Q210Val=="2"){Q210v = "না"} else {Q210v = ""}






 if(document.getElementById("Q209").value=="2"){
document.getElementById("StatusEn").innerHTML = "এই শিশুটি উপযুক্ত নয়।  কারন নিম্নে উল্লেখ করা হল।";
document.getElementById("statusReportQ201").innerHTML ="২.০১ - শিশুর বয়স ৫ বছরের কমঃ "+ Q201;
document.getElementById("statusReportQ202").innerHTML ="২.০২ - শিশুটির কাশি আছেঃ "+ Q202;
document.getElementById("statusReportQ203").innerHTML ="২.০৩ - শিশুটি এখানে আসার পর কেশেছেঃ "+ Q203;
document.getElementById("statusReportQ204").innerHTML ="২.০৪ - শিশুটির শ্বাসকষ্ট আছেঃ "+ Q204;
document.getElementById("statusReportQ205").innerHTML ="২.০৫ - শিশুটি এখানে আসার পর শ্বাসকষ্ট দেখেছেনঃ  "+  Q205;
document.getElementById("statusReportQ206").innerHTML ="২.০৬ - গবেষণার শর্তাবলী পূরণ হয়েছেঃ  "+   Q206;
document.getElementById("statusReportQ207").innerHTML ="২.০৭ - শিশুটিকে এখনি রেফার করা প্রয়োজনঃ   "+   Q207;
document.getElementById("statusReportQ209").innerHTML ="২.০৯ - গবেষণায় অংশগ্রহণের জন্য উপযুক্তঃ   "+  Q209;
document.getElementById("statusReportQ210").innerHTML ="২.১০ - অভিভাবক সম্মতি দিয়েছেনঃ  "+ Q210v;
}











var Q209 = $("#Q209").val();
if(Q209=="1"){
 window.location.href='#exclusion_4';
}
else{

var CDate = new Date();
var CYear = CDate.getFullYear();
var CM09 = CDate.getMonth()+1;

if(CM09.toString().length<2)
{
var CMonth = "0"+CM09;
}
else{
var CMonth =CM09;
}

var CD09 = CDate.getDate();
if(CD09.toString().length<2)
{
var CDay = "0"+CD09;
}
else{
var CDay = CD09;
}

var CH09 = CDate.getHours();
if(CH09.toString().length<2){
var CHour = "0"+CH09;
}
else{
var CHour = CH09;
}


var CM09 = CDate.getMinutes();
if(CM09.toString().length<2){
var CMin ="0"+CM09;
}
else{
var CMin = CM09;
}



document.getElementById("Q210").selectedIndex = "0";
document.getElementById("Q210").value = "";
$('#Q210').selectmenu().selectmenu('refresh', true);

document.getElementById("Q300").value = CHour+":"+CMin;
document.getElementById("Q301").value = CDay+"/"+CMonth+"/"+CYear;



 window.location.href='#end';
}
}


function inclusionQ210(){


var Q201Val = $("#Q201").val();
var Q202Val = $("#Q202").val();
var Q203Val = $("#Q203").val();
var Q204Val = $("#Q204").val();
var Q205Val = $("#Q205").val();
var Q206Val = $("#Q206").val();
var Q207Val = $("#Q207").val();
var Q209Val = $("#Q209").val();
var Q210Val = $("#Q210").val();

var Q201;
var Q202;
var Q203;
var Q204;
var Q205;
var Q206;
var Q207;
var Q209;
var Q210v;

if(Q201Val=="1"){Q201 = "হ্যাঁ"}else{Q201 = "না"}
if(Q202Val=="1"){Q202 = "হ্যাঁ"}else{Q202 = "না"}
if(Q203Val=="1"){Q203 = "হ্যাঁ"}else{Q203 = "না"}
if(Q204Val=="1"){Q204 = "হ্যাঁ"}else{Q204 = "না"}
if(Q205Val=="1"){Q205 = "হ্যাঁ"}else{Q205 = "না"}
if(Q206Val=="1"){Q206 = "হ্যাঁ"}else{Q206 = "না"}
if(Q207Val=="1"){Q207 = "হ্যাঁ"}else{Q207 = "না"}
if(Q209Val=="1"){Q209 = "হ্যাঁ"}else{Q209 = "না"}
if(Q210Val=="1"){Q210v = "হ্যাঁ"}else{Q210v = "না"}







var Q210 = $("#Q210").val();
var CDate = new Date();
var CYear = CDate.getFullYear();
var CM09 = CDate.getMonth()+1;

if(CM09.toString().length<2)
{
var CMonth = "0"+CM09;
}
else{
var CMonth =CM09;
}

var CD09 = CDate.getDate();
if(CD09.toString().length<2)
{
var CDay = "0"+CD09;
}
else{
var CDay = CD09;
}

var CH09 = CDate.getHours();
if(CH09.toString().length<2){
var CHour = "0"+CH09;
}
else{
var CHour = CH09;
}


var CM09 = CDate.getMinutes();
if(CM09.toString().length<2){
var CMin ="0"+CM09;
}
else{
var CMin = CM09;
}



if(Q210==""){
alert("প্রশ্ন Q2.10 থেকে একটি নির্বাচন করুন।");
}
else{
document.getElementById("Q300").value = CHour+":"+CMin;
document.getElementById("Q301").value = CDay+"/"+CMonth+"/"+CYear;
 window.location.href='#end';

if(document.getElementById("Q209").value=="1" && document.getElementById("Q210").value =="1"){
document.getElementById("StatusEn").innerHTML = "এই শিশুটি উপযুক্ত হয়েছে। কারন নিম্নে উল্লেখ করা হল।";

document.getElementById("statusReportQ201").innerHTML ="২.০১ - শিশুর বয়স ৫ বছরের কমঃ "+ Q201;
document.getElementById("statusReportQ202").innerHTML ="২.০২ - শিশুটির কাশি আছেঃ "+ Q202;
document.getElementById("statusReportQ203").innerHTML ="২.০৩ - শিশুটি এখানে আসার পর কেশেছেঃ "+ Q203;
document.getElementById("statusReportQ204").innerHTML ="২.০৪ - শিশুটির শ্বাসকষ্ট আছেঃ "+ Q204;
document.getElementById("statusReportQ205").innerHTML ="২.০৫ - শিশুটি এখানে আসার পর শ্বাসকষ্ট দেখেছেনঃ  "+  Q205;
document.getElementById("statusReportQ206").innerHTML ="২.০৬ - গবেষণার শর্তাবলী পূরণ হয়েছেঃ  "+   Q206;
document.getElementById("statusReportQ207").innerHTML ="২.০৭ - শিশুটিকে এখনি রেফার করা প্রয়োজনঃ   "+   Q207;
document.getElementById("statusReportQ209").innerHTML ="২.০৯ - গবেষণায় অংশগ্রহণের জন্য উপযুক্তঃ   "+  Q209;
document.getElementById("statusReportQ210").innerHTML ="২.১০ - অভিভাবক সম্মতি দিয়েছেনঃ  "+ Q210v;

}
else if((document.getElementById("Q209").value=="1" && document.getElementById("Q210").value =="2") || document.getElementById("Q209").value=="2"){
document.getElementById("StatusEn").innerHTML = "এই শিশুটি উপযুক্ত নয়।  কারন নিম্নে উল্লেখ করা হল।";
document.getElementById("statusReportQ201").innerHTML ="২.০১ - শিশুর বয়স ৫ বছরের কমঃ "+ Q201;
document.getElementById("statusReportQ202").innerHTML ="২.০২ - শিশুটির কাশি আছেঃ "+ Q202;
document.getElementById("statusReportQ203").innerHTML ="২.০৩ - শিশুটি এখানে আসার পর কেশেছেঃ "+ Q203;
document.getElementById("statusReportQ204").innerHTML ="২.০৪ - শিশুটির শ্বাসকষ্ট আছেঃ "+ Q204;
document.getElementById("statusReportQ205").innerHTML ="২.০৫ - শিশুটি এখানে আসার পর শ্বাসকষ্ট দেখেছেনঃ  "+  Q205;
document.getElementById("statusReportQ206").innerHTML ="২.০৬ - গবেষণার শর্তাবলী পূরণ হয়েছেঃ  "+   Q206;
document.getElementById("statusReportQ207").innerHTML ="২.০৭ - শিশুটিকে এখনি রেফার করা প্রয়োজনঃ   "+   Q207;
document.getElementById("statusReportQ209").innerHTML ="২.০৯ - গবেষণায় অংশগ্রহণের জন্য উপযুক্তঃ   "+  Q209;
document.getElementById("statusReportQ210").innerHTML ="২.১০ - অভিভাবক সম্মতি দিয়েছেনঃ  "+ Q210v;
}



}
}



function inclusionEndBack(){
var Q209 = $("#Q209").val();


if(Q209=="2"){
 window.location.href='#exclusion_3';
}
else{
 window.location.href='#exclusion_4';
}

}


function inclusionQ300(){

var chidlID  = document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;

var Q101_code = document.getElementById("Q101_code").value;
var Q102  = document.getElementById("Q102").value;
var Q103  = document.getElementById("Q103").value;

var Q104;
var Q105;
var Q106;

if(document.getElementById("IsCard").value=="1"){
Q104 = document.getElementById("Q104_card").value;
Q105 = document.getElementById("Q105_card").value;
Q106 = document.getElementById("Q106_card").value;
}
else if(document.getElementById("IsCard").value=="2"){
Q104 = document.getElementById("Q104").value;
Q105 = document.getElementById("Q105").value;
Q106 = document.getElementById("Q106").value;

}

//var Q104  = document.getElementById("Q104").value;
//var Q105  = document.getElementById("Q105").value;
//var Q106  = document.getElementById("Q106").value;

var Q107  = document.getElementById("Q107").value;
var Q108Date  = document.getElementById("Q108Date").value;
var Q108Time  = document.getElementById("Q108Time").value;

var Q201  = document.getElementById("Q201Display").value;
var Q202  = document.getElementById("Q202").value;
var Q203  = document.getElementById("Q203").value;
var Q204  = document.getElementById("Q204").value;
var Q205  = document.getElementById("Q205").value;
var Q206  = document.getElementById("Q206Display").value;
var Q207  = document.getElementById("Q207").value;

var Q208;

if(document.getElementById("Q208_Card").value!=""){
Q208  = document.getElementById("Q208_Card").value;
}
else{
Q208  = document.getElementById("Q208").value;
}


var Q209  = document.getElementById("Q209Display").value;
var Q210  = document.getElementById("Q210").value;
var Q300  = document.getElementById("Q300").value;
var Q301  = document.getElementById("Q301").value;


document.getElementById("ChildID_save").value = chidlID;

document.getElementById("Q101_code_save").value = Q101_code;
document.getElementById("Q102_save").value = Q102;
document.getElementById("Q103_save").value = Q103;

document.getElementById("Q104_save").value = Q104
document.getElementById("Q105_save").value = Q105;
document.getElementById("Q106_save").value = Q106;

document.getElementById("Q107_save").value = Q107;
document.getElementById("Q108Date_save").value = Q108Date;
document.getElementById("Q108Time_save").value = Q108Time;

document.getElementById("Q201_save").value = Q201;

if(Q202=="1"){
document.getElementById("Q202_save").value = "হাঁ";
}
else{
document.getElementById("Q202_save").value = "না";
}

if(Q203=="1"){
document.getElementById("Q203_save").value = "হাঁ";
}
else{
document.getElementById("Q203_save").value = "না";
}

if(Q204=="1"){
document.getElementById("Q204_save").value = "হাঁ";
}
else{
document.getElementById("Q204_save").value = "না";
}

if(Q205=="1"){
document.getElementById("Q205_save").value = "হাঁ";
}
else{
document.getElementById("Q205_save").value = "না";
}



document.getElementById("Q206_save").value = Q206;


if(Q207!="" && Q207=="1"){
document.getElementById("Q207_save").value = "হাঁ";
}
else if(Q207!="" && Q207=="2"){
document.getElementById("Q207_save").value = "না";
}
else{
document.getElementById("Q207_save").value = "";
}


if(Q208!="" && Q208=="1"){
document.getElementById("Q208_save").value = "হাঁ";
}
else if(Q208!="" && Q208=="2"){
document.getElementById("Q208_save").value = "না";
}
else{
document.getElementById("Q208_save").value = "";
}



document.getElementById("Q209_save").value = Q209;


if(Q210!="" && Q210=="1"){
document.getElementById("Q210_save").value = "হাঁ";
}
else if(Q210!="" && Q210=="2"){
document.getElementById("Q210_save").value = "না";
}
else{
document.getElementById("Q210_save").value ="";
}

document.getElementById("Q300_save").value = Q300;
document.getElementById("Q301_save").value = Q301;




if(document.getElementById("Q209").value=="2"){
document.getElementById("statusMsg").innerHTML="এই শিশু (আইডি "+ chidlID +") স্টাডির জন্য উপযুক্ত নয়। এখন OK বাটনে ক্লিক করে,  সাক্ষাৎকার শেষ করুন তবে শিশুটিকে মূল্যায়ন করে জাতীয় গাইডলাইন অনুযায়ী চিকিৎসা প্রদান করুন এবং যে উত্তর গুলো নির্বাচন বা লিখেছেন তা আবার দেখে তথ্য সেভ করুন।";
document.getElementById("EligibleSignal").innerHTML = "উপযুক্ত নয়";
document.getElementById("statusMsg").style.backgroundColor = "#fa9793";
}
else if(document.getElementById("Q209").value=="1" && document.getElementById("Q210").value=="2" ){
document.getElementById("statusMsg").innerHTML="শিশুটির অভিভাবক এই স্টাডির জন্য সম্মতি দেননি। এখন OK বাটনে ক্লিক করে, গবেষণার জন্য তথ্য গ্রহন শেষ করুন তবে শিশুটিকে মূল্যায়ন করে জাতীয় গাইডলাইন অনুযায়ী চিকিৎসা প্রদান করুন এবং যে উত্তর গুলো নির্বাচন বা লিখেছেন তা আবার দেখে তথ্য সেভ করুন।";
document.getElementById("EligibleSignal").innerHTML = "উপযুক্ত নয়";
document.getElementById("statusMsg").style.backgroundColor = "#fa9793";
}
else if(document.getElementById("Q209").value=="1" && document.getElementById("Q210").value=="1" ){
document.getElementById("statusMsg").innerHTML="এই শিশু (আইডি "+ chidlID +") স্টাডির জন্য উপযুক্ত হয়েছে। এখন OK বাটনে ক্লিক করে, যে উত্তর গুলো নির্বাচন বা লিখেছেন তা আবার দেখে তথ্য সেভ করুন।";
document.getElementById("EligibleSignal").innerHTML = "উপযুক্ত হয়েছে";
document.getElementById("statusMsg").style.backgroundColor = "#a5f59a";
}

window.location.href='#status';

}






function addProduct(){

if(document.getElementById("ChildID_1").value!="" && document.getElementById("ChildID_2").value!=""){

var IsCard = document.getElementById("IsCard").value;
var PCV_MPID  = document.getElementById("PCV_MPID").value;
var PCV_CPID = document.getElementById("PCV_CPID").value;

var chidlID  = document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;

var Q101_code = document.getElementById("Q101_code").value;
var Q102  = document.getElementById("Q102").value;
var Q103  = document.getElementById("Q103").value;
var Q103Father  = document.getElementById("Q103Father").value;



if(document.getElementById("IsCard").value=="1"){
var Q104  = document.getElementById("Q104_card").value;
var Q105  = document.getElementById("Q105_card").value;
var Q106  = document.getElementById("Q106_card").value;
}
else if(document.getElementById("IsCard").value=="2"){
var Q104  = document.getElementById("Q104").value;
var Q105  = document.getElementById("Q105").value;
var Q106  = document.getElementById("Q106").value;
}


var Q107  = document.getElementById("Q107").value;
var Q108Date  = document.getElementById("Q108Date").value;
var Q108Time  = document.getElementById("Q108Time").value;

var Q201  = document.getElementById("Q201").value;
var Q202  = document.getElementById("Q202").value;
var Q203  = document.getElementById("Q203").value;
var Q204  = document.getElementById("Q204").value;
var Q205  = document.getElementById("Q205").value;
var Q206  = document.getElementById("Q206").value;
var Q207  = document.getElementById("Q207").value;

if(document.getElementById("IsCard").value=="1"){
var Q208  = document.getElementById("Q208_Card").value;
}
else{
var Q208  = document.getElementById("Q208").value;
}

var Q209  = document.getElementById("Q209").value;
var Q210  = document.getElementById("Q210").value;
var Q300  = document.getElementById("Q300").value;
var Entry_User_ID  = document.getElementById("UserName").value;
var Entry_Date  = document.getElementById("Q108Date").value;


//var name  = $("#txtName").val();
//var mname  = $("#txtMName").val();
productHandler.addProduct(IsCard, chidlID, PCV_MPID, PCV_CPID, Q101_code, Q102, Q103, Q103Father, Q104, Q105, Q106, Q107, Q108Date, Q108Time, Q201, Q202, Q203, Q204, Q205, Q206, Q207, Q208, Q209, Q210, Q300, Entry_User_ID, Entry_Date);
//$("#UserName").val();

}
}






function addDataD2(){
if(document.getElementById("DA2_ChildID").value!="" && document.getElementById("DA2_ChildID").value.length==7){


var DA2_Cluster = document.getElementById("DA2_Cluster_code").value;
var DA2_Block = document.getElementById("DA2_Block_code").value;

var DA2_ChildID = document.getElementById("DA2_ChildID").value;
var DA2_Q107 = document.getElementById("DA2_Q107").value;


if(document.getElementById("DA2_Q111").value=="99999999999" && document.getElementById("DA2_Q107").value=="99999999999"){
var DA2_Q101_code = document.getElementById("DA2_Q101_card_no").value;
var DA2_Q102_code = document.getElementById("DA2_Q102_card_no").value;
var DA2_Q103_code = document.getElementById("DA2_Q103_card_no").value;
var DA2_Q104_code = document.getElementById("DA2_Q104_card_no").value;
var DA2_Q105_code = document.getElementById("DA2_Q105_card_no").value;
}
else{
var DA2_Q101_code = document.getElementById("DA2_Q101_code").value;
var DA2_Q102_code = document.getElementById("DA2_Q102_code").value;
var DA2_Q103_code = document.getElementById("DA2_Q103_code").value;
var DA2_Q104_code = document.getElementById("DA2_Q104_code").value;
var DA2_Q105_code = document.getElementById("DA2_Q105_code").value;
}

var DA2_Q106_code = document.getElementById("DA2_Q106_code").value;
var DA2_Q108_code = document.getElementById("DA2_Q108_code").value;
var DA2_Q109 = document.getElementById("DA2_Q109").value;
var DA2_Q110 = document.getElementById("DA2_Q110").value;
var DA2_Q111= document.getElementById("DA2_Q111").value;
var DA2_Q112 = document.getElementById("DA2_Q112").value;
var DA2_Q113 = document.getElementById("DA2_Q113").value;
var DA2_Q114 = document.getElementById("DA2_Q114").value;
var DA2_Q115 = document.getElementById("DA2_Q115").value;
var DA2_Q116 = document.getElementById("DA2_Q116").value;
var DA2_Q117 = document.getElementById("DA2_Q117").value;
var DA2_Q118Date = document.getElementById("DA2_Q118Date").value;
var DA2_Q118Time = document.getElementById("DA2_Q118Time").value;
var DA2_Q119Respondent = document.getElementById("DA2_Q119Respondent").value;
var DA2_Q119Other = document.getElementById("DA2_Q119Other").value;
var DA2_120result = document.getElementById("DA2_120result").value;
var DA2_Q120Other = document.getElementById("DA2_Q120Other").value;

var DA2_Q201_a;
if(document.getElementById("DA2_Q201_aAuto").value!=""){
DA2_Q201_a = document.getElementById("DA2_Q201_aAuto").value;
}
else{
DA2_Q201_a = document.getElementById("DA2_Q201_a").value;
}


var DA2_Q201_a_day = document.getElementById("DA2_Q201_a_day").value;

var DA2_Q201_b;
if(document.getElementById("DA2_Q201_bAuto").value!=""){
DA2_Q201_b = document.getElementById("DA2_Q201_bAuto").value;
}
else{
DA2_Q201_b = document.getElementById("DA2_Q201_b").value;
}

var DA2_Q201_b_day = document.getElementById("DA2_Q201_b_day").value;

var DA2_Q201_c = document.getElementById("DA2_Q201_c").value;
var DA2_Q201_c_day = document.getElementById("DA2_Q201_c_day").value;
var DA2_Q201_d = document.getElementById("DA2_Q201_d").value;
var DA2_Q201_d_day = document.getElementById("DA2_Q201_d_day").value;
var DA2_Q201_e = document.getElementById("DA2_Q201_e").value;
var DA2_Q201_e_day = document.getElementById("DA2_Q201_e_day").value;

var DA2_Q202;
var DA2_Q203;
var DA2_Q204;

if(document.getElementById("DA2_Q202Auto").value!=""){
DA2_Q202 = document.getElementById("DA2_Q202Auto").value;
}
else{
DA2_Q202 = document.getElementById("DA2_Q202").value;
}


if(document.getElementById("DA2_Q203Auto").value!=""){
DA2_Q203 = document.getElementById("DA2_Q203Auto").value;
}
else{
DA2_Q203 = document.getElementById("DA2_Q203").value;
}

if(document.getElementById("DA2_Q204Auto").value!=""){
DA2_Q204 = document.getElementById("DA2_Q204Auto").value;
}
else{
DA2_Q204 = document.getElementById("DA2_Q204").value;
}

var DA2_Q202_day = document.getElementById("DA2_Q202_day").value;
var DA2_Q203_day = document.getElementById("DA2_Q203_day").value;
var DA2_Q204_day = document.getElementById("DA2_Q204_day").value;




var DA2_Q205_1 = document.getElementById("DA2_Q205_1").value;
var DA2_Q205_2 = document.getElementById("DA2_Q205_2").value;


var DA2_Q205_3_a1 = document.getElementById("DA2_Q205_3_a1").value;
var DA2_Q205_3_a2;
if(document.getElementById("DA2_Q205_3_a2Auto").value==""){
DA2_Q205_3_a2 = document.getElementById("DA2_Q205_3_a2").value;
}
else{
DA2_Q205_3_a2 = document.getElementById("DA2_Q205_3_a2Auto").value;
}
var DA2_Q205_3_a3 = document.getElementById("DA2_Q205_3_a3").value;



var DA2_Q205_3_b1 = document.getElementById("DA2_Q205_3_b1").value;

var DA2_Q205_3_b2;
if(document.getElementById("DA2_Q205_3_b2Auto").value==""){
DA2_Q205_3_b2 = document.getElementById("DA2_Q205_3_b2").value;
}
else{
DA2_Q205_3_b2 = document.getElementById("DA2_Q205_3_b2Auto").value;
}
var DA2_Q205_3_b3 = document.getElementById("DA2_Q205_3_b3").value;




var DA2_Q205_3_c1 = document.getElementById("DA2_Q205_3_c1").value;

var DA2_Q205_3_c2;
if(document.getElementById("DA2_Q205_3_c2Auto").value==""){
DA2_Q205_3_c2 = document.getElementById("DA2_Q205_3_c2").value;
}
else{
DA2_Q205_3_c2 = document.getElementById("DA2_Q205_3_c2Auto").value;
}




var DA2_Q205_3_c3 = document.getElementById("DA2_Q205_3_c3").value;



var DA2_Q301 = document.getElementById("DA2_Q301").value;
var DA2_Q302 = document.getElementById("DA2_Q302").value;
var DA2_Q302_other = document.getElementById("DA2_Q302_other").value;
var DA2_Q401 = document.getElementById("DA2_Q401").value;
var DA2_Q402_a = document.getElementById("DA2_Q402_a").value;
var DA2_Q402_b = document.getElementById("DA2_Q402_b").value;
var DA2_Q403 = document.getElementById("DA2_Q403").value;
var DA2_Q404 = document.getElementById("DA2_Q404").value;
var DA2_Q405 = document.getElementById("DA2_Q405").value;
var DA2_Q501 = document.getElementById("DA2_Q501").value;
var DA2_Q502 = document.getElementById("DA2_Q502").value;
var DA2_Q503= document.getElementById("DA2_Q503").value;
var DA2_Q504 = document.getElementById("DA2_Q504").value;
var DA2_Q505 = document.getElementById("DA2_Q505").value;
var DA2_Q506 = document.getElementById("DA2_Q506").value;
var DA2_Q601 = document.getElementById("DA2_Q601").value;
var DA2_Q602 = document.getElementById("DA2_Q602").value;
var DA2_Q603a = document.getElementById("DA2_Q603a").value;
var DA2_Q603b = document.getElementById("DA2_Q603b").value;
var DA2_Q603c = document.getElementById("DA2_Q603c").value;
var DA2_Q604 = document.getElementById("DA2_Q604").value;
var DA2_Q605 = document.getElementById("DA2_Q605").value;
var DA2_Q701 = document.getElementById("DA2_Q701").value;
var DA2_Q702 = document.getElementById("DA2_Q702").value;
var DA2_Q703 = document.getElementById("DA2_Q703").value;
var DA2_Q704a = document.getElementById("DA2_Q704a").value;
var DA2_Q704a_times = document.getElementById("DA2_Q704a_times").value;
var DA2_Q704a_day = document.getElementById("DA2_Q704a_day").value;
var DA2_Q704b = document.getElementById("DA2_Q704b").value;
var DA2_Q704b_times = document.getElementById("DA2_Q704b_times").value;
var DA2_Q704b_day = document.getElementById("DA2_Q704b_day").value;
var DA2_Q704c = document.getElementById("DA2_Q704c").value;
var DA2_Q704c_times = document.getElementById("DA2_Q704c_times").value;
var DA2_Q704c_day = document.getElementById("DA2_Q704c_day").value;
var DA2_Q704d = document.getElementById("DA2_Q704d").value;
var DA2_Q704d_times = document.getElementById("DA2_Q704d_times").value;
var DA2_Q704d_day = document.getElementById("DA2_Q704d_day").value;
var DA2_Q704e = document.getElementById("DA2_Q704e").value;
var DA2_Q704e_times = document.getElementById("DA2_Q704e_times").value;
var DA2_Q704e_day = document.getElementById("DA2_Q704e_day").value;
var DA2_Q704f = document.getElementById("DA2_Q704f").value;
var DA2_Q704f_times = document.getElementById("DA2_Q704f_times").value;
var DA2_Q704f_day = document.getElementById("DA2_Q704f_day").value;
var DA2_Q801 = document.getElementById("DA2_Q801").value;
var DA2_Q901 = document.getElementById("DA2_Q901").value;
var DA2_USerID = document.getElementById("DA2_Q117").value;



D2Handler.addDataD2(DA2_Cluster,DA2_Block,  DA2_ChildID, DA2_Q107, DA2_Q101_code, DA2_Q102_code, DA2_Q103_code, DA2_Q104_code, DA2_Q105_code, DA2_Q106_code, DA2_Q108_code, DA2_Q109, DA2_Q110, DA2_Q111, DA2_Q112, DA2_Q113, DA2_Q114, DA2_Q115, DA2_Q116, DA2_Q117, DA2_Q118Date, DA2_Q118Time, DA2_Q119Respondent, DA2_Q119Other, DA2_120result, DA2_Q120Other, DA2_Q201_a, DA2_Q201_a_day, DA2_Q201_b, DA2_Q201_b_day, DA2_Q201_c, DA2_Q201_c_day, DA2_Q201_d, DA2_Q201_d_day, DA2_Q201_e, DA2_Q201_e_day, DA2_Q202, DA2_Q202_day, DA2_Q203, DA2_Q203_day, DA2_Q204, DA2_Q204_day, DA2_Q205_1, DA2_Q205_2, DA2_Q205_3_a1, DA2_Q205_3_a2, DA2_Q205_3_a3, DA2_Q205_3_b1, DA2_Q205_3_b2, DA2_Q205_3_b3, DA2_Q205_3_c1, DA2_Q205_3_c2, DA2_Q205_3_c3, DA2_Q301, DA2_Q302, DA2_Q302_other, DA2_Q401, DA2_Q402_a, DA2_Q402_b, DA2_Q403, DA2_Q404, DA2_Q405, DA2_Q501, DA2_Q502, DA2_Q503, DA2_Q504, DA2_Q505, DA2_Q506, DA2_Q601, DA2_Q602, DA2_Q603a, DA2_Q603b, DA2_Q603c, DA2_Q604, DA2_Q605, DA2_Q701, DA2_Q702, DA2_Q703, DA2_Q704a, DA2_Q704a_times, DA2_Q704a_day, DA2_Q704b, DA2_Q704b_times, DA2_Q704b_day, DA2_Q704c, DA2_Q704c_times, DA2_Q704c_day, DA2_Q704d, DA2_Q704d_times, DA2_Q704d_day, DA2_Q704e, DA2_Q704e_times, DA2_Q704e_day, DA2_Q704f, DA2_Q704f_times, DA2_Q704f_day, DA2_Q801, DA2_Q901, DA2_USerID);



document.getElementById("DA2_Cluster_code").value= "";
document.getElementById("DA2_Block_code").value = "";

document.getElementById("DA2_Q101_card_no").value="";
$('#DA2_Q101_card_no').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q102_card_no").value="";
$('#DA2_Q102_card_no').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q103_card_no").value="";
document.getElementById("DA2_Q104_card_no").value="";
document.getElementById("DA2_Q105_card_no").value="";

document.getElementById("DA2_ChildID").value = "";
document.getElementById("DA2_Q107").value = "";
document.getElementById("DA2_Q101_code").value = "";
document.getElementById("DA2_Q102_code").value = "";
document.getElementById("DA2_Q103_code").value = "";
document.getElementById("DA2_Q104_code").value = "";
document.getElementById("DA2_Q105_code").value = "";
//document.getElementById("DA2_Q106_code").value = "";
document.getElementById("DA2_Q108_code").value = "";
document.getElementById("DA2_Q109").value = "";
document.getElementById("DA2_Q110").value = "";
document.getElementById("DA2_Q111").value = "";
document.getElementById("DA2_Q112").value = "";
document.getElementById("DA2_Q113").value = "";
document.getElementById("DA2_Q114").value = "";
document.getElementById("DA2_Q115").value = "";
document.getElementById("DA2_Q116").value = "";
//document.getElementById("DA2_Q117").value = "";
document.getElementById("DA2_Q118Date").value = "";
document.getElementById("DA2_Q118Time").value = "";
document.getElementById("DA2_Q119Respondent").value = "";
$('#DA2_Q119Respondent').selectmenu().selectmenu('refresh', true);

document.getElementById("DA2_Q119Other").value = "";
//document.getElementById("DA2_120result").value = "";
//document.getElementById("DA2_Q120Other").value = "";
document.getElementById("DA2_Q201_a").value = "";
$('#DA2_Q201_a').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q201_a_day").value = "";
document.getElementById("DA2_Q201_b").value = "";
$('#DA2_Q201_b').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q201_b_day").value = "";
document.getElementById("DA2_Q201_c").value = "";
$('#DA2_Q201_c').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q201_c_day").value = "";
document.getElementById("DA2_Q201_d").value = "";
$('#DA2_Q201_d').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q201_d_day").value = "";
document.getElementById("DA2_Q201_e").value = "";
$('#DA2_Q201_e').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q201_e_day").value = "";

document.getElementById("DA2_Q201_bHide").style.display = "none";
document.getElementById("DA2_Q201_cHide").style.display = "none";
document.getElementById("DA2_Q201_dHide").style.display = "none";
document.getElementById("DA2_Q201_eHide").style.display = "none";

document.getElementById("hideForD1Q202").style.display = "block";
document.getElementById("showForD1Q202").style.display = "none";
document.getElementById("DA2_Q201_aAuto_Display").value = "";
document.getElementById("DA2_Q201_aAuto").value = "";

document.getElementById("hideForD1Q204").style.display = "block";
document.getElementById("showForD1Q204").style.display = "none";
document.getElementById("DA2_Q201_bAuto_Display").value = "";
document.getElementById("DA2_Q201_bAuto").value = "";

document.getElementById("Q202_valueForQ201").value = "";
document.getElementById("Q204_valueForQ201").value = "";

document.getElementById("DA2_Q202").value = "";
$('#DA2_Q202').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q202_day").value = "";
document.getElementById("DA2_Q202_da").style.display = "none";
document.getElementById("DA2_Q202_day").readOnly = false;

document.getElementById("DA2_Q202showIfselected").style.display = "none";
document.getElementById("DA2_Q202Hide").style.display = "block";
document.getElementById("DA2_Q202Auto").value = "";
document.getElementById("DA2_Q202AutoDisplay").value = "";


document.getElementById("DA2_Q203").value = "";
$('#DA2_Q203').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q203_day").value = "";
document.getElementById("DA2_Q203_da").style.display = "none";
document.getElementById("DA2_Q203_day").readOnly = false;

document.getElementById("DA2_Q203showIfselected").style.display = "none";
document.getElementById("DA2_Q203Hide").style.display = "block";
document.getElementById("DA2_Q203Auto").value = "";
document.getElementById("DA2_Q203AutoDisplay").value = "";


document.getElementById("DA2_Q204").value = "";
$('#DA2_Q204').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q204_day").value = "";
document.getElementById("DA2_Q204_da").style.display = "none";
document.getElementById("DA2_Q204_day").readOnly = false;

document.getElementById("DA2_Q204showIfselected").style.display = "none";
document.getElementById("DA2_Q204Hide").style.display = "block";
document.getElementById("DA2_Q204Auto").value = "";
document.getElementById("DA2_Q204AutoDisplay").value = "";



document.getElementById("DA2_Q205_1").value = "";
$('#DA2_Q205_1').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q205_2").value = "";
$('#DA2_Q205_2').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q205_3_a1").value = "";
$('#DA2_Q205_3_a1').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q205_3_a2").value = "";
$('#DA2_Q205_3_a2').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q205_3_a3").value = "";
document.getElementById("DA2_Q205_3_b1").value = "";
$('#DA2_Q205_3_b1').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q205_3_b2").value = "";
$('#DA2_Q205_3_b2').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q205_3_b3").value = "";
document.getElementById("DA2_Q205_3_c1").value = "";
$('#DA2_Q205_3_c1').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q205_3_c2").value = "";
$('#DA2_Q205_3_c2').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q205_3_c3").value = "";
document.getElementById("DA2_Q301").value = "";
$('#DA2_Q301').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q302").value = "";
$('#DA2_Q302').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q301IsNo").style.display = "none";
document.getElementById("DA2_Q302_other").value = "";
document.getElementById("DA2_Q401").value = "";
document.getElementById("DA2_Q401Diaplay").value = "";
document.getElementById("DA2_Q402_a").value = "";
document.getElementById("DA2_Q402_b").value = "";
document.getElementById("DA2_Q402_c").value = "";
document.getElementById("DA2_Q402_c_Display").value = "";
document.getElementById("DA2_Q403").value = "";
$('#DA2_Q403').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q404").value = "";
$('#DA2_Q404').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q405").value = "";
$('#DA2_Q405').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q501").value = "";
$('#DA2_Q501').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q502").value = "";
$('#DA2_Q502').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q503").value = "";
$('#DA2_Q503').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q504").value = "";
$('#DA2_Q504').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q505").value = "";
$('#DA2_Q505').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q506").value = "";
$('#DA2_Q506').selectmenu().selectmenu('refresh', true);


document.getElementById("ChildSeightDone").value = "";
$('#ChildSeightDone').selectmenu().selectmenu('refresh', true);

document.getElementById("DA2_Q601").value = "";
document.getElementById("DA2_Q6011En").style.display = "block";
document.getElementById("DA2_Q6012En").style.display = "none";

document.getElementById("DA2_Q602").value = "";
document.getElementById("DA2_Q6021En").style.display = "block";
document.getElementById("DA2_Q6022En").style.display = "none";

document.getElementById("DA2_Q601_2Result").value = "";
document.getElementById("DA2_Q601_2ResultDisplay").value = "";

document.getElementById("DA2_Q603a").value = "";
document.getElementById("DA2_Q603b").value = "";
document.getElementById("DA2_Q603c").value = "";

document.getElementById("childWeightDiv").style.display = "none";
document.getElementById("child_MotherWeightDiv").style.display = "none";

document.getElementById("DA2_Q603a1En").style.display = "block";
document.getElementById("DA2_Q603a2En").style.display = "none";

document.getElementById("DA2_Q603b1En").style.display = "block";
document.getElementById("DA2_Q603b2En").style.display = "none";

document.getElementById("DA2_Q603c1En").style.display = "block";
document.getElementById("DA2_Q603c2En").style.display = "none";


document.getElementById("DA2_Q604mm").value = "";
document.getElementById("DA2_Q604").value = "";
document.getElementById("DA2_Q6041En").style.display = "block";
document.getElementById("DA2_Q6042En").style.display = "none";

document.getElementById("DA2_Q605").value = "";
document.getElementById("DA2_Q6051En").style.display = "block";
document.getElementById("DA2_Q6052En").style.display = "none";

document.getElementById("DA2_Q701").value = "";
$('#DA2_Q701').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q702").value = "";
document.getElementById("DA2_Q702Div").style.display = "none";
$('#DA2_Q702').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q703").value = "";
document.getElementById("DA2_Q703Div").style.display = "none";
$('#DA2_Q703').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q704a").value = "";
$('#DA2_Q704a').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q704a_times").value = "";
document.getElementById("DA2_Q704a_day").value = "";
document.getElementById("DA2_Q704b").value = "";
$('#DA2_Q704b').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q704b_times").value = "";
document.getElementById("DA2_Q704b_day").value = "";
document.getElementById("DA2_Q704c").value = "";
$('#DA2_Q704c').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q704c_times").value = "";
document.getElementById("DA2_Q704c_day").value = "";
document.getElementById("DA2_Q704d").value = "";
$('#DA2_Q704d').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q704d_times").value = "";
document.getElementById("DA2_Q704d_day").value = "";
document.getElementById("DA2_Q704e").value = "";
$('#DA2_Q704e').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q704e_times").value = "";
document.getElementById("DA2_Q704e_day").value = "";
document.getElementById("DA2_Q704f").value = "";
$('#DA2_Q704f').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q704f_times").value = "";
document.getElementById("DA2_Q704f_day").value = "";
document.getElementById("DA2_Q801").value = "";
$('#DA2_Q801').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q901").value = "";

document.getElementById("Review_DA2_Q401_page").style.display = "none";
document.getElementById("Review_DA2_Q501_page").style.display = "none";
document.getElementById("Review_DA2_Q704a_page").style.display = "none";

document.getElementById("ifCheckYes").style.display = "none";
document.getElementById("ifCheckNo").style.display = "none";


document.getElementById("Q202_valueForQ201").value = "";
document.getElementById("Q204_valueForQ201").value = "";
document.getElementById("Q203_valueForQ405").value = "";

document.getElementById("a1MediumSelection").style.display = "none";
document.getElementById("a1MediumAuto").style.display = "none";
document.getElementById("b1MediumSelection").style.display = "none";
document.getElementById("b1MediumAuto").style.display = "none";
document.getElementById("c1MediumSelection").style.display = "none";
document.getElementById("c1MediumAuto").style.display = "none";


document.getElementById("DA2_Q205_3_a2AutoDisplay").value = "";
document.getElementById("DA2_Q205_3_a2Auto").value = "";
document.getElementById("DA2_Q205_3_b2AutoDisplay").value = "";
document.getElementById("DA2_Q205_3_b2Auto").value = "";
document.getElementById("DA2_Q205_3_c2AutoDisplay").value = "";
document.getElementById("DA2_Q205_3_c2Auto").value = "";

document.getElementById("DA2_Q205_3_a3Hide").style.display = "none";
document.getElementById("DA2_Q205_3_b3Hide").style.display = "none";
document.getElementById("DA2_Q205_3_c3Hide").style.display = "none";

document.getElementById("DA2_BackToReviewForQ501").style.display = "none";
}
}





function addD3(){
if(document.getElementById("da3_childID").value!="" && document.getElementById("da3_childID").value.length == 7){
var DA3_childID = document.getElementById("da3_childID").value;
var DA3_Q101_code = document.getElementById("DA3_Q101_code").value;
var DA3_Q102_code = document.getElementById("DA3_Q102_code").value;
var DA3_Q103_code = document.getElementById("DA3_Q103_code").value;
var DA3_Q104_code = document.getElementById("DA3_Q104_code").value;
var DA3_Q105_code = document.getElementById("DA3_Q105_code").value;
var DA3_Q106_code = document.getElementById("DA3_Q106_code").value;
var DA3_Q107 = document.getElementById("DA3_Q107").value;
var DA3_Q108_code = document.getElementById("DA3_Q108_code").value;
var DA3_Q109 = document.getElementById("DA3_Q109").value;
var DA3_Q110 = document.getElementById("DA3_Q110").value;
var DA3_Q111 = document.getElementById("DA3_Q111").value;
var DA3_Q112 = document.getElementById("DA3_Q112").value;
var DA3_Q113 = document.getElementById("DA3_Q113").value;
var DA3_Q114 = document.getElementById("DA3_Q114").value;
var DA3_Q115 = document.getElementById("DA3_Q115").value;
var DA3_Q116 = document.getElementById("DA3_Q116").value;
var DA3_Q117Date = document.getElementById("DA3_Q117Date").value;
var DA3_Q117Time = document.getElementById("DA3_Q117Time").value;
var DA3_Q201 = document.getElementById("DA3_Q201").value;
var DA3_Q202a = document.getElementById("DA3_Q202a").value;
//var DA3_Q202a2 = document.getElementById("DA3_Q202a2").value;
var DA3_Q202b = document.getElementById("DA3_Q202b").value;
//var DA3_Q202b2 = document.getElementById("DA3_Q202b2").value;
var DA3_Q202c = document.getElementById("DA3_Q202c").value;
//var DA3_Q202c2 = document.getElementById("DA3_Q202c2").value;
var DA3_Q202d = document.getElementById("DA3_Q202d").value;
//var DA3_Q202d2 = document.getElementById("DA3_Q202d2").value;
var DA3_Q203 = document.getElementById("DA3_Q203").value;
var DA3_Q204 = document.getElementById("DA3_Q204").value;
var DA3_Q204O = document.getElementById("DA3_Q204O").value;
var DA3_Q205 = document.getElementById("DA3_Q205").value;
var DA3_Q206 = document.getElementById("DA3_Q206").value;
var DA3_Q207 = document.getElementById("DA3_Q207").value;
var DA3_Q301 = document.getElementById("DA3_Q301").value;
var DA3_Q302 = document.getElementById("DA3_Q302").value;
var DA3_Q303 = document.getElementById("DA3_Q303").value;
var DA3_Q400 = document.getElementById("DA3_Q400").value;
var DA3_UserID = document.getElementById("DA3_Q116").value;

D3Data.addD3(DA3_childID, DA3_Q101_code, DA3_Q102_code, DA3_Q103_code, DA3_Q104_code, DA3_Q105_code, DA3_Q106_code, DA3_Q107, DA3_Q108_code, DA3_Q109, DA3_Q110, DA3_Q111, DA3_Q112, DA3_Q113, DA3_Q114, DA3_Q115, DA3_Q116, DA3_Q117Date, DA3_Q117Time, DA3_Q201, DA3_Q202a, DA3_Q202b, DA3_Q202c, DA3_Q202d, DA3_Q203, DA3_Q204, DA3_Q204O, DA3_Q205, DA3_Q206, DA3_Q207, DA3_Q301, DA3_Q302, DA3_Q303, DA3_Q400, DA3_UserID);

document.getElementById("da3_childID").value="";
document.getElementById("DA3_Q101_code").value="";
document.getElementById("DA3_Q102_code").value="";
document.getElementById("DA3_Q103_code").value="";
document.getElementById("DA3_Q104_code").value="";
document.getElementById("DA3_Q105_code").value="";
//document.getElementById("DA3_Q106_code").value="";
document.getElementById("DA3_Q107").value="";
document.getElementById("DA3_Q108_code").value="";
document.getElementById("DA3_Q109").value="";
document.getElementById("DA3_Q110").value="";
document.getElementById("DA3_Q111").value="";
document.getElementById("DA3_Q112").value="";
document.getElementById("DA3_Q113").value="";
document.getElementById("DA3_Q114").value="";
document.getElementById("DA3_Q115").value="";
//document.getElementById("DA3_Q116").value="";
document.getElementById("DA3_Q117Date").value="";
document.getElementById("DA3_Q117Time").value="";
document.getElementById("DA3_Q201").value="";
document.getElementById("DA3_Q202").value="";
$('#DA3_Q202').selectmenu().selectmenu('refresh', true);
document.getElementById("DA3_Q202a").value="";
$('#DA3_Q202a').selectmenu().selectmenu('refresh', true);
//document.getElementById("DA3_Q202a2").value="";
document.getElementById("DA3_Q202b").value="";
$('#DA3_Q202b').selectmenu().selectmenu('refresh', true);
//document.getElementById("DA3_Q202b2").value="";
document.getElementById("DA3_Q202c").value="";
$('#DA3_Q202c').selectmenu().selectmenu('refresh', true);
//document.getElementById("DA3_Q202c2").value="";
document.getElementById("DA3_Q202d").value="";
$('#DA3_Q202d').selectmenu().selectmenu('refresh', true);
//document.getElementById("DA3_Q202d2").value="";
document.getElementById("DA3_Q203").value="";
document.getElementById("DA3_Q204").value="";
$('#DA3_Q204').selectmenu().selectmenu('refresh', true);
document.getElementById("DA3_Q204O").value="";
document.getElementById("DA3_Q205").value="";
$('#DA3_Q205').selectmenu().selectmenu('refresh', true);
document.getElementById("DA3_Q206").value="";
//document.getElementById("DA3_Q207").value="";
//$('#DA3_Q207').selectmenu().selectmenu('refresh', true);
document.getElementById("DA3_Q301").value="";
$('#DA3_Q301').selectmenu().selectmenu('refresh', true);
document.getElementById("DA3_Q302").value="";
$('#DA3_Q302').selectmenu().selectmenu('refresh', true);
document.getElementById("DA3_Q303").value="";
document.getElementById("DA3_Q400").value="";




}
}




function addUser(){
var CHCP_Code = document.getElementById("newUserID").value;
var password = document.getElementById("newUserPassword").value;
var CHCP_Name = document.getElementById("newUserName").value;
var CC_Code = document.getElementById("newUserCCCode").value;
var CHCP_Status = document.getElementById("newUserStatus").value;
//var name  = $("#txtName").val();
//var mname  = $("#txtMName").val();
newUser.addUser(CHCP_Code, password, CHCP_Name, CC_Code, CHCP_Status);
$("#newUserID").val();
$("#newUserPassword").val();
$("#newUserName").val();
$("#newUserCCCode").val();
$("#newUserStatus").val();
}













function DuplicateChk(){

var chidlID  = document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;

var Q101_code = document.getElementById("Q101_code").value;
var Q102  = document.getElementById("Q102").value;
var Q103  = document.getElementById("Q103").value;
var Q104  = document.getElementById("Q104").value;
var Q105  = document.getElementById("Q105").value;
var Q106  = document.getElementById("Q106").value;
var Q107  = document.getElementById("Q107").value;
var Q108Date  = document.getElementById("Q108Date").value;
var Q108Time  = document.getElementById("Q108Time").value;

var Q201  = document.getElementById("Q201").value;
var Q202  = document.getElementById("Q202").value;
var Q203  = document.getElementById("Q203").value;
var Q204  = document.getElementById("Q204").value;
var Q205  = document.getElementById("Q205").value;
var Q206  = document.getElementById("Q206").value;
var Q207  = document.getElementById("Q207").value;
var Q208  = document.getElementById("Q208").value;
var Q209  = document.getElementById("Q209").value;
var Q210  = document.getElementById("Q210").value;
var Q300  = document.getElementById("Q300").value;


//var name  = $("#txtName").val();
//var mname  = $("#txtMName").val();
productHandlerCHK.addProductCHK(chidlID, Q101_code, Q102, Q103, Q104, Q105, Q106, Q107, Q108Date, Q108Time, Q201, Q202, Q203, Q204, Q205, Q206, Q207, Q208, Q209, Q210, Q300);
$("#ChildID_1").val();
$("#ChildID_2").val();

$("#Q101_code").val();
$("#Q102").val();
$("#Q103").val();
$("#Q104").val();
$("#Q105").val();
$("#Q106").val();
$("#Q107").val();
$("#Q108Date").val();
$("#Q108Time").val();

$("#Q201").val();
$("#Q202").val();
$("#Q203").val();
$("#Q204").val();
$("#Q205").val();
$("#Q206").val();
$("#Q207").val();
$("#Q108Date").val();
$("#Q108Time").val();

$("#Q201").val();
$("#Q202").val();
$("#Q203").val();
$("#Q204").val();
$("#Q205").val();
$("#Q206").val();
$("#Q207").val();
$("#Q208").val();
$("#Q209").val();
$("#Q210").val();

$("#Q300").val();






}
























function UserChkData(){

var UserName  = document.getElementById("UserName").value;
var Password = document.getElementById("Password").value;
UserChk.LoginChk(UserName, Password);
$("#UserName").val();
$("#Password").val();
}



function PCVDATA(){
var CPID  = document.getElementById("DA2_Q107").value;
var MPID  = document.getElementById("DA2_Q111").value;
PCVMasterData.getMasterChildInfo(CPID, MPID);
$("#DA2_Q107").val();
}



function PCV_VillageGet(){
document.getElementById("DA2_Q103_card_list").innerHTML = "";
if(document.getElementById("DA2_Q102_card_no").value=="99"){
//document.getElementById("DA2_Q103_card_no").value="9999";
document.getElementById("DA2_Q104_card_no").value="999";
document.getElementById("DA2_Q105_card_no").value="99";
//document.getElementById("DA2_Q103_card_no").readOnly=true;
document.getElementById("DA2_Q104_card_no").readOnly=true;
document.getElementById("DA2_Q105_card_no").readOnly=true;

}else{
document.getElementById("DA2_Q103_card_no").value="";
document.getElementById("DA2_Q104_card_no").value="";
document.getElementById("DA2_Q105_card_no").value="";
$( "#VillList" ).panel( "open" );
document.getElementById("DA2_Q104_card_no").value="999";
document.getElementById("DA2_Q105_card_no").value="99";
}

var uni  = document.getElementById("DA2_Q102_card_no").value;
PCV_Village.getVillageInfo(uni);
}



function PCV_BariGet(){
$( "#BariList" ).panel( "open" );
var bari  = document.getElementById("DA2_Q103_card_no").value;
PCV_Bari.getBariInfo(bari);
}

function DA2_Q103_card_no(){
document.getElementById("DA2_Q104_card_no").value="999";
document.getElementById("DA2_Q105_card_no").value="99";
}


function PCV_HHGet(){
$( "#HHList" ).panel( "open" );
var HH  = document.getElementById("DA2_Q104_card_no").value;
PCV_HH.getHHInfo(HH);
}



function village_set(e){
var d2CHID1 = $(e).text();
document.getElementById("DA2_Q103_card_no").value =  d2CHID1.substring(0,4);
}

function bari_set(e){
var bari = $(e).text();
document.getElementById("DA2_Q104_card_no").value =  bari.substring(0,3);
}

function HH_set(e){
var HH = $(e).text();
document.getElementById("DA2_Q105_card_no").value =  HH.substring(0,2);
}

function PCV_DATA_FOR_SCREENING(){
var CPID  = document.getElementById("PCV_CPID").value;
var MPID  = document.getElementById("PCV_MPID").value;
SCR_PCVMasterData.SCR_getMasterChildInfo(CPID, MPID);
$("#PCV_CPID").val();
$("#PCV_MPID").val();
}


function PCV_DATA_FOR_SCREENING_30day(){
var CPID  = document.getElementById("PCV_CPID").value;
var MPID  = document.getElementById("PCV_MPID").value;
var CPID1  = document.getElementById("PCV_CPID").value;
var MPID1  = document.getElementById("PCV_MPID").value;
SCR_PCVMasterData_30day.SCR_getMasterChildInfo_30day(CPID, MPID, CPID1, MPID1);
$("#PCV_CPID").val();
$("#PCV_MPID").val();

}


function D3_PCVDATA(){
if(document.getElementById("DA3_Q107").value!="99999999999"){

var CPID  = document.getElementById("DA3_Q107").value;
var MPID  = document.getElementById("DA3_Q111").value;
D3_PCVMasterData.D3_getMasterChildInfo(CPID, MPID);
$("#DA3_Q107").val();
$("#DA3_Q111").val();
}

}











 $(document).ready(function()
 {
 $("#transferedSaveData").click(function(){

 online = window.navigator.onLine;
 if (navigator.onLine) {

//   alert("ট্যাব এর ইন্টারনেট কানেকশন ঠিক আছে। এখন OK বাটনে চাপ দিন এবং অপেক্ষা করুন। আপনার ডাটা সিলেট সার্ভারএ প্রেরন হচ্ছে। ");


var DA1_MPID = [];
var DA1_CPID = [];
var DA1_CARD = [];
var C_ID = [];
var CC_NAME = [];
var C_NAME = [];
var C_M_NAME = [];
var C_F_NAME = [];
var C_DOB = [];
var C_AGE = [];
var C_SEX = [];
var C_CHP = [];
var V_DATE = [];
var V_TIME = [];
var Q_201 = [];
var Q_202 = [];
var Q_203 = [];
var Q_204 = [];
var Q_205 = [];
var Q_206 = [];
var Q_207 = [];
var Q_208 = [];
var Q_209 = [];
var Q_210 = [];
var EN_TIME = [];
var EN_USER = [];
var EN_DATE = [];


$('.DA_1_CARD').each(function(){
   DA1_CARD.push($(this).text());
  });

  $('.DA_1_CPID').each(function(){
     DA1_CPID.push($(this).text());
    });

    $('.DA_1_MPID').each(function(){
       DA1_MPID.push($(this).text());
      });

$('.cid').each(function(){
   C_ID.push($(this).text());
  });

  $('.ccCode').each(function(){
     CC_NAME.push($(this).text());
    });

   $('.cname').each(function(){
     C_NAME.push($(this).text());
    });

   $('.CMNAME').each(function(){
        C_M_NAME.push($(this).text());
       });
    $('.CFNAME').each(function(){
       C_F_NAME.push($(this).text());
     });

   $('.DOB').each(function(){
        C_DOB.push($(this).text());
       });

   $('.age').each(function(){
            C_AGE.push($(this).text());
           });

   $('.csex').each(function(){
            C_SEX.push($(this).text());
           });

     $('.chcp').each(function(){
              C_CHP.push($(this).text());
             });


     $('.vdate').each(function(){
              V_DATE.push($(this).text());
             });

     $('.vtime').each(function(){
              V_TIME.push($(this).text());
             });


     $('.DA1_SYNC_Q201').each(function(){
              Q_201.push($(this).text());
             });

     $('.DA1_SYNC_Q202').each(function(){
              Q_202.push($(this).text());
             });

     $('.DA1_SYNC_Q203').each(function(){
              Q_203.push($(this).text());
             });


     $('.DA1_SYNC_Q204').each(function(){
              Q_204.push($(this).text());
             });


     $('.DA1_SYNC_Q205').each(function(){
              Q_205.push($(this).text());
             });

     $('.DA1_SYNC_Q206').each(function(){
             Q_206.push($(this).text());
             });

     $('.DA1_SYNC_Q207').each(function(){
              Q_207.push($(this).text());
             });


     $('.DA1_SYNC_Q208').each(function(){
              Q_208.push($(this).text());
             });

     $('.DA1_SYNC_Q209').each(function(){
              Q_209.push($(this).text());
             });


     $('.DA1_SYNC_Q210').each(function(){
              Q_210.push($(this).text());
             });


     $('.DA1_SYNC_EnTime').each(function(){
              EN_TIME.push($(this).text());
             });


     $('.DA1_SYNC_uid').each(function(){
              EN_USER.push($(this).text());
             });

     $('.DA1_SYNC_u_enDT').each(function(){
              EN_DATE.push($(this).text());
             });



 $.ajax({
 type: "POST",
 data: {DA1_CARD:DA1_CARD, DA1_MPID:DA1_MPID, DA1_CPID:DA1_CPID, C_ID:C_ID, CC_NAME:CC_NAME, C_NAME:C_NAME, C_M_NAME:C_M_NAME, C_F_NAME:C_F_NAME, C_DOB:C_DOB,  C_AGE:C_AGE, C_SEX:C_SEX, C_CHP:C_CHP, V_DATE:V_DATE, V_TIME:V_TIME, Q_201:Q_201, Q_202:Q_202, Q_203:Q_203, Q_204:Q_204, Q_205:Q_205, Q_206:Q_206, Q_207:Q_207, Q_208:Q_208, Q_209:Q_209, Q_210:Q_210, EN_TIME:EN_TIME, EN_USER:EN_USER, EN_DATE:EN_DATE },
 url:"server/DAS_Data/dataPost.php",
 crossDomain: true,
 cache: false,
 success: function(data){
 console.log(data);
 document.getElementById("countdown").value = "Your data has been transferred.";
 },
 error:function(){
 console.log(data);
 }
 });



D2_transferedSaveDataOne();


} else {
    alert('ট্যাবএ ইন্টারনেট কানেকশন সঠিক নেই। ইন্টারনেট কানেকশন চেক করুন এবং আবার বাটনে চাপুন।');
  }
return false;
 });

 });















// $(document).ready(function()
// {
// $("#D2_transferedSaveData").click(function(){
function D2_transferedSaveDataOne(){
 online = window.navigator.onLine;
 if (navigator.onLine) {

//   alert("ট্যাব এর ইন্টারনেট কানেকশন ঠিক আছে। এখন OK বাটনে চাপ দিন এবং অপেক্ষা করুন। আপনার ডাটা সিলেট সার্ভারএ প্রেরন হচ্ছে। ");


var Child_ID=[];
var Upazila_Code=[];
var Union_code=[];
var Village_code=[];
var Bari_code=[];
var HH_code=[];
var CC_code=[];
var Child_PID=[];
var Child_name=[];
var Mother_name=[];
var MCID=[];
var MPID=[];
var Father_name=[];
var Mobile=[];
var ChDob=[];
var ChildAge=[];
var ChildSex=[];
var CHCP_code=[];
var IntStartDate=[];
var IntStartTime=[];
var Q119=[];
var Q119Other=[];
var Q120=[];
var Q120Other=[];
var Q201a=[];
var Q201a_day=[];
var Q201b=[];
var Q201b_day=[];
var Q201c=[];
var Q201c_day=[];
var Q201d=[];
var Q201d_day=[];
var Q201e=[];
var Q201e_day=[];
var Q202=[];
var Q202_day=[];
var Q203=[];
var Q203_day=[];
var Q204=[];
var Q204_day=[];
var Q205_1=[];
var Q205_2=[];
var Q205_3a_1=[];
var Q205_3a_2=[];
var Q205_3a_3=[];
var Q205_3b_1=[];
var Q205_3b_2=[];
var Q205_3b_3=[];
var Q205_3c_1=[];
var Q205_3c_2=[];
var Q205_3c_3=[];
var Q301=[];
var Q302=[];
var Q302Other=[];
var Q401=[];
var Q402a=[];
var Q402b=[];
var Q403=[];
var Q404=[];
var Q405=[];
var Q501=[];
var Q502=[];
var Q503=[];
var Q504=[];
var Q505=[];
var Q506=[];
var Q601=[];
var Q602=[];
var Q603a=[];
var Q603b=[];
var Q603c=[];
var Q604=[];
var Q605=[];
var Q701=[];
var Q702=[];
var Q703=[];
var Q704a=[];
var Q704a_time=[];
var Q704a_day=[];
var Q704b=[];
var Q704b_time=[];
var Q704b_day=[];
var Q704c=[];
var Q704c_time=[];
var Q704c_day=[];
var Q704d=[];
var Q704d_time=[];
var Q704d_day=[];
var Q704e=[];
var Q704e_time=[];
var Q704e_day=[];
var Q704f=[];
var Q704f_time=[];
var Q704f_day=[];
var Q801=[];
var Q901=[];
var DA2_UserID=[];
var DA2_EnDt=[];

$('.Child_ID').each(function(){Child_ID.push($(this).text());});
$('.Upazila_Code').each(function(){Upazila_Code.push($(this).text());});
$('.Union_code').each(function(){Union_code.push($(this).text());});
$('.Village_code').each(function(){Village_code.push($(this).text());});
$('.Bari_code').each(function(){Bari_code.push($(this).text());});
$('.HH_code').each(function(){HH_code.push($(this).text());});
$('.CC_code').each(function(){CC_code.push($(this).text());});
$('.Child_PID').each(function(){Child_PID.push($(this).text());});
$('.Child_name').each(function(){Child_name.push($(this).text());});
$('.Mother_name').each(function(){Mother_name.push($(this).text());});
$('.MCID').each(function(){MCID.push($(this).text());});
$('.MPID').each(function(){MPID.push($(this).text());});
$('.Father_name').each(function(){Father_name.push($(this).text());});
$('.Mobile').each(function(){Mobile.push($(this).text());});
$('.ChDob').each(function(){ChDob.push($(this).text());});
$('.ChildAge').each(function(){ChildAge.push($(this).text());});
$('.ChildSex').each(function(){ChildSex.push($(this).text());});
$('.CHCP_code').each(function(){CHCP_code.push($(this).text());});
$('.IntStartDate').each(function(){IntStartDate.push($(this).text());});
$('.IntStartTime').each(function(){IntStartTime.push($(this).text());});
$('.Q119').each(function(){Q119.push($(this).text());});
$('.Q119Other').each(function(){Q119Other.push($(this).text());});
$('.Q120').each(function(){Q120.push($(this).text());});
$('.Q120Other').each(function(){Q120Other.push($(this).text());});
$('.Q201a').each(function(){Q201a.push($(this).text());});
$('.Q201a_day').each(function(){Q201a_day.push($(this).text());});
$('.Q201b').each(function(){Q201b.push($(this).text());});
$('.Q201b_day').each(function(){Q201b_day.push($(this).text());});
$('.Q201c').each(function(){Q201c.push($(this).text());});
$('.Q201c_day').each(function(){Q201c_day.push($(this).text());});
$('.Q201d').each(function(){Q201d.push($(this).text());});
$('.Q201d_day').each(function(){Q201d_day.push($(this).text());});
$('.Q201e').each(function(){Q201e.push($(this).text());});
$('.Q201e_day').each(function(){Q201e_day.push($(this).text());});
$('.Q202').each(function(){Q202.push($(this).text());});
$('.Q202_day').each(function(){Q202_day.push($(this).text());});
$('.Q203').each(function(){Q203.push($(this).text());});
$('.Q203_day').each(function(){Q203_day.push($(this).text());});
$('.Q204').each(function(){Q204.push($(this).text());});
$('.Q204_day').each(function(){Q204_day.push($(this).text());});
$('.Q205_1').each(function(){Q205_1.push($(this).text());});
$('.Q205_2').each(function(){Q205_2.push($(this).text());});
$('.Q205_3a_1').each(function(){Q205_3a_1.push($(this).text());});
$('.Q205_3a_2').each(function(){Q205_3a_2.push($(this).text());});
$('.Q205_3a_3').each(function(){Q205_3a_3.push($(this).text());});
$('.Q205_3b_1').each(function(){Q205_3b_1.push($(this).text());});
$('.Q205_3b_2').each(function(){Q205_3b_2.push($(this).text());});
$('.Q205_3b_3').each(function(){Q205_3b_3.push($(this).text());});
$('.Q205_3c_1').each(function(){Q205_3c_1.push($(this).text());});
$('.Q205_3c_2').each(function(){Q205_3c_2.push($(this).text());});
$('.Q205_3c_3').each(function(){Q205_3c_3.push($(this).text());});
$('.Q301').each(function(){Q301.push($(this).text());});
$('.Q302').each(function(){Q302.push($(this).text());});
$('.Q302Other').each(function(){Q302Other.push($(this).text());});
$('.Q401').each(function(){Q401.push($(this).text());});
$('.Q402a').each(function(){Q402a.push($(this).text());});
$('.Q402b').each(function(){Q402b.push($(this).text());});
$('.Q403').each(function(){Q403.push($(this).text());});
$('.Q404').each(function(){Q404.push($(this).text());});
$('.Q405').each(function(){Q405.push($(this).text());});
$('.Q501').each(function(){Q501.push($(this).text());});
$('.Q502').each(function(){Q502.push($(this).text());});
$('.Q503').each(function(){Q503.push($(this).text());});
$('.Q504').each(function(){Q504.push($(this).text());});
$('.Q505').each(function(){Q505.push($(this).text());});
$('.Q506').each(function(){Q506.push($(this).text());});
$('.Q601').each(function(){Q601.push($(this).text());});
$('.Q602').each(function(){Q602.push($(this).text());});
$('.Q603a').each(function(){Q603a.push($(this).text());});
$('.Q603b').each(function(){Q603b.push($(this).text());});
$('.Q603c').each(function(){Q603c.push($(this).text());});
$('.Q604').each(function(){Q604.push($(this).text());});
$('.Q605').each(function(){Q605.push($(this).text());});
$('.Q701').each(function(){Q701.push($(this).text());});
$('.Q702').each(function(){Q702.push($(this).text());});
$('.Q703').each(function(){Q703.push($(this).text());});
$('.Q704a').each(function(){Q704a.push($(this).text());});
$('.Q704a_time').each(function(){Q704a_time.push($(this).text());});
$('.Q704a_day').each(function(){Q704a_day.push($(this).text());});
$('.Q704b').each(function(){Q704b.push($(this).text());});
$('.Q704b_time').each(function(){Q704b_time.push($(this).text());});
$('.Q704b_day').each(function(){Q704b_day.push($(this).text());});
$('.Q704c').each(function(){Q704c.push($(this).text());});
$('.Q704c_time').each(function(){Q704c_time.push($(this).text());});
$('.Q704c_day').each(function(){Q704c_day.push($(this).text());});
$('.Q704d').each(function(){Q704d.push($(this).text());});
$('.Q704d_time').each(function(){Q704d_time.push($(this).text());});
$('.Q704d_day').each(function(){Q704d_day.push($(this).text());});
$('.Q704e').each(function(){Q704e.push($(this).text());});
$('.Q704e_time').each(function(){Q704e_time.push($(this).text());});
$('.Q704e_day').each(function(){Q704e_day.push($(this).text());});
$('.Q704f').each(function(){Q704f.push($(this).text());});
$('.Q704f_time').each(function(){Q704f_time.push($(this).text());});
$('.Q704f_day').each(function(){Q704f_day.push($(this).text());});
$('.Q801').each(function(){Q801.push($(this).text());});
$('.Q901').each(function(){Q901.push($(this).text());});
$('.DA2_UserID').each(function(){DA2_UserID.push($(this).text());});
$('.DA2_EnDt').each(function(){DA2_EnDt.push($(this).text());});




 $.ajax({
 type: "POST",
 url:"serever/DAS_Data/dataD2.php",
 data: {Child_ID:Child_ID,
        Upazila_Code:Upazila_Code,
        Union_code:Union_code,
        Village_code:Village_code,
        Bari_code:Bari_code,
        HH_code:HH_code,
        CC_code:CC_code,
        Child_PID:Child_PID,
        Child_name:Child_name,
        Mother_name:Mother_name,
        MCID:MCID,
        MPID:MPID,
        Father_name:Father_name,
        Mobile:Mobile,
        ChDob:ChDob,
        ChildAge:ChildAge,
        ChildSex:ChildSex,
        CHCP_code:CHCP_code,
        IntStartDate:IntStartDate,
        IntStartTime:IntStartTime,
        Q119:Q119,
        Q119Other:Q119Other,
        Q120:Q120,
        Q120Other:Q120Other,
        Q201a:Q201a,
        Q201a_day:Q201a_day,
        Q201b:Q201b,
        Q201b_day:Q201b_day,
        Q201c:Q201c,
        Q201c_day:Q201c_day,
        Q201d:Q201d,
        Q201d_day:Q201d_day,
        Q201e:Q201e,
        Q201e_day:Q201e_day,
        Q202:Q202,
        Q202_day:Q202_day,
        Q203:Q203,
        Q203_day:Q203_day,
        Q204:Q204,
        Q204_day:Q204_day,
        Q205_1:Q205_1,
        Q205_2:Q205_2,
        Q205_3a_1:Q205_3a_1,
        Q205_3a_2:Q205_3a_2,
        Q205_3a_3:Q205_3a_3,
        Q205_3b_1:Q205_3b_1,
        Q205_3b_2:Q205_3b_2,
        Q205_3b_3:Q205_3b_3,
        Q205_3c_1:Q205_3c_1,
        Q205_3c_2:Q205_3c_2,
        Q205_3c_3:Q205_3c_3,
        Q301:Q301,
        Q302:Q302,
        Q302Other:Q302Other,
        Q401:Q401,
        Q402a:Q402a,
        Q402b:Q402b,
        Q403:Q403,
        Q404:Q404,
        Q405:Q405,
        Q501:Q501,
        Q502:Q502,
        Q503:Q503,
        Q504:Q504,
        Q505:Q505,
        Q506:Q506,
        Q601:Q601,
        Q602:Q602,
        Q603a:Q603a,
        Q603b:Q603b,
        Q603c:Q603c,
        Q604:Q604,
        Q605:Q605,
        Q701:Q701,
        Q702:Q702,
        Q703:Q703,
        Q704a:Q704a,
        Q704a_time:Q704a_time,
        Q704a_day:Q704a_day,
        Q704b:Q704b,
        Q704b_time:Q704b_time,
        Q704b_day:Q704b_day,
        Q704c:Q704c,
        Q704c_time:Q704c_time,
        Q704c_day:Q704c_day,
        Q704d:Q704d,
        Q704d_time:Q704d_time,
        Q704d_day:Q704d_day,
        Q704e:Q704e,
        Q704e_time:Q704e_time,
        Q704e_day:Q704e_day,
        Q704f:Q704f,
        Q704f_time:Q704f_time,
        Q704f_day:Q704f_day,
        Q801:Q801,
        Q901:Q901,
        DA2_UserID:DA2_UserID,
        DA2_EnDt:DA2_EnDt},
 crossDomain: true,
 cache: false,
 success: function(data){
 console.log(data);
 document.getElementById("D2_countdown").value = "Your data has been transferred.";
 },
  error:function(){
  console.log(data);
  }
 });
//setTimeout(function(){ alert("আপনার ডাটা সফল ভাবে প্রেরন হয়েছে।"); }, 15000);
D3_transferedSaveDataOne();
} else {
    alert('ট্যাবএ ইন্টারনেট কানেকশন সঠিক নেই। ইন্টারনেট কানেকশন চেক করুন এবং আবার বাটনে চাপুন।');
  }
// });
 }



// });














//  $(document).ready(function()  {


//  $("#D3_transferedSaveData").click(function(){

function D3_transferedSaveDataOne(){
  online = window.navigator.onLine;
  if (navigator.onLine) {

//    alert("ট্যাব এর ইন্টারনেট কানেকশন ঠিক আছে। এখন OK বাটনে চাপ দিন এবং অপেক্ষা করুন। আপনার ডাটা সিলেট সার্ভারএ প্রেরন হচ্ছে। ");


var DA3_childID=[];
var DA3_Q101_code =[];
var DA3_Q102_code =[];
var DA3_Q103_code =[];
var DA3_Q104_code =[];
var DA3_Q105_code =[];
var DA3_Q106_code =[];
var DA3_Q107 =[];
var DA3_Q108_code =[];
var DA3_Q109 =[];
var DA3_Q110 =[];
var DA3_Q111 =[];
var DA3_Q112 =[];
var DA3_Q113 =[];
var DA3_Q114 =[];
var DA3_Q115 =[];
var DA3_Q116 =[];
var DA3_Q117Date =[];
var DA3_Q117Time =[];
var DA3_Q201 =[];
var DA3_Q202a =[];
//var DA3_Q202a2 =[];
var DA3_Q202b =[];
//var DA3_Q202b2 =[];
var DA3_Q202c =[];
//var DA3_Q202c2 =[];
var DA3_Q202d =[];
//var DA3_Q202d2 =[];
var DA3_Q203 =[];
var DA3_Q204 =[];
var DA3_Q204O =[];
var DA3_Q205 =[];
var DA3_Q206=[];
var DA3_Q207 =[];
var DA3_Q301 =[];
var DA3_Q302 =[];
var DA3_Q303 =[];
var DA3_Q400 =[];
var Entry_User_ID =[];
var Entry_Date=[];


$('.DA3_childID').each(function(){DA3_childID.push($(this).text());});
$('.DA3_Q101_code').each(function(){DA3_Q101_code.push($(this).text());});
$('.DA3_Q102_code').each(function(){DA3_Q102_code.push($(this).text());});
$('.DA3_Q103_code').each(function(){DA3_Q103_code.push($(this).text());});
$('.DA3_Q104_code').each(function(){DA3_Q104_code.push($(this).text());});
$('.DA3_Q105_code').each(function(){DA3_Q105_code.push($(this).text());});
$('.DA3_Q106_code').each(function(){DA3_Q106_code.push($(this).text());});
$('.DA3_Q107').each(function(){DA3_Q107.push($(this).text());});
$('.DA3_Q108_code').each(function(){DA3_Q108_code.push($(this).text());});
$('.DA3_Q109').each(function(){DA3_Q109.push($(this).text());});
$('.DA3_Q110').each(function(){DA3_Q110.push($(this).text());});
$('.DA3_Q111').each(function(){DA3_Q111.push($(this).text());});
$('.DA3_Q112').each(function(){DA3_Q112.push($(this).text());});
$('.DA3_Q113').each(function(){DA3_Q113.push($(this).text());});
$('.DA3_Q114').each(function(){DA3_Q114.push($(this).text());});
$('.DA3_Q115').each(function(){DA3_Q115.push($(this).text());});
$('.DA3_Q116').each(function(){DA3_Q116.push($(this).text());});
$('.DA3_Q117Date').each(function(){DA3_Q117Date.push($(this).text());});
$('.DA3_Q117Time').each(function(){DA3_Q117Time.push($(this).text());});
$('.DA3_Q201').each(function(){DA3_Q201.push($(this).text());});
$('.DA3_Q202a').each(function(){DA3_Q202a.push($(this).text());});
$//('.DA3_Q202a2').each(function(){DA3_Q202a2.push($(this).text());});
$('.DA3_Q202b').each(function(){DA3_Q202b.push($(this).text());});
//$('.DA3_Q202b2').each(function(){DA3_Q202b2.push($(this).text());});
$('.DA3_Q202c').each(function(){DA3_Q202c.push($(this).text());});
//$('.DA3_Q202c2').each(function(){DA3_Q202c2.push($(this).text());});
$('.DA3_Q202d').each(function(){DA3_Q202d.push($(this).text());});
//$('.DA3_Q202d2').each(function(){DA3_Q202d2.push($(this).text());});
$('.DA3_Q203').each(function(){DA3_Q203.push($(this).text());});
$('.DA3_Q204').each(function(){DA3_Q204.push($(this).text());});
$('.DA3_Q204O').each(function(){DA3_Q204O.push($(this).text());});
$('.DA3_Q205').each(function(){DA3_Q205.push($(this).text());});
$('.DA3_Q206').each(function(){DA3_Q206.push($(this).text());});
$('.DA3_Q207').each(function(){DA3_Q207.push($(this).text());});
$('.DA3_Q301').each(function(){DA3_Q301.push($(this).text());});
$('.DA3_Q302').each(function(){DA3_Q302.push($(this).text());});
$('.DA3_Q303').each(function(){DA3_Q303.push($(this).text());});
$('.DA3_Q400').each(function(){DA3_Q400.push($(this).text());});
$('.Entry_User_ID').each(function(){Entry_User_ID.push($(this).text());});
$('.Entry_Date').each(function(){Entry_Date.push($(this).text());});


  $.ajax({
  type: "POST",
  url:"server/DAS_Data/dataD3.php",
  data: {DA3_childID:DA3_childID,
         DA3_Q101_code:DA3_Q101_code ,
         DA3_Q102_code:DA3_Q102_code ,
         DA3_Q103_code:DA3_Q103_code ,
         DA3_Q104_code:DA3_Q104_code ,
         DA3_Q105_code:DA3_Q105_code ,
         DA3_Q106_code:DA3_Q106_code ,
         DA3_Q107:DA3_Q107 ,
         DA3_Q108_code:DA3_Q108_code ,
         DA3_Q109:DA3_Q109 ,
         DA3_Q110:DA3_Q110 ,
         DA3_Q111:DA3_Q111 ,
         DA3_Q112:DA3_Q112 ,
         DA3_Q113:DA3_Q113 ,
         DA3_Q114:DA3_Q114 ,
         DA3_Q115:DA3_Q115 ,
         DA3_Q116:DA3_Q116 ,
         DA3_Q117Date:DA3_Q117Date ,
         DA3_Q117Time:DA3_Q117Time ,
         DA3_Q201:DA3_Q201 ,
         DA3_Q202a:DA3_Q202a ,
//         DA3_Q202a2:DA3_Q202a2 ,
         DA3_Q202b:DA3_Q202b ,
//         DA3_Q202b2:DA3_Q202b2 ,
         DA3_Q202c:DA3_Q202c ,
//         DA3_Q202c2:DA3_Q202c2 ,
         DA3_Q202d:DA3_Q202d ,
//         DA3_Q202d2:DA3_Q202d2 ,
         DA3_Q203:DA3_Q203 ,
         DA3_Q204:DA3_Q204 ,
         DA3_Q204O:DA3_Q204O ,
         DA3_Q205:DA3_Q205 ,
         DA3_Q206:DA3_Q206,
         DA3_Q207:DA3_Q207 ,
         DA3_Q301:DA3_Q301 ,
         DA3_Q302:DA3_Q302 ,
         DA3_Q303:DA3_Q303 ,
         DA3_Q400:DA3_Q400 ,
         Entry_User_ID:Entry_User_ID ,
         Entry_Date:Entry_Date},
  crossDomain: true,
  cache: false,
  success: function(data){
  console.log(data);
  document.getElementById("D3_countdown").value = "Your data has been transferred.";
  },
    error:function(){
    console.log(data);
    }

  });
//to synce connrect data from server. function in producthandler
SyncUpdate();
 } else {
     alert('ট্যাবএ ইন্টারনেট কানেকশন সঠিক নেই। ইন্টারনেট কানেকশন চেক করুন এবং আবার বাটনে চাপুন।');
   }

}
//  });

//  });




function showDate(){
var date = new Date()
var year = date.getYear()
if(year < 1000){
year += 1900
}
var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
document.getElementById("cDate").value = monthArray[date.getMonth()] + " " + date.getDate() + ", " + year;
}

function clock(){
	showDate();
var time = new Date()
var hr = time.getHours()
var min = time.getMinutes()
var sec = time.getSeconds()
var ampm = "PM"
if (hr < 12){
ampm = "AM"
}
if (hr > 12){
hr -= 12
}
if (hr < 10){
hr = "0" + hr
}
if (min < 10){
min = "0" + min
}
if (sec < 10){
sec = "0" + sec
}
document.clockForm.clockButton.value = hr + ":" + min + ":" + sec + ampm;
setTimeout("clock()", 1000);
(function(){ $("#DateTimeChk").dialog(); })();
}
welcomeScreen();
window.onload=clock;



//-->




function DA_2_Next_1(){
var DA2_childID = document.getElementById("DA2_ChildID").value;

if(DA2_childID.length>7 || DA2_childID.length<7 || DA2_childID==""){
alert("শিশুর আইডি সঠিক নয়।");
}
else{
window.location.href='#DA2_identification_page_1';
document.getElementById("CurrentChildID").innerHTML = DA2_childID;
}

}


function DA_2_next_2(){
/*
var cpid = document.getElementById("DA2_Q107").value;
var upazilaCode = document.getElementById("DA2_Q101_code").value;
var unionCode = document.getElementById("DA2_Q102_code").value;
var villageCode = document.getElementById("DA2_Q103_code").value;
var bariCode = document.getElementById("DA2_Q104_code").value;
var hhCode = document.getElementById("DA2_Q105_code").value;
var ccCode = document.getElementById("DA2_Q106_code").value;
var childName = document.getElementById("DA2_Q108_code").value;

if(cpid=="" || cpid.length<11 || cpid.length > 11){
alert("সঠিক CPID দিন।")
}
else if(upazilaCode==""){
alert("উপজিলা কোড নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।")
}
else if(unionCode==""){
alert("ইউনিয়ন কোড নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।")
}
else if(villageCode==""){
alert("গ্রামের কোড নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।")
}
else if(bariCode==""){
alert("বাড়ি কোড নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।")
}
else if(hhCode==""){
alert("বাড়ি কোড নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।")
}
else if(childName==""){
alert("শিশুর নাম নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।")
}
else{
window.location.href='#DA2_identification_page_2';
}


*/}




function DA_2_next_3(){

var CDate = new Date();

var DA_2_CYear = CDate.getFullYear();

var DA_2_CM = CDate.getMonth()+1;
if(DA_2_CM.toString().length<2){
var DA_2_CMonth = "0"+DA_2_CM;
}
else{
var DA_2_CMonth = DA_2_CM;
}

var DA_2_CD = CDate.getDate();
if(DA_2_CD.toString().length<2){
var DA_2_CDay = "0"+DA_2_CD;
}
else{
var DA_2_CDay = DA_2_CD;
}

var DA_2_H = CDate.getHours();
if(DA_2_H.toString().length<2){
var DA_2_CHour = "0"+DA_2_H;
}
else{
var DA_2_CHour = DA_2_H;
}

var DA_2_M = CDate.getMinutes();
if(DA_2_M.toString().length<2){
var DA_2_CMin = "0"+DA_2_M;
}
else{
var DA_2_CMin = DA_2_M;
}


document.getElementById("DA2_Q118Date").value = DA_2_CYear+"-"+DA_2_CMonth+"-"+DA_2_CDay;
document.getElementById("DA2_Q118Time").value = DA_2_CHour+":"+DA_2_CMin;






var mname = document.getElementById("DA2_Q109").value;
var mcid = document.getElementById("DA2_Q110").value;
var mpid = document.getElementById("DA2_Q111").value;
var fname = document.getElementById("DA2_Q112").value;
var dob = document.getElementById("DA2_Q114").value;
var CurChildAge = document.getElementById("DA2_Q115").value;
var sex = document.getElementById("DA2_Q116").value;
var DA2_mob = document.getElementById("DA2_Q113").value;

var M_dob = new Date(dob).getTime();
var today = new Date().getTime();

var timeDiff = Math.abs(today - M_dob);
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

var mn = (diffDays/365);



if(mname==""){
alert("মায়ের নাম নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।");
}
else if(mcid==""){
alert("মায়ের MCID নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।");
}
else if(mpid==""){
alert("মায়ের MPID নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।");
}
else if(fname==""){
alert("বাবার নাম নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।");
}
else if(dob==""){
alert(" শিশুর জন্ম তারিখ নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।");
}
else if(sex==""){
alert(" শিশুর ছেলে না মে তা নির্বাচন করা নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।");
}

else if(DA2_mob.length!=11 && DA2_mob!=""){
alert("সঠিক মোবাইল নাম্বার দিন। ");
}

else{
//window.location.href='#DA2_CHCP';
window.location.href='#DA2_respondent';
//if(document.getElementById("DA2_Q114").value!="1909-09-09"){
//document.getElementById("DA2_Q115").value = mn.toString().split(".")[0];
//}

if(document.getElementById("DA2_Q107").value=="99999999999"){
document.getElementById("DA3_Q101_code").value=document.getElementById("DA2_Q101_card_no").value;
document.getElementById("DA3_Q102_code").value=document.getElementById("DA2_Q102_card_no").value;
document.getElementById("DA3_Q103_code").value=document.getElementById("DA2_Q103_card_no").value;
document.getElementById("DA3_Q104_code").value=document.getElementById("DA2_Q104_card_no").value;
document.getElementById("DA3_Q105_code").value=document.getElementById("DA2_Q105_card_no").value;
document.getElementById("DA3_Q108_code").value=document.getElementById("DA2_Q108_code").value;
document.getElementById("DA3_Q109").value=document.getElementById("DA2_Q109").value;
document.getElementById("DA3_Q110").value=document.getElementById("DA2_Q110").value;
document.getElementById("DA3_Q112").value=document.getElementById("DA2_Q112").value;
document.getElementById("DA3_Q113").value=document.getElementById("DA2_Q114").value;
document.getElementById("DA3_Q114").value=document.getElementById("DA2_Q115").value;
document.getElementById("DA3_Q115").value=document.getElementById("DA2_Q116").value;
document.getElementById("DA3_childInfoGet").style.display="none";
}
else{
document.getElementById("DA3_childInfoGet").style.display="block";
}

}



}






function DA_2_next_4(){

var DA2_Q117 = document.getElementById("DA2_Q117").value;
var DA2_Q118Date = document.getElementById("DA2_Q118Date").value;
var DA2_Q118Time = document.getElementById("DA2_Q118Time").value;

if(DA2_Q117==""){
alert("সিএইচসিপির কোড নেই। আবার নতুন করে শুরু করুন।");
}
else if(DA2_Q118Date==""){
alert("তারিখ নেই। পিছনে গিয়ে আবার Next বাটনে চাপুন।");
}
else if (DA2_Q118Time==""){
alert("সময় নেই। পিছনে গিয়ে আবার Next বাটনে চাপুন।");
}
else{
window.location.href='#DA2_respondent';
}

}

/*
function Q119Other(){
if (document.getElementById("DA2_Q119Respondent").value == "9"){
document.getElementById("otherQ119").style.display="block";
}
else{
document.getElementById("otherQ119").style.display="none";
document.getElementById("DA2_Q119Other").value = "";
}
}
*/


/*
function Q120Other(){
if (document.getElementById("DA2_120result").value == "7"){
document.getElementById("otherQ120").style.display="block";
}
else{
document.getElementById("otherQ120").style.display="none";
document.getElementById("DA2_Q120Other").value = "";
}
}
*/

function DA_2_next_5(){

var CDate = new Date();

var DA_2_H = CDate.getHours();
if(DA_2_H.toString().length<2){
var DA_2_CHour = "0"+DA_2_H;
}
else{
var DA_2_CHour = DA_2_H;
}

var DA_2_M = CDate.getMinutes();
if(DA_2_M.toString().length<2){
var DA_2_CMin = "0"+DA_2_M;
}
else{
var DA_2_CMin = DA_2_M;
}





var Respondent = document.getElementById("DA2_Q119Respondent").value;
var Q119Other = document.getElementById("DA2_Q119Other").value;
var Q120result = document.getElementById("DA2_120result").value;
var Q120Other = document.getElementById("DA2_Q120Other").value;

var DA2_Q117 = document.getElementById("DA2_Q117").value;
var DA2_Q118Date = document.getElementById("DA2_Q118Date").value;
var DA2_Q118Time = document.getElementById("DA2_Q118Time").value;

if(Respondent==""){
alert("উত্তরদাতা/দাত্রী নির্বাচন করুন।");
return false;
}

else if(DA2_Q117=="" || DA2_Q118Date=="" || DA2_Q118Time==""){
alert("সিএইচসিপির কোড নেই এবং ভিজিট তারিখ ও সময় নেই। আপনি Back বাটনে ক্লিক করে আবার NEXT বাটনে ক্লিক করুন।");
}
else if(Q120result=="" || Q120result=="2" ){
alert("ভিজিটের সঠিক ফলাফল নির্বাচন করুন।");
return false;
}

else if(Q120result!="1"){
window.location.href='#DA2_Q901_page';
document.getElementById("DA2_Q901").value = DA_2_CHour+":"+DA_2_CMin;
return true;
}
else{
window.location.href='#DA2_Q201_page';
document.getElementById("cancelD4Form").style.display = "block";
if(document.getElementById("Q202_valueForQ201").value=="1" && document.getElementById("Q204_valueForQ201").value=="2"){
document.getElementById("DA2_Q201_a").value = "";
$('#DA2_Q201_a').selectmenu().selectmenu('refresh', true);
document.getElementById("hideForD1Q202").style.display="none";
document.getElementById("showForD1Q202").style.display="block";
document.getElementById("DA2_Q201_aAuto_Display").value = "কাশি আছে";
document.getElementById("DA2_Q201_aAuto").value = "01";
}
else if(document.getElementById("Q202_valueForQ201").value=="2" && document.getElementById("Q204_valueForQ201").value=="1"){
document.getElementById("DA2_Q201_a").value = "";
$('#DA2_Q201_a').selectmenu().selectmenu('refresh', true);
document.getElementById("hideForD1Q202").style.display="none";
document.getElementById("showForD1Q202").style.display="block";
document.getElementById("DA2_Q201_aAuto_Display").value = "শ্বাসকষ্ট  আছে";
document.getElementById("DA2_Q201_aAuto").value = "03";
}
else if(document.getElementById("Q202_valueForQ201").value=="1" && document.getElementById("Q204_valueForQ201").value=="1"){
document.getElementById("DA2_Q201_a").value = "";
$('#DA2_Q201_a').selectmenu().selectmenu('refresh', true);
document.getElementById("hideForD1Q202").style.display="none";
document.getElementById("showForD1Q202").style.display="block";
document.getElementById("DA2_Q201_aAuto_Display").value = "কাশি আছে";
document.getElementById("DA2_Q201_aAuto").value = "01";

document.getElementById("DA2_Q201_bHide").style.display = "block";
document.getElementById("DA2_Q201_b").value = "";
$('#DA2_Q201_b').selectmenu().selectmenu('refresh', true);
document.getElementById("hideForD1Q204").style.display = "none";
document.getElementById("showForD1Q204").style.display = "block";
document.getElementById("DA2_Q201_bAuto_Display").value = "শ্বাসকষ্ট  আছে";
document.getElementById("DA2_Q201_bAuto").value = "03";
document.getElementById("minusDA2_Q201_b").style.display="none";
}
else
{
document.getElementById("hideForD1Q202").style.display="block";
document.getElementById("showForD1Q202").style.display="none";
document.getElementById("DA2_Q201_aAuto_Display").value = "";
document.getElementById("DA2_Q201_aAuto").value = "";

document.getElementById("DA2_Q201_bHide").style.display = "none";
document.getElementById("hideForD1Q204").style.display = "block";
document.getElementById("showForD1Q204").style.display = "none";
document.getElementById("DA2_Q201_bAuto_Display").value = "";
document.getElementById("DA2_Q201_bAuto").value = "";
document.getElementById("minusDA2_Q201_b").style.display="block";
}


/*
if(document.getElementById("Q204_valueForQ201").value=="1"){
document.getElementById("DA2_Q201_b").value = "";
$('#DA2_Q201_b').selectmenu().selectmenu('refresh', true);
document.getElementById("hideForD1Q204").style.display = "none";
document.getElementById("showForD1Q204").style.display = "block";
document.getElementById("DA2_Q201_bAuto_Display").value = "শ্বাসকষ্ট  আছে";
document.getElementById("DA2_Q201_bAuto").value = "03";
document.getElementById("minusDA2_Q201_b").style.display="none";
}
else{
document.getElementById("DA2_Q201_bHide").style.display = "none";
document.getElementById("hideForD1Q204").style.display = "block";
document.getElementById("showForD1Q204").style.display = "none";
document.getElementById("DA2_Q201_bAuto_Display").value = "";
document.getElementById("DA2_Q201_bAuto").value = "";
}
*/


return true;
}
}



//function DA2_Q103_card_no(){

//document.getElementById("DA2_Q104_card_no").value="999";
//document.getElementById("DA2_Q105_card_no").value="99";
//}




function DA_2_next_6(){
var Q201_a = document.getElementById("DA2_Q201_a").value;
var Q201_b = document.getElementById("DA2_Q201_b").value;
var Q201_c = document.getElementById("DA2_Q201_c").value;
var Q201_d = document.getElementById("DA2_Q201_d").value;
var Q201_e = document.getElementById("DA2_Q201_e").value;

var DA2_Q201_aAuto = document.getElementById("DA2_Q201_aAuto").value;
var DA2_Q201_bAuto = document.getElementById("DA2_Q201_bAuto").value;


var Q201_a_day = document.getElementById("DA2_Q201_a_day").value;
var Q201_b_day = document.getElementById("DA2_Q201_b_day").value;
var Q201_c_day = document.getElementById("DA2_Q201_c_day").value;
var Q201_d_day = document.getElementById("DA2_Q201_d_day").value;
var Q201_e_day = document.getElementById("DA2_Q201_e_day").value;


if(Q201_a=="01"){
document.getElementById("DA2_Q202_day").value=Q201_a_day;
document.getElementById("DA2_Q202_day").readOnly=true;
document.getElementById("DA2_Q202_da").style.display="block";

document.getElementById("DA2_Q202").value = "";
$('#DA2_Q202').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q202Hide").style.display="none";
document.getElementById("DA2_Q202showIfselected").style.display="block";
document.getElementById("DA2_Q202Auto").value = "1";
document.getElementById("DA2_Q202AutoDisplay").value = "হ্যাঁ";

}

else if(DA2_Q201_aAuto =="01"){
document.getElementById("DA2_Q202_day").value=Q201_a_day;
document.getElementById("DA2_Q202_day").readOnly=true;
document.getElementById("DA2_Q202_da").style.display="block";

document.getElementById("DA2_Q202").value = "";
$('#DA2_Q202').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q202Hide").style.display="none";
document.getElementById("DA2_Q202showIfselected").style.display="block";
document.getElementById("DA2_Q202Auto").value = "1";
document.getElementById("DA2_Q202AutoDisplay").value = "হ্যাঁ";
     }

else if(DA2_Q201_bAuto =="01"){
document.getElementById("DA2_Q202_day").value=Q201_a_day;
document.getElementById("DA2_Q202_day").readOnly=true;
document.getElementById("DA2_Q202_da").style.display="block";

document.getElementById("DA2_Q202").value = "";
$('#DA2_Q202').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q202Hide").style.display="none";
document.getElementById("DA2_Q202showIfselected").style.display="block";
document.getElementById("DA2_Q202Auto").value = "1";
document.getElementById("DA2_Q202AutoDisplay").value = "হ্যাঁ";
     }
else if(Q201_b=="01"){
document.getElementById("DA2_Q202_day").value=Q201_b_day;
document.getElementById("DA2_Q202_day").readOnly=true;
document.getElementById("DA2_Q202_da").style.display="block";

document.getElementById("DA2_Q202").value = "";
$('#DA2_Q202').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q202Hide").style.display="none";
document.getElementById("DA2_Q202showIfselected").style.display="block";
document.getElementById("DA2_Q202Auto").value = "1";
document.getElementById("DA2_Q202AutoDisplay").value = "হ্যাঁ";
}
else if(Q201_c=="01"){
document.getElementById("DA2_Q202_day").value=Q201_c_day;
document.getElementById("DA2_Q202_day").readOnly=true;
document.getElementById("DA2_Q202_da").style.display="block";

document.getElementById("DA2_Q202").value = "";
$('#DA2_Q202').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q202Hide").style.display="none";
document.getElementById("DA2_Q202showIfselected").style.display="block";
document.getElementById("DA2_Q202Auto").value = "1";
document.getElementById("DA2_Q202AutoDisplay").value = "হ্যাঁ";
}
else if(Q201_d=="01"){
document.getElementById("DA2_Q202_day").value=Q201_d_day;
document.getElementById("DA2_Q202_day").readOnly=true;
document.getElementById("DA2_Q202_da").style.display="block";

document.getElementById("DA2_Q202").value = "";
$('#DA2_Q202').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q202Hide").style.display="none";
document.getElementById("DA2_Q202showIfselected").style.display="block";
document.getElementById("DA2_Q202Auto").value = "1";
document.getElementById("DA2_Q202AutoDisplay").value = "হ্যাঁ";
}
else if(Q201_e=="01"){
document.getElementById("DA2_Q202_day").value=Q201_e_day;
document.getElementById("DA2_Q202_day").readOnly=true;
document.getElementById("DA2_Q202_da").style.display="block";

document.getElementById("DA2_Q202").value = "";
$('#DA2_Q202').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q202Hide").style.display="none";
document.getElementById("DA2_Q202showIfselected").style.display="block";
document.getElementById("DA2_Q202Auto").value = "1";
document.getElementById("DA2_Q202AutoDisplay").value = "হ্যাঁ";
}
else{
document.getElementById("DA2_Q202_day").value="";
document.getElementById("DA2_Q202_day").readOnly=false;
document.getElementById("DA2_Q202_da").style.display="none";

document.getElementById("DA2_Q202").value = "";
$('#DA2_Q202').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q202Hide").style.display="block";
document.getElementById("DA2_Q202showIfselected").style.display="none";
document.getElementById("DA2_Q202Auto").value = "";
document.getElementById("DA2_Q202AutoDisplay").value = "";
}


if(Q201_a=="04"){
document.getElementById("DA2_Q203_day").value=Q201_a_day;
document.getElementById("DA2_Q203_day").readOnly=true;
document.getElementById("DA2_Q203_da").style.display="block";

document.getElementById("DA2_Q203").value = "";
$('#DA2_Q203').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q203Hide").style.display="none";
document.getElementById("DA2_Q203showIfselected").style.display="block";
document.getElementById("DA2_Q203Auto").value = "1";
document.getElementById("DA2_Q203AutoDisplay").value = "হ্যাঁ";
}
else if(Q201_b=="04"){
document.getElementById("DA2_Q203_day").value=Q201_b_day;
document.getElementById("DA2_Q203_day").readOnly=true;
document.getElementById("DA2_Q203_da").style.display="block";

document.getElementById("DA2_Q203").value = "";
$('#DA2_Q203').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q203Hide").style.display="none";
document.getElementById("DA2_Q203showIfselected").style.display="block";
document.getElementById("DA2_Q203Auto").value = "1";
document.getElementById("DA2_Q203AutoDisplay").value = "হ্যাঁ";
}
else if(Q201_c=="04"){
document.getElementById("DA2_Q203_day").value=Q201_c_day;
document.getElementById("DA2_Q203_day").readOnly=true;
document.getElementById("DA2_Q203_da").style.display="block";

document.getElementById("DA2_Q203").value = "";
$('#DA2_Q203').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q203Hide").style.display="none";
document.getElementById("DA2_Q203showIfselected").style.display="block";
document.getElementById("DA2_Q203Auto").value = "1";
document.getElementById("DA2_Q203AutoDisplay").value = "হ্যাঁ";
}
else if(Q201_d=="04"){
document.getElementById("DA2_Q203_day").value=Q201_d_day;
document.getElementById("DA2_Q203_day").readOnly=true;
document.getElementById("DA2_Q203_da").style.display="block";

document.getElementById("DA2_Q203").value = "";
$('#DA2_Q203').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q203Hide").style.display="none";
document.getElementById("DA2_Q203showIfselected").style.display="block";
document.getElementById("DA2_Q203Auto").value = "1";
document.getElementById("DA2_Q203AutoDisplay").value = "হ্যাঁ";
}
else if(Q201_e=="04"){
document.getElementById("DA2_Q203_day").value=Q201_e_day;
document.getElementById("DA2_Q203_day").readOnly=true;
document.getElementById("DA2_Q203_da").style.display="block";

document.getElementById("DA2_Q203").value = "";
$('#DA2_Q203').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q203Hide").style.display="none";
document.getElementById("DA2_Q203showIfselected").style.display="block";
document.getElementById("DA2_Q203Auto").value = "1";
document.getElementById("DA2_Q203AutoDisplay").value = "হ্যাঁ";
}
else{
document.getElementById("DA2_Q203_day").value="";
document.getElementById("DA2_Q203_day").readOnly=false;
document.getElementById("DA2_Q203_da").style.display="none";

document.getElementById("DA2_Q203").value = "";
$('#DA2_Q203').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q203Hide").style.display="block";
document.getElementById("DA2_Q203showIfselected").style.display="none";
document.getElementById("DA2_Q203Auto").value = "";
document.getElementById("DA2_Q203AutoDisplay").value = "";
}


if(Q201_a=="03"){
document.getElementById("DA2_Q204_day").value=Q201_a_day;
document.getElementById("DA2_Q204_day").readOnly=true;
document.getElementById("DA2_Q204_da").style.display="block";

document.getElementById("DA2_Q204").value = "";
$('#DA2_Q204').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q204Hide").style.display="none";
document.getElementById("DA2_Q204showIfselected").style.display="block";
document.getElementById("DA2_Q204Auto").value = "1";
document.getElementById("DA2_Q204AutoDisplay").value = "হ্যাঁ";
}

else if(DA2_Q201_aAuto=="03"){
document.getElementById("DA2_Q204_day").value=Q201_a_day;
document.getElementById("DA2_Q204_day").readOnly=true;
document.getElementById("DA2_Q204_da").style.display="block";

document.getElementById("DA2_Q204").value = "";
$('#DA2_Q204').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q204Hide").style.display="none";
document.getElementById("DA2_Q204showIfselected").style.display="block";
document.getElementById("DA2_Q204Auto").value = "1";
document.getElementById("DA2_Q204AutoDisplay").value = "হ্যাঁ";
}

else if(DA2_Q201_bAuto=="03"){
document.getElementById("DA2_Q204_day").value=Q201_a_day;
document.getElementById("DA2_Q204_day").readOnly=true;
document.getElementById("DA2_Q204_da").style.display="block";

document.getElementById("DA2_Q204").value = "";
$('#DA2_Q204').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q204Hide").style.display="none";
document.getElementById("DA2_Q204showIfselected").style.display="block";
document.getElementById("DA2_Q204Auto").value = "1";
document.getElementById("DA2_Q204AutoDisplay").value = "হ্যাঁ";
}

else if(Q201_b=="03"){
document.getElementById("DA2_Q204_day").value=Q201_b_day;
document.getElementById("DA2_Q204_day").readOnly=true;
document.getElementById("DA2_Q204_da").style.display="block";

document.getElementById("DA2_Q204").value = "";
$('#DA2_Q204').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q204Hide").style.display="none";
document.getElementById("DA2_Q204showIfselected").style.display="block";
document.getElementById("DA2_Q204Auto").value = "1";
document.getElementById("DA2_Q204AutoDisplay").value = "হ্যাঁ";

}
else if(Q201_c=="03"){
document.getElementById("DA2_Q204_day").value=Q201_c_day;
document.getElementById("DA2_Q204_day").readOnly=true;
document.getElementById("DA2_Q204_da").style.display="block";

document.getElementById("DA2_Q204").value = "";
$('#DA2_Q204').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q204Hide").style.display="none";
document.getElementById("DA2_Q204showIfselected").style.display="block";
document.getElementById("DA2_Q204Auto").value = "1";
document.getElementById("DA2_Q204AutoDisplay").value = "হ্যাঁ";

}
else if(Q201_d=="03"){
document.getElementById("DA2_Q204_day").value=Q201_d_day;
document.getElementById("DA2_Q204_day").readOnly=true;
document.getElementById("DA2_Q204_da").style.display="block";

document.getElementById("DA2_Q204").value = "";
$('#DA2_Q204').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q204Hide").style.display="none";
document.getElementById("DA2_Q204showIfselected").style.display="block";
document.getElementById("DA2_Q204Auto").value = "1";
document.getElementById("DA2_Q204AutoDisplay").value = "হ্যাঁ";

}
else if(Q201_e=="03"){
document.getElementById("DA2_Q204_day").value=Q201_e_day;
document.getElementById("DA2_Q204_day").readOnly=true;
document.getElementById("DA2_Q204_da").style.display="block";

document.getElementById("DA2_Q204").value = "";
$('#DA2_Q204').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q204Hide").style.display="none";
document.getElementById("DA2_Q204showIfselected").style.display="block";
document.getElementById("DA2_Q204Auto").value = "1";
document.getElementById("DA2_Q204AutoDisplay").value = "হ্যাঁ";

}
else{
document.getElementById("DA2_Q204_day").value="";
document.getElementById("DA2_Q204_day").readOnly=false;
document.getElementById("DA2_Q204_da").style.display="none";

document.getElementById("DA2_Q204").value = "";
$('#DA2_Q204').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q204Hide").style.display="block";
document.getElementById("DA2_Q204showIfselected").style.display="none";
document.getElementById("DA2_Q204Auto").value = "";
document.getElementById("DA2_Q204AutoDisplay").value = "";

}













if(Q201_a=="" && DA2_Q201_aAuto =="" ){
alert("201 A থেকে যে কোন একটি নির্বাচন করুন।");
}
else if((Q201_a=="" && DA2_Q201_aAuto =="") && (Q201_b!="" || Q201_c!="" || Q201_d!="" || Q201_e!="")){
alert("প্রথমে Q2.01 A থেকে যে কোন একটি নির্বাচন করুন।");
}
else if((Q201_b=="" && DA2_Q201_bAuto=="")  && (Q201_c!="" || Q201_d!="" || Q201_e!="")){
alert("এই প্রশ্নের উত্তর দেয়ার জন্য আপনাকে সিরিয়াল ঠিকরেখে উত্তর দিতে হবে");
}
else if(Q201_c=="" && (Q201_d!="" || Q201_e!="")){
alert("এই প্রশ্নের উত্তর দেয়ার জন্য আপনাকে সিরিয়াল ঠিকরেখে উত্তর দিতে হবে");
}
else if(Q201_d=="" && (Q201_e!="")){
alert("এই প্রশ্নের উত্তর দেয়ার জন্য আপনাকে সিরিয়াল ঠিকরেখে উত্তর দিতে হবে");
}

else if((Q201_a!="" || DA2_Q201_aAuto!="") && (Q201_a_day=="" || Q201_a_day.length!=2 || Q201_a_day < 1)){
alert("আপনি Q2.01A থেকে একটি নির্বাচন করেছেন, এখন তাঁর সময়কাল দিতে হবে। সময় কাল দুই ডিজিট এর হতে হবে।");
}
else if((Q201_b!="" || DA2_Q201_bAuto!="" ) && (Q201_b_day < 1 || Q201_b_day=="" || Q201_b_day.length!=2)){
alert("আপনি Q2.01B থেকে একটি নির্বাচন করেছেন, এখন তাঁর সময়কাল দিতে হবে। সময় কাল দুই ডিজিট এর হতে হবে।");
}
else if(Q201_c!="" && (Q201_c_day < 1 || Q201_c_day=="" || Q201_c_day.length!=2)){
alert("আপনি Q2.01C থেকে একটি নির্বাচন করেছেন, এখন তাঁর সময়কাল দিতে হবে। সময় কাল দুই ডিজিট এর হতে হবে।");
}
else if(Q201_d!="" && (Q201_d_day < 1 || Q201_d_day=="" || Q201_d_day.length!=2)){
alert("আপনি Q2.01D থেকে একটি নির্বাচন করেছেন, এখন তাঁর সময়কাল দিতে হবে। সময় কাল দুই ডিজিট এর হতে হবে।");
}
else if(Q201_e!="" && (Q201_e_day < 1 || Q201_e_day=="" || Q201_e_day.length!=2)){
alert("আপনি Q2.01E থেকে একটি নির্বাচন করেছেন, এখন তাঁর সময়কাল দিতে হবে। সময় কাল দুই ডিজিট এর হতে হবে।");
}

else if((Q201_a!="") && (Q201_a==DA2_Q201_bAuto || Q201_a==Q201_b || Q201_a==Q201_c || Q201_a==Q201_d || Q201_a==Q201_e)){
alert("একই উত্তর একবারের বেশি দিতে পারবেন না।");
}
else if((Q201_b!="") && (Q201_b==DA2_Q201_aAuto || Q201_b==Q201_a || Q201_b==Q201_c || Q201_b==Q201_d || Q201_b==Q201_e)){
alert("একই উত্তর একবারের বেশি দিতে পারবেন না।");
}
else if(Q201_c!="" && (Q201_c==DA2_Q201_aAuto ||Q201_c==Q201_a || Q201_c==DA2_Q201_bAuto || Q201_c==Q201_b || Q201_c==Q201_d || Q201_c==Q201_e)){
alert("একই উত্তর একবারের বেশি দিতে পারবেন না।");
}
else if(Q201_d!="" && (Q201_d==DA2_Q201_aAuto || Q201_d==Q201_a || Q201_d==DA2_Q201_bAuto || Q201_d==Q201_b || Q201_d==Q201_c || Q201_d==Q201_e)){
alert("একই উত্তর একবারের বেশি দিতে পারবেন না।");
}
else if(Q201_e!="" && (Q201_e==DA2_Q201_aAuto || Q201_e==Q201_a || Q201_e==DA2_Q201_bAuto || Q201_e==Q201_b || Q201_e==Q201_c || Q201_e==Q201_d)){
alert("একই উত্তর একবারের বেশি দিতে পারবেন না।");
}
else{
window.location.href='#DA2_Q202_page';

}

}


function DA2_Q201a(){
if(document.getElementById("DA2_Q201_a").value==""){
document.getElementById("DA2_Q201_a_day").value="";
}
}

function DA2_Q201b(){
if(document.getElementById("DA2_Q201_b").value==""){
document.getElementById("DA2_Q201_b_day").value="";
}
}

function DA2_Q201c(){
if(document.getElementById("DA2_Q201_c").value==""){
document.getElementById("DA2_Q201_c_day").value="";
}
}

function DA2_Q201d(){
if(document.getElementById("DA2_Q201_d").value==""){
document.getElementById("DA2_Q201_d_day").value="";
}
}

function DA2_Q201e(){
if(document.getElementById("DA2_Q201_e").value==""){
document.getElementById("DA2_Q201_e_day").value="";
}
}





function DA2_Q202SetDay(){

var Q201_a = document.getElementById("DA2_Q201_a").value;
var Q201_b = document.getElementById("DA2_Q201_b").value;
var Q201_c = document.getElementById("DA2_Q201_c").value;
var Q201_d = document.getElementById("DA2_Q201_d").value;
var Q201_e = document.getElementById("DA2_Q201_e").value;

var DA2_Q202 = document.getElementById("DA2_Q202").value;
var DA2_Q203 = document.getElementById("DA2_Q203").value;
var DA2_Q204 = document.getElementById("DA2_Q204").value;

if(document.getElementById("DA2_Q202").value=="1"){
document.getElementById("DA2_Q202_da").style.display = "block";
}
else{
document.getElementById("DA2_Q202_da").style.display = "none";
document.getElementById("DA2_Q202_day").value = "";
}

if(DA2_Q202 == "1" && Q201_a=="01"){
document.getElementById("DA2_Q202_day").value = document.getElementById("DA2_Q201_a_day").value;
}
else if(DA2_Q202 == "1" && Q201_b=="01"){
document.getElementById("DA2_Q202_day").value = document.getElementById("DA2_Q201_b_day").value;
}
else if(DA2_Q202 == "1" && Q201_c=="01"){
document.getElementById("DA2_Q202_day").value = document.getElementById("DA2_Q201_c_day").value;
}
else if(DA2_Q202 == "1" && Q201_d=="01"){
document.getElementById("DA2_Q202_day").value = document.getElementById("DA2_Q201_d_day").value;
}
else if(DA2_Q202 == "1" && Q201_e=="01"){
document.getElementById("DA2_Q202_day").value = document.getElementById("DA2_Q201_e_day").value;
}
else{
document.getElementById("DA2_Q202_day").value="";
}
}







function DA2_Q203SetDay(){

var Q201_a = document.getElementById("DA2_Q201_a").value;
var Q201_b = document.getElementById("DA2_Q201_b").value;
var Q201_c = document.getElementById("DA2_Q201_c").value;
var Q201_d = document.getElementById("DA2_Q201_d").value;
var Q201_e = document.getElementById("DA2_Q201_e").value;

var DA2_Q202 = document.getElementById("DA2_Q202").value;
var DA2_Q203 = document.getElementById("DA2_Q203").value;
var DA2_Q204 = document.getElementById("DA2_Q204").value;

if(document.getElementById("DA2_Q203").value=="1"){
document.getElementById("DA2_Q203_da").style.display = "block";
}
else{
document.getElementById("DA2_Q203_da").style.display = "none";
document.getElementById("DA2_Q203_day").value = "";
}

if(DA2_Q203 == "1" && Q201_a=="04"){
document.getElementById("DA2_Q203_day").value = document.getElementById("DA2_Q201_a_day").value;
}
else if(DA2_Q203 == "1" && Q201_b=="04"){
document.getElementById("DA2_Q203_day").value = document.getElementById("DA2_Q201_b_day").value;
}
else if(DA2_Q203 == "1" && Q201_c=="04"){
document.getElementById("DA2_Q203_day").value = document.getElementById("DA2_Q201_c_day").value;
}
else if(DA2_Q203 == "1" && Q201_d=="04"){
document.getElementById("DA2_Q203_day").value = document.getElementById("DA2_Q201_d_day").value;
}
else if(DA2_Q203 == "1" && Q201_e=="04"){
document.getElementById("DA2_Q203_day").value = document.getElementById("DA2_Q201_e_day").value;
}
else{
document.getElementById("DA2_Q203_day").value="";
}
}


function DA2_Q204SetDay(){

var Q201_a = document.getElementById("DA2_Q201_a").value;
var Q201_b = document.getElementById("DA2_Q201_b").value;
var Q201_c = document.getElementById("DA2_Q201_c").value;
var Q201_d = document.getElementById("DA2_Q201_d").value;
var Q201_e = document.getElementById("DA2_Q201_e").value;

var DA2_Q202 = document.getElementById("DA2_Q202").value;
var DA2_Q203 = document.getElementById("DA2_Q203").value;
var DA2_Q204 = document.getElementById("DA2_Q204").value;

if(document.getElementById("DA2_Q204").value=="1"){
document.getElementById("DA2_Q204_da").style.display = "block";
}
else{
document.getElementById("DA2_Q204_da").style.display = "none";
document.getElementById("DA2_Q204_day").value = "";
}

if(DA2_Q204 == "1" && Q201_a=="03"){
document.getElementById("DA2_Q204_day").value = document.getElementById("DA2_Q201_a_day").value;
}
else if(DA2_Q204 == "1" && Q201_b=="03"){
document.getElementById("DA2_Q204_day").value = document.getElementById("DA2_Q201_b_day").value;
}
else if(DA2_Q204 == "1" && Q201_c=="03"){
document.getElementById("DA2_Q204_day").value = document.getElementById("DA2_Q201_c_day").value;
}
else if(DA2_Q204 == "1" && Q201_d=="03"){
document.getElementById("DA2_Q204_day").value = document.getElementById("DA2_Q201_d_day").value;
}
else if(DA2_Q204 == "1" && Q201_e=="03"){
document.getElementById("DA2_Q204_day").value = document.getElementById("DA2_Q201_e_day").value;
}
else{
document.getElementById("DA2_Q204_day").value="";
}
}




function DA_2_next_7(){


var Q201_1 = document.getElementById("DA2_Q201_a").value;
var Q201_2 = document.getElementById("DA2_Q201_b").value;
var Q201_3 = document.getElementById("DA2_Q201_c").value;
var Q201_4 = document.getElementById("DA2_Q201_d").value;
var Q201_5 = document.getElementById("DA2_Q201_e").value;


if(document.getElementById("DA2_Q202").value=="" && document.getElementById("DA2_Q202Auto").value==""){
alert("Q2.02 হ্যাঁ অথবা না থাকতে হবে।");
}
else if(document.getElementById("DA2_Q203").value=="" && document.getElementById("DA2_Q203Auto").value==""){
alert("Q2.03 হ্যাঁ অথবা না থাকতে হবে।");
}
else if(document.getElementById("DA2_Q204").value=="" && document.getElementById("DA2_Q204Auto").value==""){
alert("Q2.04 হ্যাঁ অথবা না থাকতে হবে।");
}
else if((document.getElementById("DA2_Q202").value=="1" || document.getElementById("DA2_Q202Auto").value=="1") && (document.getElementById("DA2_Q202_day").value=="" ||document.getElementById("DA2_Q202_day").value.length!=2 ||document.getElementById("DA2_Q202_day").value < 1 )){
alert("আপনি Q2.02এ হাঁ আছে, তাই এর সময়কাল দিতে হবে এবং সময়কাল দুই ডিজিট এর হতে হবে। ");
}
else if((document.getElementById("DA2_Q203").value=="1" || document.getElementById("DA2_Q203Auto").value=="1") && (document.getElementById("DA2_Q203_day").value=="" || document.getElementById("DA2_Q203_day").value.length!=2 || document.getElementById("DA2_Q203_day").value < 1)){
alert("আপনি Q2.03এ হাঁ আছে, তাই এর সময়কাল দিতে হবে এবং সময়কাল দুই ডিজিট এর হতে হবে।");
}
else if((document.getElementById("DA2_Q204").value=="1" || document.getElementById("DA2_Q204Auto").value=="1") && (document.getElementById("DA2_Q204_day").value=="" || document.getElementById("DA2_Q204_day").value.length!=2 || document.getElementById("DA2_Q204_day").value < 1)){
alert("আপনি Q2.04এ হাঁ আছে, তাই এর সময়কাল দিতে হবে এবং সময়কাল দুই ডিজিট এর হতে হবে।");
}
else if((document.getElementById("DA2_Q202").value=="2" || document.getElementById("DA2_Q202").value=="9") && document.getElementById("DA2_Q202Auto").value=="" && (Q201_1=="01" || Q201_2=="01" || Q201_3=="01" || Q201_4=="01" || Q201_5=="01")){
alert("আপনি Q2.01 এর একটিতে কাশির লক্ষণ আছে নির্বাচন করেছেন। তাই এখানে হ্যাঁ থাকতে হবে।");
}

else if((document.getElementById("DA2_Q203").value=="2" || document.getElementById("DA2_Q203").value=="9") && document.getElementById("DA2_Q203Auto").value=="" && (Q201_1=="04" || Q201_2=="04" || Q201_3=="04" || Q201_4=="04" || Q201_5=="04")){
alert("আপনি Q2.01 এর একটিতে  বুকের নিচের অংশ ডেবে যাওয়া লক্ষণ আছে নির্বাচন করেছেন। তাই এখানে হ্যাঁ থাকতে হবে।");
}

else if((document.getElementById("DA2_Q204").value=="2" || document.getElementById("DA2_Q204").value=="9") && document.getElementById("DA2_Q204Auto").value=="" && (Q201_1=="03" || Q201_2=="03" || Q201_3=="03" || Q201_4=="03" || Q201_5=="03")){
alert("আপনি Q2.01 এর একটিতে  শ্বাস কষ্টের লক্ষণ আছে নির্বাচন করেছেন। তাই এখানে হ্যাঁ থাকতে হবে।");
}
else{
window.location.href='#DA2_Q205_1_page';
}
}


function DA_2_next_8(){
var Q205_1 = document.getElementById("DA2_Q205_1").value;

if(Q205_1==""){
alert("যে কোন একটি নির্বাচন করুন।");
}
else if(Q205_1!="1"){
window.location.href='#DA2_Q301_2_page';
document.getElementById("DA2_Q205_2").value="";
document.getElementById("DA2_Q205_3_a1").value="";
document.getElementById("DA2_Q205_3_a2").value="";
document.getElementById("DA2_Q205_3_a3").value="";

document.getElementById("DA2_Q205_3_b1").value="";
document.getElementById("DA2_Q205_3_b2").value="";
document.getElementById("DA2_Q205_3_b3").value="";

document.getElementById("DA2_Q205_3_c1").value="";
document.getElementById("DA2_Q205_3_c2").value="";
document.getElementById("DA2_Q205_3_c3").value="";
}
else{
window.location.href='#DA2_Q205_2_page';
}
}




function DA_2_next_9(){
var Q205_2 = document.getElementById("DA2_Q205_2").value;

if(Q205_2==""){
alert("যে কোন একটি নির্বাচন করুন।");
}
else if(Q205_2!="1"){
window.location.href='#DA2_Q301_2_page';
document.getElementById("DA2_Q205_3_a1").value="";
document.getElementById("DA2_Q205_3_a2").value="";
document.getElementById("DA2_Q205_3_a3").value="";

document.getElementById("DA2_Q205_3_b1").value="";
document.getElementById("DA2_Q205_3_b2").value="";
document.getElementById("DA2_Q205_3_b3").value="";

document.getElementById("DA2_Q205_3_c1").value="";
document.getElementById("DA2_Q205_3_c2").value="";
document.getElementById("DA2_Q205_3_c3").value="";
}
else{
window.location.href='#DA2_Q205_3_page';
}


}

function DA2_Q301(){
if(document.getElementById("DA2_Q301").value=="2"){
document.getElementById("DA2_Q301IsNo").style.display="block";
}
else{
document.getElementById("DA2_Q302").value = "";
$('#DA2_Q302').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q301IsNo").style.display="none";
document.getElementById("DA2_Q302_other").value = "";
document.getElementById("DA2_Q302Is7").style.display="none";
}
}

/*
function DA2_Q302(){
if(document.getElementById("DA2_Q302").value=="7"){
document.getElementById("DA2_Q302Is7").style.display="block";
}
else{
document.getElementById("DA2_Q302Is7").style.display="none";
document.getElementById("DA2_Q302_other").value = "";
}
}
*/

function DA_2_next_10(){

var Q205_3_a1 = document.getElementById("DA2_Q205_3_a1").value;
var Q205_3_a2 = document.getElementById("DA2_Q205_3_a2").value;
var Q205_3_a3 = document.getElementById("DA2_Q205_3_a3").value;

var Q205_3_b1 = document.getElementById("DA2_Q205_3_b1").value;
var Q205_3_b2 = document.getElementById("DA2_Q205_3_b2").value;
var Q205_3_b3 = document.getElementById("DA2_Q205_3_b3").value;

var Q205_3_c1 = document.getElementById("DA2_Q205_3_c1").value;
var Q205_3_c2 = document.getElementById("DA2_Q205_3_c2").value;
var Q205_3_c3 = document.getElementById("DA2_Q205_3_c3").value;

var DA2_Q205_3_a2Auto = document.getElementById("DA2_Q205_3_a2Auto").value;
var DA2_Q205_3_b2Auto = document.getElementById("DA2_Q205_3_b2Auto").value;
var DA2_Q205_3_c2Auto = document.getElementById("DA2_Q205_3_c2Auto").value;



if(Q205_3_a1==""){
alert("আপনাকে কমপক্ষে প্রথম বক্সে অ্যান্টিবায়োটিকের কোড দিতে হবে এবং খাওয়ানোর ধরন এবং সময়কাল দিতে হবে।");
}

else if(Q205_3_a1!="" && (Q205_3_a3 < 1 || Q205_3_a3=="" || Q205_3_a3.length!=2 || (Q205_3_a2=="" && DA2_Q205_3_a2Auto==""))){
alert("আপনি প্রথমটিতে কোড দিয়েছেন তাই খাওয়ানোর ধরন এবং সময়কাল দিতে হবে। সময়কাল দুই ডিজিট এর হতে হবে।");
}

else if(Q205_3_a2 == "1" && (Q205_3_a1=="01" || Q205_3_a1=="08" || Q205_3_a1=="12" || Q205_3_a1=="18" || Q205_3_a1=="20" )){
alert("এন্টিবায়োটিক সেবন এর পদ্ধতিতে ভুল আছে। পুনরায় নিশ্চিত করুন। ");
}

else if(Q205_3_b1!="" && (Q205_3_b3 < 1 || Q205_3_b3=="" || Q205_3_b3.length!=2 || (Q205_3_b2=="" && DA2_Q205_3_b2Auto==""))){
alert("আপনি দ্বিতীয়টিতে কোড দিয়েছেন তাই খাওয়ানোর ধরন এবং সময়কাল দিতে হবে। সময়কাল দুই ডিজিট এর হতে হবে।");
}


else if(Q205_3_b2 == "1" && (Q205_3_b1=="01" || Q205_3_b1=="08" || Q205_3_b1=="12" || Q205_3_b1=="18" || Q205_3_b1=="20" )){
alert("এন্টিবায়োটিক সেবন এর পদ্ধতিতে ভুল আছে। পুনরায় নিশ্চিত করুন। ");
}


else if(Q205_3_c1!="" && (Q205_3_c3 < 1 || Q205_3_c3=="" || Q205_3_c3.length!=2 || (Q205_3_c2=="" && DA2_Q205_3_c2Auto==""))){
alert("আপনি তৃতীয়টিতে কোড দিয়েছেন তাই খাওয়ানোর ধরন এবং সময়কাল দিতে হবে। সময়কাল দুই ডিজিট এর হতে হবে।");
}

else if(Q205_3_c2 == "1" && (Q205_3_c1=="01" || Q205_3_c1=="08" || Q205_3_c1=="12" || Q205_3_c1=="18" || Q205_3_c1=="20" )){
alert("এন্টিবায়োটিক সেবন এর পদ্ধতিতে ভুল আছে। পুনরায় নিশ্চিত করুন। ");
}



else if(Q205_3_a1=="" && (DA2_Q205_3_a2Auto!="" || Q205_3_a2!="" || Q205_3_a3!="" )){
alert("প্রথমটিতে কোন অ্যান্টিবায়োটিক নির্বাচন করা নেই, তাই কোন সময়কাল এবং খাওয়ানোর ধরন দিতে হবে না");
}
else if(Q205_3_b1=="" && (DA2_Q205_3_b2Auto!="" || Q205_3_b2!="" || Q205_3_b3!="")){
alert("দ্বিতীয়টিতে কোন অ্যান্টিবায়োটিক নির্বাচন করা নেই, তাই কোন সময়কাল এবং খাওয়ানোর ধরন দিতে হবে না");
}
else if(Q205_3_c1=="" && (DA2_Q205_3_c2Auto!="" || Q205_3_c2!="" || Q205_3_c3!="")){
alert("তৃতীয়টিতে কোন অ্যান্টিবায়োটিক নির্বাচন করা নেই, তাই কোন সময়কাল এবং খাওয়ানোর ধরন দিতে হবে না");
}


else if(Q205_3_a1!="" &&(Q205_3_a1==Q205_3_b1 || Q205_3_a1==Q205_3_c1)){
alert(" Q2.05a. একই কোড একবারের বেশি দিতে পারবেন না। ");
}
else if(Q205_3_b1!="" &&(Q205_3_b1==Q205_3_a1 || Q205_3_b1==Q205_3_c1)){
alert(" Q2.05b. একই কোড একবারের বেশি দিতে পারবেন না। ");
}
else if(Q205_3_c1!="" &&(Q205_3_c1==Q205_3_a1 || Q205_3_c1==Q205_3_b1)){
alert(" Q2.05c. একই কোড একবারের বেশি দিতে পারবেন না। ");
}


else if(Q205_3_a1=="" &&(Q205_3_b1!="" || Q205_3_c1!="")){
alert("প্রশ্নের উত্তর দিতে, সিরিয়াল মেনে দেতে হবে।");
}
else if(Q205_3_b1=="" &&(Q205_3_c1!="")){
alert("প্রশ্নের উত্তর দিতে, সিরিয়াল মেনে দেতে হবে।");
}

else{
window.location.href='#DA2_Q301_2_page';
}

}









function DA_2_next_11(){


var CDate = new Date();

var DA_2_H = CDate.getHours();
if(DA_2_H.toString().length<2){
var DA_2_CHour = "0"+DA_2_H;
}
else{
var DA_2_CHour = DA_2_H;
}

var DA_2_M = CDate.getMinutes();
if(DA_2_M.toString().length<2){
var DA_2_CMin = "0"+DA_2_M;
}
else{
var DA_2_CMin = DA_2_M;
}

var DA2_Q301 = document.getElementById("DA2_Q301").value;
var DA2_Q302 = document.getElementById("DA2_Q302").value;
var DA2_Q302_other = document.getElementById("DA2_Q302_other").value;


if(DA2_Q301==""){
alert("Q3.01 থেকে হ্যাঁ বা না নির্বাচন করুন।");
return false;
}
else if(DA2_Q301=="2" && DA2_Q302==""){
alert("আপনি Q3.01 থেকে না নির্বাচন করেছেন। তাই Q302 থেকে না নির্বাচন করার কারন ঠিক করুন।");
return false;
}


/*
if(DA2_Q301=="2" && DA2_Q302!="" && DA2_Q302=="7" && DA2_Q302_other==""){
alert("আপনি Q3.02 অন্যান্য কারন নির্বাচন করেছেন, তাই অন্যান্য কারন এর সঠিক কোড দিতে হবে।");
return false;
}
*/
else if(DA2_Q301=="2"){
window.location.href='#DA2_Q901_page';
document.getElementById("DA2_Q901").value = DA_2_CHour+":"+DA_2_CMin;
return true;
}
else{
window.location.href='#DA2_Q401_page';
return true;
}


}



function DA_2_next_12(){
var DA2_Q401 = document.getElementById("DA2_Q401").value;
var DA2_Q401Diaplay = document.getElementById("DA2_Q401Diaplay").value;

if(DA2_Q401=="" || DA2_Q401Diaplay==""){
alert("বাটনে চাপ দিয়ে বয়সের সঠিক শ্রেণী নির্বাচন করুন।");
}
else{
window.location.href='#DA2_Q402_page';
}


}



function Q4021stEntry(){
document.getElementById("1stEn").style.display = "block";
//document.getElementById("BR_1en").style.display = "none";
}


function Q4022ndEntry(){
if(document.getElementById("DA2_Q402_a").value=="" || document.getElementById("DA2_Q402_a").value.length!= 2){
alert("দ্বিতীয় এন্ট্রি করার আগে, প্রথম এন্ট্রি সঠিক করে এন্ট্রি দিন।");
}
else{
//document.getElementById("BR_1en").style.display = "none";
document.getElementById("1stEn").style.display = "none";
document.getElementById("2ndEn").style.display = "block";
}

}




function DA2_Q402_b1st(){
if(document.getElementById("DA2_Q402_b1st").value=="" || document.getElementById("DA2_Q402_b1st").value.length!=2){
alert("দ্বিতীয় এন্ট্রির জন্য, প্রথম এন্ট্রি সঠিক করে দিতে হবে এবং এন্ট্রি ২ ডিজিট এর মধ্যে হতে হবে। ");
}
else{
document.getElementById("2ndTimeBR").style.display = "none";
document.getElementById("DA2_Q402_b2ndEn").style.display = "block";
}
}



function childAgeGroup(){

var D2_ChildDobChk = document.getElementById("DA2_Q114").value;

if(D2_ChildDobChk=="1909-09-09"){
var D2_ageGrp = document.getElementById("DA2_Q115").value;
}
else{
var D2_ChildDob = document.getElementById("DA2_Q114").value;

var D2_dob = new Date(D2_ChildDob).getTime();
var D2_today = new Date().getTime();


var D2_timeDiff = Math.abs(D2_today - D2_dob);
var D2_diffDays = Math.ceil(D2_timeDiff / (1000 * 3600 * 24));

var D2_mn = (D2_diffDays/30.4);

var D2_ageGrp = D2_mn.toString().split(".")[0];
}




if(D2_ageGrp >=0 && D2_ageGrp <2){
document.getElementById("DA2_Q401").value = "1";
document.getElementById("DA2_Q401Diaplay").value = "Group - 1";
}
else if(D2_ageGrp >=2 && D2_ageGrp <12){
document.getElementById("DA2_Q401").value = "2";
document.getElementById("DA2_Q401Diaplay").value = "Group - 2";
}
else if(D2_ageGrp >=12){
document.getElementById("DA2_Q401").value = "3";
document.getElementById("DA2_Q401Diaplay").value = "Group - 3";
}
else{
alert("সঠিক বয়স নির্বাচন হচ্ছে না। আপনি প্রথমে এন্ট্রি তে ভুল করেছেন অথবা ট্যাব এর তারিখ এবং সময়ে প্রব্লেম আছে।");
}

//document.getElementById("DA2_Q401").value = D2_mn.toString().split(".")[0];

}


function fastBreathing(){
var ageGroup = document.getElementById("DA2_Q401").value;
var firstBR = document.getElementById("DA2_Q402_a").value;
var firstBR2ndEn = document.getElementById("DA2_Q402_a2_en").value;



if(firstBR=="" || firstBR.length!=2 || firstBR2ndEn=="" || firstBR2ndEn.length != 2){
alert("শ্বাস-প্রশ্বাসের হার গননা করে লিখুন এবং শ্বাস-প্রশ্বাসের হার দুই ডিজিট এর হতে হবে।");
document.getElementById("Q402ButtonNext").style.display = "none";
}
else if(firstBR!="" &&  firstBR.length==2 && firstBR2ndEn!="" && firstBR2ndEn.length == 2 && firstBR != firstBR2ndEn){
alert("প্রথম এন্ট্রি এবং দ্বিতীয় এন্ট্রির সাথে পার্থক্য আছে। তাই পুনরায় প্রথম এন্ট্রি দিতে হবে।");
//document.getElementById("BR_1en").style.display = "block";
document.getElementById("1stEn").style.display = "block";
document.getElementById("2ndEn").style.display = "none";
document.getElementById("DA2_Q402_a").value = "";
document.getElementById("DA2_Q402_a2_en").value = "";
document.getElementById("DA2_Q402_c").value = "";
document.getElementById("DA2_Q402_c_Display").value = "";
document.getElementById("Q402ButtonNext").style.display = "none";
}
else if(ageGroup=="1" && firstBR>="60" && firstBR!=""){
alert("দ্রুত শ্বাসের লক্ষণ আছে। আবার পরিমাপ করুন।");
document.getElementById("firstBRSecChk").style.display = "block";
document.getElementById("DA2_Q402_c_Display").value="";
document.getElementById("DA2_Q402_b").value="";
document.getElementById("DA2_Q402_c").value="";
document.getElementById("2ndEn").style.display = "none";
document.getElementById("1stEn").style.display = "none";
//document.getElementById("BR_1en").style.display = "none";
document.getElementById("BR_1en_1").style.display = "none";
document.getElementById("Q402ButtonNext").style.display = "none";
}
else if(ageGroup=="2" && firstBR>="50" && firstBR!=""){
alert("দ্রুত শ্বাসের লক্ষণ আছে। আবার পরিমাপ করুন।");
document.getElementById("firstBRSecChk").style.display = "block";
document.getElementById("DA2_Q402_c_Display").value="";
document.getElementById("DA2_Q402_b").value="";
document.getElementById("DA2_Q402_c").value="";
document.getElementById("2ndEn").style.display = "none";
document.getElementById("1stEn").style.display = "none";
//document.getElementById("BR_1en").style.display = "none";
document.getElementById("BR_1en_1").style.display = "none";
document.getElementById("Q402ButtonNext").style.display = "none";
}
else if(ageGroup=="3" && firstBR>="40" && firstBR!=""){
alert("দ্রুত শ্বাসের লক্ষণ আছে। আবার পরিমাপ করুন।");
document.getElementById("firstBRSecChk").style.display = "block";
document.getElementById("DA2_Q402_c_Display").value="";
document.getElementById("DA2_Q402_b").value="";
document.getElementById("DA2_Q402_c").value="";
document.getElementById("2ndEn").style.display = "none";
document.getElementById("1stEn").style.display = "none";
//document.getElementById("BR_1en").style.display = "none";
document.getElementById("BR_1en_1").style.display = "none";
document.getElementById("Q402ButtonNext").style.display = "none";
}
else{
alert("দ্রুত শ্বাসের লক্ষণ নেই, পরের প্রশ্নের জন্য NEXT বাটনে চাপুন।");
document.getElementById("firstBRSecChk").style.display = "none";
document.getElementById("DA2_Q402_b").value="";
document.getElementById("DA2_Q402_c_Display").value="না";
document.getElementById("DA2_Q402_c").value="2";
document.getElementById("Q402ButtonNext").style.display = "block";
}
}


function cancelAllBR(){
document.getElementById("BR_1en_1").style.display = "block";
document.getElementById("1stEn").style.display = "block";
document.getElementById("DA2_Q402_a").value="";
document.getElementById("2ndEn").style.display = "none";
document.getElementById("DA2_Q402_a2_en").value="";
document.getElementById("firstBRSecChk").style.display = "none";
document.getElementById("2ndTimeBR").style.display = "block";
document.getElementById("DA2_Q402_b1st").value="";
document.getElementById("DA2_Q402_b2ndEn").style.display = "none";
document.getElementById("DA2_Q402_b").value="";
document.getElementById("DA2_Q402_c").value="";
document.getElementById("DA2_Q402_c_Display").value="";

document.getElementById("Q402ButtonNext").style.display="none";

}



function DA_2_next_13(){

var ageGroup = document.getElementById("DA2_Q401").value;
var firstBR = document.getElementById("DA2_Q402_a").value;
var secondBR = document.getElementById("DA2_Q402_b").value;

var DA2_Q402_b1st = document.getElementById("DA2_Q402_b1st").value;
var DA2_Q402_b = document.getElementById("DA2_Q402_b").value;

var DA2_Q402_a = document.getElementById("DA2_Q402_a").value;
var DA2_Q402_a2_en = document.getElementById("DA2_Q402_a2_en").value;

if(DA2_Q402_a!="" && DA2_Q402_a2_en!="" && DA2_Q402_a!=DA2_Q402_a2_en){
alert("প্রথম এন্ট্রি এবং দ্বিতীয় এন্ট্রির সাথে পার্থক্য আছে। তাই পুনরায় প্রথম এন্ট্রি দিতে হবে।");
document.getElementById("2ndEn").style.display = "none";
document.getElementById("DA2_Q402_a").value="";
document.getElementById("1stEn").style.display = "block";
document.getElementById("DA2_Q402_a2_en").value="";
return false;
}


else if(DA2_Q402_b1st!="" && DA2_Q402_b!="" && DA2_Q402_b1st!=DA2_Q402_b){
alert("প্রথম এন্ট্রি এবং দ্বিতীয় এন্ট্রির সাথে পার্থক্য আছে। তাই পুনরায় প্রথম এন্ট্রি দিতে হবে।");
document.getElementById("DA2_Q402_b2ndEn").style.display = "none";
document.getElementById("DA2_Q402_b").value="";
document.getElementById("2ndTimeBR").style.display = "block";
document.getElementById("DA2_Q402_b1st").value="";
return false;
}

else if(firstBR=="" || firstBR.length!=2){
alert("শ্বাস-প্রশ্বাসের হার গননা করে লিখুন। দুই ডিজিট এর হতে হবে।");
return false;
}
else if(ageGroup=="1" && firstBR>="60" && (secondBR=="" || secondBR.length!=2)){
alert("দ্রুত শ্বাসের লক্ষণ আছে। আবার পরিমাপ করে নিচের বক্সে লিখুন। দুই ডিজিট এর হতে হবে।");
return false;
}
else if(ageGroup=="2" && firstBR>="50" && (secondBR=="" || secondBR.length!=2)){
alert("দ্রুত শ্বাসের লক্ষণ আছে। আবার পরিমাপ করে নিচের বক্সে লিখুন। দুই ডিজিট এর হতে হবে।");
return false;
}
else if(ageGroup=="3" && firstBR>="40" && (secondBR=="" || secondBR.length!=2)){
alert("দ্রুত শ্বাসের লক্ষণ আছে। আবার পরিমাপ করে নিচের বক্সে লিখুন। দুই ডিজিট এর হতে হবে।");
return false;
}

else if(document.getElementById("DA2_Q402_c").value=="" ||document.getElementById("DA2_Q402_c_Display").value==""){
alert("দ্রুত শ্বাস লক্ষণ নির্বাচিত হইনি। সঠিক পরিমাপ করে বক্সে লিখুন। ");
return false;
}

else if(ageGroup=="1" && firstBR>="60" && secondBR>="60"){
window.location.href='#DA2_Q403_page';

if(document.getElementById("Q203_valueForQ405").value=="1"){
document.getElementById("DA2_Q405Display").value="হ্যাঁ";
document.getElementById("DA2_Q405").value="1";
}
else{
document.getElementById("DA2_Q405Display").value="না";
document.getElementById("DA2_Q405").value="2";
}

return true;
}
else if(ageGroup=="2" && firstBR>="50" && secondBR>="50"){
window.location.href='#DA2_Q403_page';

if(document.getElementById("Q203_valueForQ405").value=="1"){
document.getElementById("DA2_Q405Display").value="হ্যাঁ";
document.getElementById("DA2_Q405").value="1";
}
else{
document.getElementById("DA2_Q405Display").value="না";
document.getElementById("DA2_Q405").value="2";
}
return true;


}
else if(ageGroup=="3" && firstBR>="40" && secondBR>="40"){
window.location.href='#DA2_Q403_page';

if(document.getElementById("Q203_valueForQ405").value=="1"){
document.getElementById("DA2_Q405Display").value="হ্যাঁ";
document.getElementById("DA2_Q405").value="1";
}
else{
document.getElementById("DA2_Q405Display").value="না";
document.getElementById("DA2_Q405").value="2";
}

return true;
}
else{

if(document.getElementById("Q203_valueForQ405").value=="1"){
document.getElementById("DA2_Q405Display").value="হ্যাঁ";
document.getElementById("DA2_Q405").value="1";
}
else{
document.getElementById("DA2_Q405Display").value="না";
document.getElementById("DA2_Q405").value="2";
}
window.location.href='#DA2_Q404_page';
}
}



function ConfirmFirstBreath(){

var ageGroup = document.getElementById("DA2_Q401").value;
var firstBR = document.getElementById("DA2_Q402_a").value;
var secondBR = document.getElementById("DA2_Q402_b").value;

if(secondBR==""){
alert("শ্বাস-প্রশ্বাসের হার গননা করে লিখুন এবং শ্বাস-প্রশ্বাসের হার দুই ডিজিট এর হতে হবে।");
document.getElementById("DA2_Q402_c").value="";
document.getElementById("DA2_Q402_c_Display").value="";
document.getElementById("Q402ButtonNext").style.display = "none";
}
else if(ageGroup=="1" && firstBR>="60" && secondBR>="60" && secondBR.length==2){
document.getElementById("DA2_Q402_c").value="1";
document.getElementById("DA2_Q402_c_Display").value="হ্যাঁ";
}
else if(ageGroup=="2" && firstBR>="50" && secondBR>="50"  && secondBR.length==2){
document.getElementById("DA2_Q402_c").value="1";
document.getElementById("DA2_Q402_c_Display").value="হ্যাঁ";
}
else if(ageGroup=="3" && firstBR>="40" && secondBR>="40"  && secondBR.length==2){
document.getElementById("DA2_Q402_c").value="1";
document.getElementById("DA2_Q402_c_Display").value="হ্যাঁ";
}
else{
document.getElementById("DA2_Q402_c").value="2";
document.getElementById("DA2_Q402_c_Display").value="না";
}
}


function DA2_Q402_b2Nden2(){
var DA2_Q402_b1st = document.getElementById("DA2_Q402_b1st").value;
var DA2_Q402_b = document.getElementById("DA2_Q402_b").value;

if(DA2_Q402_b1st!="" && DA2_Q402_b!="" && DA2_Q402_b1st!=DA2_Q402_b){
alert("প্রথম এন্ট্রি এবং দ্বিতীয় এন্ট্রির সাথে পার্থক্য আছে। তাই পুনরায় প্রথম এন্ট্রি দিতে হবে।");
document.getElementById("DA2_Q402_b2ndEn").style.display = "none";
document.getElementById("DA2_Q402_b").value="";
document.getElementById("2ndTimeBR").style.display = "block";
document.getElementById("DA2_Q402_b1st").value="";
document.getElementById("Q402ButtonNext").style.display = "none";
}
else{
document.getElementById("Q402ButtonNext").style.display = "block";
}

}


function DA_2_next_14(){
if(document.getElementById("DA2_Q403").value==""){
alert("যে কোন একটি নির্বাচন করুন।");
}
else{
window.location.href='#DA2_Q404_page';

if(document.getElementById("Q203_valueForQ405").value=="1"){
document.getElementById("DA2_Q405Display").value="হ্যাঁ";
document.getElementById("DA2_Q405").value="1";
}
else{
document.getElementById("DA2_Q405Display").value="না";
document.getElementById("DA2_Q405").value="2";
}


}
}



function DA_2_next_15(){
var DA2_Q404 = document.getElementById("DA2_Q404").value;
var DA2_Q405 = document.getElementById("DA2_Q405").value;

if(DA2_Q404=="" || DA2_Q405==""){
alert("Q404 এবং Q4.05 থেকে হাঁ অথবা না নির্বাচন করুন।");
}



else{
window.location.href='#DA2_Q501_page';
}


}



function DA2_Q601(){
var Q601 =  document.getElementById("DA2_Q601").value;
var Q602 =  document.getElementById("DA2_Q602").value;
//if(Q601.length==3){
//document.getElementById("DA2_Q601").value = Q601+".";
//}
document.getElementById("DA2_Q602").value = "";

if(Q601.length>5){
document.getElementById("DA2_Q601").value = document.getElementById("DA2_Q601").value.substring(0, document.getElementById("DA2_Q601").value.length - 1);
}
if((Q601!= 999.9 && Q601>=99.5) || (Q602!= 999.9 && Q602>=99.5)){
document.getElementById("DA2_Q601_2Result").value = "1";
document.getElementById("DA2_Q601_2ResultDisplay").value = "হ্যাঁ";

}

else if(Q601==999.9 && Q602==999.9){
document.getElementById("DA2_Q601_2Result").value = "9";
document.getElementById("DA2_Q601_2ResultDisplay").value = "প্রযোজ্য নয়";

}
else{
document.getElementById("DA2_Q601_2Result").value = "2";
document.getElementById("DA2_Q601_2ResultDisplay").value = "না";

}
}

function DA2_Q602(){
var Q601 =  document.getElementById("DA2_Q601").value;
var Q602 =  document.getElementById("DA2_Q602").value;

//if(Q602.length==3){
//document.getElementById("DA2_Q602").value = Q602+".";
//}

if(Q602.length>5){
document.getElementById("DA2_Q602").value = document.getElementById("DA2_Q602").value.substring(0, document.getElementById("DA2_Q602").value.length - 1);
}

if((Q602!=999.9 && Q602>=99.5) || (Q601!=999.9 && Q601>=99.5)){
document.getElementById("DA2_Q601_2Result").value = "1";
document.getElementById("DA2_Q601_2ResultDisplay").value = "হ্যাঁ";
}
else if(Q601==999.9 && Q602==999.9){
document.getElementById("DA2_Q601_2Result").value = "9";
document.getElementById("DA2_Q601_2ResultDisplay").value = "প্রযোজ্য নয়";
}
else{
document.getElementById("DA2_Q601_2Result").value = "2";
document.getElementById("DA2_Q601_2ResultDisplay").value = "না";

}

}


function DA2_Q603a(){
var Q603a =  document.getElementById("DA2_Q603a").value;

//if(Q603a.length==2){
//document.getElementById("DA2_Q603a").value = Q603a+".";
//}

if(Q603a.length>4){
document.getElementById("DA2_Q603a").value = document.getElementById("DA2_Q603a").value.substring(0, document.getElementById("DA2_Q603a").value.length - 1);
}
}



function DA2_Q603b(){
var Q603b =  document.getElementById("DA2_Q603b").value;

//if(Q603b.length==3){
//document.getElementById("DA2_Q603b").value = Q603b+".";
//}

if(Q603b.length>5){
document.getElementById("DA2_Q603b").value = document.getElementById("DA2_Q603b").value.substring(0, document.getElementById("DA2_Q603b").value.length - 1);
}
}


function DA2_Q603c(){
var Q603c =  document.getElementById("DA2_Q603c").value;

//if(Q603c.length==3){
//document.getElementById("DA2_Q603c").value = Q603c+".";
//}

if(Q603c.length>5){
document.getElementById("DA2_Q603c").value = document.getElementById("DA2_Q603c").value.substring(0, document.getElementById("DA2_Q603c").value.length - 1);
}
}



function DA2_Q604(){
var Q604mm =  document.getElementById("DA2_Q604mm").value;


document.getElementById("DA2_Q604").value=(parseInt(Q604mm)/10);
if(document.getElementById("DA2_Q604").value.length==1){
document.getElementById("DA2_Q604").value="0"+document.getElementById("DA2_Q604").value+".0";
}
if(document.getElementById("DA2_Q604").value.length==2){
document.getElementById("DA2_Q604").value=document.getElementById("DA2_Q604").value+".0";
}
if(document.getElementById("DA2_Q604").value.length==3){
document.getElementById("DA2_Q604").value="0"+document.getElementById("DA2_Q604").value;
}
}

function DA2_Q605(){
var Q605 =  document.getElementById("DA2_Q605").value;

//if(Q605.length==3){
//document.getElementById("DA2_Q605").value = Q605+".";
//}

if(Q605.length>5){
document.getElementById("DA2_Q605").value = document.getElementById("DA2_Q605").value.substring(0, document.getElementById("DA2_Q605").value.length - 1);
}
}



function DA_2_next_16(){

var DA2_Q501 = document.getElementById("DA2_Q501").value;
var DA2_Q502 = document.getElementById("DA2_Q502").value;
var DA2_Q503 = document.getElementById("DA2_Q503").value;
var DA2_Q504 = document.getElementById("DA2_Q504").value;
var DA2_Q505 = document.getElementById("DA2_Q505").value;
var DA2_Q506 = document.getElementById("DA2_Q506").value;

if(DA2_Q501==""){
alert("Q5.01 থেকে যে কোন একটি নির্বাচন করুন।");
}
else if(DA2_Q502==""){
alert("Q5.02 থেকে যে কোন একটি নির্বাচন করুন।");
}
else if(DA2_Q503==""){
alert("Q5.03 থেকে যে কোন একটি নির্বাচন করুন।");
}
else if(DA2_Q504==""){
alert("Q5.04 থেকে যে কোন একটি নির্বাচন করুন।");
}
else if(DA2_Q505==""){
alert("Q5.05 থেকে যে কোন একটি নির্বাচন করুন।");
}
else if(DA2_Q506==""){
alert("Q5.06 থেকে যে কোন একটি নির্বাচন করুন।");
}
else{
window.location.href='#DA2_Q601_page';
document.getElementById("DA2_BackToReviewForQ501").style.display = "none";

}
}




function ChildSeightDone(){

var ChildSeightDone = document.getElementById("ChildSeightDone").value;
if(ChildSeightDone=="1"){
document.getElementById("childWeightDiv").style.display="block";
document.getElementById("child_MotherWeightDiv").style.display="none";
document.getElementById("DA2_Q603b").value="";
document.getElementById("DA2_Q603c").value="";
document.getElementById("DA2_Q603b").readOnly = false;
document.getElementById("DA2_Q603c").readOnly = false;
document.getElementById("DA_2_next_601_1Hide").style.display="none";
}
else if (ChildSeightDone=="2"){
document.getElementById("childWeightDiv").style.display="none";
document.getElementById("child_MotherWeightDiv").style.display="block";
document.getElementById("DA2_Q603a").value = "";
document.getElementById("DA2_Q603a").readOnly = false;
document.getElementById("DA_2_next_601_1Hide").style.display="none";
}
else{
document.getElementById("childWeightDiv").style.display="none";
document.getElementById("child_MotherWeightDiv").style.display="none";
document.getElementById("DA2_Q603b").value="";
document.getElementById("DA2_Q603c").value="";
document.getElementById("childWeightDiv").style.display="none";
document.getElementById("child_MotherWeightDiv").style.display="none";
document.getElementById("DA2_Q603a").value = "";
document.getElementById("DA2_Q603a").readOnly = false;
document.getElementById("DA2_Q603b").readOnly = false;
document.getElementById("DA2_Q603c").readOnly = false;
document.getElementById("DA_2_next_601_1Hide").style.display="none";
}

}

function DA_2_next_17(){

var Q601 = document.getElementById("DA2_Q601").value;
var Q602 = document.getElementById("DA2_Q602").value;


var Q601Str = Q601.toString();
var Q601Dec = Q601Str.includes(".");
var Q601DecPos = Q601Str.indexOf(".");

var Q602Str = Q602.toString();
var Q602Dec = Q602Str.includes(".");
var Q602DecPos = Q602Str.indexOf(".");

if(Q601!=999.9 && (Q601=="" || Q601<90 || Q601>105 || Q601.length!=5)){
alert("Q6.01 - ডান বগলের সঠিক তাপমাত্রা লিখুন। তাপমাত্রা (০০০.০) এই ফরম্যাটে হতে হবে এবং তাপমাত্রা ০৯০.০ এর কম বা ১০৫.০ এর বেশি হতে পারবেনা।");
}
else if(Q601Dec==false || Q601DecPos!=3){
alert("Q601 এর পরিমাপ সঠিক নয়। তাপমাত্রা (০০০.০) এই ফরম্যাটে হতে হবে এবং তাপমাত্রা ০৯০.০ এর কম বা ১০৫.০ এর বেশি হতে পারবেনা।");
}
else if(Q602!=999.9 && (Q602=="" || Q602<90 || Q602>105 || Q602.length!=5)){
alert("Q6.02 - বাম বগলের সঠিক তাপমাত্রা লিখুন। তাপমাত্রা (০০০.০) এই ফরম্যাটে হতে হবে  এবং তাপমাত্রা ০৯০.০ এর কম বা ১০৫.০ এর বেশি হতে পারবেনা।");
}
else if(Q602Dec==false || Q602DecPos!=3){
alert("Q602 এর পরিমাপ সঠিক নয়। তাপমাত্রা (০০০.০) এই ফরম্যাটে হতে হবে এবং তাপমাত্রা ০৯০.০ এর কম বা ১০৫.০ এর বেশি হতে পারবেনা।");
}
else{
//window.location.href='#DA2_Q701_page';
window.location.href='#DA2_Q601_1_page';
}


if((Q601!=999.9 && Q601>=99.5) || (Q602!=999.9 && Q602>=99.5)){
document.getElementById("DA2_Q601_2Result").value = "1";
document.getElementById("DA2_Q601_2ResultDisplay").value = "হ্যাঁ";
}

}





function DA2_Q601_2_page(){

var Q603a = document.getElementById("DA2_Q603a").value;
var Q603b = document.getElementById("DA2_Q603b").value;
var Q603c = document.getElementById("DA2_Q603c").value;

var weightDone = document.getElementById("ChildSeightDone").value;



var Q603aStr = Q603a.toString();
var Q603aDec = Q603aStr.includes(".");
var Q603aDecPos = Q603aStr.indexOf(".");

var Q603bStr = Q603b.toString();
var Q603bDec = Q603bStr.includes(".");
var Q603bDecPos = Q603bStr.indexOf(".");

var Q603cStr = Q603c.toString();
var Q603cDec = Q603cStr.includes(".");
var Q603cDecPos = Q603cStr.indexOf(".");

if(weightDone==""){
alert("শিশুর ওজন কি নিতে পেরেছেন, হাঁ বা না নির্বাচন করুন।");
}
else if(weightDone=="1" && Q603a!=99.9 && (Q603a=="" || Q603a.length!=4 || Q603a< 1  || Q603a> 50 || Q603aDec==false || Q603aDecPos!=2)){
alert("Q6.03a - শিশুর সঠিক ওজন লিখুন। ওজন (০০.০) এই ফরম্যাটে হতে হবে এবং ওজন ১ এর কম বা ৫০ কেজির বেশি হতে পারবে না।");
}
else if(weightDone=="2" && Q603b!= 999.9 && (Q603b=="" || Q603b.length!=5 || Q603b< 25  || Q603b> 150 || Q603bDec==false || Q603bDecPos!=3 )){
alert("Q6.03b - শিশুসহ অভিভাবকের ওজন লিখুন। ওজন (০০০.০) এই ফরম্যাটে হতে হবে এবং ওজন ০২৫.০ এর কম বা ১৫০.০ কেজির বেশি হতে পারবে না।");
}
else if(weightDone=="2" && Q603c!=999.9 && (Q603c=="" || Q603c.length!=5 || Q603c< 20  || Q603c> 120  || Q603c >= Q603b || Q603cDec==false || Q603cDecPos!=3 )){
alert("Q6.03c - অভিভাবকের ওজন লিখুন। ওজন (০০০.০) এই ফরম্যাটে হতে হবে এবং ওজন ০২০.০ এর কম বা ১২০.০ কেজির বেশি হতে পারবে না এবং ওজন শিশুসহ অভিভাবকের ওজন চেয় কম হতে হবে।");
}
else{
window.location.href='#DA2_Q601_2_page';
}
}






function DA2_Q601_3_page(){



var Q604 = document.getElementById("DA2_Q604").value;
var Q604mm = document.getElementById("DA2_Q604mm").value;

if(Q604mm!=999 && (Q604mm=="" || Q604mm.length!=3 || Q604mm < 50 || Q604mm > 400)){
alert("Q6.04 - শিশুর উর্ধ্ব বাহুর মধ্যভাগের পরিধি লিখুন। পরিধি (০০০) এই ফরম্যাটে হতে হবে এবং ০৫০ এর কম বা ৪০০ এর বেশি হতে পারবেনা।");
}
else if(Q604!=99.9 && (Q604=="" || Q604.length < 3 || Q604 < 5 || Q604 > 40)){
alert("Q6.04 - শিশুর উর্ধ্ব বাহুর মধ্যভাগের পরিধি লিখুন। পরিধি (০০.০) এই ফরম্যাটে হতে হবে এবং ০৫.০ এর কম বা ৪০.০ এর বেশি হতে পারবেনা");
}
else{
window.location.href='#DA2_Q601_3_page';
}



}






function DA2_Q701_page(){

var Q605 = document.getElementById("DA2_Q605").value;

var Q605Str = Q605.toString();
var Q605Dec = Q605Str.includes(".");
var Q605DecPos = Q605Str.indexOf(".");

if(Q605!= 999.9 && (Q605=="" || Q605.length!=5 || Q605> 150  || Q605< 1 || Q605Dec==false || Q605DecPos!=3)){
alert("Q6.05 - শিশুর দৈর্ঘ্য/ উচ্চতা  লিখুন। দৈর্ঘ্য/ উচ্চতা  (০০০.০) এই ফরম্যাটে হতে হবে এবং ১৫০.০ এর বেশি হতে পারবেনা।");
}
else{
window.location.href='#DA2_Q701_page';
}
}





function DA_2_next_18(){

var DA2_Q701 = document.getElementById("DA2_Q701").value;
var DA2_Q702 = document.getElementById("DA2_Q702").value;
var DA2_Q703 = document.getElementById("DA2_Q703").value;

if(DA2_Q701==""){
alert("Q7.01 থেকে হাঁ আথবা না নির্বাচন করুন।");
}
else if(DA2_Q701=="2" && DA2_Q702==""){
alert("Q7.02 থেকে হাঁ আথবা না নির্বাচন করুন।");
}
else if(DA2_Q701=="2" && DA2_Q702=="1" && DA2_Q703==""){
alert("Q7.03 থেকে হাঁ আথবা না নির্বাচন করুন।");
}
else if(DA2_Q701=="1"){
window.location.href='#DA2_Q801_page';
document.getElementById("DA2_Q702").value="";
document.getElementById("DA2_Q703").value="";
document.getElementById("DA2_Q702Div").style.display="none";
document.getElementById("DA2_Q703Div").style.display="none";
}
else if(DA2_Q701=="2" && DA2_Q702=="2"){
window.location.href='#DA2_Q801_page';
document.getElementById("DA2_Q703").value="";
document.getElementById("DA2_Q703Div").style.display="none";
}
else if(DA2_Q701=="2" && DA2_Q702=="1" && DA2_Q703=="2"){
window.location.href='#DA2_Q801_page';
}
else{
document.getElementById("DA2_Q704a").value = "2";
document.getElementById("DA2_Q704aDisplay").value = "না";
document.getElementById("DA2_Q704a_times").value = "";
document.getElementById("DA2_Q704a_day").value = "";
document.getElementById("DA2_Q704aHide").style.display = "none";

document.getElementById("DA2_Q704b").value = "2";
document.getElementById("DA2_Q704bDisplay").value = "না";
document.getElementById("DA2_Q704b_times").value = "";
document.getElementById("DA2_Q704b_day").value = "";
document.getElementById("DA2_Q704bHide").style.display = "none";

document.getElementById("DA2_Q704c").value = "2";
document.getElementById("DA2_Q704cDisplay").value = "না";
document.getElementById("DA2_Q704c_times").value = "";
document.getElementById("DA2_Q704c_day").value = "";
document.getElementById("DA2_Q704cHide").style.display = "none";


document.getElementById("DA2_Q704d").value = "2";
document.getElementById("DA2_Q704dDisplay").value = "না";
document.getElementById("DA2_Q704d_times").value = "";
document.getElementById("DA2_Q704d_day").value = "";
document.getElementById("DA2_Q704dHide").style.display = "none";


document.getElementById("DA2_Q704e").selectedIndex = "0";
$('#DA2_Q704e').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q704e_times").value = "";
document.getElementById("DA2_Q704e_day").value = "";
document.getElementById("DA2_Q704eHide").style.display = "none";


document.getElementById("DA2_Q704f").selectedIndex = "0";
$('#DA2_Q704f').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q704f_times").value = "";
document.getElementById("DA2_Q704f_day").value = "";
document.getElementById("DA2_Q704fHide").style.display = "none";


window.location.href='#DA2_Q704_page';

}
}



function DA2_Q701(){
if(document.getElementById("DA2_Q701").value=="2"){
document.getElementById("DA2_Q702Div").style.display="block";
}
else{
document.getElementById("DA2_Q702Div").style.display="none";
document.getElementById("DA2_Q703Div").style.display="none";
document.getElementById("DA2_Q702").value="";
document.getElementById("DA2_Q703").value="";
}
}

function DA2_Q702(){
if(document.getElementById("DA2_Q702").value=="1"){
document.getElementById("DA2_Q703Div").style.display="block";
}
else{
document.getElementById("DA2_Q703Div").style.display="none";
document.getElementById("DA2_Q703").value="";
}
}




function DA_2_next_19(){

var DA2_Q704a = document.getElementById("DA2_Q704a").value;
var DA2_Q704a_times = document.getElementById("DA2_Q704a_times").value;
var DA2_Q704a_day = document.getElementById("DA2_Q704a_day").value;

var DA2_Q704b = document.getElementById("DA2_Q704b").value;
var DA2_Q704b_times = document.getElementById("DA2_Q704b_times").value;
var DA2_Q704b_day = document.getElementById("DA2_Q704b_day").value;

var DA2_Q704c = document.getElementById("DA2_Q704c").value;
var DA2_Q704c_times = document.getElementById("DA2_Q704c_times").value;
var DA2_Q704c_day = document.getElementById("DA2_Q704c_day").value;

var DA2_Q704d = document.getElementById("DA2_Q704d").value;
var DA2_Q704d_times = document.getElementById("DA2_Q704d_times").value;
var DA2_Q704d_day = document.getElementById("DA2_Q704d_day").value;


var DA2_Q704e = document.getElementById("DA2_Q704e").value;
var DA2_Q704e_times = document.getElementById("DA2_Q704e_times").value;
var DA2_Q704e_day = document.getElementById("DA2_Q704e_day").value;

var DA2_Q704f = document.getElementById("DA2_Q704f").value;
var DA2_Q704f_times = document.getElementById("DA2_Q704f_times").value;
var DA2_Q704f_day = document.getElementById("DA2_Q704f_day").value;



if(DA2_Q704a=="2" && DA2_Q704b=="2" && DA2_Q704c=="2" && DA2_Q704d=="2" && DA2_Q704e=="" && DA2_Q704f==""){
alert("এখানে সর্বনিম্ন একটি এন্টিবায়োটিক নির্বাচন করতে হবে।");
}
else if(DA2_Q704a=="2" && (DA2_Q704a_times!="" || DA2_Q704a_day!="")){
alert("Q7.04aতে না দেয়া হয়েছে। তাই কতবার আর সময়কাল দিতে হবে না। কতবার ও সময়কাল মুছে দেয়া হল।");
document.getElementById("DA2_Q704a_times").value="";
document.getElementById("DA2_Q704a_day").value="";
}
else if(DA2_Q704b=="2" && (DA2_Q704b_times!="" || DA2_Q704b_day!="")){
alert("Q7.04bতে না দেয়া হয়েছে। তাই কতবার আর সময়কাল দিতে হবে না। কতবার ও সময়কাল মুছে দেয়া হল।");
document.getElementById("DA2_Q704b_times").value="";
document.getElementById("DA2_Q704b_day").value="";
}
else if(DA2_Q704c=="2" && (DA2_Q704c_times!="" || DA2_Q704c_day!="")){
alert("Q7.04cতে না দেয়া হয়েছে। তাই কতবার আর সময়কাল দিতে হবে না। কতবার ও সময়কাল মুছে দেয়া হল।");
document.getElementById("DA2_Q704c_times").value="";
document.getElementById("DA2_Q704c_day").value="";
}
else if(DA2_Q704a=="1" && (DA2_Q704a_times=="" || DA2_Q704a_times.length!=1 || DA2_Q704a_times<"1" || DA2_Q704a_times>"5" || DA2_Q704a_day=="" || DA2_Q704a_day.length!=2 || DA2_Q704a_day<"01" || DA2_Q704a_day>"60")){
alert("আপনি Q7.04a অ্যামোক্সিসিলিন এ হাঁ নির্বাচন করেছেন। তাই দিনে কতবার এবং সময়কাল দিতে হবে। দিনে কতবার এক ডিজিট এর এবং তিন এর বেশি হতে পারবেনা। এবং সময়কাল দুই ডিজিট এর এবং ৬০ দিনের বেশি হতে পারবেনা।");
}
else if(DA2_Q704b=="1" && (DA2_Q704b_times=="" || DA2_Q704b_times.length!=1 || DA2_Q704b_times<"1" || DA2_Q704b_times>"5" || DA2_Q704b_day=="" || DA2_Q704b_day.length!=2 || DA2_Q704b_day<"01" || DA2_Q704b_day>"60")){
alert("আপনি Q7.04b কো-ট্রাইমোক্সাজল  এ হাঁ নির্বাচন করেছেন। তাই দিনে কতবার এবং সময়কাল দিতে হবে। দিনে কতবার এক ডিজিট এর এবং পাঁচ এর বেশি হতে পারবেনা। এবং সময়কাল দুই ডিজিট এর এবং ৬০ দিনের বেশি হতে পারবেনা।");
}
else if(DA2_Q704c=="1" && (DA2_Q704c_times=="" || DA2_Q704c_times.length!=1 || DA2_Q704c_times<"1" || DA2_Q704c_times>"3" || DA2_Q704c_day=="" || DA2_Q704c_day.length!=2 || DA2_Q704c_day<"01" || DA2_Q704c_day>"60")){
alert("আপনি Q7.04c অ্যাজিথ্রোমাইসিন  এ হাঁ নির্বাচন করেছেন। তাই দিনে কতবার এবং সময়কাল দিতে হবে। দিনে কতবার এক ডিজিট এর এবং তিন এর বেশি হতে পারবেনা। এবং সময়কাল দুই ডিজিট এর এবং ৬০ দিনের বেশি হতে পারবেনা।");
}
else if(DA2_Q704d=="1" && (DA2_Q704d_times=="" || DA2_Q704d_times.length!=1 || DA2_Q704d_times<"1" || DA2_Q704d_times>"3" || DA2_Q704d_day=="" || DA2_Q704d_day.length!=2 || DA2_Q704d_day<"01" || DA2_Q704d_day>"60")){
alert("আপনি Q7.04d সেফিক্সিম  এ হাঁ নির্বাচন করেছেন। তাই দিনে কতবার এবং সময়কাল দিতে হবে। দিনে কতবার এক ডিজিট এর এবং তিন এর বেশি হতে পারবেনা। এবং সময়কাল দুই ডিজিট এর এবং ৬০ দিনের বেশি হতে পারবেনা।");
}

else if(DA2_Q704f!="" && DA2_Q704e==""){
alert("অন্যান্য কোড দেয়ার জন্য প্রথমে আপনাকে Q7.04e এন্ট্রি করতে হবে।");
document.getElementById("DA2_Q704f").value="";
document.getElementById("DA2_Q704f_times").value="";
document.getElementById("DA2_Q704f_day").value="";
}

else if((DA2_Q704e=="" || DA2_Q704e.length!=2) && (DA2_Q704e_times!="" || DA2_Q704e_day!="")){
alert("Q7.04e অন্যান্য এর সঠিক কোড দিতে হবে অথবা দিন এবং সময়কাল মুছে ফেলতে হবে।");
}
else if((DA2_Q704f=="" || DA2_Q704f.length!=2) && (DA2_Q704f_times!="" || DA2_Q704f_day!="")){
alert("Q7.04f অন্যান্য এর সঠিক কোড দিতে হবে অথবা দিন এবং সময়কাল মুছে ফেলতে হবে।");
}
else if(DA2_Q704e!="" && ( DA2_Q704e_times=="" || DA2_Q704e_times.length!=1 || DA2_Q704e_times<"1" || DA2_Q704e_times>5 || DA2_Q704e_day=="" || DA2_Q704e_day.length!=2 || DA2_Q704e_day<"01" || DA2_Q704e_day>"60")){
alert("যদি অন্যান্য কোন ওষুধ থাকে, তাহলে তাঁর সঠিক কোড দিন, কোডটি দুই ডিজিট এর হতে হবে। দিনে কতবার এবং সময়কাল দিতে হবে।  দিনে কতবার এক ডিজিট এর এবং পাঁচ এর বেশি হতে পারবেনা। এবং সময়কাল দুই ডিজিট এর এবং ৬০ দিনের বেশি হতে পারবেনা।)");
}
else if(DA2_Q704f!="" && (DA2_Q704f_times=="" || DA2_Q704f_times.length!=1 || DA2_Q704f_times<"1" || DA2_Q704f_times>5 || DA2_Q704f_day=="" || DA2_Q704f_day.length!=2 || DA2_Q704f_day<"01" || DA2_Q704f_day>"60")){
alert("যদি অন্যান্য কোন ওষুধ থাকে, তাহলে তাঁর সঠিক কোড দিন, কোডটি দুই ডিজিট এর হতে হবে। দিনে কতবার এবং সময়কাল দিতে হবে।  দিনে কতবার এক ডিজিট এর এবং পাঁচ এর বেশি হতে পারবেনা। এবং সময়কাল দুই ডিজিট এর এবং ৬০ দিনের বেশি হতে পারবেনা।)");
}
else if(DA2_Q704f!="" && (DA2_Q704e==DA2_Q704f || DA2_Q704e=="")){
alert("অন্যান্য এর ক্ষেত্রে, প্রথমে  Q7.04e দিতে হবে এবং একই ঔষধ একবারের বেশি নির্বাচন করতে পারবেন না।");
}

else
{
window.location.href='#DA2_Q801_page';
}
}


function DA2_Q704a_No(){

var DA2_Q704a_No = document.getElementById("DA2_Q704a").value;
var DA2_Q704a_times_No = document.getElementById("DA2_Q704a_times").value;
var DA2_Q704a_day_No = document.getElementById("DA2_Q704a_day").value;

if(DA2_Q704a_No=="2"){
document.getElementById("DA2_Q704a_times").value = "";
document.getElementById("DA2_Q704a_day").value = "";
}
}

function DA2_Q704b_No(){

var DA2_Q704b_No = document.getElementById("DA2_Q704b").value;
var DA2_Q704b_times_No = document.getElementById("DA2_Q704b_times").value;
var DA2_Q704b_day_No = document.getElementById("DA2_Q704b_day").value;

if(DA2_Q704b_No=="2"){
document.getElementById("DA2_Q704b_times").value = "";
document.getElementById("DA2_Q704b_day").value = "";
}
}


function DA2_Q704c_No(){
var DA2_Q704c_No = document.getElementById("DA2_Q704c").value;
var DA2_Q704c_times_No = document.getElementById("DA2_Q704c_times").value;
var DA2_Q704c_day_No = document.getElementById("DA2_Q704c_day").value;

if(DA2_Q704c_No=="2"){
document.getElementById("DA2_Q704c_times").value = "";
document.getElementById("DA2_Q704c_day").value = "";
}
}


function DA2_Q704d_No(){
var DA2_Q704d_No = document.getElementById("DA2_Q704d").value;
var DA2_Q704d_times_No = document.getElementById("DA2_Q704d_times").value;
var DA2_Q704d_day_No = document.getElementById("DA2_Q704d_day").value;

if(DA2_Q704d_No=="2"){
document.getElementById("DA2_Q704d_times").value = "";
document.getElementById("DA2_Q704d_day").value = "";
}
}



function DA2_Q704aSel(){
document.getElementById("DA2_Q704aHide").style.display = "block";
document.getElementById("DA2_Q704a").value = "1";
document.getElementById("DA2_Q704aDisplay").value = "হ্যাঁ";
}



function Remove_DA2_Q704a(){
document.getElementById("DA2_Q704aHide").style.display = "none";
document.getElementById("DA2_Q704a").value = "2";
document.getElementById("DA2_Q704aDisplay").value = "না";
document.getElementById("DA2_Q704a_times").value = "";
document.getElementById("DA2_Q704a_day").value = "";
}





function DA2_Q704bSel(){
document.getElementById("DA2_Q704bHide").style.display = "block";
document.getElementById("DA2_Q704b").value = "1";
document.getElementById("DA2_Q704bDisplay").value = "হ্যাঁ";
}



function Remove_DA2_Q704b(){
document.getElementById("DA2_Q704bHide").style.display = "none";
document.getElementById("DA2_Q704b").value = "2";
document.getElementById("DA2_Q704bDisplay").value = "না";
document.getElementById("DA2_Q704b_times").value = "";
document.getElementById("DA2_Q704b_day").value = "";
}



function DA2_Q704cSel(){
document.getElementById("DA2_Q704cHide").style.display = "block";
document.getElementById("DA2_Q704c").value = "1";
document.getElementById("DA2_Q704cDisplay").value = "হ্যাঁ";
}



function Remove_DA2_Q704c(){
document.getElementById("DA2_Q704cHide").style.display = "none";
document.getElementById("DA2_Q704c").value = "2";
document.getElementById("DA2_Q704cDisplay").value = "না";
document.getElementById("DA2_Q704c_times").value = "";
document.getElementById("DA2_Q704c_day").value = "";
}




function DA2_Q704dSel(){
document.getElementById("DA2_Q704dHide").style.display = "block";
document.getElementById("DA2_Q704d").value = "1";
document.getElementById("DA2_Q704dDisplay").value = "হ্যাঁ";
}



function Remove_DA2_Q704d(){
document.getElementById("DA2_Q704dHide").style.display = "none";
document.getElementById("DA2_Q704d").value = "2";
document.getElementById("DA2_Q704dDisplay").value = "না";
document.getElementById("DA2_Q704d_times").value = "";
document.getElementById("DA2_Q704d_day").value = "";
}





$(document).ready(function(){
$("#DA2_Q704eSel").click(function() {
document.getElementById("DA2_Q704e").selectedIndex = "0";
$('#DA2_Q704e').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q704eHide").style.display = "block";
});
});


$(document).ready(function(){
$("#Remove_DA2_Q704e").click(function() {
document.getElementById("DA2_Q704e").selectedIndex = "0";
$('#DA2_Q704e').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q704eHide").style.display = "none";
document.getElementById("DA2_Q704e_times").value = "";
document.getElementById("DA2_Q704e_day").value = "";
});
});




$(document).ready(function(){
$("#DA2_Q704fSel").click(function() {
document.getElementById("DA2_Q704f").selectedIndex = "0";
$('#DA2_Q704f').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q704fHide").style.display = "block";
});
});


$(document).ready(function(){
$("#Remove_DA2_Q704f").click(function() {
document.getElementById("DA2_Q704f").selectedIndex = "0";
$('#DA2_Q704f').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q704fHide").style.display = "none";
document.getElementById("DA2_Q704f_times").value = "";
document.getElementById("DA2_Q704f_day").value = "";
});
});





function DA_2_next_20(){


var Q401 = document.getElementById("DA2_Q401Diaplay").value;
var Q402a = document.getElementById("DA2_Q402_a").value;
var Q402b = document.getElementById("DA2_Q402_b").value;


if(document.getElementById("DA2_Q401").value!="" && document.getElementById("DA2_Q402_a").value!=""){
document.getElementById("Review_DA2_Q401_page").style.display = "block";
}
else{
document.getElementById("Review_DA2_Q401_page").style.display = "none";
}

if(document.getElementById("DA2_Q501").value!="" && document.getElementById("DA2_Q502").value!=""){
document.getElementById("Review_DA2_Q501_page").style.display = "block";
}
else{
document.getElementById("Review_DA2_Q501_page").style.display = "none";
}


if(document.getElementById("DA2_Q704a").value!="" || document.getElementById("DA2_Q704b").value!="" || document.getElementById("DA2_Q704c").value!="" || document.getElementById("DA2_Q704d").value!=""){
document.getElementById("Review_DA2_Q704a_page").style.display = "block";
}
else{
document.getElementById("Review_DA2_Q704a_page").style.display = "none";
//document.getElementById("ifCheckNo").style.display = "block";
//document.getElementById("ifCheckYes").style.display = "none";
}



if(document.getElementById("DA2_Q401").value!="" || document.getElementById("DA2_Q402_a").value!="" || document.getElementById("DA2_Q501").value!="" || document.getElementById("DA2_Q502").value!="" || document.getElementById("DA2_Q704a").value!="" || document.getElementById("DA2_Q704b").value!="" || document.getElementById("DA2_Q704c").value!="" || document.getElementById("DA2_Q704d").value!="")
{
document.getElementById("ifCheckNo").style.display = "none";
document.getElementById("ifCheckYes").style.display = "block";
}
else{
document.getElementById("ifCheckNo").style.display = "block";
document.getElementById("ifCheckYes").style.display = "none";
}



var Q403;
if(document.getElementById("DA2_Q403").value=="1"){Q403 = "জেগে ছিল এবং শান্ত ছিল"}
else if(document.getElementById("DA2_Q403").value=="2"){Q403 = "জেগে ছিল এবং উত্তেজিত ছিল"}
else if(document.getElementById("DA2_Q403").value=="3"){Q403 = "ঘুমিয়ে ছিল"}
else{Q403=""}

var Q404;
if(document.getElementById("DA2_Q404").value=="1"){ Q404 = "হ্যাঁ"; }
else if(document.getElementById("DA2_Q404").value=="2"){ Q404 = "না"; }
else{ Q404 = ""; }

var Q405;
if(document.getElementById("DA2_Q405").value=="1"){ Q405 = "হ্যাঁ" }
else if(document.getElementById("DA2_Q405").value=="2"){ Q405 = "না"; }
else{ Q405 = ""; }


var Q501;
if(document.getElementById("DA2_Q501").value=="1")
{ Q501 = "হ্যাঁ"; } else{ Q501 = "না"; }

var Q502;
if(document.getElementById("DA2_Q502").value=="1")
{ Q502 = "হ্যাঁ"; } else{ Q502 = "না"; }

var Q503;
if(document.getElementById("DA2_Q503").value=="1")
{ Q503 = "হ্যাঁ"; } else{ Q503 = "না"; }

var Q504;
if(document.getElementById("DA2_Q504").value=="1")
{ Q504 = "হ্যাঁ"; } else{ Q504 = "না"; }

var Q505;
if(document.getElementById("DA2_Q505").value=="1")
{ Q505 = "হ্যাঁ"; } else{ Q505 = "না"; }

var Q506;
if(document.getElementById("DA2_Q506").value=="1")
{ Q506 = "হ্যাঁ"; } else{ Q506 = "না"; }




var Q704a = document.getElementById("DA2_Q704aDisplay").value;
var Q704b = document.getElementById("DA2_Q704bDisplay").value;
var Q704c = document.getElementById("DA2_Q704cDisplay").value;
var Q704d = document.getElementById("DA2_Q704dDisplay").value;

var DA2_Q704a_times = document.getElementById("DA2_Q704a_times").value;
var DA2_Q704a_day = document.getElementById("DA2_Q704a_day").value;

var DA2_Q704b_times = document.getElementById("DA2_Q704b_times").value;
var DA2_Q704b_day = document.getElementById("DA2_Q704b_day").value;

var DA2_Q704c_times = document.getElementById("DA2_Q704c_times").value;
var DA2_Q704c_day = document.getElementById("DA2_Q704c_day").value;

var DA2_Q704d_times = document.getElementById("DA2_Q704d_times").value;
var DA2_Q704d_day = document.getElementById("DA2_Q704d_day").value;




if(document.getElementById("DA2_Q801").value==""){
alert("যে কোন একটি নির্বাচন করুন।");
}
else{
window.location.href='#DA2_Q901_page';

document.getElementById("Review_Q401").value = Q401;
document.getElementById("Review_Q402a").value = Q402a;
document.getElementById("Review_Q402b").value = Q402b;
document.getElementById("Review_Q403").value = Q403;
document.getElementById("Review_Q404").value = Q404;
document.getElementById("Review_Q405").value = Q405;

document.getElementById("Review_Q501").value = Q501;
document.getElementById("Review_Q502").value = Q502;
document.getElementById("Review_Q503").value = Q503;
document.getElementById("Review_Q504").value = Q504;
document.getElementById("Review_Q505").value = Q505;
document.getElementById("Review_Q506").value = Q506;

document.getElementById("Review_Q704a").value = Q704a;
document.getElementById("Review_Q704aDay").value = DA2_Q704a_day;
document.getElementById("Review_Q704aTime").value = DA2_Q704a_times;

document.getElementById("Review_Q704b").value = Q704b;
document.getElementById("Review_Q704bDay").value = DA2_Q704b_day;
document.getElementById("Review_Q704bTime").value = DA2_Q704b_times;

document.getElementById("Review_Q704c").value = Q704c;
document.getElementById("Review_Q704cDay").value = DA2_Q704c_day;
document.getElementById("Review_Q704cTime").value = DA2_Q704c_times;

document.getElementById("Review_Q704d").value = Q704d;
document.getElementById("Review_Q704dDay").value = DA2_Q704d_day;
document.getElementById("Review_Q704dTime").value = DA2_Q704d_times;


}







var CDate = new Date();

var CH09 = CDate.getHours();
if(CH09.toString().length<2){
var CHour = "0"+CH09;
}
else{
var CHour = CH09;
}


var CM09 = CDate.getMinutes();
if(CM09.toString().length<2){
var CMin ="0"+CM09;
}
else{
var CMin = CM09;
}

document.getElementById("DA2_Q901").value = CHour+":"+CMin;
document.getElementById("DA2_Q901").value = CHour+":"+CMin;

}


function DA_2_Back_2(){
window.location.href='#DA2_ChildID_page';
}

function DA_2_Back_3(){
window.location.href='#DA2_identification_page_1';
}


function DA_2_Back_4(){
window.location.href='#DA2_identification_page_2';
}

function DA_2_Back_5(){
//window.location.href='#DA2_CHCP';
window.location.href='#DA2_identification_page_2';
}


function DA_2_Back_6(){
window.location.href='#DA2_respondent';
}


function DA_2_Back_7(){
window.location.href='#DA2_Q201_page';
}


function DA_2_Back_8(){
window.location.href='#DA2_Q202_page';
}


function DA_2_Back_9(){
window.location.href='#DA2_Q205_1_page';
}

function DA_2_Back_10(){
window.location.href='#DA2_Q205_2_page';
}




function DA_2_Back_11(){

if(document.getElementById("DA2_Q205_2").value=="2" || document.getElementById("DA2_Q205_2").value=="3"){
window.location.href='#DA2_Q205_2_page';
}
else if(document.getElementById("DA2_Q205_1").value=="2" || document.getElementById("DA2_Q205_1").value=="3")
{
window.location.href='#DA2_Q205_1_page';
}
else{
window.location.href='#DA2_Q205_3_page';
}

}





function DA_2_Back_12(){
window.location.href='#DA2_Q301_2_page';
}


function DA_2_Back_13(){
window.location.href='#DA2_Q401_page';
}


function DA_2_Back_14(){
window.location.href='#DA2_Q402_page';
}



function DA_2_Back_15(){
var ageGroup = document.getElementById("DA2_Q401").value;
var firstBR = document.getElementById("DA2_Q402_a").value;
var secondBR = document.getElementById("DA2_Q402_b").value;

if(ageGroup=="1" && firstBR>="60" && secondBR==""){
window.location.href='#DA2_Q403_page';
}
else if(ageGroup=="2" && firstBR>="50" && secondBR==""){
window.location.href='#DA2_Q403_page';
}
else if(ageGroup=="3" && firstBR>="40" && secondBR==""){
window.location.href='#DA2_Q403_page';
}
else{
window.location.href='#DA2_Q402_page';
}
}


function DA_2_Back_16(){
window.location.href='#DA2_Q404_page';
document.getElementById("DA2_BackToReviewForQ501").style.display = "none";

}

function DA_2_Back_17(){
window.location.href='#DA2_Q501_page';
}


function DA_2_Back_601(){
window.location.href='#DA2_Q601_page';
}


function DA_2_Back_601_1(){
window.location.href='#DA2_Q601_1_page';
}

function DA_2_Back_601_2(){
window.location.href='#DA2_Q601_2_page';
}



function DA_2_Back_18(){
window.location.href='#DA2_Q601_3_page';
}


function DA_2_Back_19(){
window.location.href='#DA2_Q701_page';
}


function DA_2_Back_20(){


var DA2_Q701 = document.getElementById("DA2_Q701").value;
var DA2_Q702 = document.getElementById("DA2_Q702").value;
var DA2_Q703 = document.getElementById("DA2_Q703").value;

if(DA2_Q701=="1" || DA2_Q702=="2" || DA2_Q703=="2"){
window.location.href='#DA2_Q701_page';
}
else{
window.location.href='#DA2_Q704_page';
}
}


function DA_2_Back_21(){

if(document.getElementById("DA2_120result").value != "1"){
window.location.href='#DA2_respondent';
}
else if(document.getElementById("DA2_Q302").value != ""){
window.location.href='#DA2_Q301_2_page';
window.location.href='#DA2_Q301_2_page';
}
else{
window.location.href='#DA2_Q801_page';
}
}





function DA_3_Next_1(){
if(document.getElementById("da3_childID").value=="" || document.getElementById("da3_childID").value.length!=7){
alert("শিশুর আইডি সঠিক নয়।");
}
else{
window.location.href='#DA3_2_page';
document.getElementById("CurrentChildID").innerHTML = document.getElementById("da3_childID").value;
}

}


//function DA_3_Next_2(){
//var DA3_Q101_code = document.getElementById("DA3_Q101_code").value;
//var DA3_Q102_code = document.getElementById("DA3_Q102_code").value;
//var DA3_Q103_code = document.getElementById("DA3_Q103_code").value;
//var DA3_Q104_code = document.getElementById("DA3_Q104_code").value;
//var DA3_Q105_code = document.getElementById("DA3_Q105_code").value;
//var DA3_Q106_code = document.getElementById("DA3_Q106_code").value;
//var DA3_Q108_code = document.getElementById("DA3_Q108_code").value;
//var DA3_Q107 = document.getElementById("DA3_Q107").value;


//if(DA3_Q101_code=="" || DA3_Q102_code=="" || DA3_Q103_code=="" || DA3_Q104_code=="" || DA3_Q105_code=="" || DA3_Q106_code=="" || DA3_Q108_code=="" || DA3_Q107==""){
//alert("এখানে শিশুর সব থাকতে হবে। এখানে তথ্য অসম্পূর্ণ আছে।");
//}
//else{
//window.location.href='#DA3_3_page';
//}
//}



function DA_3_next_3(){
var DA3_Q109 = document.getElementById("DA3_Q109").value;
var DA3_Q110 = document.getElementById("DA3_Q110").value;
var DA3_Q111 = document.getElementById("DA3_Q111").value;
var DA3_Q112 = document.getElementById("DA3_Q112").value;
var DA3_Q113 = document.getElementById("DA3_Q113").value;
var DA3_Q114 = document.getElementById("DA3_Q114").value;
var DA3_Q115 = document.getElementById("DA3_Q115").value;



if(DA3_Q109=="" || DA3_Q110=="" || DA3_Q111==""|| DA3_Q112==""|| DA3_Q113==""|| DA3_Q114==""|| DA3_Q115==""){
alert("এখানে শিশুর সব থাকতে হবে। এখানে তথ্য অসম্পূর্ণ আছে।");
}
else{


var CDate = new Date();

var DA_3_CYear = CDate.getFullYear();

var DA_3_CM = CDate.getMonth()+1;
if(DA_3_CM.toString().length<2){
var DA_3_CMonth = "0"+DA_3_CM;
}
else{
var DA_3_CMonth = DA_3_CM;
}

var DA_3_CD = CDate.getDate();
if(DA_3_CD.toString().length<2){
var DA_3_CDay = "0"+DA_3_CD;
}
else{
var DA_3_CDay = DA_3_CD;
}

var DA_3_H = CDate.getHours();
if(DA_3_H.toString().length<2){
var DA_3_CHour = "0"+DA_3_H;
}
else{
var DA_3_CHour = DA_3_H;
}

var DA_3_M = CDate.getMinutes();
if(DA_3_M.toString().length<2){
var DA_3_CMin = "0"+DA_3_M;
}
else{
var DA_3_CMin = DA_3_M;
}


document.getElementById("DA3_Q117Date").value = DA_3_CDay+"/"+DA_3_CMonth+"/"+DA_3_CYear;
document.getElementById("DA3_Q117Time").value = DA_3_CHour+":"+DA_3_CMin;



window.location.href='#DA3_4_page';
//window.location.href='#DA3_5_page';
}
}



function DA_3_next_4(){
var DA3_Q116 = document.getElementById("DA3_Q116").value;
var DA3_Q117Date = document.getElementById("DA3_Q117Date").value;
var DA3_Q117Time = document.getElementById("DA3_Q117Time").value;


if(DA3_Q116==""){
alert("এখানে সব তথ্য থাকতে হবে।");
}
else{

var CDate = new Date();

var DA_3_H = CDate.getHours();
if(DA_3_H.toString().length<2){
var DA_3_CHour = "0"+DA_3_H;
}
else{
var DA_3_CHour = DA_3_H;
}

var DA_3_M = CDate.getMinutes();
if(DA_3_M.toString().length<2){
var DA_3_CMin = "0"+DA_3_M;
}
else{
var DA_3_CMin = DA_3_M;
}


document.getElementById("DA3_Q201").value = DA_3_CHour+":"+DA_3_CMin;
//window.location.href='#DA3_5_page';
window.location.href='#DA3_5_1_page';
}
}





function DA_3_next_5_1(){
if(document.getElementById("DA3_Q202").value ==""){
alert("যে কোন একটি নির্বাচন করুন");
}
else if(document.getElementById("DA3_Q202").value =="1"){
window.location.href="#DA3_6_page";


var valNull = "";
$('#DA3_Q202a').val(valNull);
$('#DA3_Q202b').val(valNull);
$('#DA3_Q202c').val(valNull);
$('#DA3_Q202d').val(valNull);

}
else{


document.getElementById("DA3_Q202a").value = "";
document.getElementById("DA3_Q202b").value = "";
document.getElementById("DA3_Q202c").value = "";
document.getElementById("DA3_Q202d").value = "";
//$('#DA3_Q202a').selectmenu().selectmenu('refresh', true);
//$('#DA3_Q202b').selectmenu().selectmenu('refresh', true);
//$('#DA3_Q202c').selectmenu().selectmenu('refresh', true);
//$('#DA3_Q202d').selectmenu().selectmenu('refresh', true);


var valNo = "2";
$('#DA3_Q202a').val(valNo);
$('#DA3_Q202b').val(valNo);
$('#DA3_Q202c').val(valNo);
$('#DA3_Q202d').val(valNo);


window.location.href="#DA3_8_page";
}
}






function DA_3_next_5(){

if(document.getElementById("DA3_Q201").value==""){
alert("রেকর্ডিং শুরুর সময় আসেনি। পিছনে গিয়ে আবার Next বাটনে চাপুন।");
}
else{
window.location.href='#DA3_6_page';
}
}



function DA_3_next_6(){
var DA3_Q202a1 = document.getElementById("DA3_Q202a").value;
var DA3_Q202b1 = document.getElementById("DA3_Q202b").value;
var DA3_Q202c1 = document.getElementById("DA3_Q202c").value;
var DA3_Q202d1 = document.getElementById("DA3_Q202d").value;

/*
var DA3_Q202a2 = document.getElementById("DA3_Q202a2").value;
var DA3_Q202b2 = document.getElementById("DA3_Q202b2").value;
var DA3_Q202c2 = document.getElementById("DA3_Q202c2").value;
var DA3_Q202d2 = document.getElementById("DA3_Q202d2").value;
*/

if(DA3_Q202a1=="" || DA3_Q202b1=="" || DA3_Q202c1=="" || DA3_Q202d1==""){
alert("এখানে প্রত্যেকটি থেকে হাঁ বা না নির্বাচন করুন। ");
}

/*
else if(DA3_Q202a1=="1" && (DA3_Q202a2=="" || DA3_Q202a2.length!=2 || DA3_Q202a2< "10" )){
alert("আপনি Q2.02A থেকে হাঁ নির্বাচন করেছেন। তাই সময়কাল দিতে হবে। সময়কাল দুই ডিজিট এর হতে হবে এবং ১০ সেকেন্ড বা তাঁর বেশি হতে হবে।");
}
else if(DA3_Q202b1=="1" && (DA3_Q202b2=="" || DA3_Q202b2.length!=2 || DA3_Q202b2< "10" )){
alert("আপনি Q2.02B থেকে হাঁ নির্বাচন করেছেন। তাই সময়কাল দিতে হবে। সময়কাল দুই ডিজিট এর হতে হবে  এবং ১০ সেকেন্ড বা তাঁর বেশি হতে হবে।");
}
else if(DA3_Q202c1=="1" && (DA3_Q202c2=="" || DA3_Q202c2.length!=2 || DA3_Q202c2< "10" )){
alert("আপনি Q2.02C থেকে হাঁ নির্বাচন করেছেন। তাই সময়কাল দিতে হবে। সময়কাল দুই ডিজিট এর হতে হবে  এবং ১০ সেকেন্ড বা তাঁর বেশি হতে হবে।");
}
else if(DA3_Q202d1=="1" && (DA3_Q202d2=="" || DA3_Q202d2.length!=2 || DA3_Q202d2< "10" )){
alert("আপনি Q2.02d থেকে হাঁ নির্বাচন করেছেন। তাই সময়কাল দিতে হবে। সময়কাল দুই ডিজিট এর হতে হবে  এবং ১০ সেকেন্ড বা তাঁর বেশি হতে হবে।");
}
else if(DA3_Q202a1=="2" && DA3_Q202a2!=""){
alert("আপনি Q2.02a থেকে না নির্বাচন করেছেন। তাই সময়কাল দিতে হবেনা।");
}
else if(DA3_Q202b1=="2" && DA3_Q202b2!=""){
alert("আপনি Q2.02b থেকে না নির্বাচন করেছেন। তাই সময়কাল দিতে হবেনা।");
}
else if(DA3_Q202c1=="2" && DA3_Q202c2!=""){
alert("আপনি Q2.02c থেকে না নির্বাচন করেছেন। তাই সময়কাল দিতে হবেনা।");
}
else if(DA3_Q202d1=="2" && DA3_Q202d2!=""){
alert("আপনি Q2.02d থেকে না নির্বাচন করেছেন। তাই সময়কাল দিতে হবেনা।");
}
*/
else if(DA3_Q202a1=="2" || DA3_Q202b1=="2" || DA3_Q202c1=="2" || DA3_Q202d1=="2"){
window.location.href='#DA3_8_page';
}

else{
window.location.href='#DA3_9_page';
document.getElementById("DA3_Q204").value = "";
$('#DA3_Q204').selectmenu().selectmenu('refresh', true);
}
var CDate = new Date();

var DA_3_H = CDate.getHours();
if(DA_3_H.toString().length<2){
var DA_3_CHour = "0"+DA_3_H;
}
else{
var DA_3_CHour = DA_3_H;
}

var DA_3_M = CDate.getMinutes();
if(DA_3_M.toString().length<2){
var DA_3_CMin = "0"+DA_3_M;
}
else{
var DA_3_CMin = DA_3_M;
}

document.getElementById("DA3_Q203").value = DA_3_CHour+":"+DA_3_CMin;

}


function DA_3_next_7(){

var DA3_Q202a = document.getElementById("DA3_Q202a").value;
var DA3_Q202b = document.getElementById("DA3_Q202b").value;
var DA3_Q202c = document.getElementById("DA3_Q202c").value;
var DA3_Q202d = document.getElementById("DA3_Q202d").value;

if(document.getElementById("DA3_Q203").value==""){
alert("রেকর্ডিং শেষ করার সময় আসেনি। পিছনে গিয়ে আবার Next বাটনে চাপুন।");
}
else if(DA3_Q202a=="2" || DA3_Q202b=="2" || DA3_Q202c=="2" || DA3_Q202d=="2"){
window.location.href='#DA3_8_page';
}
else{
window.location.href='#DA3_9_page';
document.getElementById("DA3_Q204").value = "";
$('#DA3_Q204').selectmenu().selectmenu('refresh', true);
}
}


function DA_3_next_8(){

var DA3_Q202a = document.getElementById("DA3_Q202a").value;
var DA3_Q202b = document.getElementById("DA3_Q202b").value;
var DA3_Q202c = document.getElementById("DA3_Q202c").value;
var DA3_Q202d = document.getElementById("DA3_Q202d").value;
var DA3_Q204 = document.getElementById("DA3_Q204").value;

if(document.getElementById("DA3_Q204").value==""){
alert("যে কোন একটি নির্বাচন করুন।");
return false;
}
/*
else if(DA3_Q204=="4" && (DA3_Q202a=="2" || DA3_Q202b=="2"|| DA3_Q202c=="2" || DA3_Q202d=="2")){
alert("আপনি Q2.02 এর এক বা একাধিক রেকর্ডিং করা হয়নি নির্বাচন করেছেন। তাই এখানে প্রযোজ্য নয় (সফলভাবে রেকর্ডিং সম্পন্ন হয়েছে) নির্বাচন করতে পারবেন না।");
return false;
}
else if(DA3_Q204!="4" && (DA3_Q202a=="1" && DA3_Q202b=="1"&& DA3_Q202c=="1" && DA3_Q202d=="1")){
alert("আপনি Q2.02 এ সব হ্যাঁ নির্বাচন করেছেন। তাই এখানে প্রযোজ্য নয় (সফলভাবে রেকর্ডিং সম্পন্ন হয়েছে) ছাড়া অন্য কোন অপশন নির্বাচন করতে পারবেন না।");
return false;
}
*/
else if(DA3_Q202a=="2" && DA3_Q202b=="2" && DA3_Q202c=="2" && DA3_Q202d=="2" && DA3_Q204 != "")
{
document.getElementById("DA3_Q205").value="";
$('#DA3_Q205').selectmenu().selectmenu('refresh', true);
document.getElementById("DA3_Q206").value="";
window.location.href='#DA3_11_page';

return true;
}
else{
window.location.href='#DA3_9_page';
return true;
}
}





function DA_3_next_9(){
if(document.getElementById("DA3_Q205").value==""){
alert("যে কোন একটি নির্বাচন করুন।")
}
else{
//window.location.href='#DA3_10_page';
window.location.href='#DA3_11_page';
document.getElementById("DA3_Q206").value = document.getElementById("da3_childID").value;
}
}


function DA_3_Next_10(){
if(document.getElementById("DA3_Q206").value==""){
alert("সাউন্ড রেকর্ডিং আইডি নেই।");
}
else{
window.location.href='#DA3_11_page';
}
}



function DA_3_Next_11(){

if(document.getElementById("DA3_Q207").value==""){
alert("সঠিক ডিভাইস আইডি নির্বাচন করুণ।");
}
else{
window.location.href='#DA3_12_page';
}
}



function DA_3_Next_12(){
if(document.getElementById("DA3_Q301").value==""){
alert("একটি নির্বাচন করুন।");
}
else if(document.getElementById("DA3_Q301").value=="1"){
window.location.href='#DA3_13_page';
}
else{

var CDate = new Date();

var DA_3_H = CDate.getHours();
if(DA_3_H.toString().length<2){
var DA_3_CHour = "0"+DA_3_H;
}
else{
var DA_3_CHour = DA_3_H;
}

var DA_3_M = CDate.getMinutes();
if(DA_3_M.toString().length<2){
var DA_3_CMin = "0"+DA_3_M;
}
else{
var DA_3_CMin = DA_3_M;
}

window.location.href='#DA3_14_page';
document.getElementById("DA3_Q400").value = DA_3_CHour+":"+DA_3_CMin;
document.getElementById("DA3_Q302").value="";
document.getElementById("DA3_Q303").value="";
}
}


function DA_3_Next_13(){
var DA3_Q302 = document.getElementById("DA3_Q302").value;
var DA3_Q303 = document.getElementById("DA3_Q303").value;

if(DA3_Q302==""){
alert("শিশুটির শরীরের যে অংশে এই পরিমাপ করা হয়েছে তা নির্বাচন করুন");
}
else if(DA3_Q303=="" || DA3_Q303.length!=3 || DA3_Q303 < 50 || DA3_Q303 > 100){
alert("সঠিক তাপমাত্রায় অক্সিজেনের পরিমাণ রেকর্ড করুন। পরিমাপ তিন ডিজিট এর হতে হবে।");
}
else{

var CDate = new Date();

var DA_3_H = CDate.getHours();
if(DA_3_H.toString().length<2){
var DA_3_CHour = "0"+DA_3_H;
}
else{
var DA_3_CHour = DA_3_H;
}

var DA_3_M = CDate.getMinutes();
if(DA_3_M.toString().length<2){
var DA_3_CMin = "0"+DA_3_M;
}
else{
var DA_3_CMin = DA_3_M;
}
document.getElementById("DA3_Q400").value = DA_3_CHour+":"+DA_3_CMin;
window.location.href='#DA3_14_page';
}
}


function DA_3_Back_2(){
window.location.href='#DA3_1_page';
}

function DA_3_Back_3(){
window.location.href='#DA3_2_page';
}

function DA_3_Back_4(){
window.location.href='#DA3_3_page';
}




function DA_3_Back_5(){
window.location.href='#DA3_4_page';
}

function DA_3_Back_5_1(){
window.location.href='#DA3_4_page';
}




function DA_3_Back_6(){
//window.location.href='#DA3_5_page';
window.location.href='#DA3_5_1_page';
}

function DA_3_Back_7(){
window.location.href='#DA3_6_page';
}



function DA_3_Back_8(){
//window.location.href='#DA3_7_page';

if(document.getElementById("DA3_Q202").value =="1"){
window.location.href='#DA3_6_page';
}
else{
window.location.href='#DA3_5_1_page';
}

}




function DA_3_Back_9(){
var DA3_Q202a = document.getElementById("DA3_Q202a").value;
var DA3_Q202b = document.getElementById("DA3_Q202b").value;
var DA3_Q202c = document.getElementById("DA3_Q202c").value;
var DA3_Q202d = document.getElementById("DA3_Q202d").value;

if((DA3_Q202a=="2" || DA3_Q202b=="2" || DA3_Q202c=="2" || DA3_Q202d=="2") && document.getElementById("DA3_Q202").value =="1"){
window.location.href='#DA3_8_page';
}
else if(document.getElementById("DA3_Q202").value =="2"){
window.location.href='#DA3_8_page';
}
else{
//window.location.href='#DA3_7_page';
window.location.href='#DA3_6_page';
}
}





function DA_3_Back_10(){
window.location.href='#DA3_9_page';
}


function DA_3_Back_11(){

var DA3_Q202a = document.getElementById("DA3_Q202a").value;
var DA3_Q202b = document.getElementById("DA3_Q202b").value;
var DA3_Q202c = document.getElementById("DA3_Q202c").value;
var DA3_Q202d = document.getElementById("DA3_Q202d").value;
var DA3_Q204 = document.getElementById("DA3_Q204").value;

if(DA3_Q202a=="2" && DA3_Q202b=="2" && DA3_Q202c=="2" && DA3_Q202d=="2" && DA3_Q204 != "4"){
window.location.href='#DA3_8_page';
}
else{
//window.location.href='#DA3_10_page';
window.location.href='#DA3_9_page';
}
}


function DA_3_Back_12(){
window.location.href='#DA3_11_page';
}

function DA_3_Back_13(){
window.location.href='#DA3_12_page';
}


function DA_3_Back_14(){
if(document.getElementById("DA3_Q301").value=="2"){
window.location.href='#DA3_12_page';
}
else{
window.location.href='#DA3_13_page';
}
}



   function D2_DuplicateChk(){

var cpid = document.getElementById("DA2_Q107").value;
var childName = document.getElementById("DA2_Q108_code").value;

var NoCard_upazilaCode = document.getElementById("DA2_Q101_card_no").value;
var NoCard_unionCode = document.getElementById("DA2_Q102_card_no").value;
var NoCard_villageCode = document.getElementById("DA2_Q103_card_no").value;
var NoCard_bariCode = document.getElementById("DA2_Q104_card_no").value;
var NoCard_hhCode = document.getElementById("DA2_Q105_card_no").value;

if(document.getElementById("DA2_Q107").value!="99999999999"){
   var chidlID = document.getElementById("DA2_ChildID").value;
//   var MPID = document.getElementById("DA2_Q111").value;
   D2_productHandlerCHK.D2_addProductCHK(chidlID);
}
else{
if(cpid=="" || cpid.length<11 || cpid.length > 11){
alert("সঠিক CPID দিন।");
}
else if(NoCard_upazilaCode=="" && cpid=="99999999999"){
alert("উপজিলা কোড নেই। ");
}
else if(NoCard_unionCode=="" && cpid=="99999999999"){
alert("ইউনিয়ন কোড নেই। ");
}
else if(NoCard_villageCode=="" && cpid=="99999999999"){
alert("গ্রামের কোড নেই। ");
}
else if(NoCard_bariCode=="" && cpid=="99999999999"){
alert("বাড়ি কোড নেই। ");
}
else if(NoCard_hhCode=="" && cpid=="99999999999"){
alert("বাড়ি কোড নেই। ");
}
else if(childName==""){
alert("শিশুর নাম নেই। ");
}
else{
window.location.href='#DA2_identification_page_2';
document.getElementById("DA3_Q107").value = document.getElementById("DA2_Q107").value;
}
}
}


   function D3_DuplicateChk(){

if(document.getElementById("DA3_Q107").value!="99999999999"){
   var chidlID  = document.getElementById("da3_childID").value;
//   var MPID  = document.getElementById("DA3_Q111").value;
   D3_productHandlerCHK.D3_addProductCHK(chidlID);
   }
   else{
var DA3_Q101_code = document.getElementById("DA3_Q101_code").value;
var DA3_Q102_code = document.getElementById("DA3_Q102_code").value;
var DA3_Q103_code = document.getElementById("DA3_Q103_code").value;
var DA3_Q104_code = document.getElementById("DA3_Q104_code").value;
var DA3_Q105_code = document.getElementById("DA3_Q105_code").value;
var DA3_Q106_code = document.getElementById("DA3_Q106_code").value;
var DA3_Q108_code = document.getElementById("DA3_Q108_code").value;
var DA3_Q107 = document.getElementById("DA3_Q107").value;
if(DA3_Q101_code=="" || DA3_Q102_code=="" || DA3_Q103_code=="" || DA3_Q104_code=="" || DA3_Q105_code=="" || DA3_Q106_code=="" || DA3_Q108_code=="" || DA3_Q107==""){
alert("এখানে শিশুর সব থাকতে হবে। এখানে তথ্য অসম্পূর্ণ আছে।");
}
else{
window.location.href='#DA3_3_page';
}
   }

   }



   function IsCard(){
   if(document.getElementById("IsCard").value=="1"){
//   window.location.href='#IDEnter_MPID';
   document.getElementById("CardAvail").style.display="block";
   document.getElementById("CardAvail_Yes").style.display="block";
   document.getElementById("Q104").value="";
   document.getElementById("Q105").value="";
   document.getElementById("Q106").value="";
   document.getElementById("CardAvail_No").style.display="none";
   document.getElementById("Q102").value="";
   document.getElementById("Q103").value="";
   document.getElementById("PCV_MPID").value="";
   document.getElementById("PCV_CPID").value="";
   document.getElementById("PCV_MPID").readOnly= false;
   document.getElementById("PCV_CPID").readOnly= false;
   document.getElementById("IsCardAvailToGetData").style.display="block";
   document.getElementById("Q208Card_Yes").style.display="block";
   document.getElementById("Q208Card_No").style.display="none";
   document.getElementById("Q208_Display").value="";
   document.getElementById("Q208").value="";
   }
   else if(document.getElementById("IsCard").value=="2"){

      document.getElementById("CardAvail").style.display="block";
      document.getElementById("CardAvail_Yes").style.display="none";
      document.getElementById("Q104_card").value="";
      document.getElementById("Q105_card").value="";
      document.getElementById("Q106_card").value="";
      document.getElementById("CardAvail_No").style.display="block";
      document.getElementById("Q102").value="";
      document.getElementById("Q103").value="";
      document.getElementById("PCV_MPID").value="99999999999";
      document.getElementById("PCV_CPID").value="99999999999";
      document.getElementById("PCV_MPID").readOnly= true;
      document.getElementById("PCV_CPID").readOnly= true;
      document.getElementById("IsCardAvailToGetData").style.display="none";
      document.getElementById("Q208Card_Yes").style.display="none";
      document.getElementById("Q208Card_No").style.display="block";
      document.getElementById("Q208_Display").value="না";
      document.getElementById("Q208").value="2";

   }
   else{
      document.getElementById("CardAvail").style.display="none";
         document.getElementById("CardAvail_Yes").style.display="none";
         document.getElementById("Q104_card").value="";
         document.getElementById("Q105_card").value="";
         document.getElementById("Q106_card").value="";
         document.getElementById("CardAvail_No").style.display="none";
            document.getElementById("Q104").value="";
            document.getElementById("Q105").value="";
            document.getElementById("Q106").value="";
           document.getElementById("Q102").value="";
           document.getElementById("Q103").value="";



   }

   }




function D1MPID_next(){
location.href = "#IDEnter_CPID";
}


function cleanIDEn(){
      document.getElementById("CardAvail").style.display="none";
         document.getElementById("CardAvail_Yes").style.display="none";
         document.getElementById("Q104_card").value="";
         document.getElementById("Q105_card").value="";
         document.getElementById("Q106_card").value="";
         document.getElementById("CardAvail_No").style.display="none";
            document.getElementById("Q104").value="";
            document.getElementById("Q105").value="";
            document.getElementById("Q106").value="";
           document.getElementById("Q102").value="";
           document.getElementById("Q103").value="";

           document.getElementById("PCV_MPID").value="";
           document.getElementById("PCV_CPID").value="";
           document.getElementById("Q102").value="";
           document.getElementById("Q103").value="";
           document.getElementById("Q103Father").value="";
           document.getElementById("CardAvail_No").style.display="none";
           document.getElementById("DobNo").value="";
           $('#DobNo').selectmenu().selectmenu('refresh', true);
           document.getElementById("YesDOB").style.display="none";
           document.getElementById("NoDOB").style.display="none";
           $('#Q106').selectmenu().selectmenu('refresh', true);
           document.getElementById("IsCard").value = "";
           $('#IsCard').selectmenu().selectmenu('refresh', true);
           location.href="#identification_3";

}




$(document).ready(function()
    {

    $("#pcv_download").click(function() {
document.getElementById("listviewPCV").innerHTML="";
document.getElementById("totalMasterChild").value="";
document.getElementById("totalMasterChildSaved").value="";

   online = window.navigator.onLine;
    if (navigator.onLine) {

var c=document.getElementById("PCV_cluster_new").value;
//var b=document.getElementById("PCV_block").value;

           var url = "server/DAS_data/getPCV_Data.php?c="+c;
//var url = "http://localhost:8081/Das_Study/getPCV_Data.php?c="+c;
           $.getJSON(url, function(result) {

               $.each(result, function(i, field) {
                   var PCV_Cluster = field.PCV_Cluster;
                   var PCV_Block = field.PCV_Block;
                   var PCV_Upazila = field.PCV_Upazila;
                   var PCV_Unions = field.PCV_Unions;
                   var PCV_Village = field.PCV_Village;
                   var PCV_Bari = field.PCV_BARI;
                   var PCV_House = field.PCV_House;
                   var PCV_HHname = field.PCV_HHName;
                   var MName = field.MName;
                   var Husband = field.Husband;
                   var MCID = field.MCID;
                   var MPID = field.MPID;
                   var ChildName = field.ChildName;
                   var CDOB = field.CDOB;
                   var CAge = field.CAge;
                   var CSex = field.CSex;
                   var CPID = field.CPID;
                   var Phone = field.Phone;
                   var CStatus = field.CStatus;
                   $("#listviewPCV").append("<div class='PCV_Cluster'>"+PCV_Cluster+"</div>"+"<div class='PCV_Block'>"+PCV_Block+"</div>"+"<div class='PCV_Upazila'>"+PCV_Upazila+"</div>"+"<div class='PCV_Unions'>"+PCV_Unions+"</div>"+"<div class='PCV_Village'>"+PCV_Village+"</div>"+"<div class='PCV_Bari'>"+PCV_Bari+"</div>"+"<div class='PCV_House'>"+PCV_House+"</div>"+"<div class='PCV_HHname'>"+PCV_HHname+"</div>"+"<div class='MName'>"+MName+"</div>"+"<div class='Husband'>"+Husband+"</div>"+"<div class='MCID'>"+MCID+"</div>"+"<div class='MPID'>"+MPID+"</div>"+"<div class='ChildName'>"+ChildName+"</div>"+"<div class='CDOB'>"+CDOB+"</div>"+"<div class='CAge'>"+CAge+"</div>"+"<div class='CSex'>"+CSex+"</div>"+"<div class='CPID'>"+CPID+"</div>"+"<div class='Phone'>"+Phone+"</div>"+"<div class='CStatus'>"+CStatus+"</div>");
                   //total record count
                   document.getElementById("totalMasterChild").value="Total child - "+(i+1);

               });




           });
           }
           else{
          alert("ট্যাব এ ইন্টারনেট কানেকশন নেই।")
           }

       });

   });






   function PCV_Data_Upload(){

var cl=document.getElementById("PCV_cluster_new").value;
databaseHandler.db.transaction(
function(txPCVDel){
txPCVDel.executeSql("delete from PCVMaster where PCV_Cluster = '"+cl+"' ",
[]);
});

                   var PCV_Cluster =  [];
                   var PCV_Block =  [];
                   var PCV_Upazila =  [];
                   var PCV_Unions =  [];
                   var PCV_Village =  [];
                   var PCV_Bari = [];
                   var PCV_House =  [];
                   var PCV_HHname =  [];
                   var MName =  [];
                   var Husband =  [];
                   var MCID =  [];
                   var MPID =  [];
                   var ChildName =  [];
                   var CDOB =  [];
                   var CAge =  [];
                   var CSex =  [];
                   var CPID =  [];
                   var Phone = [];
                   var CStatus = [];


    $('.PCV_Cluster').each(function(){
   PCV_Cluster.push($(this).text());
   });

   $('.PCV_Block').each(function(){
   PCV_Block.push($(this).text());
   });

   $('.PCV_Upazila').each(function(){
   PCV_Upazila.push($(this).text());
   });

   $('.PCV_Unions').each(function(){
   PCV_Unions.push($(this).text());
   });

   $('.PCV_Village').each(function(){
   PCV_Village.push($(this).text());
   });

   $('.PCV_Bari').each(function(){
   PCV_Bari.push($(this).text());
   });

   $('.PCV_House').each(function(){
   PCV_House.push($(this).text());
   });

   $('.PCV_HHname').each(function(){
   PCV_HHname.push($(this).text());
   });

   $('.MName').each(function(){
   MName.push($(this).text());
   });

   $('.Husband').each(function(){
   Husband.push($(this).text());
   });

   $('.MCID').each(function(){
   MCID.push($(this).text());
   });

   $('.MPID').each(function(){
   MPID.push($(this).text());
   });

   $('.ChildName').each(function(){
   ChildName.push($(this).text());
   });

   $('.CDOB').each(function(){
   CDOB.push($(this).text());
   });

   $('.CAge').each(function(){
   CAge.push($(this).text());
   });

   $('.CSex').each(function(){
   CSex.push($(this).text());
   });

   $('.CPID').each(function(){
   CPID.push($(this).text());
   });

   $('.Phone').each(function(){
   Phone.push($(this).text());
   });

   $('.CStatus').each(function(){
   CStatus.push($(this).text());
   });

   var i;
   for (i = 0; i <CPID.length; i++) {
   PCV_Data_upload.getPCVDATA(PCV_Cluster[i], PCV_Block[i], PCV_Upazila[i], PCV_Unions[i], PCV_Village[i], PCV_Bari[i], PCV_House[i], PCV_HHname[i], MName[i], Husband[i], MCID[i], MPID[i], ChildName[i], CDOB[i], CAge[i], CSex[i], CPID[i], Phone[i], CStatus[i]);
   }


   }








$(document).ready(function()
    {

    $("#village_download").click(function() {
document.getElementById("listviewPCVVillage").innerHTML="";
document.getElementById("totalVillage").value="";
document.getElementById("totalVillageUploaded").value="";

   online = window.navigator.onLine;
    if (navigator.onLine) {

var c=document.getElementById("PCV_cluster_new").value;
//var b=document.getElementById("PCV_block").value;

           var url = "server/DAS_data/getPCV_Village_Data.php?c="+c;
           $.getJSON(url, function(result) {

               $.each(result, function(i, field) {
                   var Union_Code = field.Union_Code;
                   var Village_Code = field.Village_Code;
                   var Village_Name = field.Village_Name;
                   var PCV_Cluster = field.PCV_Cluster;

                   $("#listviewPCVVillage").append("<div class='Union_Code'>"+Union_Code+"</div>"+"<div class='Village_Code'>"+Village_Code+"</div>"+"<div class='Village_Name'>"+Village_Name+"</div>"+"<div class='PCV_CL'>"+PCV_Cluster+"</div>");
                   //total record count
                   document.getElementById("totalVillage").value="Total village - " + (i+1);

               });

           });
           }
           else{
          alert("ট্যাব এ ইন্টারনেট কানেকশন নেই।")
           }

       });

   });



      function village_Data_Upload(){
                      var Union_Code =  [];
                      var Village_Code =  [];
                      var Village_Name =  [];
                      var PCV_Cluster =  [];

       $('.Union_Code').each(function(){
      Union_Code.push($(this).text());
      });

      $('.Village_Code').each(function(){
      Village_Code.push($(this).text());
      });

      $('.Village_Name').each(function(){
      Village_Name.push($(this).text());
      });

      $('.PCV_CL').each(function(){
            PCV_Cluster.push($(this).text());
            });

      var i;
      for (i = 0; i <Village_Code.length; i++) {

      PCV_Village_upload.getPCVVillage(Union_Code[i], Village_Code[i], Village_Name[i], PCV_Cluster[i]);
      }
      }






      $(document).ready(function()
          {
          $("#bari_download").click(function() {

         online = window.navigator.onLine;
          if (navigator.onLine) {

      var c=document.getElementById("PCV_cluster").value;
      //var b=document.getElementById("PCV_block").value;

                 var url = "server/DAS_data/getPCV_Bari_Data.php?c="+c;
                 $.getJSON(url, function(result) {

                     $.each(result, function(i, field) {
                         var Village_Code = field.Village_Code;
                         var Bari_Code = field.Bari_Code;
                         var Bari_Name = field.Bari_Name;

                         $("#listviewPCVBari").append("<div class='Village_Code'>"+Village_Code+"</div>"+"<div class='Bari_Code'>"+Bari_Code+"</div>"+"<div class='Bari_Name'>"+Bari_Name+"</div>");
                         //total record count
                         document.getElementById("totalBari").innerHTML=(i+1);

                     });

                 });
                 }
                 else{
                alert("ট্যাব এ ইন্টারনেট কানেকশন নেই।")
                 }

             });

         });



               function Bari_Data_Upload(){
                               var Village_Code =  [];
                               var Bari_Code =  [];
                               var Bari_Name =  [];

                $('.Village_Code').each(function(){
               Village_Code.push($(this).text());
               });

               $('.Bari_Code').each(function(){
               Bari_Code.push($(this).text());
               });

               $('.Bari_Name').each(function(){
               Bari_Name.push($(this).text());
               });

               var i;
               for (i = 0; i <Bari_Code.length; i++) {
               PCV_Bari_upload.getPCVBari(Village_Code[i], Bari_Code[i], Bari_Name[i]);
               }
               }







      $(document).ready(function()
          {
          $("#hh_download").click(function() {

         online = window.navigator.onLine;
          if (navigator.onLine) {

      var c=document.getElementById("PCV_cluster").value;
      //var b=document.getElementById("PCV_block").value;

                 var url = "server/DAS_data/getPCV_HH_Data.php?c="+c;
                 $.getJSON(url, function(result) {

                     $.each(result, function(i, field) {
                         var Village_Code = field.Village_Code;
                         var Bari_Code = field.Bari_Code;
                         var HH_Code = field.HH_Code;
                         var HH_Name = field.HH_Name;


                         $("#listviewPCVHH").append("<div class='Village_Code'>"+Village_Code+"</div>"+"<div class='Bari_Code'>"+Bari_Code+"</div>"+"<div class='HH_Code'>"+HH_Code+"</div>"+"<div class='HH_Name'>"+HH_Name+"</div>");
                         //total record count
                         document.getElementById("totalHH").innerHTML=(i+1);

                     });

                 });
                 }
                 else{
                alert("ট্যাব এ ইন্টারনেট কানেকশন নেই।")
                 }

             });

         });





                function HH_Data_Upload(){
                                        var Village_Code =  [];
                                        var Bari_Code =  [];
                                        var HH_Code =  [];
                                        var HH_Name =  [];

                         $('.Village_Code').each(function(){
                        Village_Code.push($(this).text());
                        });

                        $('.Bari_Code').each(function(){
                        Bari_Code.push($(this).text());
                        });

                        $('.HH_Code').each(function(){
                        HH_Code.push($(this).text());
                        });

                         $('.HH_Name').each(function(){
                         HH_Name.push($(this).text());
                         });

                        var i;
                        for (i = 0; i <HH_Code.length; i++) {
                        PCV_HH_upload.getPCVHH(Village_Code[i], Bari_Code[i], HH_Code[i] , HH_Name[i]);
                        }
                        }




function cancelForm(){



if(document.getElementById("DA2_Q401").value!="" && document.getElementById("DA2_Q402_a").value!=""){
document.getElementById("Review_DA2_Q401_page").style.display = "block";
}
else{
document.getElementById("Review_DA2_Q401_page").style.display = "none";
}

if(document.getElementById("DA2_Q501").value!="" && document.getElementById("DA2_Q502").value!=""){
document.getElementById("Review_DA2_Q501_page").style.display = "block";
}
else{
document.getElementById("Review_DA2_Q501_page").style.display = "none";
}


if(document.getElementById("DA2_Q704a").value!="" || document.getElementById("DA2_Q704b").value!="" || document.getElementById("DA2_Q704c").value!="" || document.getElementById("DA2_Q704d").value!=""){
document.getElementById("Review_DA2_Q704a_page").style.display = "block";
}
else{
document.getElementById("Review_DA2_Q704a_page").style.display = "none";
}



if(document.getElementById("DA2_Q401").value!="" || document.getElementById("DA2_Q402_a").value!="" || document.getElementById("DA2_Q501").value!="" || document.getElementById("DA2_Q502").value!="" || document.getElementById("DA2_Q704a").value!="" || document.getElementById("DA2_Q704b").value!="" || document.getElementById("DA2_Q704c").value!="" || document.getElementById("DA2_Q704d").value!="")
{
document.getElementById("ifCheckNo").style.display = "none";
document.getElementById("ifCheckYes").style.display = "block";
}
else{
document.getElementById("ifCheckNo").style.display = "block";
document.getElementById("ifCheckYes").style.display = "none";
}





 window.location.href='#DA2_cancel';


}



function D2CancelFormYes(){

var CDate = new Date();
var CH09 = CDate.getHours();

if(CH09.toString().length<2){var CHour = "0"+CH09;}
else{var CHour = CH09;}

var CM09 = CDate.getMinutes();

if(CM09.toString().length<2){var CMin ="0"+CM09;}
else{var CMin = CM09;}


document.getElementById("DA2_Q901").value = CHour+":"+CMin;
document.getElementById("DA2_120result").value = "2";
window.location.href='#DA2_Q901_page';
}







function D2_list(){
VarD2List.getD2List();
}

function D2MissingID_set(e){
var SCR_DivValue = $(e).text();
var SCR_childIDTrim =SCR_DivValue.trim().substring(11,18);
var SCR_childID =SCR_childIDTrim.trim();

VarEnterD2.getMissingD2Data(SCR_childID);
window.location.href='#DA2_ChildID_page';




databaseHandler.db.transaction(function(tx){
tx.executeSql(
"select * from DA1_Screening where Child_ID ='"+SCR_childID+"'",
[],
function (tx, results){
var len = results.rows.length;
if(len>0){
var lengt = results.rows.length, i;
for (i=0; i<=lengt-1; i++) {
document.getElementById("Q202_valueForQ201").value =  results.rows.item(i).Q202;
document.getElementById("Q204_valueForQ201").value =  results.rows.item(i).Q204;
document.getElementById("Q203_valueForQ405").value =  results.rows.item(i).Q203;
}
}
},
function(tx, error){
console.log("Error while creating table "+ error.message);
}
)
});



}



function D3_list(){
VarD3List.getD3List();
}


function D3MissingID_set(e){
var SCR_DivValue = $(e).text();
var SCR_childIDTrim =SCR_DivValue.trim().substring(11,18);
var SCR_childID =SCR_childIDTrim.trim();

VarEnterD3.getMissingD3Data(SCR_childID);
window.location.href='#DA3_1_page';
}





function D2CancelFormNO(){
 window.history.back();
}







$(document).ready(function()
    {

    $("#D1_Scr_download").click(function() {
document.getElementById("listviewD1").innerHTML="";
document.getElementById("totalD1SCE").value="";
document.getElementById("totalD1SCRSaved").value ="";

   online = window.navigator.onLine;
    if (navigator.onLine) {

var c=document.getElementById("Restore_CC").value;
//var b=document.getElementById("PCV_block").value;

           var url = "server/getD1_Data_restore.php?c="+c;
//var url = "http://localhost:8081/Das_Study/getPCV_Data.php?c="+c;
           $.getJSON(url, function(result) {

               $.each(result, function(i, field) {


                   var Child_ID = field.Child_ID;
                   var MPID = field.MPID;
                   var CPID = field.CPID;
                   var CC_Code = field.CC_Code;
                   var CName = field.CName;
                   var MName = field.MName;
                   var FName = field.FName;
                   var CDOB = field.CDOB;
                   var CAge = field.CAge;
                   var CSex = field.CSex;
                   var CHCP = field.CHCP;
                   var Visit_Date = field.Visit_Date;
                   var Start_Time = field.Start_Time;
                   var Q201 = field.Q201;
                   var Q202 = field.Q202;
                   var Q203 = field.Q203;
                   var Q204 = field.Q204;
                   var Q205 = field.Q205;
                   var Q206 = field.Q206;
                   var Q207 = field.Q207;
                   var Q208 = field.Q208;
                   var Q209 = field.Q209;
                   var Q210 = field.Q210;
                   var End_Time = field.End_Time;
                   var Entry_User_ID = field.Entry_User_ID;
                   var Entry_Date = field.Entry_Date;

                   $("#listviewD1").append(
                   "<div class='Child_ID'>"+Child_ID+"</div>"+
                   "<div class='MPID'>"+MPID+"</div>"+
                   "<div class='CPID'>"+CPID+"</div>"+
                   "<div class='CC_Code'>"+CC_Code+"</div>"+
                   "<div class='CName'>"+CName+"</div>"+
                   "<div class='MName'>"+MName+"</div>"+
                   "<div class='FName'>"+FName+"</div>"+
                   "<div class='CDOB'>"+CDOB+"</div>"+
                   "<div class='CAge'>"+CAge+"</div>"+
                   "<div class='CSex'>"+CSex+"</div>"+
                   "<div class='CHCP'>"+CHCP+"</div>"+
                   "<div class='Visit_Date'>"+Visit_Date+"</div>"+
                   "<div class='Start_Time'>"+Start_Time+"</div>"+
                   "<div class='Q201'>"+Q201+"</div>"+
                   "<div class='Q202'>"+Q202+"</div>"+
                   "<div class='Q203'>"+Q203+"</div>"+
                   "<div class='Q204'>"+Q204+"</div>"+
                   "<div class='Q205'>"+Q205+"</div>"+
                   "<div class='Q206'>"+Q206+"</div>"+
                   "<div class='Q207'>"+Q207+"</div>"+
                   "<div class='Q208'>"+Q208+"</div>"+
                   "<div class='Q209'>"+Q209+"</div>"+
                   "<div class='Q210'>"+Q210+"</div>"+
                   "<div class='End_Time'>"+End_Time+"</div>"+
                   "<div class='Entry_User_ID'>"+Entry_User_ID+"</div>"+
                   "<div class='Entry_Date'>"+Entry_Date+"</div>");
                   //total record count
                   document.getElementById("totalD1SCE").value="Total child - "+(i+1);

               });




           });
           }
           else{
          alert("ট্যাব এ ইন্টারনেট কানেকশন নেই।")
           }

       });

   });






      function D1_Data_Upload(){

var Child_ID = [];
var MPID = [];
var CPID = [];
var CC_Code = [];
var CName = [];
var MName = [];
var FName = [];
var CDOB = [];
var CAge = [];
var CSex = [];
var CHCP = [];
var Visit_Date = [];
var Start_Time = [];
var Q201 = [];
var Q202 = [];
var Q203 = [];
var Q204 = [];
var Q205 = [];
var Q206 = [];
var Q207 = [];
var Q208 = [];
var Q209 = [];
var Q210 = [];
var End_Time = [];
var Entry_User_ID = [];
var Entry_Date = [];

$('.Child_ID').each(function(){Child_ID.push($(this).text());});
$('.MPID').each(function(){MPID.push($(this).text());});
$('.CPID').each(function(){CPID.push($(this).text());});
$('.CC_Code').each(function(){CC_Code.push($(this).text());});
$('.CName').each(function(){CName.push($(this).text());});
$('.MName').each(function(){MName.push($(this).text());});
$('.FName').each(function(){FName.push($(this).text());});
$('.CDOB').each(function(){CDOB.push($(this).text());});
$('.CAge').each(function(){CAge.push($(this).text());});
$('.CSex').each(function(){CSex.push($(this).text());});
$('.CHCP').each(function(){CHCP.push($(this).text());});
$('.Visit_Date').each(function(){Visit_Date.push($(this).text());});
$('.Start_Time').each(function(){Start_Time.push($(this).text());});
$('.Q201').each(function(){Q201.push($(this).text());});
$('.Q202').each(function(){Q202.push($(this).text());});
$('.Q203').each(function(){Q203.push($(this).text());});
$('.Q204').each(function(){Q204.push($(this).text());});
$('.Q205').each(function(){Q205.push($(this).text());});
$('.Q206').each(function(){Q206.push($(this).text());});
$('.Q207').each(function(){Q207.push($(this).text());});
$('.Q208').each(function(){Q208.push($(this).text());});
$('.Q209').each(function(){Q209.push($(this).text());});
$('.Q210').each(function(){Q210.push($(this).text());});
$('.End_Time').each(function(){End_Time.push($(this).text());});
$('.Entry_User_ID').each(function(){Entry_User_ID.push($(this).text());});
$('.Entry_Date').each(function(){Entry_Date.push($(this).text());});




      var i;
      for (i = 0; i <Child_ID.length; i++) {
      D1_Data_upload.getD1DATA(Child_ID[i], MPID[i], CPID[i], CC_Code[i], CName[i], MName[i], FName[i], CDOB[i], CAge[i], CSex[i], CHCP[i], Visit_Date[i], Start_Time[i], Q201[i], Q202[i], Q203[i], Q204[i], Q205[i], Q206[i], Q207[i], Q208[i], Q209[i], Q210[i], End_Time[i], Entry_User_ID[i], Entry_Date[i]);
      }
      }















      $(document).ready(function()
          {

          $("#D2_Assessment_download").click(function() {
      document.getElementById("listviewD2").innerHTML="";
      document.getElementById("totalD2Assessment").value="";
      document.getElementById("totalD2AssessmentSaved").value ="";

         online = window.navigator.onLine;
          if (navigator.onLine) {

      var c=document.getElementById("Restore_CC").value;
      //var b=document.getElementById("PCV_block").value;

                 var url = "server/DAS_data/getD2_Data_restore.php?c="+c;
      //var url = "http://localhost:8081/Das_Study/getPCV_Data.php?c="+c;
                 $.getJSON(url, function(result) {

                     $.each(result, function(i, field) {


                         var  DA2_re_Child_ID = field.Child_ID;
                         var  DA2_re_Child_PID = field.Child_PID;
                         var  DA2_re_Upazila_Code = field.Upazila_Code;
                         var  DA2_re_Union_code = field.Union_code;
                         var  DA2_re_Village_code = field.Village_code;
                         var  DA2_re_Bari_code = field.Bari_code;
                         var  DA2_re_HH_code = field.HH_code;
                         var  DA2_re_CC_code = field.CC_code;
                         var  DA2_re_Child_name = field.Child_name;
                         var  DA2_re_Mother_name = field.Mother_name;
                         var  DA2_re_MCID = field.MCID;
                         var  DA2_re_MPID = field.MPID;
                         var  DA2_re_Father_name = field.Father_name;
                         var  DA2_re_Mobile = field.Mobile;
                         var  DA2_re_ChDob = field.ChDob;
                         var  DA2_re_ChildAge = field.ChildAge;
                         var  DA2_re_ChildSex = field.ChildSex;
                         var  DA2_re_CHCP_code = field.CHCP_code;
                         var  DA2_re_IntStartDate = field.IntStartDate;
                         var  DA2_re_IntStartTime = field.IntStartTime;
                         var  DA2_re_Q119 = field.Q119;
                         var  DA2_re_Q119Other = field.Q119Other;
                         var  DA2_re_Q120 = field.Q120;
                         var  DA2_re_Q120Other = field.Q120Other;
                         var  DA2_re_Q201a = field.Q201a;
                         var  DA2_re_Q201a_day = field.Q201a_day;
                         var  DA2_re_Q201b = field.Q201b;
                         var  DA2_re_Q201b_day = field.Q201b_day;
                         var  DA2_re_Q201c = field.Q201c;
                         var  DA2_re_Q201c_day = field.Q201c_day;
                         var  DA2_re_Q201d = field.Q201d;
                         var  DA2_re_Q201d_day = field.Q201d_day;
                         var  DA2_re_Q201e = field.Q201e;
                         var  DA2_re_Q201e_day = field.Q201e_day;
                         var  DA2_re_Q202 = field.Q202;
                         var  DA2_re_Q202_day = field.Q202_day;
                         var  DA2_re_Q203 = field.Q203;
                         var  DA2_re_Q203_day = field.Q203_day;
                         var  DA2_re_Q204 = field.Q204;
                         var  DA2_re_Q204_day = field.Q204_day;
                         var  DA2_re_Q205_1 = field.Q205_1;
                         var  DA2_re_Q205_2 = field.Q205_2;
                         var  DA2_re_Q205_3a_1 = field.Q205_3a_1;
                         var  DA2_re_Q205_3a_2 = field.Q205_3a_2;
                         var  DA2_re_Q205_3a_3 = field.Q205_3a_3;
                         var  DA2_re_Q205_3b_1 = field.Q205_3b_1;
                         var  DA2_re_Q205_3b_2 = field.Q205_3b_2;
                         var  DA2_re_Q205_3b_3 = field.Q205_3b_3;
                         var  DA2_re_Q205_3c_1 = field.Q205_3c_1;
                         var  DA2_re_Q205_3c_2 = field.Q205_3c_2;
                         var  DA2_re_Q205_3c_3 = field.Q205_3c_3;
                         var  DA2_re_Q301 = field.Q301;
                         var  DA2_re_Q302 = field.Q302;
                         var  DA2_re_Q302Other = field.Q302Other;
                         var  DA2_re_Q401 = field.Q401;
                         var  DA2_re_Q402a = field.Q402a;
                         var  DA2_re_Q402b = field.Q402b;
                         var  DA2_re_Q403 = field.Q403;
                         var  DA2_re_Q404 = field.Q404;
                         var  DA2_re_Q405 = field.Q405;
                         var  DA2_re_Q501 = field.Q501;
                         var  DA2_re_Q502 = field.Q502;
                         var  DA2_re_Q503 = field.Q503;
                         var  DA2_re_Q504 = field.Q504;
                         var  DA2_re_Q505 = field.Q505;
                         var  DA2_re_Q506 = field.Q506;
                         var  DA2_re_Q601 = field.Q601;
                         var  DA2_re_Q602 = field.Q602;
                         var  DA2_re_Q603a = field.Q603a;
                         var  DA2_re_Q603b = field.Q603b;
                         var  DA2_re_Q603c = field.Q603c;
                         var  DA2_re_Q604 = field.Q604;
                         var  DA2_re_Q605 = field.Q605;
                         var  DA2_re_Q701 = field.Q701;
                         var  DA2_re_Q702 = field.Q702;
                         var  DA2_re_Q703 = field.Q703;
                         var  DA2_re_Q704a = field.Q704a;
                         var  DA2_re_Q704a_time = field.Q704a_time;
                         var  DA2_re_Q704a_day = field.Q704a_day;
                         var  DA2_re_Q704b = field.Q704b;
                         var  DA2_re_Q704b_time = field.Q704b_time;
                         var  DA2_re_Q704b_day = field.Q704b_day;
                         var  DA2_re_Q704c = field.Q704c;
                         var  DA2_re_Q704c_time = field.Q704c_time;
                         var  DA2_re_Q704c_day = field.Q704c_day;
                         var  DA2_re_Q704d = field.Q704d;
                         var  DA2_re_Q704d_time = field.Q704d_time;
                         var  DA2_re_Q704d_day = field.Q704d_day;
                         var  DA2_re_Q704e = field.Q704e;
                         var  DA2_re_Q704e_time = field.Q704e_time;
                         var  DA2_re_Q704e_day = field.Q704e_day;
                         var  DA2_re_Q704f = field.Q704f;
                         var  DA2_re_Q704f_time = field.Q704f_time;
                         var  DA2_re_Q704f_day = field.Q704f_day;
                         var  DA2_re_Q801 = field.Q801;
                         var  DA2_re_Q901 = field.Q901;
                         var  DA2_re_Entry_User_ID = field.Entry_User_ID;
                         var  DA2_re_Entry_Date = field.Entry_Date;


                         $("#listviewD2").append(
                                                 "<div class='DA2_re_Child_ID'>"+DA2_re_Child_ID+"</div>"+
                         "<div class='DA2_re_Child_PID'>"+DA2_re_Child_PID+"</div>"+
                         "<div class='DA2_re_Upazila_Code'>"+DA2_re_Upazila_Code+"</div>"+
                         "<div class='DA2_re_Union_code'>"+DA2_re_Union_code+"</div>"+
                         "<div class='DA2_re_Village_code'>"+DA2_re_Village_code+"</div>"+
                         "<div class='DA2_re_Bari_code'>"+DA2_re_Bari_code+"</div>"+
                         "<div class='DA2_re_HH_code'>"+DA2_re_HH_code+"</div>"+
                         "<div class='DA2_re_CC_code'>"+DA2_re_CC_code+"</div>"+
                         "<div class='DA2_re_Child_name'>"+DA2_re_Child_name+"</div>"+
                         "<div class='DA2_re_Mother_name'>"+DA2_re_Mother_name+"</div>"+
                         "<div class='DA2_re_MCID'>"+DA2_re_MCID+"</div>"+
                         "<div class='DA2_re_MPID'>"+DA2_re_MPID+"</div>"+
                         "<div class='DA2_re_Father_name'>"+DA2_re_Father_name+"</div>"+
                         "<div class='DA2_re_Mobile'>"+DA2_re_Mobile+"</div>"+
                         "<div class='DA2_re_ChDob'>"+DA2_re_ChDob+"</div>"+
                         "<div class='DA2_re_ChildAge'>"+DA2_re_ChildAge+"</div>"+
                         "<div class='DA2_re_ChildSex'>"+DA2_re_ChildSex+"</div>"+
                         "<div class='DA2_re_CHCP_code'>"+DA2_re_CHCP_code+"</div>"+
                         "<div class='DA2_re_IntStartDate'>"+DA2_re_IntStartDate+"</div>"+
                         "<div class='DA2_re_IntStartTime'>"+DA2_re_IntStartTime+"</div>"+
                         "<div class='DA2_re_Q119'>"+DA2_re_Q119+"</div>"+
                         "<div class='DA2_re_Q119Other'>"+DA2_re_Q119Other+"</div>"+
                         "<div class='DA2_re_Q120'>"+DA2_re_Q120+"</div>"+
                         "<div class='DA2_re_Q120Other'>"+DA2_re_Q120Other+"</div>"+
                         "<div class='DA2_re_Q201a'>"+DA2_re_Q201a+"</div>"+
                         "<div class='DA2_re_Q201a_day'>"+DA2_re_Q201a_day+"</div>"+
                         "<div class='DA2_re_Q201b'>"+DA2_re_Q201b+"</div>"+
                         "<div class='DA2_re_Q201b_day'>"+DA2_re_Q201b_day+"</div>"+
                         "<div class='DA2_re_Q201c'>"+DA2_re_Q201c+"</div>"+
                         "<div class='DA2_re_Q201c_day'>"+DA2_re_Q201c_day+"</div>"+
                         "<div class='DA2_re_Q201d'>"+DA2_re_Q201d+"</div>"+
                         "<div class='DA2_re_Q201d_day'>"+DA2_re_Q201d_day+"</div>"+
                         "<div class='DA2_re_Q201e'>"+DA2_re_Q201e+"</div>"+
                         "<div class='DA2_re_Q201e_day'>"+DA2_re_Q201e_day+"</div>"+
                         "<div class='DA2_re_Q202'>"+DA2_re_Q202+"</div>"+
                         "<div class='DA2_re_Q202_day'>"+DA2_re_Q202_day+"</div>"+
                         "<div class='DA2_re_Q203'>"+DA2_re_Q203+"</div>"+
                         "<div class='DA2_re_Q203_day'>"+DA2_re_Q203_day+"</div>"+
                         "<div class='DA2_re_Q204'>"+DA2_re_Q204+"</div>"+
                         "<div class='DA2_re_Q204_day'>"+DA2_re_Q204_day+"</div>"+
                         "<div class='DA2_re_Q205_1'>"+DA2_re_Q205_1+"</div>"+
                         "<div class='DA2_re_Q205_2'>"+DA2_re_Q205_2+"</div>"+
                         "<div class='DA2_re_Q205_3a_1'>"+DA2_re_Q205_3a_1+"</div>"+
                         "<div class='DA2_re_Q205_3a_2'>"+DA2_re_Q205_3a_2+"</div>"+
                         "<div class='DA2_re_Q205_3a_3'>"+DA2_re_Q205_3a_3+"</div>"+
                         "<div class='DA2_re_Q205_3b_1'>"+DA2_re_Q205_3b_1+"</div>"+
                         "<div class='DA2_re_Q205_3b_2'>"+DA2_re_Q205_3b_2+"</div>"+
                         "<div class='DA2_re_Q205_3b_3'>"+DA2_re_Q205_3b_3+"</div>"+
                         "<div class='DA2_re_Q205_3c_1'>"+DA2_re_Q205_3c_1+"</div>"+
                         "<div class='DA2_re_Q205_3c_2'>"+DA2_re_Q205_3c_2+"</div>"+
                         "<div class='DA2_re_Q205_3c_3'>"+DA2_re_Q205_3c_3+"</div>"+
                         "<div class='DA2_re_Q301'>"+DA2_re_Q301+"</div>"+
                         "<div class='DA2_re_Q302'>"+DA2_re_Q302+"</div>"+
                         "<div class='DA2_re_Q302Other'>"+DA2_re_Q302Other+"</div>"+
                         "<div class='DA2_re_Q401'>"+DA2_re_Q401+"</div>"+
                         "<div class='DA2_re_Q402a'>"+DA2_re_Q402a+"</div>"+
                         "<div class='DA2_re_Q402b'>"+DA2_re_Q402b+"</div>"+
                         "<div class='DA2_re_Q403'>"+DA2_re_Q403+"</div>"+
                         "<div class='DA2_re_Q404'>"+DA2_re_Q404+"</div>"+
                         "<div class='DA2_re_Q405'>"+DA2_re_Q405+"</div>"+
                         "<div class='DA2_re_Q501'>"+DA2_re_Q501+"</div>"+
                         "<div class='DA2_re_Q502'>"+DA2_re_Q502+"</div>"+
                         "<div class='DA2_re_Q503'>"+DA2_re_Q503+"</div>"+
                         "<div class='DA2_re_Q504'>"+DA2_re_Q504+"</div>"+
                         "<div class='DA2_re_Q505'>"+DA2_re_Q505+"</div>"+
                         "<div class='DA2_re_Q506'>"+DA2_re_Q506+"</div>"+
                         "<div class='DA2_re_Q601'>"+DA2_re_Q601+"</div>"+
                         "<div class='DA2_re_Q602'>"+DA2_re_Q602+"</div>"+
                         "<div class='DA2_re_Q603a'>"+DA2_re_Q603a+"</div>"+
                         "<div class='DA2_re_Q603b'>"+DA2_re_Q603b+"</div>"+
                         "<div class='DA2_re_Q603c'>"+DA2_re_Q603c+"</div>"+
                         "<div class='DA2_re_Q604'>"+DA2_re_Q604+"</div>"+
                         "<div class='DA2_re_Q605'>"+DA2_re_Q605+"</div>"+
                         "<div class='DA2_re_Q701'>"+DA2_re_Q701+"</div>"+
                         "<div class='DA2_re_Q702'>"+DA2_re_Q702+"</div>"+
                         "<div class='DA2_re_Q703'>"+DA2_re_Q703+"</div>"+
                         "<div class='DA2_re_Q704a'>"+DA2_re_Q704a+"</div>"+
                         "<div class='DA2_re_Q704a_time'>"+DA2_re_Q704a_time+"</div>"+
                         "<div class='DA2_re_Q704a_day'>"+DA2_re_Q704a_day+"</div>"+
                         "<div class='DA2_re_Q704b'>"+DA2_re_Q704b+"</div>"+
                         "<div class='DA2_re_Q704b_time'>"+DA2_re_Q704b_time+"</div>"+
                         "<div class='DA2_re_Q704b_day'>"+DA2_re_Q704b_day+"</div>"+
                         "<div class='DA2_re_Q704c'>"+DA2_re_Q704c+"</div>"+
                         "<div class='DA2_re_Q704c_time'>"+DA2_re_Q704c_time+"</div>"+
                         "<div class='DA2_re_Q704c_day'>"+DA2_re_Q704c_day+"</div>"+
                         "<div class='DA2_re_Q704d'>"+DA2_re_Q704d+"</div>"+
                         "<div class='DA2_re_Q704d_time'>"+DA2_re_Q704d_time+"</div>"+
                         "<div class='DA2_re_Q704d_day'>"+DA2_re_Q704d_day+"</div>"+
                         "<div class='DA2_re_Q704e'>"+DA2_re_Q704e+"</div>"+
                         "<div class='DA2_re_Q704e_time'>"+DA2_re_Q704e_time+"</div>"+
                         "<div class='DA2_re_Q704e_day'>"+DA2_re_Q704e_day+"</div>"+
                         "<div class='DA2_re_Q704f'>"+DA2_re_Q704f+"</div>"+
                         "<div class='DA2_re_Q704f_time'>"+DA2_re_Q704f_time+"</div>"+
                         "<div class='DA2_re_Q704f_day'>"+DA2_re_Q704f_day+"</div>"+
                         "<div class='DA2_re_Q801'>"+DA2_re_Q801+"</div>"+
                         "<div class='DA2_re_Q901'>"+DA2_re_Q901+"</div>"+
                         "<div class='DA2_re_Entry_User_ID'>"+DA2_re_Entry_User_ID+"</div>"+
                         "<div class='DA2_re_Entry_Date'>"+DA2_re_Entry_Date+"</div>");
                         //total record count
                         document.getElementById("totalD2Assessment").value="Total child - "+(i+1);

                     });




                 });
                 }
                 else{
                alert("ট্যাব এ ইন্টারনেট কানেকশন নেই।")
                 }

             });

         });







              function D2_Data_Upload(){

         var Child_ID = [];
         var Child_PID = [];
         var Upazila_Code = [];
         var Union_code = [];
         var Village_code = [];
         var Bari_code = [];
         var HH_code = [];
         var CC_code = [];
         var Child_name = [];
         var Mother_name = [];
         var MCID = [];
         var MPID = [];
         var Father_name = [];
         var Mobile = [];
         var ChDob = [];
         var ChildAge = [];
         var ChildSex = [];
         var CHCP_code = [];
         var IntStartDate = [];
         var IntStartTime = [];
         var Q119 = [];
         var Q119Other = [];
         var Q120 = [];
         var Q120Other = [];
         var Q201a = [];
         var Q201a_day = [];
         var Q201b = [];
         var Q201b_day = [];
         var Q201c = [];
         var Q201c_day = [];
         var Q201d = [];
         var Q201d_day = [];
         var Q201e = [];
         var Q201e_day = [];
         var Q202 = [];
         var Q202_day = [];
         var Q203 = [];
         var Q203_day = [];
         var Q204 = [];
         var Q204_day = [];
         var Q205_1 = [];
         var Q205_2 = [];
         var Q205_3a_1 = [];
         var Q205_3a_2 = [];
         var Q205_3a_3 = [];
         var Q205_3b_1 = [];
         var Q205_3b_2 = [];
         var Q205_3b_3 = [];
         var Q205_3c_1 = [];
         var Q205_3c_2 = [];
         var Q205_3c_3 = [];
         var Q301 = [];
         var Q302 = [];
         var Q302Other = [];
         var Q401 = [];
         var Q402a = [];
         var Q402b = [];
         var Q403 = [];
         var Q404 = [];
         var Q405 = [];
         var Q501 = [];
         var Q502 = [];
         var Q503 = [];
         var Q504 = [];
         var Q505 = [];
         var Q506 = [];
         var Q601 = [];
         var Q602 = [];
         var Q603a = [];
         var Q603b = [];
         var Q603c = [];
         var Q604 = [];
         var Q605 = [];
         var Q701 = [];
         var Q702 = [];
         var Q703 = [];
         var Q704a = [];
         var Q704a_time = [];
         var Q704a_day = [];
         var Q704b = [];
         var Q704b_time = [];
         var Q704b_day = [];
         var Q704c = [];
         var Q704c_time = [];
         var Q704c_day = [];
         var Q704d = [];
         var Q704d_time = [];
         var Q704d_day = [];
         var Q704e = [];
         var Q704e_time = [];
         var Q704e_day = [];
         var Q704f = [];
         var Q704f_time = [];
         var Q704f_day = [];
         var Q801 = [];
         var Q901 = [];
         var Entry_User_ID = [];
         var Entry_Date = [];

         $('.DA2_re_Child_ID').each(function(){Child_ID.push($(this).text());});
         $('.DA2_re_Child_PID').each(function(){Child_PID.push($(this).text());});
         $('.DA2_re_Upazila_Code').each(function(){Upazila_Code.push($(this).text());});
         $('.DA2_re_Union_code').each(function(){Union_code.push($(this).text());});
         $('.DA2_re_Village_code').each(function(){Village_code.push($(this).text());});
         $('.DA2_re_Bari_code').each(function(){Bari_code.push($(this).text());});
         $('.DA2_re_HH_code').each(function(){HH_code.push($(this).text());});
         $('.DA2_re_CC_code').each(function(){CC_code.push($(this).text());});
         $('.DA2_re_Child_name').each(function(){Child_name.push($(this).text());});
         $('.DA2_re_Mother_name').each(function(){Mother_name.push($(this).text());});
         $('.DA2_re_MCID').each(function(){MCID.push($(this).text());});
         $('.DA2_re_MPID').each(function(){MPID.push($(this).text());});
         $('.DA2_re_Father_name').each(function(){Father_name.push($(this).text());});
         $('.DA2_re_Mobile').each(function(){Mobile.push($(this).text());});
         $('.DA2_re_ChDob').each(function(){ChDob.push($(this).text());});
         $('.DA2_re_ChildAge').each(function(){ChildAge.push($(this).text());});
         $('.DA2_re_ChildSex').each(function(){ChildSex.push($(this).text());});
         $('.DA2_re_CHCP_code').each(function(){CHCP_code.push($(this).text());});
         $('.DA2_re_IntStartDate').each(function(){IntStartDate.push($(this).text());});
         $('.DA2_re_IntStartTime').each(function(){IntStartTime.push($(this).text());});
         $('.DA2_re_Q119').each(function(){Q119.push($(this).text());});
         $('.DA2_re_Q119Other').each(function(){Q119Other.push($(this).text());});
         $('.DA2_re_Q120').each(function(){Q120.push($(this).text());});
         $('.DA2_re_Q120Other').each(function(){Q120Other.push($(this).text());});
         $('.DA2_re_Q201a').each(function(){Q201a.push($(this).text());});
         $('.DA2_re_Q201a_day').each(function(){Q201a_day.push($(this).text());});
         $('.DA2_re_Q201b').each(function(){Q201b.push($(this).text());});
         $('.DA2_re_Q201b_day').each(function(){Q201b_day.push($(this).text());});
         $('.DA2_re_Q201c').each(function(){Q201c.push($(this).text());});
         $('.DA2_re_Q201c_day').each(function(){Q201c_day.push($(this).text());});
         $('.DA2_re_Q201d').each(function(){Q201d.push($(this).text());});
         $('.DA2_re_Q201d_day').each(function(){Q201d_day.push($(this).text());});
         $('.DA2_re_Q201e').each(function(){Q201e.push($(this).text());});
         $('.DA2_re_Q201e_day').each(function(){Q201e_day.push($(this).text());});
         $('.DA2_re_Q202').each(function(){Q202.push($(this).text());});
         $('.DA2_re_Q202_day').each(function(){Q202_day.push($(this).text());});
         $('.DA2_re_Q203').each(function(){Q203.push($(this).text());});
         $('.DA2_re_Q203_day').each(function(){Q203_day.push($(this).text());});
         $('.DA2_re_Q204').each(function(){Q204.push($(this).text());});
         $('.DA2_re_Q204_day').each(function(){Q204_day.push($(this).text());});
         $('.DA2_re_Q205_1').each(function(){Q205_1.push($(this).text());});
         $('.DA2_re_Q205_2').each(function(){Q205_2.push($(this).text());});
         $('.DA2_re_Q205_3a_1').each(function(){Q205_3a_1.push($(this).text());});
         $('.DA2_re_Q205_3a_2').each(function(){Q205_3a_2.push($(this).text());});
         $('.DA2_re_Q205_3a_3').each(function(){Q205_3a_3.push($(this).text());});
         $('.DA2_re_Q205_3b_1').each(function(){Q205_3b_1.push($(this).text());});
         $('.DA2_re_Q205_3b_2').each(function(){Q205_3b_2.push($(this).text());});
         $('.DA2_re_Q205_3b_3').each(function(){Q205_3b_3.push($(this).text());});
         $('.DA2_re_Q205_3c_1').each(function(){Q205_3c_1.push($(this).text());});
         $('.DA2_re_Q205_3c_2').each(function(){Q205_3c_2.push($(this).text());});
         $('.DA2_re_Q205_3c_3').each(function(){Q205_3c_3.push($(this).text());});
         $('.DA2_re_Q301').each(function(){Q301.push($(this).text());});
         $('.DA2_re_Q302').each(function(){Q302.push($(this).text());});
         $('.DA2_re_Q302Other').each(function(){Q302Other.push($(this).text());});
         $('.DA2_re_Q401').each(function(){Q401.push($(this).text());});
         $('.DA2_re_Q402a').each(function(){Q402a.push($(this).text());});
         $('.DA2_re_Q402b').each(function(){Q402b.push($(this).text());});
         $('.DA2_re_Q403').each(function(){Q403.push($(this).text());});
         $('.DA2_re_Q404').each(function(){Q404.push($(this).text());});
         $('.DA2_re_Q405').each(function(){Q405.push($(this).text());});
         $('.DA2_re_Q501').each(function(){Q501.push($(this).text());});
         $('.DA2_re_Q502').each(function(){Q502.push($(this).text());});
         $('.DA2_re_Q503').each(function(){Q503.push($(this).text());});
         $('.DA2_re_Q504').each(function(){Q504.push($(this).text());});
         $('.DA2_re_Q505').each(function(){Q505.push($(this).text());});
         $('.DA2_re_Q506').each(function(){Q506.push($(this).text());});
         $('.DA2_re_Q601').each(function(){Q601.push($(this).text());});
         $('.DA2_re_Q602').each(function(){Q602.push($(this).text());});
         $('.DA2_re_Q603a').each(function(){Q603a.push($(this).text());});
         $('.DA2_re_Q603b').each(function(){Q603b.push($(this).text());});
         $('.DA2_re_Q603c').each(function(){Q603c.push($(this).text());});
         $('.DA2_re_Q604').each(function(){Q604.push($(this).text());});
         $('.DA2_re_Q605').each(function(){Q605.push($(this).text());});
         $('.DA2_re_Q701').each(function(){Q701.push($(this).text());});
         $('.DA2_re_Q702').each(function(){Q702.push($(this).text());});
         $('.DA2_re_Q703').each(function(){Q703.push($(this).text());});
         $('.DA2_re_Q704a').each(function(){Q704a.push($(this).text());});
         $('.DA2_re_Q704a_time').each(function(){Q704a_time.push($(this).text());});
         $('.DA2_re_Q704a_day').each(function(){Q704a_day.push($(this).text());});
         $('.DA2_re_Q704b').each(function(){Q704b.push($(this).text());});
         $('.DA2_re_Q704b_time').each(function(){Q704b_time.push($(this).text());});
         $('.DA2_re_Q704b_day').each(function(){Q704b_day.push($(this).text());});
         $('.DA2_re_Q704c').each(function(){Q704c.push($(this).text());});
         $('.DA2_re_Q704c_time').each(function(){Q704c_time.push($(this).text());});
         $('.DA2_re_Q704c_day').each(function(){Q704c_day.push($(this).text());});
         $('.DA2_re_Q704d').each(function(){Q704d.push($(this).text());});
         $('.DA2_re_Q704d_time').each(function(){Q704d_time.push($(this).text());});
         $('.DA2_re_Q704d_day').each(function(){Q704d_day.push($(this).text());});
         $('.DA2_re_Q704e').each(function(){Q704e.push($(this).text());});
         $('.DA2_re_Q704e_time').each(function(){Q704e_time.push($(this).text());});
         $('.DA2_re_Q704e_day').each(function(){Q704e_day.push($(this).text());});
         $('.DA2_re_Q704f').each(function(){Q704f.push($(this).text());});
         $('.DA2_re_Q704f_time').each(function(){Q704f_time.push($(this).text());});
         $('.DA2_re_Q704f_day').each(function(){Q704f_day.push($(this).text());});
         $('.DA2_re_Q801').each(function(){Q801.push($(this).text());});
         $('.DA2_re_Q901').each(function(){Q901.push($(this).text());});
         $('.DA2_re_Entry_User_ID').each(function(){Entry_User_ID.push($(this).text());});
         $('.DA2_re_Entry_Date').each(function(){Entry_Date.push($(this).text());});

               var i;
               for (i = 0; i <Child_ID.length; i++) {
               D2_Data_upload.getD2DATA( Child_ID[i], Child_PID[i], Upazila_Code[i], Union_code[i], Village_code[i], Bari_code[i], HH_code[i], CC_code[i], Child_name[i], Mother_name[i], MCID[i], MPID[i], Father_name[i], Mobile[i], ChDob[i], ChildAge[i], ChildSex[i], CHCP_code[i], IntStartDate[i], IntStartTime[i], Q119[i], Q119Other[i], Q120[i], Q120Other[i], Q201a[i], Q201a_day[i], Q201b[i], Q201b_day[i], Q201c[i], Q201c_day[i], Q201d[i], Q201d_day[i], Q201e[i], Q201e_day[i], Q202[i], Q202_day[i], Q203[i], Q203_day[i], Q204[i], Q204_day[i], Q205_1[i], Q205_2[i], Q205_3a_1[i], Q205_3a_2[i], Q205_3a_3[i], Q205_3b_1[i], Q205_3b_2[i], Q205_3b_3[i], Q205_3c_1[i], Q205_3c_2[i], Q205_3c_3[i], Q301[i], Q302[i], Q302Other[i], Q401[i], Q402a[i], Q402b[i], Q403[i], Q404[i], Q405[i], Q501[i], Q502[i], Q503[i], Q504[i], Q505[i], Q506[i], Q601[i], Q602[i], Q603a[i], Q603b[i], Q603c[i], Q604[i], Q605[i], Q701[i], Q702[i], Q703[i], Q704a[i], Q704a_time[i], Q704a_day[i], Q704b[i], Q704b_time[i], Q704b_day[i], Q704c[i], Q704c_time[i], Q704c_day[i], Q704d[i], Q704d_time[i], Q704d_day[i], Q704e[i], Q704e_time[i], Q704e_day[i], Q704f[i], Q704f_time[i], Q704f_day[i], Q801[i], Q901[i], Entry_User_ID[i],Entry_Date[i]);
               }
               }










      $(document).ready(function()
          {

          $("#D3_Sound_download").click(function() {
      document.getElementById("listviewD3").innerHTML="";
      document.getElementById("totalD3Sound").value="";
      document.getElementById("totalD3SoundSaved").value ="";

         online = window.navigator.onLine;
          if (navigator.onLine) {

      var c=document.getElementById("Restore_CC").value;
      //var b=document.getElementById("PCV_block").value;

                 var url = "server/DAS_data/getD3_Data_restore.php?c="+c;
      //var url = "http://localhost:8081/Das_Study/getPCV_Data.php?c="+c;
                 $.getJSON(url, function(result) {

                     $.each(result, function(i, field) {
                         var DA3_childID = field.DA3_childID;
                         var DA3_Q101_code = field.DA3_Q101_code;
                         var DA3_Q102_code = field.DA3_Q102_code;
                         var DA3_Q103_code = field.DA3_Q103_code;
                         var DA3_Q104_code = field.DA3_Q104_code;
                         var DA3_Q105_code = field.DA3_Q105_code;
                         var DA3_Q106_code = field.DA3_Q106_code;
                         var DA3_Q107 = field.DA3_Q107;
                         var DA3_Q108_code = field.DA3_Q108_code;
                         var DA3_Q109 = field.DA3_Q109;
                         var DA3_Q110 = field.DA3_Q110;
                         var DA3_Q111 = field.DA3_Q111;
                         var DA3_Q112 = field.DA3_Q112;
                         var DA3_Q113 = field.DA3_Q113;
                         var DA3_Q114 = field.DA3_Q114;
                         var DA3_Q115 = field.DA3_Q115;
                         var DA3_Q116 = field.DA3_Q116;
                         var DA3_Q117Date = field.DA3_Q117Date;
                         var DA3_Q117Time = field.DA3_Q117Time;
                         var DA3_Q201 = field.DA3_Q201;
                         var DA3_Q202a = field.DA3_Q202a;
                         var DA3_Q202b = field.DA3_Q202b;
                         var DA3_Q202c = field.DA3_Q202c;
                         var DA3_Q202d = field.DA3_Q202d;
                         var DA3_Q203 = field.DA3_Q203;
                         var DA3_Q204 = field.DA3_Q204;
                         var DA3_Q204O = field.DA3_Q204O;
                         var DA3_Q205 = field.DA3_Q205;
                         var DA3_Q206 = field.DA3_Q206;
                         var DA3_Q207 = field.DA3_Q207;
                         var DA3_Q301 = field.DA3_Q301;
                         var DA3_Q302 = field.DA3_Q302;
                         var DA3_Q303 = field.DA3_Q303;
                         var DA3_Q400 = field.DA3_Q400;
                         var Entry_User_ID = field.Entry_User_ID;
                         var Entry_Date = field.Entry_Date;

                         $("#listviewD3").append(
                         "<div class='DA3_childID'>"+DA3_childID+"</div>"+
                         "<div class='DA3_Q101_code'>"+DA3_Q101_code+"</div>"+
                         "<div class='DA3_Q102_code'>"+DA3_Q102_code+"</div>"+
                         "<div class='DA3_Q103_code'>"+DA3_Q103_code+"</div>"+
                         "<div class='DA3_Q104_code'>"+DA3_Q104_code+"</div>"+
                         "<div class='DA3_Q105_code'>"+DA3_Q105_code+"</div>"+
                         "<div class='DA3_Q106_code'>"+DA3_Q106_code+"</div>"+
                         "<div class='DA3_Q107'>"+DA3_Q107+"</div>"+
                         "<div class='DA3_Q108_code'>"+DA3_Q108_code+"</div>"+
                         "<div class='DA3_Q109'>"+DA3_Q109+"</div>"+
                         "<div class='DA3_Q110'>"+DA3_Q110+"</div>"+
                         "<div class='DA3_Q111'>"+DA3_Q111+"</div>"+
                         "<div class='DA3_Q112'>"+DA3_Q112+"</div>"+
                         "<div class='DA3_Q113'>"+DA3_Q113+"</div>"+
                         "<div class='DA3_Q114'>"+DA3_Q114+"</div>"+
                         "<div class='DA3_Q115'>"+DA3_Q115+"</div>"+
                         "<div class='DA3_Q116'>"+DA3_Q116+"</div>"+
                         "<div class='DA3_Q117Date'>"+DA3_Q117Date+"</div>"+
                         "<div class='DA3_Q117Time'>"+DA3_Q117Time+"</div>"+
                         "<div class='DA3_Q201'>"+DA3_Q201+"</div>"+
                         "<div class='DA3_Q202a'>"+DA3_Q202a+"</div>"+
                         "<div class='DA3_Q202b'>"+DA3_Q202b+"</div>"+
                         "<div class='DA3_Q202c'>"+DA3_Q202c+"</div>"+
                         "<div class='DA3_Q202d'>"+DA3_Q202d+"</div>"+
                         "<div class='DA3_Q203'>"+DA3_Q203+"</div>"+
                         "<div class='DA3_Q204'>"+DA3_Q204+"</div>"+
                         "<div class='DA3_Q204O'>"+DA3_Q204O+"</div>"+
                         "<div class='DA3_Q205'>"+DA3_Q205+"</div>"+
                         "<div class='DA3_Q206'>"+DA3_Q206+"</div>"+
                         "<div class='DA3_Q207'>"+DA3_Q207+"</div>"+
                         "<div class='DA3_Q301'>"+DA3_Q301+"</div>"+
                         "<div class='DA3_Q302'>"+DA3_Q302+"</div>"+
                         "<div class='DA3_Q303'>"+DA3_Q303+"</div>"+
                         "<div class='DA3_Q400'>"+DA3_Q400+"</div>"+
                         "<div class='Entry_User_ID'>"+Entry_User_ID+"</div>"+
                         "<div class='Entry_Date'>"+Entry_Date+"</div>");
                         //total record count
                         document.getElementById("totalD3Sound").value="Total child - "+(i+1);

                     });




                 });
                 }
                 else{
                alert("ট্যাব এ ইন্টারনেট কানেকশন নেই।")
                 }

             });

         });









                       function D3_Data_Upload(){

                var DA3_childID = [];
                var DA3_Q101_code = [];
                var DA3_Q102_code = [];
                var DA3_Q103_code = [];
                var DA3_Q104_code = [];
                var DA3_Q105_code = [];
                var DA3_Q106_code = [];
                var DA3_Q107 = [];
                var DA3_Q108_code = [];
                var DA3_Q109 = [];
                var DA3_Q110 = [];
                var DA3_Q111 = [];
                var DA3_Q112 = [];
                var DA3_Q113 = [];
                var DA3_Q114 = [];
                var DA3_Q115 = [];
                var DA3_Q116 = [];
                var DA3_Q117Date = [];
                var DA3_Q117Time = [];
                var DA3_Q201 = [];
                var DA3_Q202a = [];
                var DA3_Q202b = [];
                var DA3_Q202c = [];
                var DA3_Q202d = [];
                var DA3_Q203 = [];
                var DA3_Q204 = [];
                var DA3_Q204O = [];
                var DA3_Q205 = [];
                var DA3_Q206 = [];
                var DA3_Q207 = [];
                var DA3_Q301 = [];
                var DA3_Q302 = [];
                var DA3_Q303 = [];
                var DA3_Q400 = [];
                var Entry_User_ID = [];
                var Entry_Date = [];

                  $('.DA3_childID').each(function(){DA3_childID.push($(this).text());});
                  $('.DA3_Q101_code').each(function(){DA3_Q101_code.push($(this).text());});
                  $('.DA3_Q102_code').each(function(){DA3_Q102_code.push($(this).text());});
                  $('.DA3_Q103_code').each(function(){DA3_Q103_code.push($(this).text());});
                  $('.DA3_Q104_code').each(function(){DA3_Q104_code.push($(this).text());});
                  $('.DA3_Q105_code').each(function(){DA3_Q105_code.push($(this).text());});
                  $('.DA3_Q106_code').each(function(){DA3_Q106_code.push($(this).text());});
                  $('.DA3_Q107').each(function(){DA3_Q107.push($(this).text());});
                  $('.DA3_Q108_code').each(function(){DA3_Q108_code.push($(this).text());});
                  $('.DA3_Q109').each(function(){DA3_Q109.push($(this).text());});
                  $('.DA3_Q110').each(function(){DA3_Q110.push($(this).text());});
                  $('.DA3_Q111').each(function(){DA3_Q111.push($(this).text());});
                  $('.DA3_Q112').each(function(){DA3_Q112.push($(this).text());});
                  $('.DA3_Q113').each(function(){DA3_Q113.push($(this).text());});
                  $('.DA3_Q114').each(function(){DA3_Q114.push($(this).text());});
                  $('.DA3_Q115').each(function(){DA3_Q115.push($(this).text());});
                  $('.DA3_Q116').each(function(){DA3_Q116.push($(this).text());});
                  $('.DA3_Q117Date').each(function(){DA3_Q117Date.push($(this).text());});
                  $('.DA3_Q117Time').each(function(){DA3_Q117Time.push($(this).text());});
                  $('.DA3_Q201').each(function(){DA3_Q201.push($(this).text());});
                  $('.DA3_Q202a').each(function(){DA3_Q202a.push($(this).text());});
                  $('.DA3_Q202b').each(function(){DA3_Q202b.push($(this).text());});
                  $('.DA3_Q202c').each(function(){DA3_Q202c.push($(this).text());});
                  $('.DA3_Q202d').each(function(){DA3_Q202d.push($(this).text());});
                  $('.DA3_Q203').each(function(){DA3_Q203.push($(this).text());});
                  $('.DA3_Q204').each(function(){DA3_Q204.push($(this).text());});
                  $('.DA3_Q204O').each(function(){DA3_Q204O.push($(this).text());});
                  $('.DA3_Q205').each(function(){DA3_Q205.push($(this).text());});
                  $('.DA3_Q206').each(function(){DA3_Q206.push($(this).text());});
                  $('.DA3_Q207').each(function(){DA3_Q207.push($(this).text());});
                  $('.DA3_Q301').each(function(){DA3_Q301.push($(this).text());});
                  $('.DA3_Q302').each(function(){DA3_Q302.push($(this).text());});
                  $('.DA3_Q303').each(function(){DA3_Q303.push($(this).text());});
                  $('.DA3_Q400').each(function(){DA3_Q400.push($(this).text());});
                  $('.Entry_User_ID').each(function(){Entry_User_ID.push($(this).text());});
                  $('.Entry_Date').each(function(){Entry_Date.push($(this).text());});


                        var i;
                        for (i = 0; i <DA3_childID.length; i++) {
                        D3_Data_upload.getD3DATA( DA3_childID[i], DA3_Q101_code[i], DA3_Q102_code[i], DA3_Q103_code[i], DA3_Q104_code[i], DA3_Q105_code[i], DA3_Q106_code[i], DA3_Q107[i], DA3_Q108_code[i], DA3_Q109[i], DA3_Q110[i], DA3_Q111[i], DA3_Q112[i],  DA3_Q113[i], DA3_Q114[i], DA3_Q115[i], DA3_Q116[i], DA3_Q117Date[i], DA3_Q117Time[i], DA3_Q201[i], DA3_Q202a[i], DA3_Q202b[i], DA3_Q202c[i], DA3_Q202d[i], DA3_Q203[i], DA3_Q204[i], DA3_Q204O[i], DA3_Q205[i], DA3_Q206[i], DA3_Q207[i], DA3_Q301[i], DA3_Q302[i], DA3_Q303[i], DA3_Q400[i], Entry_User_ID[i], Entry_Date[i]);
                        }
                        }





$(document).ready(function(){
//$("#Q104ReChecker").AnyPicker({ mode: "datetime", dateTimeFormat: "dd/MM/yyyy"});
//$("#Q104").AnyPicker({ mode: "datetime", dateTimeFormat: "dd/MM/yyyy"});
});




function DA2_Q601Double1En(){
var Q601 = document.getElementById("DA2_Q601").value;

var Q601Str = Q601.toString();
var Q601Dec = Q601Str.includes(".");
var Q601DecPos = Q601Str.indexOf(".");


if(Q601!=999.9 && (Q601=="" || Q601<90 || Q601>105 || Q601.length!=5)){
alert("Q6.01 - ডান বগলের সঠিক তাপমাত্রা লিখুন। তাপমাত্রা (০০০.০) এই ফরম্যাটে হতে হবে এবং তাপমাত্রা ০৯০.০ এর কম বা ১০৫.০ এর বেশি হতে পারবেনা।");
}
else if(Q601Dec==false || Q601DecPos!=3){
alert("Q601 এর পরিমাপ সঠিক নয়। তাপমাত্রা (০০০.০) এই ফরম্যাটে হতে হবে এবং তাপমাত্রা ০৯০.০ এর কম বা ১০৫.০ এর বেশি হতে পারবেনা।");
}
else{
document.getElementById("childMeasureVarification").value = document.getElementById("DA2_Q601").value;
document.getElementById("DA2_Q601").value = "";
document.getElementById("DA2_Q6012En").style.display = "block";
document.getElementById("DA2_Q6011En").style.display = "none";
}
}





function DA2_Q601Double2En(){
if(document.getElementById("DA2_Q601").value != document.getElementById("childMeasureVarification").value){
alert("প্রথম এন্ট্রি এর সাথে পার্থক্য আছে, পুনরায় প্রথম এন্ট্রি দিয়ে দ্বিতীয় এন্ট্রি দিন।");
document.getElementById("DA2_Q601").style.backgroundColor = "#ff6b54";
document.getElementById("DA2_Q6012En").style.display="none";
document.getElementById("DA2_Q6011En").style.display = "block";
document.getElementById("childMeasureVarification").value = "";
document.getElementById("DA2_Q601").value="";
}
else{
//alert("এন্ট্রি সম্পূর্ণ হয়েছে।");
document.getElementById("DA2_Q601").readOnly = true;
document.getElementById("DA2_Q601").style.backgroundColor = "#fff";
document.getElementById("DA2_Q602Hide").style.display = "block";
}

}












function DA2_Q602Double1En(){
var Q602 = document.getElementById("DA2_Q602").value;

var Q602Str = Q602.toString();
var Q602Dec = Q602Str.includes(".");
var Q602DecPos = Q602Str.indexOf(".");

if(Q602!=999.9 && (Q602=="" || Q602<90 || Q602>105 || Q602.length!=5)){
alert("Q6.02 - বাম বগলের সঠিক তাপমাত্রা লিখুন। তাপমাত্রা (০০০.০) এই ফরম্যাটে হতে হবে  এবং তাপমাত্রা ০৯০.০ এর কম বা ১০৫.০ এর বেশি হতে পারবেনা।");
}
else if(Q602Dec==false || Q602DecPos!=3){
alert("Q602 এর পরিমাপ সঠিক নয়। তাপমাত্রা (০০০.০) এই ফরম্যাটে হতে হবে এবং তাপমাত্রা ০৯০.০ এর কম বা ১০৫.০ এর বেশি হতে পারবেনা।");
}
else{
document.getElementById("childMeasureVarification").value = document.getElementById("DA2_Q602").value;
document.getElementById("DA2_Q602").value = "";
document.getElementById("DA2_Q6022En").style.display = "block";
document.getElementById("DA2_Q6021En").style.display = "none";
}
}





function DA2_Q602Double2En(){
if(document.getElementById("DA2_Q602").value != document.getElementById("childMeasureVarification").value){
alert("প্রথম এন্ট্রি এর সাথে পার্থক্য আছে, পুনরায় প্রথম এন্ট্রি দিয়ে দ্বিতীয় এন্ট্রি দিন।");
document.getElementById("DA2_Q602").style.backgroundColor = "#ff6b54";
document.getElementById("DA2_Q6022En").style.display="none";
document.getElementById("DA2_Q6021En").style.display = "block";
document.getElementById("childMeasureVarification").value = "";
document.getElementById("DA2_Q602").value="";
}
else{
//alert("এন্ট্রি সম্পূর্ণ হয়েছে।");
document.getElementById("DA2_Q602").readOnly = true;
document.getElementById("DA2_Q602").style.backgroundColor = "#fff";
document.getElementById("DA2_Q601_2ResultHide").style.display = "block";
document.getElementById("DA_2_next_17Hide").style.display="block";
}

}




function cancelQ601(){
document.getElementById("DA2_Q601").value = "";
document.getElementById("DA2_Q602").value = "";

document.getElementById("DA2_Q601").readOnly=false;
document.getElementById("DA2_Q602").readOnly=false;

document.getElementById("DA2_Q6012En").style.display = "none";
document.getElementById("DA2_Q6022En").style.display = "none";

document.getElementById("DA2_Q6011En").style.display = "block";
document.getElementById("DA2_Q6021En").style.display = "block";

document.getElementById("DA2_Q601_2Result").value = "";
document.getElementById("DA2_Q601_2ResultDisplay").value = "";

document.getElementById("DA_2_next_17Hide").style.display = "none";
}









function DA2_Q603aDouble1En(){
var Q603a = document.getElementById("DA2_Q603a").value;

var Q603aStr = Q603a.toString();
var Q603aDec = Q603aStr.includes(".");
var Q603aDecPos = Q603aStr.indexOf(".");
var weightDone = document.getElementById("ChildSeightDone").value;

if(weightDone=="1" && Q603a!=99.9 && (Q603a=="" || Q603a.length!=4 || Q603a< 1  || Q603a> 50 || Q603aDec==false || Q603aDecPos!=2)){
alert("Q6.03a - শিশুর সঠিক ওজন লিখুন। ওজন (০০.০) এই ফরম্যাটে হতে হবে এবং ওজন ১ এর কম বা ৫০ কেজির বেশি হতে পারবে না।");
}
else{
document.getElementById("childMeasureVarification").value = document.getElementById("DA2_Q603a").value;
document.getElementById("DA2_Q603a").value = "";
document.getElementById("DA2_Q603a2En").style.display = "block";
document.getElementById("DA2_Q603a1En").style.display = "none";
}
}

function DA2_Q603aDouble2En(){
if(document.getElementById("DA2_Q603a").value != document.getElementById("childMeasureVarification").value){
alert("প্রথম এন্ট্রি এর সাথে পার্থক্য আছে, পুনরায় প্রথম এন্ট্রি দিয়ে দ্বিতীয় এন্ট্রি দিন।");
document.getElementById("DA2_Q603a").style.backgroundColor = "#ff6b54";
document.getElementById("DA2_Q603a2En").style.display="none";
document.getElementById("DA2_Q603a1En").style.display = "block";
document.getElementById("childMeasureVarification").value = "";
document.getElementById("DA2_Q603a").value="";
document.getElementById("DA_2_next_601_1Hide").style.display = "none";
}
else{
alert("এন্ট্রি সম্পূর্ণ হয়েছে।");
document.getElementById("DA2_Q603a").readOnly = true;
document.getElementById("DA2_Q603a").style.backgroundColor = "#fff";
document.getElementById("DA_2_next_601_1Hide").style.display = "block";
}

}















function DA2_Q603bDouble1En(){
var Q603b = document.getElementById("DA2_Q603b").value;

var Q603bStr = Q603b.toString();
var Q603bDec = Q603bStr.includes(".");
var Q603bDecPos = Q603bStr.indexOf(".");
var weightDone = document.getElementById("ChildSeightDone").value;

if(weightDone=="2" && Q603b!= 999.9 && (Q603b=="" || Q603b.length!=5 || Q603b< 25  || Q603b> 150 || Q603bDec==false || Q603bDecPos!=3 )){
alert("Q6.03b - শিশুসহ অভিভাবকের ওজন লিখুন। ওজন (০০০.০) এই ফরম্যাটে হতে হবে এবং ওজন ০২৫.০ এর কম বা ১৫০.০ কেজির বেশি হতে পারবে না।");
}
else{
document.getElementById("childMeasureVarification").value = document.getElementById("DA2_Q603b").value;
document.getElementById("DA2_Q603b").value = "";
document.getElementById("DA2_Q603b2En").style.display = "block";
document.getElementById("DA2_Q603b1En").style.display = "none";
}
}

function DA2_Q603bDouble2En(){
if(document.getElementById("DA2_Q603b").value != document.getElementById("childMeasureVarification").value){
alert("প্রথম এন্ট্রি এর সাথে পার্থক্য আছে, পুনরায় প্রথম এন্ট্রি দিয়ে দ্বিতীয় এন্ট্রি দিন।");
document.getElementById("DA2_Q603b").style.backgroundColor = "#ff6b54";
document.getElementById("DA2_Q603b2En").style.display="none";
document.getElementById("DA2_Q603b1En").style.display = "block";
document.getElementById("childMeasureVarification").value = "";
document.getElementById("DA2_Q603b").value="";
document.getElementById("DA2_Q603cHide").style.display ="none";
}
else{
//alert("এন্ট্রি সম্পূর্ণ হয়েছে।");
document.getElementById("DA2_Q603b").readOnly = true;
document.getElementById("DA2_Q603b").style.backgroundColor = "#fff";
document.getElementById("DA2_Q603cHide").style.display ="block";
}
}







function DA2_Q603cDouble1En(){
var Q603c = document.getElementById("DA2_Q603c").value;

var Q603b = document.getElementById("DA2_Q603b").value;
var Q603cStr = Q603c.toString();
var Q603cDec = Q603cStr.includes(".");
var Q603cDecPos = Q603cStr.indexOf(".");

var weightDone = document.getElementById("ChildSeightDone").value;

if(weightDone=="2" && Q603c!=999.9 && (Q603c=="" || Q603c.length!=5 || Q603c< 20  || Q603c> 120  || Q603c >= Q603b || Q603cDec==false || Q603cDecPos!=3 )){
alert("Q6.03c - অভিভাবকের ওজন লিখুন। ওজন (০০০.০) এই ফরম্যাটে হতে হবে এবং ওজন ০২০.০ এর কম বা ১২০.০ কেজির বেশি হতে পারবে না এবং ওজন শিশুসহ অভিভাবকের ওজন চেয় কম হতে হবে।");
}
else{
document.getElementById("childMeasureVarification").value = document.getElementById("DA2_Q603c").value;
document.getElementById("DA2_Q603c").value = "";
document.getElementById("DA2_Q603c2En").style.display = "block";
document.getElementById("DA2_Q603c1En").style.display = "none";
}
}

function DA2_Q603cDouble2En(){
if(document.getElementById("DA2_Q603c").value != document.getElementById("childMeasureVarification").value){
alert("প্রথম এন্ট্রি এর সাথে পার্থক্য আছে, পুনরায় প্রথম এন্ট্রি দিয়ে দ্বিতীয় এন্ট্রি দিন।");
document.getElementById("DA2_Q603c").style.backgroundColor = "#ff6b54";
document.getElementById("DA2_Q603c2En").style.display="none";
document.getElementById("DA2_Q603c1En").style.display = "block";
document.getElementById("childMeasureVarification").value = "";
document.getElementById("DA2_Q603c").value="";
document.getElementById("DA_2_next_601_1Hide").style.display = "none";
}
else{
//alert("এন্ট্রি সম্পূর্ণ হয়েছে।");
document.getElementById("DA2_Q603c").readOnly = true;
document.getElementById("DA2_Q603c").style.backgroundColor = "#fff";
document.getElementById("DA_2_next_601_1Hide").style.display = "block";
}
}


function cancelQ603(){
document.getElementById("DA2_Q603a").value = "";
document.getElementById("DA2_Q603b").value = "";
document.getElementById("DA2_Q603c").value = "";

document.getElementById("DA2_Q603a").readOnly = false;
document.getElementById("DA2_Q603b").readOnly = false;
document.getElementById("DA2_Q603c").readOnly = false;

document.getElementById("DA2_Q603a1En").style.display = "block";
document.getElementById("DA2_Q603a2En").style.display = "none";

document.getElementById("DA2_Q603b1En").style.display = "block";
document.getElementById("DA2_Q603b2En").style.display = "none";

document.getElementById("DA2_Q603c1En").style.display = "block";
document.getElementById("DA2_Q603c2En").style.display = "none";

document.getElementById("child_MotherWeightDiv").style.display = "none";
document.getElementById("childWeightDiv").style.display = "none";

document.getElementById("DA2_Q603cHide").style.display = "none";


document.getElementById("ChildSeightDone").value="";
$('#ChildSeightDone').selectmenu().selectmenu('refresh', true);

document.getElementById("DA_2_next_601_1Hide").style.display = "none";
}









function DA2_Q604Double1En(){
var Q604 = document.getElementById("DA2_Q604").value;
var Q604mm = document.getElementById("DA2_Q604mm").value;

if(Q604mm!=999 && (Q604mm=="" || Q604mm.length!=3 || Q604mm < 50 || Q604mm > 400)){
alert("Q6.04 - শিশুর উর্ধ্ব বাহুর মধ্যভাগের পরিধি লিখুন। পরিধি (০০০) এই ফরম্যাটে হতে হবে এবং ০৫০ এর কম বা ৪০০ এর বেশি হতে পারবেনা।");
}
else if(Q604!=99.9 && (Q604=="" || Q604.length < 3 || Q604 < 5 || Q604 > 40)){
alert("Q6.04 - শিশুর উর্ধ্ব বাহুর মধ্যভাগের পরিধি লিখুন। পরিধি (০০.০) এই ফরম্যাটে হতে হবে এবং ০৫.০ এর কম বা ৪০.০ এর বেশি হতে পারবেনা");
}
else{
document.getElementById("childMeasureVarification").value = document.getElementById("DA2_Q604").value;
document.getElementById("DA2_Q604").value = "";
document.getElementById("DA2_Q604mm").value="";
document.getElementById("DA2_Q6042En").style.display = "block";
document.getElementById("DA2_Q6041En").style.display = "none";
}
}



function DA2_Q604Double2En(){
if(document.getElementById("DA2_Q604").value != document.getElementById("childMeasureVarification").value){
alert("প্রথম এন্ট্রি এর সাথে পার্থক্য আছে, পুনরায় প্রথম এন্ট্রি দিয়ে দ্বিতীয় এন্ট্রি দিন।");
//document.getElementById("DA2_Q604").style.backgroundColor = "#ff6b54";
document.getElementById("DA2_Q604mm").style.backgroundColor = "#ff6b54";
document.getElementById("DA2_Q6042En").style.display="none";
document.getElementById("DA2_Q6041En").style.display = "block";
document.getElementById("childMeasureVarification").value = "";
document.getElementById("DA2_Q604").value="";
document.getElementById("DA2_Q604mm").value="";
document.getElementById("DA_2_next_601_2Hide").style.display = "none";
}
else{
//alert("এন্ট্রি সম্পূর্ণ হয়েছে।");
document.getElementById("DA2_Q604").readOnly = true;
document.getElementById("DA2_Q604mm").readOnly = true;
//document.getElementById("DA2_Q604").style.backgroundColor = "#fff";
document.getElementById("DA2_Q604mm").style.backgroundColor = "#fff";
document.getElementById("DA_2_next_601_2Hide").style.display = "block";
}
}


function cancelQ604(){
document.getElementById("DA2_Q604").value = "";
document.getElementById("DA2_Q604mm").value = "";
document.getElementById("DA2_Q604mm").readOnly = false;

document.getElementById("DA2_Q6041En").style.display = "block";
document.getElementById("DA2_Q6042En").style.display = "none";
document.getElementById("DA_2_next_601_2Hide").style.display="none";

document.getElementById("DA_2_next_601_2Hide").style.display="none";

}







function DA2_Q605Double1En(){
var Q605 = document.getElementById("DA2_Q605").value;


var Q605Str = Q605.toString();
var Q605Dec = Q605Str.includes(".");
var Q605DecPos = Q605Str.indexOf(".");


if(Q605!= 999.9 && (Q605=="" || Q605.length!=5 || Q605> 150  || Q605< 1 || Q605Dec==false || Q605DecPos!=3)){
alert("Q6.05 - শিশুর দৈর্ঘ্য/ উচ্চতা  লিখুন। দৈর্ঘ্য/ উচ্চতা  (০০০.০) এই ফরম্যাটে হতে হবে এবং ১৫০.০ এর বেশি হতে পারবেনা।");
}
else{
document.getElementById("childMeasureVarification").value = document.getElementById("DA2_Q605").value;
document.getElementById("DA2_Q605").value = "";
document.getElementById("DA2_Q6052En").style.display = "block";
document.getElementById("DA2_Q6051En").style.display = "none";
}
}



function DA2_Q605Double2En(){
if(document.getElementById("DA2_Q605").value != document.getElementById("childMeasureVarification").value){
alert("প্রথম এন্ট্রি এর সাথে পার্থক্য আছে, পুনরায় প্রথম এন্ট্রি দিয়ে দ্বিতীয় এন্ট্রি দিন।");
document.getElementById("DA2_Q605").style.backgroundColor = "#ff6b54";
document.getElementById("DA2_Q6052En").style.display="none";
document.getElementById("DA2_Q6051En").style.display = "block";
document.getElementById("childMeasureVarification").value = "";
document.getElementById("DA2_Q605").value="";
document.getElementById("DA_2_next_601_3Hide").style.display = "none";
}
else{
//alert("এন্ট্রি সম্পূর্ণ হয়েছে।");
document.getElementById("DA2_Q605").readOnly = true;
document.getElementById("DA2_Q605").style.backgroundColor = "#fff";
document.getElementById("DA_2_next_601_3Hide").style.display = "block";
}
}


function cancelQ605(){
document.getElementById("DA2_Q605").value = "";
document.getElementById("DA2_Q605").readOnly = false;
document.getElementById("DA2_Q6051En").style.display = "block";
document.getElementById("DA2_Q6052En").style.display = "none";
document.getElementById("DA_2_next_601_3Hide").style.display = "none";
}



function DA3_Q302(){
if(document.getElementById("DA3_Q302").value!=""){
document.getElementById("Q303Hide").style.display = "block";
document.getElementById("DA3_Q303").value = "";
document.getElementById("DA3_Q303").readOnly=false;
}
else{
document.getElementById("Q303Hide").style.display = "none";
document.getElementById("DA3_Q303").value = "";
}
}


function DA3_Q303_1En(){

var DA3_Q302 = document.getElementById("DA3_Q302").value;
var DA3_Q303 = document.getElementById("DA3_Q303").value;

if(DA3_Q302==""){
alert("শিশুটির শরীরের যে অংশে এই পরিমাপ করা হয়েছে তা নির্বাচন করুন");
}
else if(DA3_Q303=="" || DA3_Q303.length!=3 || DA3_Q303 < 50 || DA3_Q303 > 100){
alert("সঠিক তাপমাত্রায় অক্সিজেনের পরিমাণ রেকর্ড করুন। পরিমাপ তিন ডিজিট এর হতে হবে।");
}
else{
document.getElementById("OxygenRateVerification").value =  document.getElementById("DA3_Q303").value;
document.getElementById("DA3_Q303").value = "";
document.getElementById("DA3_Q303_1EnHide").style.display = "none";
document.getElementById("DA3_Q303_2EnHide").style.display = "block";
}
}



function DA3_Q303_2En(){
if(document.getElementById("OxygenRateVerification").value !=  document.getElementById("DA3_Q303").value){
alert("প্রথম এন্ট্রি এর সাথে, দ্বিতীয় এন্ট্রি এর পার্থক্য আছে। পুনরায় প্রথম এন্ট্রি দিয়ে, দ্বিতীয় এন্ট্রি দিন।");
document.getElementById("DA3_Q303").value = "";
document.getElementById("OxygenRateVerification").value ="";
document.getElementById("DA3_Q303").style.backgroundColor = "#ff7570";
document.getElementById("DA3_Q303").readOnly=false;
document.getElementById("DA3_Q303_1EnHide").style.display = "block";
document.getElementById("DA3_Q303_2EnHide").style.display = "none";
document.getElementById("DA_3_next_13Hide").style.display = "none";
}
else{
//alert("এন্ট্রি সম্পূর্ণ হয়েছে। এখন NEXT বাটনে ক্লিক করুন। ");
document.getElementById("DA3_Q303").readOnly=true;
document.getElementById("DA3_Q303").style.backgroundColor = "#fff";
document.getElementById("DA_3_next_13Hide").style.display = "block";
}
}



function cancelQ303(){
document.getElementById("DA3_Q302").value = "";
$('#DA3_Q302').selectmenu().selectmenu('refresh', true);
document.getElementById("DA3_Q303").value = "";
document.getElementById("OxygenRateVerification").value ="";
document.getElementById("Q303Hide").style.display="none";
document.getElementById("DA3_Q303_1EnHide").style.display="block";
document.getElementById("DA3_Q303_2EnHide").style.display="none";
document.getElementById("DA3_Q303").readOnly=false;
document.getElementById("DA_3_next_13Hide").style.display ="none";

}










  $(document).ready(function()
    {

    $("#updateMasterData").click(function() {
document.getElementById("masterDataTotal").value="";
document.getElementById("masterDataTotal_En").value="";
   online = window.navigator.onLine;
    if (navigator.onLine) {
            var url = "server/DAS_Data/getPCV_Data_update.php?c=";
           $.getJSON(url, function(result) {

               $.each(result, function(i, field) {

                   var PCV_Cluster = field.PCV_Cluster;
                   var PCV_Block = field.PCV_Block;
                   var PCV_Upazila = field.PCV_Upazila;
                   var PCV_Unions = field.PCV_Unions;
                   var PCV_Village = field.PCV_Village;
                   var PCV_Bari = field.PCV_BARI;
                   var PCV_House = field.PCV_House;
                   var PCV_HHname = field.PCV_HHName;
                   var MName = field.MName;
                   var Husband = field.Husband;
                   var MCID = field.MCID;
                   var MPID = field.MPID;
                   var ChildName = field.ChildName;
                   var CDOB = field.CDOB;
                   var CAge = field.CAge;
                   var CSex = field.CSex;
                   var CPID = field.CPID;
                   var Phone = field.Phone;
                   var CStatus = field.CStatus;

                    var totalData = (i+1);
                    if(totalData>0){
                document.getElementById("masterDataTotal").value="Total child - "+(i+1);

                   var Arr_PCV_Cluster = [];
                   var Arr_PCV_Block = [];
                   var Arr_PCV_Upazila = [];
                   var Arr_PCV_Unions = [];
                   var Arr_PCV_Village = [];
                   var Arr_PCV_Bari = [];
                   var Arr_PCV_House = [];
                   var Arr_PCV_HHname = [];
                   var Arr_MName = [];
                   var Arr_Husband = [];
                   var Arr_MCID = [];
                   var Arr_MPID = [];
                   var Arr_ChildName = [];
                   var Arr_CDOB = [];
                   var Arr_CAge = [];
                   var Arr_CSex = [];
                   var Arr_CPID = [];
                   var Arr_Phone = [];
                   var Arr_CStatus = [];

                   Arr_PCV_Cluster.push(PCV_Cluster);
                   Arr_PCV_Block.push(PCV_Block);
                   Arr_PCV_Upazila.push(PCV_Upazila);
                   Arr_PCV_Unions.push(PCV_Unions);
                   Arr_PCV_Village.push(PCV_Village);
                   Arr_PCV_Bari.push(PCV_Bari);
                   Arr_PCV_House.push(PCV_House);
                   Arr_PCV_HHname.push(PCV_HHname);
                   Arr_MName.push(MName);
                   Arr_Husband.push(Husband);
                   Arr_MCID.push(MCID);
                   Arr_MPID.push(MPID);
                   Arr_ChildName.push(ChildName);
                   Arr_CDOB.push(CDOB);
                   Arr_CAge.push(CAge);
                   Arr_CSex.push(CSex);
                   Arr_CPID.push(CPID);
                   Arr_Phone.push(Phone);
                   Arr_CStatus.push(CStatus);

var i;
   for (i = 0; i <Arr_CPID.length; i++) {
   PCV_Data_upload1.getPCVDATA1(Arr_PCV_Cluster[i], Arr_PCV_Block[i], Arr_PCV_Upazila[i], Arr_PCV_Unions[i], Arr_PCV_Village[i], Arr_PCV_Bari[i], Arr_PCV_House[i], Arr_PCV_HHname[i], Arr_MName[i], Arr_Husband[i], Arr_MCID[i], Arr_MPID[i], Arr_ChildName[i], Arr_CDOB[i], Arr_CAge[i], Arr_CSex[i], Arr_CPID[i], Arr_Phone[i], Arr_CStatus[i]);
   }
                    }
                    else{
                    document.getElementById("masterDataTotal").value="No data";
                    }
               });
           });
           }
           else{
          alert("ট্যাব এ ইন্টারনেট কানেকশন নেই।")
           }
       });
   });



   function addDA2_Q201_b(){
   if((document.getElementById("DA2_Q201_a").value!="" || document.getElementById("DA2_Q201_aAuto").value!="") && document.getElementById("DA2_Q201_a_day").value.length==2){
   document.getElementById("DA2_Q201_bHide").style.display="block";
   }
   else{
   alert("প্রথমে, এই মেনু থেকে একটি লক্ষণ নির্বাচন করে তাঁর সঠিক সময়কাল দিন। তারপর (+) বাটনে ক্লিক করে অন্য লক্ষণ দিন।");
   }
   }


   function addDA2_Q201_c(){
      if((document.getElementById("DA2_Q201_b").value!="" || document.getElementById("DA2_Q201_bAuto").value!="") && document.getElementById("DA2_Q201_b_day").value.length==2){
      document.getElementById("DA2_Q201_cHide").style.display="block";
      }
      else{
      alert("প্রথমে, এই মেনু থেকে একটি লক্ষণ নির্বাচন করে তাঁর সঠিক সময়কাল দিন। তারপর (+) বাটনে ক্লিক করে অন্য লক্ষণ দিন।");
      }
      }


         function addDA2_Q201_d(){
            if(document.getElementById("DA2_Q201_c").value!=document.getElementById("DA2_Q201_b").value && document.getElementById("DA2_Q201_c").value!="" && document.getElementById("DA2_Q201_c_day").value.length==2){
            document.getElementById("DA2_Q201_dHide").style.display="block";
            }
            else{
            alert("প্রথমে, এই মেনু থেকে একটি লক্ষণ নির্বাচন করে তাঁর সঠিক সময়কাল দিন। তারপর (+) বাটনে ক্লিক করে অন্য লক্ষণ দিন।");
            }
            }

                     function addDA2_Q201_e(){
                        if(document.getElementById("DA2_Q201_d").value!=document.getElementById("DA2_Q201_c").value && document.getElementById("DA2_Q201_d").value!="" && document.getElementById("DA2_Q201_d_day").value.length==2){
                        document.getElementById("DA2_Q201_eHide").style.display="block";
                        }
                        else{
                        alert("প্রথমে, এই মেনু থেকে একটি লক্ষণ নির্বাচন করে তাঁর সঠিক সময়কাল দিন। তারপর (+) বাটনে ক্লিক করে অন্য লক্ষণ দিন।");
                        }
                        }





function minusDA2_Q201_b(){
if(document.getElementById("DA2_Q201_c").value!="" || document.getElementById("DA2_Q201_c_day").value!="" || document.getElementById("DA2_Q201_d").value!="" || document.getElementById("DA2_Q201_d_day").value!="" || document.getElementById("DA2_Q201_e").value!="" || document.getElementById("DA2_Q201_e_day").value!="" ){
alert("এই মেনু থেকে লক্ষণ সরানোর জন্য, প্রথমে নিচের মেনু থেকে লক্ষণ গুলো সরাতে হবে।");
}
else{
document.getElementById("DA2_Q201_b_day").value = "";
document.getElementById("DA2_Q201_b").value = "";
$('#DA2_Q201_b').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q201_bHide").style.display = "none";
}
}

function minusDA2_Q201_c(){
if(document.getElementById("DA2_Q201_d").value!="" || document.getElementById("DA2_Q201_d_day").value!="" || document.getElementById("DA2_Q201_e").value!="" || document.getElementById("DA2_Q201_e_day").value!="" ){
alert("এই মেনু থেকে লক্ষণ সরানোর জন্য, প্রথমে নিচের মেনু থেকে লক্ষণ গুলো সরাতে হবে।");
}
else{
document.getElementById("DA2_Q201_c_day").value = "";
document.getElementById("DA2_Q201_c").value = "";
$('#DA2_Q201_c').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q201_cHide").style.display = "none";
}
}


function minusDA2_Q201_d(){
if(document.getElementById("DA2_Q201_e").value!="" || document.getElementById("DA2_Q201_e_day").value!="" ){
alert("এই মেনু থেকে লক্ষণ সরানোর জন্য, প্রথমে নিচের মেনু থেকে লক্ষণ গুলো সরাতে হবে।");
}
else{
document.getElementById("DA2_Q201_d_day").value = "";
document.getElementById("DA2_Q201_d").value = "";
$('#DA2_Q201_d').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q201_dHide").style.display = "none";
}
}


function minusDA2_Q201_e(){
document.getElementById("DA2_Q201_e_day").value = "";
document.getElementById("DA2_Q201_e").value = "";
$('#DA2_Q201_e').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q201_eHide").style.display = "none";
}



$(document).ready(function(){
$("#statusBarSwitchOn").click(function(){
        $('#statusBar').animate({ marginTop: '0vw'}, 400);
        $("#statusBarSwitchOn").hide(200);
        $("#statusBarSwitchOff").show(200);
    });


$("#statusBarSwitchOff").click(function(){
        $('#statusBar').animate({ marginTop: '-51vw'}, 400);
        $("#statusBarSwitchOn").show(200);
        $("#statusBarSwitchOff").hide(200);
    });

$("#generalTabButton").click(function(){
        $("#generalTab").show(200);
        $("#D1Tab").hide(200);
        $("#D2Tab").hide(200);
        $("#D3Tab").hide(200);
        document.getElementById("generalTabButton").style.backgroundColor = "#fff";
        document.getElementById("d1TabButton").style.backgroundColor = "#CCC";
        document.getElementById("d2TabButton").style.backgroundColor = "#CCC";
        document.getElementById("d3TabButton").style.backgroundColor = "#CCC";
    });

    $("#d1TabButton").click(function(){
            $("#generalTab").hide(200);
            $("#D1Tab").show(200);
            $("#D2Tab").hide(200);
            $("#D3Tab").hide(200);
            document.getElementById("generalTabButton").style.backgroundColor = "#CCC";
            document.getElementById("d1TabButton").style.backgroundColor = "#fff";
            document.getElementById("d2TabButton").style.backgroundColor = "#CCC";
            document.getElementById("d3TabButton").style.backgroundColor = "#CCC";
        });

        $("#d2TabButton").click(function(){
                    $("#generalTab").hide(200);
                    $("#D1Tab").hide(200);
                    $("#D2Tab").show(200);
                    $("#D3Tab").hide(200);
                    document.getElementById("generalTabButton").style.backgroundColor = "#CCC";
                    document.getElementById("d1TabButton").style.backgroundColor = "#CCC";
                    document.getElementById("d2TabButton").style.backgroundColor = "#fff";
                    document.getElementById("d3TabButton").style.backgroundColor = "#CCC";
                });

                $("#d3TabButton").click(function(){
                                    $("#generalTab").hide(200);
                                    $("#D1Tab").hide(200);
                                    $("#D2Tab").hide(200);
                                    $("#D3Tab").show(200);
                                    document.getElementById("generalTabButton").style.backgroundColor = "#CCC";
                                    document.getElementById("d1TabButton").style.backgroundColor = "#CCC";
                                    document.getElementById("d2TabButton").style.backgroundColor = "#CCC";
                                    document.getElementById("d3TabButton").style.backgroundColor = "#fff";
                                });


});









function st_generalInfo(){
   databaseHandler.db.transaction(function(tx){

    tx.executeSql("select Count(*)'totalD1' from DA1_Screening where length(Child_ID)=7 ",[],function(tx,result){
    var lengt = result.rows.length, i;
    for (i=0; i<=lengt-1; i++) {
    document.getElementById("st_TotalEnD1").innerHTML = "D1 - "+result.rows.item(i).totalD1;
    }
    });

    tx.executeSql("select Count(*)'st_TotalEliD1' from DA1_Screening where length(Child_ID)=7 and  Q209 = '1' and Q210='1'",[],function(tx,result){
    var lengt = result.rows.length, i;
    for (i=0; i<=lengt-1; i++) {
    document.getElementById("st_TotalEliD1").innerHTML = "D1 - "+result.rows.item(i).st_TotalEliD1;
    }
    });

    tx.executeSql("select Count(*)'todayD1' from DA1_Screening where length(Child_ID)=7 and Entry_Date>= DATE('now')",[],function(tx,result){
    var lengt = result.rows.length, i;
    for (i=0; i<=lengt-1; i++) {
    document.getElementById("st_TodayEnD1").innerHTML = "D1 - "+result.rows.item(i).todayD1;
    }
    });

    tx.executeSql("select Count(*)'st_TodayEliD1' from DA1_Screening where length(Child_ID)=7 and Q209 = '1' and Q210='1' and Entry_Date>= DATE('now')",[],function(tx,result){
    var lengt = result.rows.length, i;
    for (i=0; i<=lengt-1; i++) {
    document.getElementById("st_TodayEliD1").innerHTML = "D1 - "+result.rows.item(i).st_TodayEliD1;
    }
    });






    tx.executeSql("select Count(*)'totalD2' from DA2_Assessment where Q120 = '1' and  length(Child_ID)=7",[],function(tx,result){
    var lengt = result.rows.length, i;
    for (i=0; i<=lengt-1; i++) {
    document.getElementById("st_TotalEnD2").innerHTML = "D2 Successful visit - "+result.rows.item(i).totalD2;
    }
    });

    tx.executeSql("select Count(*)'st_TotalEliD2' from DA2_Assessment where length(Child_ID)=7 and  Q120 = '1' ",[],function(tx,result){
    var lengt = result.rows.length, i;
    for (i=0; i<=lengt-1; i++) {
    document.getElementById("st_TotalEliD2").innerHTML = "D2 Successful visit - "+result.rows.item(i).st_TotalEliD2;
    }
    });


    tx.executeSql("select Count(*)'todayD2' from DA2_Assessment where Q120 = '1' and length(Child_ID)=7 and  Entry_Date>= DATE('now')",[],function(tx,result){
    var lengt = result.rows.length, i;
    for (i=0; i<=lengt-1; i++) {
    document.getElementById("st_TodayEnD2").innerHTML = "D2 Successful visit  - "+result.rows.item(i).todayD2;
    }
    });


    tx.executeSql("select Count(*)'st_TodayEliD2' from DA2_Assessment where length(Child_ID)=7 and  Q120 = '1' and Entry_Date>= DATE('now')",[],function(tx,result){
    var lengt = result.rows.length, i;
    for (i=0; i<=lengt-1; i++) {
    document.getElementById("st_TodayEliD2").innerHTML = "D2 Successful visit - "+result.rows.item(i).st_TodayEliD2;
    }
    });







    tx.executeSql("select Count(*)'totalD3' from DA3 where length(DA3_childID)=7",[],function(tx,result){
    var lengt = result.rows.length, i;
    for (i=0; i<=lengt-1; i++) {
    document.getElementById("st_TotalEnD3").innerHTML = "D3 - "+result.rows.item(i).totalD3;
    document.getElementById("st_TotalEliD3").innerHTML = "D3 - "+result.rows.item(i).totalD3;
    }
    });

    tx.executeSql("select Count(*)'todayD3' from DA3 where Entry_Date>= DATE('now') and length(DA3_childID)=7",[],function(tx,result){
    var lengt = result.rows.length, i;
    for (i=0; i<=lengt-1; i++) {
    document.getElementById("st_TodayEnD3").innerHTML = "D3 - "+result.rows.item(i).todayD3;
    document.getElementById("st_TodayEliD3").innerHTML = "D3 - "+result.rows.item(i).todayD3;
    }
    });

   });
  }




function st_getD1Data(){

document.getElementById("d1Table").innerHTML = "";
document.getElementById("st_getD1DataTotal").innerHTML = "";
var D1_Sdate = document.getElementById("D1_Sdate").value;
var D1_Edate = document.getElementById("D1_Edate").value;
   databaseHandler.db.transaction(function(tx){
    tx.executeSql("select * from DA1_Screening where date(Entry_Date) >= '"+D1_Sdate+"' and date(Entry_Date) <= '"+D1_Edate+"' and length(Child_ID)=7 order by Child_ID DESC",[],function(tx,result){
    var lengt = result.rows.length, i;

document.getElementById("st_getD1DataTotal").innerHTML ="Total D1 - "+lengt;
    $("#d1Table").append("<tr style = 'background-color:#ccc; font-size:1.5vw;'> <td>childID</td> <td>CPID</td><td>CName</td><td>MName</td><td>Q2.09</td><td>Q2.10</td><td>EnDt</td></tr>");
    for (i=0; i<=lengt-1; i++) {

    var childID = result.rows.item(i).Child_ID;
    var CPID = result.rows.item(i).CPID;
    var CName = result.rows.item(i).CName;
    var MName = result.rows.item(i).MName;
    var Q209 = result.rows.item(i).Q209;
    var Q210 = result.rows.item(i).Q210;
    var EnDt = result.rows.item(i).Entry_Date;

   $("#d1Table").append("<tr font-size:1.2vw;'> <td>"+childID+"</td> <td>"+CPID+"</td><td>"+CName+"</td><td>"+MName+"</td><td>"+Q209+"</td><td>"+Q210+"</td><td>"+EnDt+"</td></tr>");

    }
    });
    });
}





function st_getD2Data(){

document.getElementById("d2Table").innerHTML = "";
var D2_Sdate = document.getElementById("D2_Sdate").value;
var D2_Edate = document.getElementById("D2_Edate").value;
   databaseHandler.db.transaction(function(tx){
    tx.executeSql("select * from DA2_Assessment where date(Entry_Date) >= '"+D2_Sdate+"' and date(Entry_Date) <= '"+D2_Edate+"' and length(Child_ID)=7 order by Child_ID DESC",[],function(tx,result){
    var lengt = result.rows.length, i;
document.getElementById("st_getD2DataTotal").innerHTML ="Total D2 - "+lengt;
    $("#d2Table").append("<tr style='background-color:#ccc; font-size:1.5vw;'><td>Child ID</td><td>CPID</td><td>Child name</td><td>Mother name</td><td>VisitOutcome</td><td>Q3.01</td><td>Q4.01 </td><td>Q4.02a </td><td>Q4.02b </td><td>Date</td></tr>");
    for (i=0; i<=lengt-1; i++) {

    var childID = result.rows.item(i).Child_ID;
    var CPID = result.rows.item(i).Child_PID;
    var CName = result.rows.item(i).Child_name;
    var MName = result.rows.item(i).Mother_name;
    var VOutCome = result.rows.item(i).Q120;
    var Q301 = result.rows.item(i).Q301;
    var Q401 = result.rows.item(i).Q401;
    var Q402a = result.rows.item(i).Q402a;
    var Q402b = result.rows.item(i).Q402b;
    var Date = result.rows.item(i).Entry_Date;


   $("#d2Table").append("<tr style='font-size:1.2vw;'><td>"+childID+"</td><td>"+CPID+"</td><td>"+CName+"</td><td>"+MName+"</td><td>"+VOutCome+"</td><td>"+Q301+"</td><td>"+Q401+"</td><td>"+Q402a+"</td><td>"+Q402b+"</td><td>"+Date+"</td></tr>");

    }
    });
    });
}






function st_getD3Data(){

document.getElementById("d3Table").innerHTML = "";
var D3_Sdate = document.getElementById("D3_Sdate").value;
var D3_Edate = document.getElementById("D3_Edate").value;
   databaseHandler.db.transaction(function(tx){
    tx.executeSql("select * from DA3 where date(Entry_Date) >= '"+D3_Sdate+"' and date(Entry_Date) <= '"+D3_Edate+"' and length(DA3_childID)=7 order by DA3_childID DESC",[],function(tx,result){
    var lengt = result.rows.length, i;
    document.getElementById("st_getD3DataTotal").innerHTML ="Total D3 - "+lengt;

    $("#d3Table").append("<tr style='background-color:#ccc; font-size:1.5vw;'><td>Child ID</td><td>CPID</td><td>Child name</td><td>Mother name</td><td>Q2.02a</td><td>Q2.02b</td><td>Q2.02c</td><td>Q2.02d</td><td>Q3.03</td><td>Date</td></tr>");
    for (i=0; i<=lengt-1; i++) {

    var childID = result.rows.item(i).DA3_childID;
    var CPID = result.rows.item(i).DA3_Q107;
    var CName = result.rows.item(i).DA3_Q108_code;
    var MName = result.rows.item(i).DA3_Q109;
    var Q202a = result.rows.item(i).DA3_Q202a;
    var Q202b = result.rows.item(i).DA3_Q202b;
    var Q202c = result.rows.item(i).DA3_Q202c;
    var Q202d = result.rows.item(i).DA3_Q202d;
    var Q303 = result.rows.item(i).DA3_Q303;
    var Date = result.rows.item(i).Entry_Date;


   $("#d3Table").append("<tr style='font-size:1.2vw;'><td>"+childID+"</td><td>"+CPID+"</td><td>"+CName+"</td><td>"+MName+"</td><td>"+Q202a+"</td><td>"+Q202b+"</td><td>"+Q202c+"</td><td>"+Q202d+"</td><td>"+Q303+"</td><td>"+Date+"</td></tr>");

    }
    });
    });
}








function addDeviceCode(){
var CCUser = document.getElementById("DS_Device_user").value;
var CCD_Code = document.getElementById("DS_Device_code").value.toString();

databaseHandler.db.transaction(function(tx){


tx.executeSql(
"delete from CCDevice",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
//alert(error.message);
}
)


tx.executeSql("insert OR IGNORE into CCDevice (CHCP_Code, D_code ) values("+CCUser+",'"+CCD_Code+"')",
[],
function (tx, results){
alert("Device added successfully.");
},
function(tx, error){
console.log("Error while creating table "+ error.message);
//alert(error.message);
}
)
});
}



function Q202_ValueForD2_Q201(){
document.getElementById("Q202_valueForQ201").value = document.getElementById("Q202").value;
}

function Q204_ValueForD2_Q201(){
document.getElementById("Q204_valueForQ201").value = document.getElementById("Q204").value;
}


function Q203_ValueForD2_Q405(){
document.getElementById("Q203_valueForQ405").value = document.getElementById("Q203").value;
}


$(document).ready(function() {
    $("#DA2_Q102_card_no").children('option:gt(0)').hide();

    $("#DA2_Q101_card_no").change(function() {
if(document.getElementById("DA2_Q101_card_no").value=="03"){
  $("#DA2_Q102_card_no").children('option').hide();
        $("#DA2_Q102_card_no").children("option[value^=" + "3" + "]").show()
}
else if(document.getElementById("DA2_Q101_card_no").value=="02"){
       $("#DA2_Q102_card_no").children('option').hide();
             $("#DA2_Q102_card_no").children("option[value^=" + "4" + "]").show()
     }

     else {
            $("#DA2_Q102_card_no").children('option').hide();

          }


    })

})











function backToidentification_1(){

document.getElementById("CardAvail_Yes").style.display="none";
document.getElementById("Q106_card").value ="";
document.getElementById("Q105_card").value ="";
document.getElementById("Q104_card").value ="";
document.getElementById("CardAvail_No").style.display="none";

document.getElementById("DobNo").value="";
$('#DobNo').selectmenu().selectmenu('refresh', true);
document.getElementById("Q104").value="";
document.getElementById("Q105").value="";
document.getElementById("Q106").value="";
$('#Q106').selectmenu().selectmenu('refresh', true);

document.getElementById("Q103Father").value="";
document.getElementById("Q103").value="";
document.getElementById("Q102").value="";
document.getElementById("PCV_CPID").value="";
document.getElementById("PCV_MPID").value="";
document.getElementById("IsCard").value="";
$('#IsCard').selectmenu().selectmenu('refresh', true);
document.getElementById("CardAvail").style.display="none";

document.getElementById("NoDOB").style.display="none";
document.getElementById("YesDOB").style.display="none";

document.getElementById("Q202").value="";
$('#Q202').selectmenu().selectmenu('refresh', true);

document.getElementById("Q203").value="";
$('#Q203').selectmenu().selectmenu('refresh', true);

document.getElementById("Q204").value="";
$('#Q204').selectmenu().selectmenu('refresh', true);

document.getElementById("Q205").value="";
$('#Q205').selectmenu().selectmenu('refresh', true);


document.getElementById("Q207").value="";
$('#Q207').selectmenu().selectmenu('refresh', true);


document.getElementById("Q210").value="";
$('#Q210').selectmenu().selectmenu('refresh', true);



document.getElementById("Q201").value="";
document.getElementById("Q201Display").value="";


window.location.href = "#identification_1";

}






function BackToIDEN_1(){
document.getElementById("CardAvail_Yes").style.display="none";
document.getElementById("Q106_card").value ="";
document.getElementById("Q105_card").value ="";
document.getElementById("Q104_card").value ="";
document.getElementById("CardAvail_No").style.display="none";

document.getElementById("DobNo").value="";
$('#DobNo').selectmenu().selectmenu('refresh', true);
document.getElementById("Q104").value="";
document.getElementById("Q105").value="";
document.getElementById("Q106").value="";
$('#Q106').selectmenu().selectmenu('refresh', true);

document.getElementById("Q103Father").value="";
document.getElementById("Q103").value="";
document.getElementById("Q102").value="";
document.getElementById("PCV_CPID").value="";
document.getElementById("PCV_MPID").value="";
document.getElementById("IsCard").value="";
$('#IsCard').selectmenu().selectmenu('refresh', true);
document.getElementById("CardAvail").style.display="none";

document.getElementById("NoDOB").style.display="none";
document.getElementById("YesDOB").style.display="none";

document.getElementById("Q202").value="";
$('#Q202').selectmenu().selectmenu('refresh', true);

document.getElementById("Q203").value="";
$('#Q203').selectmenu().selectmenu('refresh', true);

document.getElementById("Q204").value="";
$('#Q204').selectmenu().selectmenu('refresh', true);

document.getElementById("Q205").value="";
$('#Q205').selectmenu().selectmenu('refresh', true);


document.getElementById("Q207").value="";
$('#Q207').selectmenu().selectmenu('refresh', true);


document.getElementById("Q210").value="";
$('#Q210').selectmenu().selectmenu('refresh', true);


document.getElementById("Q201").value="";
document.getElementById("Q201Display").value="";


window.location.href = "#identification_1";
}



function formSelectbefore(){

document.getElementById("CardAvail_Yes").style.display="none";
document.getElementById("Q106_card").value ="";
document.getElementById("Q105_card").value ="";
document.getElementById("Q104_card").value ="";
document.getElementById("CardAvail_No").style.display="none";

document.getElementById("DobNo").value="";
$('#DobNo').selectmenu().selectmenu('refresh', true);
document.getElementById("Q104").value="";
document.getElementById("Q105").value="";
document.getElementById("Q106").value="";
$('#Q106').selectmenu().selectmenu('refresh', true);

document.getElementById("Q103Father").value="";
document.getElementById("Q103").value="";
document.getElementById("Q102").value="";
document.getElementById("PCV_CPID").value="";
document.getElementById("PCV_MPID").value="";
document.getElementById("IsCard").value="";
$('#IsCard').selectmenu().selectmenu('refresh', true);
document.getElementById("CardAvail").style.display="none";

document.getElementById("NoDOB").style.display="none";
document.getElementById("YesDOB").style.display="none";
document.getElementById("ChildID_2").value="";

document.getElementById("Q202").value="";
$('#Q202').selectmenu().selectmenu('refresh', true);

document.getElementById("Q203").value="";
$('#Q203').selectmenu().selectmenu('refresh', true);

document.getElementById("Q204").value="";
$('#Q204').selectmenu().selectmenu('refresh', true);

document.getElementById("Q205").value="";
$('#Q205').selectmenu().selectmenu('refresh', true);


document.getElementById("Q207").value="";
$('#Q207').selectmenu().selectmenu('refresh', true);


document.getElementById("Q210").value="";
$('#Q210').selectmenu().selectmenu('refresh', true);

document.getElementById("Q201").value="";
document.getElementById("Q201Display").value="";


window.location.href = "#FormSelection";
}






function DA2_Q205_3_a1(){
var  DA2_Q205_3 = document.getElementById("DA2_Q205_3_a1").value;

if(DA2_Q205_3=="01" || DA2_Q205_3=="08" || DA2_Q205_3=="12" || DA2_Q205_3=="18" || DA2_Q205_3=="20"){
document.getElementById("a1MediumSelection").style.display = "none";
document.getElementById("a1MediumAuto").style.display = "block";
document.getElementById("DA2_Q205_3_a2").value = "";
$('#DA2_Q205_3_a2').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q205_3_a3Hide").style.display = "block";

document.getElementById("DA2_Q205_3_a2Auto").value = "2";
document.getElementById("DA2_Q205_3_a2AutoDisplay").value = "ইনজেকশন";
}

else if(DA2_Q205_3=="02" || DA2_Q205_3=="03" || DA2_Q205_3=="04" || DA2_Q205_3=="05" || DA2_Q205_3=="06" || DA2_Q205_3=="07"  || DA2_Q205_3=="08"  || DA2_Q205_3=="10"  || DA2_Q205_3=="11"  || DA2_Q205_3=="13"  || DA2_Q205_3=="14" || DA2_Q205_3=="15" || DA2_Q205_3=="16" || DA2_Q205_3=="17" || DA2_Q205_3=="19" || DA2_Q205_3=="21" || DA2_Q205_3=="22" || DA2_Q205_3=="23" || DA2_Q205_3=="24" || DA2_Q205_3=="99"){
document.getElementById("a1MediumSelection").style.display = "block";
document.getElementById("a1MediumAuto").style.display = "none";
document.getElementById("DA2_Q205_3_a2Auto").value = "";
document.getElementById("DA2_Q205_3_a2AutoDisplay").value = "";
document.getElementById("DA2_Q205_3_a3Hide").style.display = "block";
}

else{
document.getElementById("a1MediumSelection").style.display = "none";
document.getElementById("a1MediumAuto").style.display = "none";
document.getElementById("DA2_Q205_3_a2").value = "";
$('#DA2_Q205_3_a2').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q205_3_a2AutoDisplay").value = "";
document.getElementById("DA2_Q205_3_a2Auto").value = "";
document.getElementById("DA2_Q205_3_a3Hide").style.display = "none";
document.getElementById("DA2_Q205_3_a3").value = "";
}

}






function DA2_Q205_3_b1(){
var  DA2_Q205_3 = document.getElementById("DA2_Q205_3_b1").value;

if(DA2_Q205_3=="01" || DA2_Q205_3=="08" || DA2_Q205_3=="12" || DA2_Q205_3=="18" || DA2_Q205_3=="20"){
document.getElementById("b1MediumSelection").style.display = "none";
document.getElementById("b1MediumAuto").style.display = "block";
document.getElementById("DA2_Q205_3_b2").value = "";
$('#DA2_Q205_3_b2').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q205_3_b3Hide").style.display = "block";

document.getElementById("DA2_Q205_3_b2Auto").value = "2";
document.getElementById("DA2_Q205_3_b2AutoDisplay").value = "ইনজেকশন";
}
else if(DA2_Q205_3=="02" || DA2_Q205_3=="03" || DA2_Q205_3=="04" || DA2_Q205_3=="05" || DA2_Q205_3=="06" || DA2_Q205_3=="07"  || DA2_Q205_3=="08"  || DA2_Q205_3=="10"  || DA2_Q205_3=="11"  || DA2_Q205_3=="13"  || DA2_Q205_3=="14" || DA2_Q205_3=="15" || DA2_Q205_3=="16" || DA2_Q205_3=="17" || DA2_Q205_3=="19" || DA2_Q205_3=="21" || DA2_Q205_3=="22" || DA2_Q205_3=="23" || DA2_Q205_3=="24" || DA2_Q205_3=="99"){
document.getElementById("b1MediumSelection").style.display = "block";
document.getElementById("b1MediumAuto").style.display = "none";
document.getElementById("DA2_Q205_3_b2Auto").value = "";
document.getElementById("DA2_Q205_3_b2AutoDisplay").value = "";
document.getElementById("DA2_Q205_3_b3Hide").style.display = "block";
}

else{

document.getElementById("b1MediumSelection").style.display = "none";
document.getElementById("b1MediumAuto").style.display = "none";
document.getElementById("DA2_Q205_3_b2").value = "";
$('#DA2_Q205_3_b2').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q205_3_b2AutoDisplay").value = "";
document.getElementById("DA2_Q205_3_b2Auto").value = "";
document.getElementById("DA2_Q205_3_b3Hide").style.display = "none";
document.getElementById("DA2_Q205_3_b3").value = "";


}


}








function DA2_Q205_3_c1(){
var  DA2_Q205_3 = document.getElementById("DA2_Q205_3_c1").value;

if(DA2_Q205_3=="01" || DA2_Q205_3=="08" || DA2_Q205_3=="12" || DA2_Q205_3=="18" || DA2_Q205_3=="20"){
document.getElementById("c1MediumSelection").style.display = "none";
document.getElementById("c1MediumAuto").style.display = "block";
document.getElementById("DA2_Q205_3_c2").value = "";
$('#DA2_Q205_3_c2').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q205_3_c3Hide").style.display = "block";

document.getElementById("DA2_Q205_3_c2Auto").value = "2";
document.getElementById("DA2_Q205_3_c2AutoDisplay").value = "ইনজেকশন";
}
else if(DA2_Q205_3=="02" || DA2_Q205_3=="03" || DA2_Q205_3=="04" || DA2_Q205_3=="05" || DA2_Q205_3=="06" || DA2_Q205_3=="07"  || DA2_Q205_3=="08"  || DA2_Q205_3=="10"  || DA2_Q205_3=="11"  || DA2_Q205_3=="13"  || DA2_Q205_3=="14" || DA2_Q205_3=="15" || DA2_Q205_3=="16" || DA2_Q205_3=="17" || DA2_Q205_3=="19" || DA2_Q205_3=="21" || DA2_Q205_3=="22" || DA2_Q205_3=="23" || DA2_Q205_3=="24" || DA2_Q205_3=="99"){
document.getElementById("c1MediumSelection").style.display = "block";
document.getElementById("c1MediumAuto").style.display = "none";
document.getElementById("DA2_Q205_3_c2Auto").value = "";
document.getElementById("DA2_Q205_3_c2AutoDisplay").value = "";
document.getElementById("DA2_Q205_3_c3Hide").style.display = "block";
}

else{

document.getElementById("c1MediumSelection").style.display = "none";
document.getElementById("c1MediumAuto").style.display = "none";
document.getElementById("DA2_Q205_3_c2").value = "";
$('#DA2_Q205_3_c2').selectmenu().selectmenu('refresh', true);
document.getElementById("DA2_Q205_3_c2AutoDisplay").value = "";
document.getElementById("DA2_Q205_3_c2Auto").value = "";
document.getElementById("DA2_Q205_3_c3Hide").style.display = "none";
document.getElementById("DA2_Q205_3_c3").value = "";

}

}





function backToinclusion_2(){
document.getElementById("reviewForQ206").style.display = "block";
window.location.href="#inclusion_2";
}



function backToexclusion_3(){
document.getElementById("reviewForQ209").style.display = "block";
window.location.href="#exclusion_3";
}



function backtoReview(){
window.location.href="#review";
document.getElementById("reviewForQ206").style.display = "none";
document.getElementById("reviewForQ209").style.display = "none";
}




function backtoinclusion_1(){
window.location.href="#inclusion_1";
document.getElementById("reviewForQ206").style.display = "none";
}




function DA2_backToreview(){
window.location.href="#DA2_Q901_page";
document.getElementById("DA2_BackToReviewForQ501").style.display = "none";
}


function Review_DA2_Q501_page(){
window.location.href="#DA2_Q501_page";
document.getElementById("DA2_BackToReviewForQ501").style.display = "block";
}





function clearAllUser(){

databaseHandler.db.transaction(
function(txIDUPDATE3){
txIDUPDATE3.executeSql("delete from user",
[],function(tx, result){
  alert("ডাটা ডিলিট হয়েছে।");
  });
});


}






























