# Hybrid android application for Digital Auscultation.
This study aims to improve the diagnostic accuracy of child pneumonia by using automated lung sound classification through digital auscultation.
# Project link
https://www.ed.ac.uk/usher/respire/acute-respiratory-disorders/digital-auscultation-pneumonia-diagnosis
# System description
The study is currently running in Bangladesh, Sylhet. To implement this study we have used android based application. To develop the system I have used hybrid technology, which enable me to use this application in multiple platform. To develop the system used technologies are:<br/>
1.JavaScript<br/>
2.SQLite<br/>
3.JQuery<br/>
4.JQueryMobile<br/>
5.Cordova<br/>
6.PHP<br/>
7.HTML<br/>
8.CSS<br/>

#Process
At present, this application is running in 35 android tablets/users, who are responsible for data collection in the study field site. There are two part of this application<br/>
1.Community clinic<br/>
2.Community health worker<br/>

--Community clinic(CC)--<br/>
This part of the application is used by government emplyee, who is responsible to collect information of the child in the application. If the child meet the criteria and provide the consent for the study then child is considered as an eligible child. End of the they, the data collector use the interent to send the data to sylhet server.<br/>

--Community health worker(CHW)--<br/>
When the server received the data from the comminity clinic, every morning CHW run a function to syncronize the data from the server. The syncronization is done based on eligibility criteria. So, the only eligible children information is syncronized in CHW tab. So every morning they get a list of children and the system generate an automated schedule to visit the children home based on criteria. End of the visit they transferred the data into the sylhet server.

Also CHW visit a child every 2 months and the system generates everyday schedule. If the child is entered today then the child will be eligible to revisit after two months, whcih is calculated by system and generate the schedule for the CHW. The system reduces the workload and now they dont need to follow any hardcopy paper to scheduling the visit.


#Data syncronization
