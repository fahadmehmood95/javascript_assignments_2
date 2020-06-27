document.write("<h1>Task 3</h1>")

var days=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
var v=new Date();


var day=v.getDay();
day=days[day].slice(0,3);
document.write(day);