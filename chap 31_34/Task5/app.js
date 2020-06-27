
document.write("<h1>Task 5</h1>")
var date=new Date();
var get_day=date.getDate();

if(get_day<16)
{
  alert("First 15 days of month");
}
else
{
  alert("last days of month");
}