const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your value: ', (userInput) => {
  if(userInput>=18)
  {
    console.log("eligible");
  }
  else
  {
    console.log("Not eligible");
  }
  rl.close();
});
