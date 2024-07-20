const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your value: ', (userInput) => {
  const score=parseInt(userInput,10);// we have to parse beacuse userinput takes string and switch uses === which is exact matching also datatype 
  var grade;
  switch(true)
  {
    case (score>=90 && score<100): 
    grade="A";
    break;
    case (score>=80 && score<90): 
    grade="B";
    break;
    case (score>=70 && score<80): 
    grade="C";
    break;
    case (score>=60 && score<70): 
    grade="D";
    break;
    default:
   grade="E";
  }
  console.log(grade);
  rl.close();
});
