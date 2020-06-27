
document.write("<h1>Task 6</h1>")
var current_date=new Date();
var elapsed_seconds=current_date.getTime();
document.write(current_date+"<br>");
document.write("Elapsed MilliSeconds Since junuary 1970 to today"+elapsed_seconds+"<br>")
var Minutes=(elapsed_seconds/60)*1;
document.write("Minutes Since 1970 "+Minutes);