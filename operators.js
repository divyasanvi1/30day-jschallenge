var num1=5;
var num2=4;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

num1+=5;
console.log(num1);
num1-=1;
console.log(num1);

if(num1>num2)
{
    console.log(num1);
}
 if(num2<num1)
{
    console.log(num2);
}
var a=123;
var b="123";
if(a==b)
{
    console.log(true);
}
if(a===b)
{
    console.log(true);
}

if(num1>0 && num2>0)
{
    console.log("and");
}

if(num1>5 || num2>5)
{
    console.log("or");
}

if(num1>5 && (!(num2>5)))
    {
        console.log("negate");
    }

    var num3=-6;
    var state=num3>0? "positive" :"negative";
    console.log(state);