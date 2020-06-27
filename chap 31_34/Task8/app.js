
document.write("<h1>Task 8</h1>")
var ramdan_date = new Date("24/6/2020"); 
var today_d = new Date("27/6/2020"); 
  
// To calculate the time difference of two dates 
var days_passed_since_ramadan = ramdan_date.getTime() - today_d.getTime(); 
  
// To calculate the no. of days between two dates 
var days_passed_since_ramadan = days_passed_since_ramadan / (1000 * 3600 * 24); 
  
//To display the final no. of days (result) 
document.write("Total number of days passed since first ramdan are :"+ days_passed_since_ramadan); 

