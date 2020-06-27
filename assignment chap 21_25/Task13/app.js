
document.write("<h1>Task 13</h1> <br>");

var user_name=prompt("Enter a user name \n")
var flag=0;

for(i=0;i<user_name.length;i++)

{
    if(user_name[i]=='@' || user_name[i]=='.' ||user_name[i]==',' || user_name[i]=='!')
  {
        alert("please Enter valid user name \n");
    }
    if(user_name[i]!='@' || user_name[i]!='.' ||user_name[i]!=',' || user_name[i]!='!')
    {
      flag++;
     
      }

}
if(flag>0)
{
  document.write("this user name is ok");
}
