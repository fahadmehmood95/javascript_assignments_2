function add()
{
  var first=prompt("enter first number");
  var second=prompt("enter second number");
  first=Number(first);
  second=Number(second);


  return first+second;
  
}
var result;
result=add();

document.write("Addition of two numbers "+result);