const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your value: ', (userInput) => {
  const year=parseInt(userInput,10);// we have to parse beacuse userinput takes string and switch uses === which is exact matching also datatype 
   var state=(year%400==0)?"leap year":
             (year%100==0)?"Not a leap year":
             (year%4==0)?"leap year":"Not a leap year";
             console.log(state);
  rl.close();
});
