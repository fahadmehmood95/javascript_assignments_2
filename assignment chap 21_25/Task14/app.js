
 
document.write("<h1>Task 14</h1> <br>");
var arr=["cake","apple pie","cookie","chips","patties"];
var item=prompt("Enter an item to buy if available \n");

if(item==item.toUpperCase())
{
  //item=item.toLowerCase();

  

}

if(item[0].toUpperCase())
{
  item=item.toLowerCase();
}
for (var i=0;i<arr.length;i++)

{
  if(arr[i]==item)
  {
    alert("yes this item is availabe at index "+i);
    var flag2=0;
    flag2++;
  }
  if(arr[i]!=item)
  {
    var flag=0;
    flag++;
  }

}
if(flag>0 && flag==0)
{
  alert("Sorry this item is not available");
}
