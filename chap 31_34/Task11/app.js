var date_And_time=new Date();




var date=date_And_time.getDate();
var month=date_And_time.getMonth();
var Hours=date_And_time.getHours()-1;
var year=date_And_time.getFullYear();
var day=date_And_time.getDate();
var day_w=date_And_time.getDay();
var getm=date_And_time.getMinutes();
var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months=["Jan ","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var d=days[day_w];
var m=months[month];


document.write("Current Time :"+date_And_time+"<br>");

document.write("Time an hour ago was :"+d+" "+m+" "+day+" "+year+" "+Hours+":"+date_And_time.getMinutes()+":"+date_And_time.getSeconds()+" "+"GMT+0500 (Pakistan Standard Time)");