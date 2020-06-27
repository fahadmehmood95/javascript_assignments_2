
document.write("<h1>Task 8</h1> <br>");
    var ramdan_date = new Date("04/24/2020"); 
var today_date = new Date("06/27/2020"); 
  
// To calculate the time difference of two dates 
var Days_passed =  today_date.getTime()-ramdan_date.getTime();
  
// To calculate the no. of days between two dates 
var Days_passed = Days_passed / (1000 * 3600 * 24); 
  
//To display the final no. of days (result) 
document.write("Total number of days since ramdan passed :"+ Days_passed); 