const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your value: ', (userInput) => {
  if(userInput>0)
  {
    console.log("positive");
  }
  else if(userInput<0)
  {
    console.log("negative");
  }
  else
  {
    console.log("Zero");
  }
  rl.close();
});
