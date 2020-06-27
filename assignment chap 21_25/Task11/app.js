
document.write("<h1>Task 11</h1> <br>");
var lang=prompt("Enter any input \n")
var first_char=lang.slice(0,1)

var otherchar=lang.slice(1);
first_char=first_char.toUpperCase()
otherchar=otherchar.toLowerCase()
var lang=first_char+otherchar;

document.write("Input you enterd after changings is :"+lang+"<br>");

