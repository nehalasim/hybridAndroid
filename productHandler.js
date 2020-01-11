var productHandler={
addProduct: function(IsCard, chidlID, PCV_MPID, PCV_CPID,  Q101_code, Q102, Q103, Q103Father, Q104, Q105, Q106, Q107, Q108Date, Q108Time, Q201, Q202, Q203, Q204, Q205, Q206, Q207, Q208, Q209, Q210, Q300, Entry_User_ID){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"insert OR IGNORE into DA1_Screening (CardAvailable, Child_ID, MPID , CPID , CC_Code ,CName ,MName ,FName ,CDOB ,CAge ,CSex ,CHCP ,Visit_Date ,Start_Time ,Q201 ,Q202 ,Q203 ,Q204 ,Q205 ,Q206 ,Q207 ,Q208 ,Q209 ,Q210 ,End_Time, Entry_User_ID) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
 [IsCard, chidlID, PCV_MPID, PCV_CPID, Q101_code, Q102, Q103, Q103Father, Q104, Q105, Q106, Q107, Q108Date, Q108Time, Q201, Q202, Q203, Q204, Q205, Q206, Q207, Q208, Q209, Q210, Q300 , Entry_User_ID],
function(tx, result){

if(document.getElementById("Q209").value=="2"){
window.location.href='#identification_1';
//alert("আপনার ডাটা সেভ হয়েছে।");
}
else if(document.getElementById("Q209").value=="1" && document.getElementById("Q210").value=="2" ){
window.location.href='#identification_1';
//alert("আপনার ডাটা সেভ হয়েছে।");
}
else if(document.getElementById("Q209").value=="1" && document.getElementById("Q210").value=="1" ){
//window.location.href='#DA2_ChildID_page';
window.location.href='#DA2_start';
//alert("আপনার ডাটা সেভ হয়েছে। এখন DA2 ফর্মটি পূরণ করুন।");

document.getElementById("DA2_ChildID").value =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
/*
document.getElementById("DA2_1").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_2").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_3").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_4").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_5").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_6").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_7").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_8").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_9").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_10").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_11").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_12").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_13").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_14").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_15").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_16").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_17").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_18").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_19").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_20").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA2_21").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;

document.getElementById("DA3_1").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA3_2").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA3_3").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA3_4").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA3_5").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA3_6").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA3_7").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA3_8").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA3_9").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA3_10").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA3_11").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA3_12").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA3_13").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
document.getElementById("DA3_14").innerHTML =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;
*/





document.getElementById("da3_childID").value =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;

document.getElementById("DA3_Q206").value =document.getElementById("ChildID_1").value+document.getElementById("ChildID_2").value;


if(document.getElementById("IsCard").value=="1"){
document.getElementById("DA2_Card_Yes").style.display="block";
document.getElementById("DA2_Card_No").style.display="none";
document.getElementById("DA2_Q101_card_no").value="";
document.getElementById("DA2_Q102_card_no").value="";
document.getElementById("DA2_Q103_card_no").value="";
document.getElementById("DA2_Q104_card_no").value="";
document.getElementById("DA2_Q105_card_no").value="";
document.getElementById("SCR_Card").style.display="block";
}
else if(document.getElementById("IsCard").value=="2"){
document.getElementById("DA2_Card_Yes").style.display="none";
document.getElementById("SCR_Card").style.display="none";
document.getElementById("DA2_Card_No").style.display="block";
document.getElementById("DA2_Q101_code").value="";
document.getElementById("DA2_Q102_code").value="";
document.getElementById("DA2_Q103_code").value="";
document.getElementById("DA2_Q104_code").value="";
document.getElementById("DA2_Q105_code").value="";

document.getElementById("DA2_Q108_code").value=document.getElementById("Q102").value;
document.getElementById("DA2_Q109").value=document.getElementById("Q103").value;
document.getElementById("DA2_Q110").value="99999999999";
document.getElementById("DA2_Q112").value=document.getElementById("Q103Father").value;
document.getElementById("DA2_Q113").value="99999999999";

if(document.getElementById("Q104").value==""){
document.getElementById("DA2_Q114").value= "1909-09-09";
}
else{
document.getElementById("DA2_Q114").value= document.getElementById("Q104").value;
}

document.getElementById("DA2_Q115").value=document.getElementById("Q105").value;
document.getElementById("DA2_Q116").value=document.getElementById("Q106").value;

}
else{
document.getElementById("DA2_Card_Yes").style.display="none";
document.getElementById("DA2_Card_No").style.display="none";
document.getElementById("DA2_Q101_code").value="";
document.getElementById("DA2_Q102_code").value="";
document.getElementById("DA2_Q103_code").value="";
document.getElementById("DA2_Q104_code").value="";
document.getElementById("DA2_Q105_code").value="";
document.getElementById("DA2_Q101_card_no").value="";
document.getElementById("DA2_Q102_card_no").value="";
document.getElementById("DA2_Q103_card_no").value="";
document.getElementById("DA2_Q104_card_no").value="";
document.getElementById("DA2_Q105_card_no").value="";
}


document.getElementById("ChildID_2").value="";

document.getElementById("Q102").value="";
document.getElementById("Q103").value="";
document.getElementById("Q104").value="";
document.getElementById("DobNo").value = "";
$('#DobNo').selectmenu().selectmenu('refresh', true);
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
document.getElementById("Q208").value="";
document.getElementById("Q208_Display").value="";
document.getElementById("Q208_Card_Display").value="";
document.getElementById("Q208_Card").value="";
document.getElementById("Q209").value="";
document.getElementById("Q210").value="";

document.getElementById("Q301").value="";
document.getElementById("Q300").value="";
}




document.getElementById("IsCard").value="";
$('#IsCard').selectmenu().selectmenu('refresh', true);

document.getElementById("CardAvail").style.display="none";
document.getElementById("CardAvail_Yes").style.display="none";
document.getElementById("CardAvail_No").style.display="none";

document.getElementById("DobNo").value="";
$('#DobNo').selectmenu().selectmenu('refresh', true);
document.getElementById("PCV_MPID").value="";
document.getElementById("PCV_CPID").value="";
//document.getElementById("Q103Father").value="";

document.getElementById("NoDOB").style.display = "none";
document.getElementById("YesDOB").style.display = "none";

document.getElementById("ChildID_2").value="";
//document.getElementById("Q101_code").value="";
document.getElementById("Q102").value="";
document.getElementById("Q103").value="";
document.getElementById("Q104").value="";
document.getElementById("Q105").value="";
document.getElementById("Q106").value="";
$('#Q106').selectmenu().selectmenu('refresh', true);

document.getElementById("Q108Date").value="";
document.getElementById("Q108Time").value="";

document.getElementById("Q201").value="";
document.getElementById("Q202").value="";
$('#Q202').selectmenu().selectmenu('refresh', true);
document.getElementById("Q203").value="";
$('#Q203').selectmenu().selectmenu('refresh', true);
document.getElementById("Q204").value="";
$('#Q204').selectmenu().selectmenu('refresh', true);
document.getElementById("Q205").value="";
$('#Q205').selectmenu().selectmenu('refresh', true);
document.getElementById("Q206").value="";
document.getElementById("Q207").value="";
$('#Q207').selectmenu().selectmenu('refresh', true);
document.getElementById("Q108Date").value="";
document.getElementById("Q108Time").value="";

document.getElementById("Q201").value="";
document.getElementById("Q202").value="";
document.getElementById("Q203").value="";
document.getElementById("Q204").value="";
document.getElementById("Q205").value="";
document.getElementById("Q206").value="";
document.getElementById("Q207").value="";
document.getElementById("Q208").value="";
document.getElementById("Q208_Display").value="";
document.getElementById("Q208_Card_Display").value="";
document.getElementById("Q208_Card").value="";
//$('#Q208').selectmenu().selectmenu('refresh', true);
document.getElementById("Q209").value="";
document.getElementById("Q210").value="";
$('#Q210').selectmenu().selectmenu('refresh', true);
document.getElementById("Q300").value="";

document.getElementById("reviewForQ206").style.display = "none";
document.getElementById("reviewForQ209").style.display = "none";


},

function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};




var D2Handler={
addDataD2: function(DA2_Cluster, DA2_Block, DA2_ChildID, DA2_Q107, DA2_Q101_code, DA2_Q102_code, DA2_Q103_code, DA2_Q104_code, DA2_Q105_code, DA2_Q106_code, DA2_Q108_code, DA2_Q109, DA2_Q110, DA2_Q111, DA2_Q112, DA2_Q113, DA2_Q114, DA2_Q115, DA2_Q116, DA2_Q117, DA2_Q118Date, DA2_Q118Time, DA2_Q119Respondent, DA2_Q119Other, DA2_120result, DA2_Q120Other, DA2_Q201_a, DA2_Q201_a_day, DA2_Q201_b, DA2_Q201_b_day, DA2_Q201_c, DA2_Q201_c_day, DA2_Q201_d, DA2_Q201_d_day, DA2_Q201_e, DA2_Q201_e_day, DA2_Q202, DA2_Q202_day, DA2_Q203, DA2_Q203_day, DA2_Q204, DA2_Q204_day, DA2_Q205_1, DA2_Q205_2, DA2_Q205_3_a1, DA2_Q205_3_a2, DA2_Q205_3_a3, DA2_Q205_3_b1, DA2_Q205_3_b2, DA2_Q205_3_b3, DA2_Q205_3_c1, DA2_Q205_3_c2, DA2_Q205_3_c3, DA2_Q301, DA2_Q302, DA2_Q302_other, DA2_Q401, DA2_Q402_a, DA2_Q402_b, DA2_Q403, DA2_Q404, DA2_Q405, DA2_Q501, DA2_Q502, DA2_Q503, DA2_Q504, DA2_Q505, DA2_Q506, DA2_Q601, DA2_Q602, DA2_Q603a, DA2_Q603b, DA2_Q603c, DA2_Q604, DA2_Q605, DA2_Q701, DA2_Q702, DA2_Q703, DA2_Q704a, DA2_Q704a_times, DA2_Q704a_day, DA2_Q704b, DA2_Q704b_times, DA2_Q704b_day, DA2_Q704c, DA2_Q704c_times, DA2_Q704c_day, DA2_Q704d, DA2_Q704d_times, DA2_Q704d_day, DA2_Q704e, DA2_Q704e_times, DA2_Q704e_day, DA2_Q704f, DA2_Q704f_times, DA2_Q704f_day, DA2_Q801, DA2_Q901, DA2_USerID){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"insert OR IGNORE into DA2_Assessment (Cluster, Block, Child_ID, Child_PID, Upazila_Code, Union_code, Village_code, Bari_code, HH_code, CC_code, Child_name, Mother_name, MCID, MPID, Father_name, Mobile, ChDob, ChildAge, ChildSex, CHCP_code, IntStartDate, IntStartTime, Q119, Q119Other, Q120, Q120Other, Q201a, Q201a_day, Q201b, Q201b_day, Q201c, Q201c_day, Q201d, Q201d_day, Q201e, Q201e_day, Q202, Q202_day, Q203, Q203_day, Q204, Q204_day, Q205_1, Q205_2, Q205_3a_1, Q205_3a_2, Q205_3a_3, Q205_3b_1, Q205_3b_2, Q205_3b_3, Q205_3c_1, Q205_3c_2, Q205_3c_3, Q301, Q302, Q302Other, Q401, Q402a, Q402b, Q403, Q404, Q405, Q501, Q502, Q503, Q504, Q505, Q506, Q601, Q602, Q603a, Q603b, Q603c, Q604, Q605, Q701, Q702, Q703, Q704a, Q704a_time, Q704a_day, Q704b, Q704b_time, Q704b_day, Q704c, Q704c_time, Q704c_day, Q704d, Q704d_time, Q704d_day, Q704e, Q704e_time, Q704e_day, Q704f, Q704f_time, Q704f_day, Q801, Q901, Entry_User_ID ) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
[DA2_Cluster, DA2_Block, DA2_ChildID, DA2_Q107, DA2_Q101_code, DA2_Q102_code, DA2_Q103_code, DA2_Q104_code, DA2_Q105_code, DA2_Q106_code, DA2_Q108_code, DA2_Q109, DA2_Q110, DA2_Q111, DA2_Q112, DA2_Q113, DA2_Q114, DA2_Q115, DA2_Q116, DA2_Q117, DA2_Q118Date, DA2_Q118Time, DA2_Q119Respondent, DA2_Q119Other, DA2_120result, DA2_Q120Other, DA2_Q201_a, DA2_Q201_a_day, DA2_Q201_b, DA2_Q201_b_day, DA2_Q201_c, DA2_Q201_c_day, DA2_Q201_d, DA2_Q201_d_day, DA2_Q201_e, DA2_Q201_e_day, DA2_Q202, DA2_Q202_day, DA2_Q203, DA2_Q203_day, DA2_Q204, DA2_Q204_day, DA2_Q205_1, DA2_Q205_2, DA2_Q205_3_a1, DA2_Q205_3_a2, DA2_Q205_3_a3, DA2_Q205_3_b1, DA2_Q205_3_b2, DA2_Q205_3_b3, DA2_Q205_3_c1, DA2_Q205_3_c2, DA2_Q205_3_c3, DA2_Q301, DA2_Q302, DA2_Q302_other, DA2_Q401, DA2_Q402_a, DA2_Q402_b, DA2_Q403, DA2_Q404, DA2_Q405, DA2_Q501, DA2_Q502, DA2_Q503, DA2_Q504, DA2_Q505, DA2_Q506, DA2_Q601, DA2_Q602, DA2_Q603a, DA2_Q603b, DA2_Q603c, DA2_Q604, DA2_Q605, DA2_Q701, DA2_Q702, DA2_Q703, DA2_Q704a, DA2_Q704a_times, DA2_Q704a_day, DA2_Q704b, DA2_Q704b_times, DA2_Q704b_day, DA2_Q704c, DA2_Q704c_times, DA2_Q704c_day, DA2_Q704d, DA2_Q704d_times, DA2_Q704d_day, DA2_Q704e, DA2_Q704e_times, DA2_Q704e_day, DA2_Q704f, DA2_Q704f_times, DA2_Q704f_day, DA2_Q801, DA2_Q901,  DA2_USerID],
function(tx, result){


if(document.getElementById("DA2_120result").value=="1"){
window.location.href='#DA3_start';
}
else{
window.location.href='#identification_1';
}

document.getElementById("DA2_120result").value = "";
document.getElementById("DA2_Q120Other").value = "";


},

function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};











var newUser={
addUser: function(CHCP_Code, password, CHCP_Name, CC_Code, newUserStatus){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"insert OR IGNORE into user (CHCP_Code, password ,CHCP_Name ,CC_Code ,CHCP_Status) values(?,?,?,?,?)",
[CHCP_Code, password, CHCP_Name, CC_Code, newUserStatus],
function(tx, result){
alert("নতুন ইউজার এন্ট্রি হয়েছে।");
document.getElementById("newUserID").value="";
document.getElementById("newUserPassword").value="";
document.getElementById("newUserName").value="";
document.getElementById("newUserCCCode").value="";
},
function(tx, error){
console.log("add data error: "+ error.message);
});
});

}};







var D3Data={
addD3: function(DA3_childID, DA3_Q101_code, DA3_Q102_code, DA3_Q103_code, DA3_Q104_code, DA3_Q105_code, DA3_Q106_code, DA3_Q107, DA3_Q108_code, DA3_Q109, DA3_Q110, DA3_Q111, DA3_Q112, DA3_Q113, DA3_Q114, DA3_Q115, DA3_Q116, DA3_Q117Date, DA3_Q117Time, DA3_Q201, DA3_Q202a, DA3_Q202b, DA3_Q202c, DA3_Q202d, DA3_Q203, DA3_Q204, DA3_Q204O, DA3_Q205, DA3_Q206, DA3_Q207, DA3_Q301, DA3_Q302, DA3_Q303, DA3_Q400, DA3_UserID){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"insert OR IGNORE into DA3 (DA3_childID, DA3_Q101_code, DA3_Q102_code, DA3_Q103_code, DA3_Q104_code, DA3_Q105_code, DA3_Q106_code, DA3_Q107, DA3_Q108_code, DA3_Q109, DA3_Q110, DA3_Q111, DA3_Q112, DA3_Q113, DA3_Q114, DA3_Q115, DA3_Q116, DA3_Q117Date, DA3_Q117Time,DA3_Q201, DA3_Q202a, DA3_Q202b, DA3_Q202c, DA3_Q202d, DA3_Q203, DA3_Q204, DA3_Q204O, DA3_Q205, DA3_Q206, DA3_Q207, DA3_Q301, DA3_Q302, DA3_Q303, DA3_Q400, Entry_User_ID) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
[DA3_childID, DA3_Q101_code, DA3_Q102_code, DA3_Q103_code, DA3_Q104_code, DA3_Q105_code, DA3_Q106_code, DA3_Q107, DA3_Q108_code, DA3_Q109, DA3_Q110, DA3_Q111, DA3_Q112, DA3_Q113, DA3_Q114, DA3_Q115, DA3_Q116, DA3_Q117Date, DA3_Q117Time, DA3_Q201, DA3_Q202a, DA3_Q202b, DA3_Q202c, DA3_Q202d, DA3_Q203, DA3_Q204, DA3_Q204O, DA3_Q205, DA3_Q206, DA3_Q207, DA3_Q301, DA3_Q302, DA3_Q303, DA3_Q400, DA3_UserID],
function(tx, result){
window.location.href='#identification_1';
},
function(tx, error){
console.log("add data error: "+ error.message);
});
});

}};













function alert(text, callback) {
    var popupDialogId = 'popupDialog';
    $('<div data-role="popup" id="' + popupDialogId + '" data-confirmed="no" data-transition="pop" data-overlay-theme="b" data-theme="b" data-dismissible="false" style="max-width:500px;"> \
                        <div data-role="header" data-theme="a">\
                            <h1></h1>\
                        </div>\
                        <div role="main" class="ui-content">\
                            <h3 class="ui-title">' + text + '</h3>\
                            <a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b optionConfirm" data-rel="back">OK</a>\
                            \
                        </div>\
                    </div>')
        .appendTo($.mobile.pageContainer);
    var popupDialogObj = $('#' + popupDialogId);
    popupDialogObj.trigger('create');
    popupDialogObj.popup({
        afterclose: function (event, ui) {
            popupDialogObj.find(".optionConfirm").first().off('click');
            var isConfirmed = popupDialogObj.attr('data-confirmed') === 'OK' ? true : false;
            $(event.target).remove();
            if (isConfirmed && callback) {
                callback();
            }
        }
    });
    popupDialogObj.popup('open');
    popupDialogObj.find(".optionConfirm").first().on('click', function () {
        popupDialogObj.attr('data-confirmed', 'OK');
    });
}






var productHandlerCHK={
addProductCHK: function(chidlID){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"select * from DA1_Screening where Child_ID = ?",
[chidlID],
function(tx, result){
 var len = result.rows.length;
if(len>0){
alert("এই শিশুটি একবার এন্ট্রি হয়ে গেছে। এই আইডি পুনরায় এন্ট্রি দিতে পারবেন না।");
}
else{

var ChildID_1 = $("#ChildID_1").val();
var ChildID_2_MAIN = $("#ChildID_2").val();
if(ChildID_1=="" || ChildID_1.length>2 || ChildID_1.length<2){
alert("প্রথম বক্সে কমিউনিটি ক্লিনিক এর কোড দিন।");
}
else if(ChildID_2_MAIN=="" || ChildID_2_MAIN.length>5 || ChildID_2_MAIN.length<5){
alert("দ্বিতীয় বক্সে শিশুর আইডি দিন।");
}
else{
//window.location.href='#identification_2';
window.location.href='#identification_3';
}}},
function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};










var UserChk={
LoginChk: function(UserName, Password){
databaseHandler.db.transaction(function(tx){
tx.executeSql(
"select * from user where CHCP_Code = ? and password = ?",
[UserName, Password],
function(tx, result){
 var len = result.rows.length;
if(len>0){

//window.location.href='#inclusion_2';
window.location.href='#FormSelection';
//window.location.href='#FormSelection';
//window.location.href='#DA3_1_page';
document.getElementById("statusBar").style.display = "block";

var lengt = result.rows.length, i;
for (i=0; i<=lengt-1; i++) {

document.getElementById("Q101_code").value =  result.rows.item(i).CC_Code;
document.getElementById("DA2_Q106_code").value =  result.rows.item(i).CC_Code;
document.getElementById("Q107").value =  result.rows.item(i).CHCP_Code;
document.getElementById("DA2_Q117").value =  result.rows.item(i).CHCP_Code;
document.getElementById("ChildID_1").value =  result.rows.item(i).CC_Code;
document.getElementById("DA3_Q106_code").value =  result.rows.item(i).CC_Code;
document.getElementById("DA3_Q116").value =  result.rows.item(i).CHCP_Code;

document.getElementById("st_UserID").innerHTML =  result.rows.item(i).CHCP_Code;
}


}
else{
document.getElementById("statusBar").style.display = "none";
alert("আপনার সঠিক আইডি এবং পাসওয়ার্ড দিন।");
}

},
function(tx, error){
console.log("add data error: "+ error.message);
});


tx.executeSql(
"select * from CCDevice",
[],
function (tx, results){
var len = results.rows.length;
if(len>0){
var lengt = results.rows.length, i;
for (i=0; i<=lengt-1; i++) {
document.getElementById("DA3_Q207").value =  results.rows.item(i).D_code;
}


}
},
function(tx, error){
console.log("Error while creating table "+ error.message);
//alert(error.message);
}
)



});
}};


function backUpMe(){
online = window.navigator.onLine;
if (navigator.onLine) {
databaseHandler.db.transaction(function(transaction) {
transaction.executeSql("SELECT * FROM DA1_Screening where Entry_Date >= date('now','-4 day')", [], function (tx, results) {
var len = results.rows.length, i;
$("#rowCount").append(len);
if(len>0){
for (i = 0; i < len; i++){
$("#TableData").append("<div class='DA_1_CARD'>"+results.rows.item(i).CardAvailable+"</div>"+"<div class='DA_1_CPID'>"+results.rows.item(i).CPID+"</div>"+"<div class='DA_1_MPID'>"+results.rows.item(i).MPID+"</div>"+"<div class='cid'>"+results.rows.item(i).Child_ID+"</div>"+"<div class='ccCode'>"+results.rows.item(i).CC_Code+"</div>"+"<div class='cname'>"+results.rows.item(i).CName+"</div>"+"<div class='CMNAME'>"+results.rows.item(i).MName+"</div>"+"<div class='CFNAME'>"+results.rows.item(i).FName+"</div>"+"<div class='DOB'>"+results.rows.item(i).CDOB+"</div>"+"<div class='age'>"+results.rows.item(i).CAge+"</div>"+"<div class='csex'>"+results.rows.item(i).CSex+"</div>"+"<div class='chcp'>"+results.rows.item(i).CHCP+"</div>"+"<div class='vdate'>"+results.rows.item(i).Visit_Date+"</div>"+"<div class='vtime'>"+results.rows.item(i).Start_Time+"</div>"+"<div class='DA1_SYNC_Q201'>"+results.rows.item(i).Q201+"</div>"+"<div class='DA1_SYNC_Q202'>"+results.rows.item(i).Q202+"</div>"+"<div class='DA1_SYNC_Q203'>"+results.rows.item(i).Q203+"</div>"+"<div class='DA1_SYNC_Q204'>"+results.rows.item(i).Q204+"</div>"+"<div class='DA1_SYNC_Q205'>"+results.rows.item(i).Q205+"</div>"+"<div class='DA1_SYNC_Q206'>"+results.rows.item(i).Q206+"</div>"+"<div class='DA1_SYNC_Q207'>"+results.rows.item(i).Q207+"</div>"+"<div class='DA1_SYNC_Q208'>"+results.rows.item(i).Q208+"</div>"+"<div class='DA1_SYNC_Q209'>"+results.rows.item(i).Q209+"</div>"+"<div class='DA1_SYNC_Q210'>"+results.rows.item(i).Q210+"</div>"+"<div class='DA1_SYNC_EnTime'>"+results.rows.item(i).End_Time+"</div>"+"<div class='DA1_SYNC_uid'>"+results.rows.item(i).Entry_User_ID+"</div>"+"<div class='DA1_SYNC_u_enDT'>"+results.rows.item(i).Entry_Date+"</div>");
var totalRec = i+1;
document.getElementById("countdown").value = "Total record prepared to transfer"+" "+(totalRec);
}
}
else{
document.getElementById("countdown").value = "NO data Available to transfer";
}



}, null);
});

D2_backUpMe();

}
else{
alert('ট্যাবএ ইন্টারনেট কানেকশন সঠিক নেই। ইন্টারনেট কানেকশন চেক করুন এবং আবার বাটনে চাপুন।');
}

}











function D2_backUpMe(){
databaseHandler.db.transaction(function(transaction) {
transaction.executeSql("SELECT * FROM DA2_Assessment where Entry_Date >= date('now','-4 day')", [], function (tx, results) {
var len = results.rows.length, i;

$("#D2_rowCount").append(len);
if(len>0){
for (i = 0; i < len; i++){
$("#D2_TableData").append(
"<div class='Child_ID'>"+results.rows.item(i).Child_ID+"</div>"+
"<div class='Upazila_Code'>"+results.rows.item(i).Upazila_Code+"</div>"+
"<div class='Union_code'>"+results.rows.item(i).Union_code+"</div>"+
"<div class='Village_code'>"+results.rows.item(i).Village_code+"</div>"+
"<div class='Bari_code'>"+results.rows.item(i).Bari_code+"</div>"+
"<div class='HH_code'>"+results.rows.item(i).HH_code+"</div>"+
"<div class='CC_code'>"+results.rows.item(i).CC_code+"</div>"+
"<div class='Child_PID'>"+results.rows.item(i).Child_PID+"</div>"+
"<div class='Child_name'>"+results.rows.item(i).Child_name+"</div>"+
"<div class='Mother_name'>"+results.rows.item(i).Mother_name+"</div>"+
"<div class='MCID'>"+results.rows.item(i).MCID+"</div>"+
"<div class='MPID'>"+results.rows.item(i).MPID+"</div>"+
"<div class='Father_name'>"+results.rows.item(i).Father_name+"</div>"+
"<div class='Mobile'>"+results.rows.item(i).Mobile+"</div>"+
"<div class='ChDob'>"+results.rows.item(i).ChDob+"</div>"+
"<div class='ChildAge'>"+results.rows.item(i).ChildAge+"</div>"+
"<div class='ChildSex'>"+results.rows.item(i).ChildSex+"</div>"+
"<div class='CHCP_code'>"+results.rows.item(i).CHCP_code+"</div>"+
"<div class='IntStartDate'>"+results.rows.item(i).IntStartDate+"</div>"+
"<div class='IntStartTime'>"+results.rows.item(i).IntStartTime+"</div>"+
"<div class='Q119'>"+results.rows.item(i).Q119+"</div>"+
"<div class='Q119Other'>"+results.rows.item(i).Q119Other+"</div>"+
"<div class='Q120'>"+results.rows.item(i).Q120+"</div>"+
"<div class='Q120Other'>"+results.rows.item(i).Q120Other+"</div>"+
"<div class='Q201a'>"+results.rows.item(i).Q201a+"</div>"+
"<div class='Q201a_day'>"+results.rows.item(i).Q201a_day+"</div>"+
"<div class='Q201b'>"+results.rows.item(i).Q201b+"</div>"+
"<div class='Q201b_day'>"+results.rows.item(i).Q201b_day+"</div>"+
"<div class='Q201c'>"+results.rows.item(i).Q201c+"</div>"+
"<div class='Q201c_day'>"+results.rows.item(i).Q201c_day+"</div>"+
"<div class='Q201d'>"+results.rows.item(i).Q201d+"</div>"+
"<div class='Q201d_day'>"+results.rows.item(i).Q201d_day+"</div>"+
"<div class='Q201e'>"+results.rows.item(i).Q201e+"</div>"+
"<div class='Q201e_day'>"+results.rows.item(i).Q201e_day+"</div>"+
"<div class='Q202'>"+results.rows.item(i).Q202+"</div>"+
"<div class='Q202_day'>"+results.rows.item(i).Q202_day+"</div>"+
"<div class='Q203'>"+results.rows.item(i).Q203+"</div>"+
"<div class='Q203_day'>"+results.rows.item(i).Q203_day+"</div>"+
"<div class='Q204'>"+results.rows.item(i).Q204+"</div>"+
"<div class='Q204_day'>"+results.rows.item(i).Q204_day+"</div>"+
"<div class='Q205_1'>"+results.rows.item(i).Q205_1+"</div>"+
"<div class='Q205_2'>"+results.rows.item(i).Q205_2+"</div>"+
"<div class='Q205_3a_1'>"+results.rows.item(i).Q205_3a_1+"</div>"+
"<div class='Q205_3a_2'>"+results.rows.item(i).Q205_3a_2+"</div>"+
"<div class='Q205_3a_3'>"+results.rows.item(i).Q205_3a_3+"</div>"+
"<div class='Q205_3b_1'>"+results.rows.item(i).Q205_3b_1+"</div>"+
"<div class='Q205_3b_2'>"+results.rows.item(i).Q205_3b_2+"</div>"+
"<div class='Q205_3b_3'>"+results.rows.item(i).Q205_3b_3+"</div>"+
"<div class='Q205_3c_1'>"+results.rows.item(i).Q205_3c_1+"</div>"+
"<div class='Q205_3c_2'>"+results.rows.item(i).Q205_3c_2+"</div>"+
"<div class='Q205_3c_3'>"+results.rows.item(i).Q205_3c_3+"</div>"+
"<div class='Q301'>"+results.rows.item(i).Q301+"</div>"+
"<div class='Q302'>"+results.rows.item(i).Q302+"</div>"+
"<div class='Q302Other'>"+results.rows.item(i).Q302Other+"</div>"+
"<div class='Q401'>"+results.rows.item(i).Q401+"</div>"+
"<div class='Q402a'>"+results.rows.item(i).Q402a+"</div>"+
"<div class='Q402b'>"+results.rows.item(i).Q402b+"</div>"+
"<div class='Q403'>"+results.rows.item(i).Q403+"</div>"+
"<div class='Q404'>"+results.rows.item(i).Q404+"</div>"+
"<div class='Q405'>"+results.rows.item(i).Q405+"</div>"+
"<div class='Q501'>"+results.rows.item(i).Q501+"</div>"+
"<div class='Q502'>"+results.rows.item(i).Q502+"</div>"+
"<div class='Q503'>"+results.rows.item(i).Q503+"</div>"+
"<div class='Q504'>"+results.rows.item(i).Q504+"</div>"+
"<div class='Q505'>"+results.rows.item(i).Q505+"</div>"+
"<div class='Q506'>"+results.rows.item(i).Q506+"</div>"+
"<div class='Q601'>"+results.rows.item(i).Q601+"</div>"+
"<div class='Q602'>"+results.rows.item(i).Q602+"</div>"+
"<div class='Q603a'>"+results.rows.item(i).Q603a+"</div>"+
"<div class='Q603b'>"+results.rows.item(i).Q603b+"</div>"+
"<div class='Q603c'>"+results.rows.item(i).Q603c+"</div>"+
"<div class='Q604'>"+results.rows.item(i).Q604+"</div>"+
"<div class='Q605'>"+results.rows.item(i).Q605+"</div>"+
"<div class='Q701'>"+results.rows.item(i).Q701+"</div>"+
"<div class='Q702'>"+results.rows.item(i).Q702+"</div>"+
"<div class='Q703'>"+results.rows.item(i).Q703+"</div>"+
"<div class='Q704a'>"+results.rows.item(i).Q704a+"</div>"+
"<div class='Q704a_time'>"+results.rows.item(i).Q704a_time+"</div>"+
"<div class='Q704a_day'>"+results.rows.item(i).Q704a_day+"</div>"+
"<div class='Q704b'>"+results.rows.item(i).Q704b+"</div>"+
"<div class='Q704b_time'>"+results.rows.item(i).Q704b_time+"</div>"+
"<div class='Q704b_day'>"+results.rows.item(i).Q704b_day+"</div>"+
"<div class='Q704c'>"+results.rows.item(i).Q704c+"</div>"+
"<div class='Q704c_time'>"+results.rows.item(i).Q704c_time+"</div>"+
"<div class='Q704c_day'>"+results.rows.item(i).Q704c_day+"</div>"+
"<div class='Q704d'>"+results.rows.item(i).Q704d+"</div>"+
"<div class='Q704d_time'>"+results.rows.item(i).Q704d_time+"</div>"+
"<div class='Q704d_day'>"+results.rows.item(i).Q704d_day+"</div>"+
"<div class='Q704e'>"+results.rows.item(i).Q704e+"</div>"+
"<div class='Q704e_time'>"+results.rows.item(i).Q704e_time+"</div>"+
"<div class='Q704e_day'>"+results.rows.item(i).Q704e_day+"</div>"+
"<div class='Q704f'>"+results.rows.item(i).Q704f+"</div>"+
"<div class='Q704f_time'>"+results.rows.item(i).Q704f_time+"</div>"+
"<div class='Q704f_day'>"+results.rows.item(i).Q704f_day+"</div>"+
"<div class='Q801'>"+results.rows.item(i).Q801+"</div>"+
"<div class='Q901'>"+results.rows.item(i).Q901+"</div>"+
"<div class='DA2_UserID'>"+results.rows.item(i).Entry_User_ID+"</div>"+
"<div class='DA2_EnDt'>"+results.rows.item(i).Entry_Date+"</div>"
);
var D2_totalRec = i+1;
document.getElementById("D2_countdown").value = "Total record prepared to transfer"+" "+(D2_totalRec);
}
}
else{
document.getElementById("D2_countdown").value = "NO data Available to transfer";
}


}, null);
});
D3_backUpMe();

}











function D3_backUpMe(){
databaseHandler.db.transaction(function(transaction) {
transaction.executeSql("SELECT * FROM DA3 where Entry_Date >= date('now','-4 day')", [], function (tx, results) {
var len = results.rows.length, i;
$("#D3_rowCount").append(len);
if(len>0){
for (i = 0; i < len; i++){
$("#D3_TableData").append("<div class='DA3_childID'>"+results.rows.item(i).DA3_childID+"</div>"+
"<div class='DA3_Q101_code'>"+results.rows.item(i).DA3_Q101_code+"</div>"+
"<div class='DA3_Q102_code'>"+results.rows.item(i).DA3_Q102_code+"</div>"+
"<div class='DA3_Q103_code'>"+results.rows.item(i).DA3_Q103_code+"</div>"+
"<div class='DA3_Q104_code'>"+results.rows.item(i).DA3_Q104_code+"</div>"+
"<div class='DA3_Q105_code'>"+results.rows.item(i).DA3_Q105_code+"</div>"+
"<div class='DA3_Q106_code'>"+results.rows.item(i).DA3_Q106_code+"</div>"+
"<div class='DA3_Q107'>"+results.rows.item(i).DA3_Q107+"</div>"+
"<div class='DA3_Q108_code'>"+results.rows.item(i).DA3_Q108_code+"</div>"+
"<div class='DA3_Q109'>"+results.rows.item(i).DA3_Q109+"</div>"+
"<div class='DA3_Q110'>"+results.rows.item(i).DA3_Q110+"</div>"+
"<div class='DA3_Q111'>"+results.rows.item(i).DA3_Q111+"</div>"+
"<div class='DA3_Q112'>"+results.rows.item(i).DA3_Q112+"</div>"+
"<div class='DA3_Q113'>"+results.rows.item(i).DA3_Q113+"</div>"+
"<div class='DA3_Q114'>"+results.rows.item(i).DA3_Q114+"</div>"+
"<div class='DA3_Q115'>"+results.rows.item(i).DA3_Q115+"</div>"+
"<div class='DA3_Q116'>"+results.rows.item(i).DA3_Q116+"</div>"+
"<div class='DA3_Q117Date'>"+results.rows.item(i).DA3_Q117Date+"</div>"+
"<div class='DA3_Q117Time'>"+results.rows.item(i).DA3_Q117Time+"</div>"+
"<div class='DA3_Q201'>"+results.rows.item(i).DA3_Q201+"</div>"+
"<div class='DA3_Q202a'>"+results.rows.item(i).DA3_Q202a+"</div>"+
//"<div class='DA3_Q202a2'>"+results.rows.item(i).DA3_Q202a2+"</div>"+
"<div class='DA3_Q202b'>"+results.rows.item(i).DA3_Q202b+"</div>"+
//"<div class='DA3_Q202b2'>"+results.rows.item(i).DA3_Q202b2+"</div>"+
"<div class='DA3_Q202c'>"+results.rows.item(i).DA3_Q202c+"</div>"+
//"<div class='DA3_Q202c2'>"+results.rows.item(i).DA3_Q202c2+"</div>"+
"<div class='DA3_Q202d'>"+results.rows.item(i).DA3_Q202d+"</div>"+
//"<div class='DA3_Q202d2'>"+results.rows.item(i).DA3_Q202d2+"</div>"+
"<div class='DA3_Q203'>"+results.rows.item(i).DA3_Q203+"</div>"+
"<div class='DA3_Q204'>"+results.rows.item(i).DA3_Q204+"</div>"+
"<div class='DA3_Q204O'>"+results.rows.item(i).DA3_Q204O+"</div>"+
"<div class='DA3_Q205'>"+results.rows.item(i).DA3_Q205+"</div>"+
"<div class='DA3_Q206'>"+results.rows.item(i).DA3_Q206+"</div>"+
"<div class='DA3_Q207'>"+results.rows.item(i).DA3_Q207+"</div>"+
"<div class='DA3_Q301'>"+results.rows.item(i).DA3_Q301+"</div>"+
"<div class='DA3_Q302'>"+results.rows.item(i).DA3_Q302+"</div>"+
"<div class='DA3_Q303'>"+results.rows.item(i).DA3_Q303+"</div>"+
"<div class='DA3_Q400'>"+results.rows.item(i).DA3_Q400+"</div>"+
"<div class='Entry_User_ID'>"+results.rows.item(i).Entry_User_ID+"</div>"+
"<div class='Entry_Date'>"+results.rows.item(i).Entry_Date+"</div>"
);
var D3_totalRec = i+1;
document.getElementById("D3_countdown").value = "Total record prepared to transfer"+" "+(D3_totalRec);
}
}
else{
document.getElementById("D3_countdown").value = "NO data Available to transfer";
}
}, null);
});

correctedIDSync();

}



function correctedIDSync(){

document.getElementById("CorrectedIDSync").innerHTML="";
   online = window.navigator.onLine;
    if (navigator.onLine) {


           var url = "http://27.147.225.171:8080/DAS_data/getCorrectedIDData.php";

           $.getJSON(url, function(result) {

               $.each(result, function(i, field) {
                   var ChildID = field.ChildID;
                   var MPID = field.MPID;
                   var MCID = field.MCID;
                   var CPID = field.CPID;
                   $("#CorrectedIDSync").append("<div class='Sync_ChildID'>"+ChildID+"</div>"+"<div class='Sync_MPID'>"+MPID+"</div>"+"<div class='Sync_MCID'>"+MCID+"</div>"+"<div class='Sync_CPID'>"+CPID+"</div>");
               });
           });

           }
           else{
          alert("ট্যাব এ ইন্টারনেট কানেকশন নেই।")
           }
                }



   function SyncUpdate(){

                   var Sync_ChildID =  [];
                   var Sync_MPID =  [];
                   var Sync_MCID =  [];
                   var Sync_CPID =  [];

    $('.Sync_ChildID').each(function(){
   Sync_ChildID.push($(this).text());
   });

   $('.Sync_MPID').each(function(){
   Sync_MPID.push($(this).text());
   });

   $('.Sync_MCID').each(function(){
   Sync_MCID.push($(this).text());
   });

   $('.Sync_CPID').each(function(){
   Sync_CPID.push($(this).text());
   });

   var i;
   for (i = 0; i <Sync_ChildID.length; i++) {
   CorrectedID_upload.getIDDATAUpdate(Sync_MPID[i], Sync_CPID[i],Sync_MCID[i], Sync_ChildID[i]);
   }
   }



var CorrectedID_upload={

getIDDATAUpdate: function(Sync_MPID, Sync_CPID,Sync_MCID, Sync_ChildID){
databaseHandler.db.transaction(
function(txIDUPDATE){
txIDUPDATE.executeSql("update DA1_Screening set MPID = ?, CPID = ?, MCID = ? where Child_ID = ?",
[Sync_MPID, Sync_CPID,Sync_MCID, Sync_ChildID]);
txIDUPDATE.executeSql("update DA2_Assessment set MPID = ?, Child_PID = ?, MCID = ? where Child_ID = ?",
[Sync_MPID, Sync_CPID,Sync_MCID, Sync_ChildID]);
txIDUPDATE.executeSql("update DA3 set DA3_Q111 = ?, DA3_Q107 = ?, DA3_Q110 = ? where DA3_childID = ?",
[Sync_MPID, Sync_CPID,Sync_MCID, Sync_ChildID]);
});
}};












function setID(){
databaseHandler.db.transaction(function(transaction) {
var ChildID_CC = document.getElementById("ChildID_1").value;
//transaction.executeSql("SELECT COUNT(*) FROM DA1_Screening where CC_Code='"+ChildID_CC+"';", [], function (tx, results) {
transaction.executeSql("SELECT MAX(CAST(DA1_Screening.Child_ID AS INT)) as 'ChildID' FROM DA1_Screening where CC_Code='"+ChildID_CC+"';", [], function (tx, results) {
//var lenOfCount = results.rows.item(0)["COUNT(*)"];
//var lenToString = lenOfCount.toString();
//var len = lenToString.length;
var total = results.rows.length;

for (var i=0; i<total; i++){
      var id  =  results.rows.item(i).ChildID;

if(id > "0"){
var IDInt = id.toString();
var addIdStr = IDInt.substring(3,7);
var addId = parseInt(addIdStr);
document.getElementById("ChildID_2").value = "0"+(addId+1);
document.getElementById("CurrentChildID").innerHTML = "0"+(addId+1);
}
else{
document.getElementById("ChildID_2").value = "01001";
document.getElementById("CurrentChildID").innerHTML = "01001";
}
}





/*
if(lenOfCount==0){
document.getElementById("ChildID_2").value = "00001";
}
else if(lenOfCount > 0 && lenOfCount <9){
document.getElementById("ChildID_2").value = "0000"+(lenOfCount+1);
}
else if(lenOfCount>=9 && lenOfCount<100){
document.getElementById("ChildID_2").value = "000"+(lenOfCount+1);
}
else if(lenOfCount>=99 && lenOfCount<1000){
document.getElementById("ChildID_2").value = "00"+(lenOfCount+1);
}
else if(lenOfCount>=999 && lenOfCount<=10000){
document.getElementById("ChildID_2").value = "0"+(lenOfCount+1);
}
else{
document.getElementById("ChildID_2").value = (lenOfCount+1);
}
*/


}, null);
});
}






var PCVMasterData={
getMasterChildInfo: function(CPID, MPID){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"select * from PCVMaster where CPID = ? and MPID=?",
[CPID, MPID],
function(tx, result){
var len = result.rows.length;
if(len>0){
var lengt = result.rows.length, i;

for (i=0; i<=lengt-1; i++) {
document.getElementById("DA2_Cluster_code").value =  result.rows.item(i).PCV_Cluster;
document.getElementById("DA2_Block_code").value =  result.rows.item(i).PCV_Block;
document.getElementById("DA2_Q101_code").value =  result.rows.item(i).PCV_Upazila;
document.getElementById("DA2_Q102_code").value =  result.rows.item(i).PCV_Unions;
document.getElementById("DA2_Q103_code").value =  result.rows.item(i).PCV_Village;
document.getElementById("DA2_Q104_code").value =  result.rows.item(i).PCV_Bari;
document.getElementById("DA2_Q105_code").value =  result.rows.item(i).PCV_House;
document.getElementById("DA2_Q108_code").value =  result.rows.item(i).ChildName;
document.getElementById("DA2_Q109").value =  result.rows.item(i).MName;
document.getElementById("DA2_Q110").value =  result.rows.item(i).MCID;
document.getElementById("DA2_Q111").value =  result.rows.item(i).MPID;
document.getElementById("DA2_Q112").value =  result.rows.item(i).Husband;
document.getElementById("DA2_Q113").value =  result.rows.item(i).Phone;
document.getElementById("DA2_Q114").value =  result.rows.item(i).CDOB.substring(0,11);


var D2_dob = new Date(result.rows.item(i).CDOB).getTime();
var D2_today = new Date().getTime();
var D2_timeDiff = Math.abs(D2_today - D2_dob);
var D2_diffDays = Math.ceil(D2_timeDiff / (1000 * 3600 * 24));
var D2_mn = (D2_diffDays/30.4);
document.getElementById("DA2_Q115").value =  D2_mn.toString().split(".")[0];
document.getElementById("DA2_Q116").value =  result.rows.item(i).CSex;
}
}
else{
alert("সঠিক CPID দিন।");
}
},
function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};









var PCV_Village={
getVillageInfo: function(PCV_union){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"select * from village where Union_Code = ?",
[PCV_union],
function(tx, result){
var len = result.rows.length;
if(len>0){
var lengt = result.rows.length, i;
for (i=0; i<=lengt-1; i++) {
$("#DA2_Q103_card_list").append("<li><div onclick='village_set(this);' id='villageID' class='villageID'>"+result.rows.item(i).Village_Code+" - "+result.rows.item(i).Village_Name+"</div></li>");
}
}
},
function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};



var PCV_Bari={
getBariInfo: function(bari){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"select * from bari where Village_Code = ?",
[bari],
function(tx, result){
var len = result.rows.length;
if(len>0){
var lengt = result.rows.length, i;
for (i=0; i<=lengt-1; i++) {
$("#DA2_Q104_card_list").append("<li><div onclick='bari_set(this);' id='bariID' class='bariID'>"+result.rows.item(i).Bari_Code+" - "+result.rows.item(i).Bari_Name+"</div></li>");
}
}
},
function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};






var PCV_HH={
getHHInfo: function(HH){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"select * from HH where Bari_Code = ?",
[HH],
function(tx, result){
var len = result.rows.length;
if(len>0){
var lengt = result.rows.length, i;
for (i=0; i<=lengt-1; i++) {
$("#DA2_Q105_card_list").append("<li><div onclick='HH_set(this);' id='HHID' class='HHID'>"+result.rows.item(i).HH_Code+" - "+result.rows.item(i).HH_Name+"</div></li>");
}
}
},
function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};
























var SCR_PCVMasterData={
SCR_getMasterChildInfo: function(CPID, MPID){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"select * from PCVMaster where CPID = ? and MPID = ?",
[CPID, MPID],
function(tx, result){
var len = result.rows.length;
if(len>0){
var lengt = result.rows.length, i;

for (i=0; i<=lengt-1; i++) {
if(result.rows.item(i).C_Status=="6"){
alert("এই শিশুটি মারা গেছে। পুনরায় আইডি চেক করুন।");
}
else{
document.getElementById("Q102").value =  result.rows.item(i).ChildName;
document.getElementById("Q103").value =  result.rows.item(i).MName;
document.getElementById("Q103Father").value =  result.rows.item(i).Husband;
document.getElementById("Q106_card").value =  result.rows.item(i).CSex;
document.getElementById("Q104_card").value =  result.rows.item(i).CDOB.substring(0,11);
CARD_ChilDOB_M();
}
}
}
else{
alert("সঠিক CPID এবং MPID দিন।");
}
},
function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};







var SCR_PCVMasterData_30day={
SCR_getMasterChildInfo_30day: function(CPID, MPID, CPID1, MPID1){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"select * from PCVMaster where CPID = ? and MPID = ? and not exists(select * from DA2_Assessment where Child_PID = ? and MPID = ? and Q120='1' and date(Entry_Date,'+30 day')>= date('now'))",
[CPID, MPID, CPID1, MPID1],
function(tx, result){
var len = result.rows.length;
if(len>0){
var lengt = result.rows.length, i;

for (i=0; i<=lengt-1; i++) {
document.getElementById("Q208_Card").value="2";
document.getElementById("Q208_Card_Display").value="না";
}
}
else{
document.getElementById("Q208_Card").value="1";
document.getElementById("Q208_Card_Display").value="হাঁ";
}
},
function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};









var D3_PCVMasterData={
D3_getMasterChildInfo: function(CPID, MPID){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"select * from PCVMaster where CPID = ? and MPID = ?",
[CPID, MPID],
function(tx, result){
var len = result.rows.length;
if(len>0){
var lengt = result.rows.length, i;

for (i=0; i<=lengt-1; i++) {
document.getElementById("DA3_Q101_code").value =  result.rows.item(i).PCV_Upazila;
document.getElementById("DA3_Q102_code").value =  result.rows.item(i).PCV_Unions;
document.getElementById("DA3_Q103_code").value =  result.rows.item(i).PCV_Village;
document.getElementById("DA3_Q104_code").value =  result.rows.item(i).PCV_Bari;
document.getElementById("DA3_Q105_code").value =  result.rows.item(i).PCV_House;
document.getElementById("DA3_Q108_code").value =  result.rows.item(i).ChildName;
document.getElementById("DA3_Q109").value =  result.rows.item(i).MName;
document.getElementById("DA3_Q110").value =  result.rows.item(i).MCID;
document.getElementById("DA3_Q111").value =  result.rows.item(i).MPID;
document.getElementById("DA3_Q112").value =  result.rows.item(i).Husband;
document.getElementById("DA3_Q113").value =  result.rows.item(i).CDOB;


var D2_dob = new Date(result.rows.item(i).CDOB).getTime();
var D2_today = new Date().getTime();
var D2_timeDiff = Math.abs(D2_today - D2_dob);
var D2_diffDays = Math.ceil(D2_timeDiff / (1000 * 3600 * 24));
var D2_mn = (D2_diffDays/30.4);
document.getElementById("DA3_Q114").value =  D2_mn.toString().split(".")[0];
document.getElementById("DA3_Q115").value =  result.rows.item(i).CSex;
}
}
else{
alert("সঠিক CPID দিন।");
}
},
function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};






var D2_productHandlerCHK={
D2_addProductCHK: function(chidlID){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
//"select * from DA2_Assessment where Child_PID = ? and MPID = ? and Q120 = '1' and date(Entry_Date,'+30 day')>= date('now')",
"select * from DA2_Assessment where Child_ID = ?",
[chidlID],
function(tx, result){
var len = result.rows.length;
if(len>0){
alert("এই শিশুটি একবার এন্ট্রি হয়ে গেছে। এই আইডি পুনরায় এন্ট্রি দিতে পারবেন না।");

document.getElementById("DA2_Q101_code").value="";
document.getElementById("DA2_Q102_code").value="";
document.getElementById("DA2_Q103_code").value="";
document.getElementById("DA2_Q104_code").value="";
document.getElementById("DA2_Q105_code").value="";
//document.getElementById("DA2_Q106_code").value="";
document.getElementById("DA2_Q108_code").value="";
document.getElementById("DA2_Q109").value="";
document.getElementById("DA2_Q110").value="";
document.getElementById("DA2_Q111").value="";
document.getElementById("DA2_Q112").value="";
document.getElementById("DA2_Q113").value="";
document.getElementById("DA2_Q114").value="";
document.getElementById("DA2_Q115").value="";
}
else{

var cpid = document.getElementById("DA2_Q107").value;
var upazilaCode = document.getElementById("DA2_Q101_code").value;
var unionCode = document.getElementById("DA2_Q102_code").value;
var villageCode = document.getElementById("DA2_Q103_code").value;
var bariCode = document.getElementById("DA2_Q104_code").value;
var hhCode = document.getElementById("DA2_Q105_code").value;
var ccCode = document.getElementById("DA2_Q106_code").value;
var childName = document.getElementById("DA2_Q108_code").value;

var NoCard_upazilaCode = document.getElementById("DA2_Q101_card_no").value;
var NoCard_unionCode = document.getElementById("DA2_Q102_card_no").value;
var NoCard_villageCode = document.getElementById("DA2_Q103_card_no").value;
var NoCard_bariCode = document.getElementById("DA2_Q104_card_no").value;
var NoCard_hhCode = document.getElementById("DA2_Q105_card_no").value;

if(cpid=="" || cpid.length<11 || cpid.length > 11){
alert("সঠিক CPID দিন।");
}
else if(upazilaCode=="" && cpid!="99999999999"){
alert("উপজিলা কোড নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।");
}
else if(unionCode=="" && cpid!="99999999999"){
alert("ইউনিয়ন কোড নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।");
}
else if(villageCode=="" && cpid!="99999999999"){
alert("গ্রামের কোড নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।");
}
else if(bariCode=="" && cpid!="99999999999"){
alert("বাড়ি কোড নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।");
}
else if(hhCode=="" && cpid!="99999999999"){
alert("বাড়ি কোড নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।");
}
else if(childName==""){
alert("শিশুর নাম নেই। আবার CPID দিয়ে শিশুর তথ্য বাটনে চাপ দিন।");
}
else{
window.location.href='#DA2_identification_page_2';
document.getElementById("DA3_Q107").value = document.getElementById("DA2_Q107").value;
}
}},
function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};




var D3_productHandlerCHK={
D3_addProductCHK: function(chidlID){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"select * from DA3 where DA3_childID = ?",
[chidlID],
function(tx, result){
var len = result.rows.length;
if(len>0){
alert("এই শিশুটি একবার এন্ট্রি হয়ে গেছে। এই আইডি পুনরায় এন্ট্রি দিতে পারবেন না।");

document.getElementById("DA3_Q101_code").value="";
document.getElementById("DA3_Q102_code").value="";
document.getElementById("DA3_Q103_code").value="";
document.getElementById("DA3_Q104_code").value="";
document.getElementById("DA3_Q105_code").value="";
//document.getElementById("DA3_Q106_code").value="";
document.getElementById("DA3_Q108_code").value="";
document.getElementById("DA3_Q109").value="";
document.getElementById("DA3_Q110").value="";
document.getElementById("DA3_Q111").value="";
document.getElementById("DA3_Q112").value="";
document.getElementById("DA3_Q113").value="";
document.getElementById("DA3_Q114").value="";
document.getElementById("DA3_Q115").value="";
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
}},
function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};



var PCV_Data_upload={

getPCVDATA: function(PCV_Cluster, PCV_Block, PCV_Upazila, PCV_Unions, PCV_Village, PCV_Bari, PCV_House, PCV_HHname, MName, Husband, MCID, MPID, ChildName, CDOB, CAge, CSex, CPID, Phone, CStatus){
var cl=document.getElementById("PCV_cluster_new").value;



databaseHandler.db.transaction(
function(txPCV, txPCVSelect){
txPCV.executeSql("insert OR IGNORE into PCVMaster (PCV_Cluster, PCV_Block, PCV_Upazila, PCV_Unions, PCV_Village, PCV_Bari, PCV_House, PCV_HHname, MName, Husband, MCID, MPID, ChildName, CDOB, CAge, CSex, CPID, Phone, C_Status) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
[PCV_Cluster, PCV_Block, PCV_Upazila, PCV_Unions, PCV_Village, PCV_Bari, PCV_House, PCV_HHname, MName, Husband, MCID, MPID, ChildName, CDOB, CAge, CSex, CPID, Phone, CStatus], querySuccessPCVMaster);
});


function querySuccessPCVMaster(tx) {
var cl=document.getElementById("PCV_cluster_new").value;
//document.getElementById("totalMasterChildSaved").value = "";
tx.executeSql(
"select count(*)'tot' from PCVMaster where PCV_Cluster = '"+cl+"';",
[],
function(tx, result){
var len = result.rows.length, i;
//document.getElementById("totalMasterChildSaved").value =len;
for (i=0; i<=len-1; i++) {
document.getElementById("totalMasterChildSaved").value = result.rows.item(i).tot;
}

},
function(tx, error){
console.log("add data error: "+ error.message);
});

}

}};




var PCV_Village_upload={
getPCVVillage: function(Union_Code, Village_Code, Village_Name, PCV_Cluster){
databaseHandler.db.transaction(
function(txVill){
txVill.executeSql("insert OR IGNORE into village (Union_Code, Village_Code, Village_Name, PCV_Cluster) values(?,?,?,?)",
[Union_Code, Village_Code, Village_Name, PCV_Cluster], querySuccessVillage);
});

function querySuccessVillage(txVillDis) {
var cl=document.getElementById("PCV_cluster_new").value;
document.getElementById("totalVillageUploaded").value = "";
txVillDis.executeSql(
"select * from village where PCV_Cluster = '"+cl+"';",
[],
function(txVillDis, result){
var len = result.rows.length;
document.getElementById("totalVillageUploaded").value =len;
},
function(txVillDis, error){
console.log("add data error: "+ error.message);
});
}


}};





var PCV_Bari_upload={
getPCVBari: function(Village_Code, Bari_Code, Bari_Name){
databaseHandler.db.transaction(
function(tx){
tx.executeSql("insert OR IGNORE into bari (Village_Code, Bari_Code, Bari_Name) values(?,?,?)",
[Village_Code, Bari_Code, Bari_Name], querySuccess);
});

function querySuccess(tx, results) {
    // this will be empty since no rows were inserted.
    document.getElementById("totalBariUploaded").innerHTML = results.insertId;
    // this will be 0 since it is a select statement
//    console.log("Rows Affected = " + results.rowAffected);
    // the number of rows returned by the select statement
//    console.log("Insert ID = " + results.rows.length);
}

}};




var PCV_HH_upload={
getPCVHH: function(Village_Code, Bari_Code, HH_Code, HH_Name){
databaseHandler.db.transaction(
function(tx){
tx.executeSql("insert OR IGNORE into hh (Village_Code, Bari_Code, HH_Code, HH_Name) values(?,?,?,?)",
[Village_Code, Bari_Code, HH_Code, HH_Name], querySuccess);
});

function querySuccess(tx, results) {
    // this will be empty since no rows were inserted.
    document.getElementById("totalHHUploaded").innerHTML = results.insertId;
    // this will be 0 since it is a select statement
//    console.log("Rows Affected = " + results.rowAffected);
    // the number of rows returned by the select statement
//    console.log("Insert ID = " + results.rows.length);
}

}};





var VarD2List={

getD2List: function(){
document.getElementById("DA2_UnenteredList").innerHTML="";
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"select * from DA1_Screening a where Q209='1' and Q210='1' and not exists(select * from DA2_Assessment b where a.Child_ID= b.Child_ID)",
[],
function(tx, result){
var len = result.rows.length;
if(len>0){
var lengt = result.rows.length, i;
for (i=0; i<=lengt-1; i++) {
$("#DA2_UnenteredList").append("<li><div onclick='D2MissingID_set(this);' id='villageID' class='villageID'>Child ID - "+result.rows.item(i).Child_ID+" # CPID - "+result.rows.item(i).CPID+" # Child name - "+result.rows.item(i).CName+"</div></li>");
}
if(len>0){
window.location.href='#DA2_UnenteredListContainer';
}
}
else{
alert("এখন DA2-Assessment এর কোন অবশিষ্ট ফর্ম নেই।");
}
},
function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};



var VarD3List={

getD3List: function(){
document.getElementById("DA3_UnenteredList").innerHTML="";
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"select * from DA2_Assessment a where Q120='1' and not exists(select * from DA3 b where a.Child_ID= b.DA3_childID)",
[],
function(tx, result){
var len = result.rows.length;
if(len>0){
var lengt = result.rows.length, i;
for (i=0; i<=lengt-1; i++) {
$("#DA3_UnenteredList").append("<li><div onclick='D3MissingID_set(this);' id='villageID' class='villageID'>Child ID - "+result.rows.item(i).Child_ID+" # CPID - "+result.rows.item(i).Child_PID+" # Child name - "+result.rows.item(i).Child_name+"</div></li>");
}
if(len>0){
window.location.href='#DA3_UnenteredListContainer';
}
}
else{
alert("এখন DA3-Sound info. এর কোন অবশিষ্ট ফর্ম নেই।");
}
},
function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};





var VarEnterD2={
getMissingD2Data: function(SCR_childID){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"select * from DA1_Screening a where Q209='1' and Q210='1' and Child_ID = ? and not exists(select * from DA2_Assessment b where a.Child_ID= b.Child_ID)",
[SCR_childID],
function(tx, result){
var len = result.rows.length;
if(len>0){
var lengt = result.rows.length, i;
for (i=0; i<=lengt-1; i++) {

document.getElementById("DA2_ChildID").value = result.rows.item(i).Child_ID;
document.getElementById("da3_childID").value = result.rows.item(i).Child_ID;

document.getElementById("DA3_Q111").value = result.rows.item(i).MPID;

if(result.rows.item(i).CPID!="99999999999"){
document.getElementById("DA2_Q111").value = result.rows.item(i).MPID;
document.getElementById("DA2_Q107").value = result.rows.item(i).CPID;

document.getElementById("DA2_Card_Yes").style.display="block";
document.getElementById("DA2_Card_No").style.display="none";
document.getElementById("DA2_Q101_card_no").value="";
document.getElementById("DA2_Q102_card_no").value="";
document.getElementById("DA2_Q103_card_no").value="";
document.getElementById("DA2_Q104_card_no").value="";
document.getElementById("DA2_Q105_card_no").value="";
document.getElementById("SCR_Card").style.display="block";
}
else{
document.getElementById("DA2_Q111").value = result.rows.item(i).MPID;
document.getElementById("DA2_Q107").value = result.rows.item(i).CPID;
document.getElementById("DA2_Q108_code").value = result.rows.item(i).CName;
document.getElementById("DA2_Q109").value = result.rows.item(i).MName;
document.getElementById("DA2_Q110").value = "99999999999";
document.getElementById("DA2_Q112").value = result.rows.item(i).FName;
document.getElementById("DA2_Q113").value = "99999999999";

if(result.rows.item(i).CDOB==""){
document.getElementById("DA2_Q114").value = "1909-09-09";
}
else{
document.getElementById("DA2_Q114").value = result.rows.item(i).CDOB.substring(0,11);
}

document.getElementById("DA2_Q115").value = result.rows.item(i).CAge;
document.getElementById("DA2_Q116").value = result.rows.item(i).CSex;
document.getElementById("DA2_Card_Yes").style.display="none";
document.getElementById("SCR_Card").style.display="none";
document.getElementById("DA2_Card_No").style.display="block";
document.getElementById("DA2_Q101_code").value="";
document.getElementById("DA2_Q102_code").value="";
document.getElementById("DA2_Q103_code").value="";
document.getElementById("DA2_Q104_code").value="";
document.getElementById("DA2_Q105_code").value="";
}
/*
document.getElementById("DA2_1").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_2").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_3").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_4").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_5").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_6").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_7").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_8").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_9").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_10").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_11").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_12").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_13").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_14").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_15").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_16").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_17").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_18").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_19").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_20").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA2_21").innerHTML =result.rows.item(i).Child_ID;
*/


}
}
},
function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};


















var VarEnterD3={
getMissingD3Data: function(SCR_childID){
databaseHandler.db.transaction(
function(tx){
tx.executeSql(
"select * from DA2_Assessment a where a.Q120='1' and a.Child_ID = ? and not exists(select * from DA3 b where a.Child_ID= b.DA3_childID)",
[SCR_childID],
function(tx, result){
var len = result.rows.length;
if(len>0){
var lengt = result.rows.length, i;
for (i=0; i<=lengt-1; i++) {

document.getElementById("da3_childID").value = result.rows.item(i).Child_ID;

if(result.rows.item(i).Child_PID!="99999999999"){
document.getElementById("DA3_Q111").value = result.rows.item(i).MPID;
document.getElementById("DA3_Q107").value = result.rows.item(i).Child_PID;
document.getElementById("DA3_Q206").value = result.rows.item(i).Child_ID;
document.getElementById("DA3_childInfoGet").style.display="block";
}
else{
document.getElementById("DA3_Q111").value = result.rows.item(i).MPID;
document.getElementById("DA3_Q107").value = result.rows.item(i).Child_PID;
document.getElementById("DA3_Q101_code").value = result.rows.item(i).Upazila_Code;
document.getElementById("DA3_Q102_code").value = result.rows.item(i).Union_code;
document.getElementById("DA3_Q103_code").value = result.rows.item(i).Village_code;
document.getElementById("DA3_Q104_code").value = result.rows.item(i).Bari_code;
document.getElementById("DA3_Q105_code").value = result.rows.item(i).HH_code;
document.getElementById("DA3_Q108_code").value = result.rows.item(i).Child_name;
document.getElementById("DA3_Q109").value = result.rows.item(i).Mother_name;
document.getElementById("DA3_Q110").value = result.rows.item(i).MCID;
document.getElementById("DA3_Q112").value = result.rows.item(i).Father_name;
document.getElementById("DA3_Q113").value = result.rows.item(i).ChDob;
document.getElementById("DA3_Q114").value = result.rows.item(i).ChildAge;
document.getElementById("DA3_Q115").value = result.rows.item(i).ChildSex;
document.getElementById("DA3_Q206").value = result.rows.item(i).Child_ID;
document.getElementById("DA3_childInfoGet").style.display="none";
}

/*
document.getElementById("DA3_1").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA3_2").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA3_3").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA3_4").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA3_5").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA3_6").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA3_7").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA3_8").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA3_9").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA3_10").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA3_11").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA3_12").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA3_13").innerHTML =result.rows.item(i).Child_ID;
document.getElementById("DA3_14").innerHTML =result.rows.item(i).Child_ID;
*/
}
}
},
function(tx, error){
console.log("add data error: "+ error.message);
});
});
}};











var D1_Data_upload={
getD1DATA: function(Child_ID, MPID, CPID, CC_Code, CName, MName, FName, CDOB, CAge, CSex, CHCP, Visit_Date, Start_Time, Q201, Q202, Q203, Q204, Q205, Q206, Q207, Q208, Q209, Q210, End_Time, Entry_User_ID, Entry_Date){
databaseHandler.db.transaction(
function(tx){
tx.executeSql("insert OR IGNORE into DA1_Screening (Child_ID, MPID, CPID,  CC_Code, CName, MName, FName, CDOB, CAge, CSex, CHCP, Visit_Date, Start_Time, Q201, Q202, Q203, Q204, Q205, Q206, Q207, Q208, Q209, Q210, End_Time, Entry_User_ID, Entry_Date) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
[Child_ID, MPID, CPID,  CC_Code, CName, MName, FName, CDOB, CAge, CSex, CHCP, Visit_Date, Start_Time, Q201, Q202, Q203, Q204, Q205, Q206, Q207, Q208, Q209, Q210, End_Time, Entry_User_ID, Entry_Date], querySuccessD1);

});

function querySuccessD1(tx) {

//document.getElementById("totalD1SCRSaved").value = "";
tx.executeSql(
"select count(*)'tot' from DA1_Screening",
[],

function(tx, result){

var lengt = result.rows.length, i;
for (i=0; i<=lengt-1; i++) {
document.getElementById("totalD1SCRSaved").value = result.rows.item(i).tot;
}


},

function(tx, error){
console.log("add data error: "+ error.message);
});




}

}};





var D2_Data_upload={
getD2DATA: function(Child_ID, Child_PID, Upazila_Code, Union_code, Village_code, Bari_code, HH_code, CC_code, Child_name, Mother_name, MCID, MPID, Father_name, Mobile, ChDob, ChildAge, ChildSex, CHCP_code, IntStartDate, IntStartTime, Q119, Q119Other, Q120, Q120Other, Q201a, Q201a_day, Q201b, Q201b_day, Q201c, Q201c_day, Q201d, Q201d_day, Q201e, Q201e_day, Q202, Q202_day, Q203, Q203_day, Q204, Q204_day, Q205_1, Q205_2, Q205_3a_1, Q205_3a_2, Q205_3a_3, Q205_3b_1, Q205_3b_2, Q205_3b_3, Q205_3c_1, Q205_3c_2, Q205_3c_3, Q301, Q302, Q302Other, Q401, Q402a, Q402b, Q403, Q404, Q405, Q501, Q502, Q503, Q504, Q505, Q506, Q601, Q602, Q603a, Q603b, Q603c, Q604, Q605, Q701, Q702, Q703, Q704a, Q704a_time, Q704a_day, Q704b, Q704b_time, Q704b_day, Q704c, Q704c_time, Q704c_day, Q704d, Q704d_time, Q704d_day, Q704e, Q704e_time, Q704e_day, Q704f, Q704f_time, Q704f_day, Q801, Q901, Entry_User_ID, Entry_Date){
databaseHandler.db.transaction(
function(tx){
tx.executeSql("insert OR IGNORE into DA2_Assessment (Child_ID, Child_PID, Upazila_Code, Union_code, Village_code, Bari_code, HH_code, CC_code, Child_name, Mother_name, MCID, MPID, Father_name, Mobile, ChDob, ChildAge, ChildSex, CHCP_code, IntStartDate, IntStartTime, Q119, Q119Other, Q120, Q120Other, Q201a, Q201a_day, Q201b, Q201b_day, Q201c, Q201c_day, Q201d, Q201d_day, Q201e, Q201e_day, Q202, Q202_day, Q203, Q203_day, Q204, Q204_day, Q205_1, Q205_2, Q205_3a_1, Q205_3a_2, Q205_3a_3, Q205_3b_1, Q205_3b_2, Q205_3b_3, Q205_3c_1, Q205_3c_2, Q205_3c_3, Q301, Q302, Q302Other, Q401, Q402a, Q402b, Q403, Q404, Q405, Q501, Q502, Q503, Q504, Q505, Q506, Q601, Q602, Q603a, Q603b, Q603c, Q604, Q605, Q701, Q702, Q703, Q704a, Q704a_time, Q704a_day, Q704b, Q704b_time, Q704b_day, Q704c, Q704c_time, Q704c_day, Q704d, Q704d_time, Q704d_day, Q704e, Q704e_time, Q704e_day, Q704f, Q704f_time, Q704f_day, Q801, Q901, Entry_User_ID, Entry_Date  ) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
[Child_ID, Child_PID, Upazila_Code, Union_code, Village_code, Bari_code, HH_code, CC_code, Child_name, Mother_name, MCID, MPID, Father_name, Mobile, ChDob, ChildAge, ChildSex, CHCP_code, IntStartDate, IntStartTime, Q119, Q119Other, Q120, Q120Other, Q201a, Q201a_day, Q201b, Q201b_day, Q201c, Q201c_day, Q201d, Q201d_day, Q201e, Q201e_day, Q202, Q202_day, Q203, Q203_day, Q204, Q204_day, Q205_1, Q205_2, Q205_3a_1, Q205_3a_2, Q205_3a_3, Q205_3b_1, Q205_3b_2, Q205_3b_3, Q205_3c_1, Q205_3c_2, Q205_3c_3, Q301, Q302, Q302Other, Q401, Q402a, Q402b, Q403, Q404, Q405, Q501, Q502, Q503, Q504, Q505, Q506, Q601, Q602, Q603a, Q603b, Q603c, Q604, Q605, Q701, Q702, Q703, Q704a, Q704a_time, Q704a_day, Q704b, Q704b_time, Q704b_day, Q704c, Q704c_time, Q704c_day, Q704d, Q704d_time, Q704d_day, Q704e, Q704e_time, Q704e_day, Q704f, Q704f_time, Q704f_day, Q801, Q901, Entry_User_ID, Entry_Date], querySuccessD2);

});

function querySuccessD2(tx) {


//document.getElementById("totalD2AssessmentSaved").value = "";
tx.executeSql(
"select count(*)'tot' from DA2_Assessment",
[],
function(tx, result){

var lengt = result.rows.length, i;
for (i=0; i<=lengt-1; i++) {
document.getElementById("totalD2AssessmentSaved").value = result.rows.item(i).tot;
}
},

function(tx, error){
console.log("add data error: "+ error.message);
});





    // this will be empty since no rows were inserted.
//    document.getElementById("totalD2AssessmentSaved").value ="Total record inserted - "+ results.insertId;
    // this will be 0 since it is a select statement
//    console.log("Rows Affected = " + results.rowAffected);
    // the number of rows returned by the select statement
//    console.log("Insert ID = " + results.rows.length);
}

}};




var D3_Data_upload={
getD3DATA: function(DA3_childID, DA3_Q101_code, DA3_Q102_code, DA3_Q103_code, DA3_Q104_code, DA3_Q105_code, DA3_Q106_code, DA3_Q107, DA3_Q108_code, DA3_Q109, DA3_Q110, DA3_Q111, DA3_Q112, DA3_Q113, DA3_Q114, DA3_Q115, DA3_Q116, DA3_Q117Date, DA3_Q117Time,DA3_Q201, DA3_Q202a, DA3_Q202b, DA3_Q202c, DA3_Q202d, DA3_Q203, DA3_Q204, DA3_Q204O, DA3_Q205, DA3_Q206, DA3_Q207, DA3_Q301, DA3_Q302, DA3_Q303, DA3_Q400, Entry_User_ID, Entry_Date){
databaseHandler.db.transaction(
function(tx){
tx.executeSql("insert OR IGNORE into DA3 (DA3_childID, DA3_Q101_code, DA3_Q102_code, DA3_Q103_code, DA3_Q104_code, DA3_Q105_code, DA3_Q106_code, DA3_Q107, DA3_Q108_code, DA3_Q109, DA3_Q110, DA3_Q111, DA3_Q112, DA3_Q113, DA3_Q114, DA3_Q115, DA3_Q116, DA3_Q117Date, DA3_Q117Time,DA3_Q201, DA3_Q202a, DA3_Q202b, DA3_Q202c, DA3_Q202d, DA3_Q203, DA3_Q204, DA3_Q204O, DA3_Q205, DA3_Q206, DA3_Q207, DA3_Q301, DA3_Q302, DA3_Q303, DA3_Q400, Entry_User_ID, Entry_Date) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
[DA3_childID, DA3_Q101_code, DA3_Q102_code, DA3_Q103_code, DA3_Q104_code, DA3_Q105_code, DA3_Q106_code, DA3_Q107, DA3_Q108_code, DA3_Q109, DA3_Q110, DA3_Q111, DA3_Q112, DA3_Q113, DA3_Q114, DA3_Q115, DA3_Q116, DA3_Q117Date, DA3_Q117Time,DA3_Q201, DA3_Q202a, DA3_Q202b, DA3_Q202c, DA3_Q202d, DA3_Q203, DA3_Q204, DA3_Q204O, DA3_Q205, DA3_Q206, DA3_Q207, DA3_Q301, DA3_Q302, DA3_Q303, DA3_Q400, Entry_User_ID, Entry_Date], querySuccessD3);

});

function querySuccessD3(tx) {


//document.getElementById("totalD3SoundSaved").value = "";
tx.executeSql(
"select count(*)'tot' from DA3",
[],
function(tx, result){

var lengt = result.rows.length, i;
for (i=0; i<=lengt-1; i++) {
document.getElementById("totalD3SoundSaved").value = result.rows.item(i).tot;
}

},
function(tx, error){
console.log("add data error: "+ error.message);
});


    // this will be empty since no rows were inserted.
//    document.getElementById("totalD3SoundSaved").value ="Total record inserted - "+ results.insertId;
    // this will be 0 since it is a select statement
//    console.log("Rows Affected = " + results.rowAffected);
    // the number of rows returned by the select statement
//    console.log("Insert ID = " + results.rows.length);
}

}};





function DeleteRec(){
   databaseHandler.db.transaction(function(tx){

    var id = document.getElementById("ChildIDDelete").value;



    tx.executeSql("select * from DA1_Screening where Child_ID >'"+id+"';",[],function(tx,result){
      var len = result.rows.length;

       if(len>0){
        alert("আপনি এই আইডি ডিলিট দিতে পারবেন না। এই আইডির পরে আরও ডাটা আছে।");
        }
else{
    tx.executeSql("delete from DA1_Screening where Child_ID ='"+id+"';",[],function(tx,result){ alert("আইডি ডিলিট হয়েছে।");    });
    tx.executeSql("delete from DA2_Assessment where Child_ID ='"+id+"';",[],function(tx,result){    });
    tx.executeSql("delete from DA3 where DA3_childID ='"+id+"';",[],function(tx,result){    });
}



    });
   });
  }











var PCV_Data_upload1={
getPCVDATA1: function(PCV_Cluster, PCV_Block, PCV_Upazila, PCV_Unions, PCV_Village, PCV_Bari, PCV_House, PCV_HHname, MName, Husband, MCID, MPID, ChildName, CDOB, CAge, CSex, CPID, Phone, CStatus){
databaseHandler.db.transaction(
function(tx){
tx.executeSql("insert OR IGNORE into PCVMaster (PCV_Cluster, PCV_Block, PCV_Upazila, PCV_Unions, PCV_Village, PCV_Bari, PCV_House, PCV_HHname, MName, Husband, MCID, MPID, ChildName, CDOB, CAge, CSex, CPID, Phone, C_Status) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
[PCV_Cluster, PCV_Block, PCV_Upazila, PCV_Unions, PCV_Village, PCV_Bari, PCV_House, PCV_HHname, MName, Husband, MCID, MPID, ChildName, CDOB, CAge, CSex, CPID, Phone, CStatus], querySuccessPCVchild1);
});

function querySuccessPCVchild1(tx) {
//var c = "104";
//document.getElementById("totalPCVChildStatus").value = "";
tx.executeSql(
"select count(*)'tot' from PCVMaster;",
[],
function(tx, result){


var lengt = result.rows.length, i;
for (i=0; i<=lengt-1; i++) {
document.getElementById("masterDataTotal_En").value = result.rows.item(i).tot;
}



},
function(tx, error){
console.log("add data error: "+ error.message);
});
}


}};