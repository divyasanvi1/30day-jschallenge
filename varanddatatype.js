var num=4;
num=5
console.log(num);

let num1=5;
num1=6;
console.log(num1);
// const num2=5;
// num2=9;
// console.log(num2);

const state=true;
console.log(state);

console.log(typeof(num));

var s="abcd";
console.log(typeof(s));
console.log(typeof(state));

var student={
    name :"divs",
    class: 10,
}
console.log(typeof(student));

var arr=[1,2,3,4];
console.log(typeof(arr));// output is object beacuse array is a special kind of object and array is implemented
// as objects in javascript
console.log(Array.isArray(arr));

// diffrence of var and let
// var has function scope ,let has block scope
// undefined-var when var is accessed before definition and refrence error in case of let
// redeclare var within same scope while cannot redeclare let within same scope