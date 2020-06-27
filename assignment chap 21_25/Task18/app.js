
document.write("<h1>Task 18</h1> <br>");
var text=" “The quick brown fox jumps over the lazy dog”";
var count=0;
document.write("Given string :"+text+"<br>");
for(var  i=0;i<text.length;i++)
{
    if(text=="the")
    {
      count++;

    }
}

document.write("There are " +count+ " occnurane of words the in text")

