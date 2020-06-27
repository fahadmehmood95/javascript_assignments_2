document.write("<h1>Task 15</h1> <br>");
var password=prompt("Enter your password \n");
if(password[0]>=0 || password[0]<=0 ||password.length<6 )
{
  alert("please enter correct password ");

}

else
{
  alert(password+":This is correct password");
}
