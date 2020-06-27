function fact(val)
{
for(var i=1;i<=val;i++)
{
    var res;
    if(i>1)
    {
        
res= i*(i-1);
document.write(res+"<br>");
    }
}
}

var v=prompt("Enter value to get its factorial");
v=fact(v);
//document.write(v);