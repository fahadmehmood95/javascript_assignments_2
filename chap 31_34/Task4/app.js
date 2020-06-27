document.write("<h1>Task 4</h1>")
var arr=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
var check_day=new Date();
var day=check_day.getDay();
day=arr[day];
if(day=="Sunday" || day=="Saturday")
{
  alert("its fun day!");
}

