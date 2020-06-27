function calculator(first_num,second,op)
{
    first_num=Number(first_num)
    second=Number(second)
    if(op=='+')
    {
        return first_num+second;
    }
    if(op=='-')
    {
        return first_num-second;
    }
    if(op=='*')
    {
        return first_num*second;
    }
    if(op=='/')
    {
        return first_num/second;
    }
    if(op=='%')
    {
        return first_num%second;
    }

}

var num1=prompt("Enter first num")
var op=prompt("Enter op");
var num2=prompt("Enter Second num")
var result=calculator(num1,num2,op)
document.write(result);