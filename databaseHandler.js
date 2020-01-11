var databaseHandler = {
db:null,
createDatabase: function(){
this.db = window.openDatabase("products.db", "1.0", "product database",200000);

this.db.transaction(
function (tx){




tx.executeSql(
"Create table if not exists user(CHCP_Code integer primary key, password text, CHCP_Name TEXT, CC_Code text, CHCP_Status)",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
//alert(error.message);
}
)



tx.executeSql(
"Create table if not exists CCDevice(CHCP_Code integer primary key, D_code text)",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
//alert(error.message);
}
)


/*
tx.executeSql(
"insert OR IGNORE into user(CHCP_Code , password, CHCP_Name, CC_Code, CHCP_Status) VALUES('4001','4001','RIMON AHMED CHY','89','1'),('4002','4002','TAHMINA AKTER CHY','87','1'), ('4003','4003','ROWSHONARA KHANOM','83','1'), ('4004','4004','BODRUL AMIN JUNEL','79','1'),('4005','4005','NILUFA YESMIN','78','1'),"+
"('4006','4006','MST MONOWARA BEGUM','88','1'),('4007','4007','ABDUS SAMAD','86','1'),('4008','4008','MINA BEGUM','95','1'),('4009','4009','FARHANA BEGUM','94','1'),('4010','4010','FORHAD HUSSAIN','71','1'),('4011','4011','KAMRU NESA','82','1'),"+
"('4012','4012','RAHENA BEGUM','81','1'),('4013','4013','SHAYLA AKTER','76','1'),('4014','4014','SHAYLA AKTER','70','1')",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
}
)

*/


tx.executeSql(
"Create table if not exists CC_List(CC_Code Text primary key, CC_Name TEXT, CC_Govt_Code text, CC_Address VARCHAR(600), Start_Date text, CC_Status Text )",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
}
)

tx.executeSql(
"insert OR IGNORE into CC_List(CC_Code, CC_Name, CC_Govt_Code, CC_Address, Start_Date, CC_Status) VALUES "+
"('89','NANDHICHREE CC','CC-100-130-89','ATGRM RATONGONJ ROAD END OF NANDHICHREE NEW PACCA ROAD SOUTH OF NANDHICHREE PRIMARY SCHOOL  ','02/05/2019','1'),"+
"('87','BALLAH CC','CC-100-130-87','KALIGONJ TO  ATGRAM ROAD BHAVONER SORAK NEAR THE MONDIR SOUTH SIDE OF NEW MOSQUE UNDER CONSTRUCTION ','02/05/2019','1'),"+
"('83','KASKANOKPUR CC','CC-100-130-83','KALIGONJ UNION OFFICE ROAD CHECK POST ROAD SOUTH SIDE OF GASTALA MASQUE KASKANAKPUR','02/05/2019','1'),"+
"('79','GUTARGRAM CC','CC-100-130-79','ATGRM RATONGONJ ROAD RIGHT SIDE OF  GOTERGRAM TO  CHOUDHARY BAZAR ROAD VILL GUTARGRAM KAJALSHAR ','02/05/2019','1'),"+
"('78','SUPRAKANDI CC','CC-100-130-78','ZAKIGANJ TO SHEOLA ROAD NORTH SIDE OF ROAD VILL SUPRAKANDI BIROSEE UNION','02/05/2019','1'),"+
"('88','BRAMMONGRAM CC','CC-100-130-88','KALIGONJ TO UNION OFFICE KHOLATUA TO BRAMMONGRAM NEAR THE IASMOTI KHO PRIMARY SCHOOL DIGHIRPER VILL BRAMMONGRAM MANIKPUR UNION','02/05/2019','1'),"+
"('86','SADARPUR CC','CC-100-130-86','KALIGONJ TO KARAIA TO ZAKIGANJ ROAD NORTH SIDE OF THE ROAD VILL BANGRAM KHALACHARA UNION','02/05/2019','1'),"+
"('95','BAKHORSHAL CC','CC-100-130-95','ZAKIGANJ TO BABUR BAZAR ROAD HAFSA MOJUMDER COLLAGE TO MANIKPUR BGP CAMP ROAD NORTH SIDE OF BGP CAMP BILL BAKHORSHAL ZAKIGANJ UNION','02/05/2019','1'),"+
"('94','PATHANCHAK CC','CC-100-130-92','ZAKIGANJ TO THANA BAZAR THANABAZAR TO PATANCHALK VILL PATHANCHAK NORTH SIDE OF ALOMS SHOP ','02/05/2019','1'),"+
"('71','PASCHIMBANDH CC','CC-100-130-94','ZAKIGANJ TO BABURBAZAR BABURBAZAR TO GACHUA ROAD VILL PASCHIMBANDH SOUTH SIDE OF BABUL DAKTER','02/05/2019','1'),"+
"('82','GHECHUA CC ','CC-100-130-90','ZAKIGANJ TO BABURBAZAR BABURBAZAR TO GACHUA VILL GHECHUA SOUTH SIDE OF UPAZIA VICE CHAIRMAN MOULANA ABDUS SABUR','02/05/2019','1'),"+
"('81','UTTARKUL CC','CC-100-130-71','KALIGONJ TO ZAKIGANJ ROAD MAIN ROAD TO UTTERKUL CHECK POST BGP ROAD UTTER UTTARKUL NEAR THE UTTERKUL MADRASHA SOUTH OF TIPU CHAIRMANS BARI','02/05/2019','1'),"+
"('76','DHARIAPUR CC','CC-100-130-70','KALIGONG TO KADURBAZAR  NORTH SIDE OF KADURBAZAR VILL DAHRIAPUR UNION BAROTHAKURI','02/05/2019','1'),"+
"('70','KAYESTOKAPON','CC-100-130-82','KALIGONj UNION OFFICE UNION OFFICE TO HATHIDOHOR ROAD NEAR THE EX UP CHAIRMAN ROBOI MIAS BARI VILL KAYESTOKAPON UNION KASKANOKPUR','02/05/2019','1')",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
}
)




tx.executeSql(
"create table if not exists village (Union_Code text, Village_Code text Primary key, Village_Name text, PCV_Cluster text)",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
}
)








tx.executeSql(
"create table if not exists bari (Village_Code text, Bari_Code text, Bari_Name text,  PRIMARY KEY (Village_Code, Bari_Code))",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
}
)



tx.executeSql(
"create table if not exists HH (Village_Code text, Bari_Code text, HH_Code text, HH_Name text text,  PRIMARY KEY (Village_Code, Bari_Code, HH_Code))",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
}
)



tx.executeSql(
"create table if not exists DA1_Screening (CardAvailable text, Child_ID Text Primary key, MPID text, MCID text, CPID text, CC_Code Text,CName Text,MName Text, FName Text,CDOB Text,CAge Text,CSex Text,CHCP Text,Visit_Date Text,Start_Time Text,Q201 Text,Q202 Text,Q203 Text,Q204 Text,Q205 Text,Q206 Text,Q207 Text,Q208 Text,Q209 Text,Q210 Text, End_Time Text, Entry_User_ID Text, Entry_Date DATE DEFAULT (datetime('now','localtime')))",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
}
)


tx.executeSql(
"create table if not exists DA2_Assessment (Child_ID Text Primary key, Cluster text, Block text, Upazila_Code Text,Union_code Text,Village_code Text,Bari_code Text,HH_code Text,CC_code Text,Child_PID Text,Child_name Text,Mother_name Text,MCID Text,MPID Text,Father_name Text,Mobile Text,ChDob Text,ChildAge Text,ChildSex Text,CHCP_code Text,IntStartDate Text,IntStartTime Text,Q119 Text,Q119Other text, Q120 Text, Q120Other text, Q201a text, Q201a_day text, Q201b text, Q201b_day text, Q201c text, Q201c_day text, Q201d text, Q201d_day text, Q201e text, Q201e_day text, Q202 text, Q202_day text, Q203 text, Q203_day text, Q204 text, Q204_day text, Q205_1 text, Q205_2 text, Q205_3a_1 text, Q205_3a_2 text, Q205_3a_3 text, Q205_3b_1 text, Q205_3b_2 text, Q205_3b_3 text, Q205_3c_1 text, Q205_3c_2 text, Q205_3c_3 text, Q301 text, Q302 text , Q302Other text, Q401 text, Q402a text, Q402b text, Q403 text, Q404 text, Q405 text, Q501 text, Q502 text, Q503 text, Q504 text, Q505 text, Q506 text, Q601 text , Q602 text, Q603a text, Q603b text, Q603c text, Q604 text, Q605 text, Q701 text, Q702 text, Q703 text, Q704a text, Q704a_time text, Q704a_day text, Q704b text, Q704b_time text, Q704b_day text, Q704c text, Q704c_time text, Q704c_day text, Q704d text, Q704d_time text, Q704d_day text, Q704e text, Q704e_time text, Q704e_day text, Q704f text, Q704f_time text, Q704f_day text, Q801 text, Q901 text, Entry_User_ID Text, Entry_Date DATE DEFAULT (datetime('now','localtime')))",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
}
)




tx.executeSql(
"create table if not exists DA3 (DA3_childID text Primary key, DA3_Q101_code text, DA3_Q102_code text, DA3_Q103_code text, DA3_Q104_code text, DA3_Q105_code text, DA3_Q106_code text, DA3_Q107 text, DA3_Q108_code text, DA3_Q109 text, DA3_Q110 text,DA3_Q111 text, DA3_Q112 text, DA3_Q113 text, DA3_Q114 text, DA3_Q115 text, DA3_Q116 text, DA3_Q117Date text, DA3_Q117Time text,DA3_Q201 text, DA3_Q202a text, DA3_Q202b text, DA3_Q202c text, DA3_Q202d text, DA3_Q203 text, DA3_Q204 text, DA3_Q204O text, DA3_Q205 text, DA3_Q206 text, DA3_Q207 text, DA3_Q301 text, DA3_Q302 text, DA3_Q303 text, DA3_Q400 text, Entry_User_ID Text, Entry_Date DATE DEFAULT (datetime('now','localtime')))",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
}
)


/*
tx.executeSql(
"drop table PCVMaster",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
}
)
*/

tx.executeSql(
"create table if not exists PCVMaster(PCV_Cluster Text, PCV_Block Text, PCV_Upazila Text, PCV_Unions Text, PCV_Village Text, PCV_Bari Text, PCV_House Text, PCV_HHname Text, MName Text, Husband Text, MCID Text, MPID Text, ChildName Text, CDOB Text, CAge Text, CSex Text, CPID Text Primary key, Phone Text, C_Status text)",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
}
)

/*
tx.executeSql(
"ALTER TABLE PCVMaster ADD COLUMN C_Status text",
[],
function (tx, results){},
function(tx, error){
console.log("Error while creating table "+ error.message);
}
)
*/





},
function(error){
console.log("Transaction error: "+error.message);
},
function (){
console.log("Create DB transaction completed successfully");
}
);
}
}









