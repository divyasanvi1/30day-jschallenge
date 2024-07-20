const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your value: ', (userInput) => {
  const score=parseInt(userInput,10);// we have to parse beacuse userinput takes string and switch uses === which is exact matching also datatype 
  var state=(score%2==0)?"even" :"odd";
  console.log(state);
  rl.close();
});
