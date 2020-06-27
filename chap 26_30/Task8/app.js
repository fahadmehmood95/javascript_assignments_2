

document.write("<h1>Task 8</h1>")

var secret_num=Math.floor(Math.random()*9)+1;
var user_num=prompt("Enter number to guess :");
if(user_num==secret_num)
{
    alert("Congragulations you win !");


}
else
{
    alert("Sorry secret number was :"+secret_num);
}