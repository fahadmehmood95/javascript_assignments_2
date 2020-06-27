document.write("Task 10 <br>")
var today_date=new Date();
var refrence_date=new Date("1/1/2015");
var elapsed_seconds=today_date.getTime()-refrence_date.getTime();

document.write("Seconds passed since 1 jan 2015 :"+elapsed_seconds/1);