
document.write("<h1>Task 13</h1> <br>");

var users_age=prompt("Enter your age in years:");
var d=new Date();
var today_year=d.getFullYear();
var users_born_year=today_year-users_age
document.write("User's age is :"+users_age+"<br>");
document.write("Year in which user born :"+users_born_year);