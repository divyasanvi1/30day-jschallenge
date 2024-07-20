const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your value: ', (userInput) => {
  const day=parseInt(userInput,10);// we have to parse beacuse userinput takes string and switch uses === which is exact matching also datatype 
  var dayName;
  switch(day)
  {
    case 1: 
    dayName="monday";
    break;
    case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "thrusday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "saturday";
    break;
  case 7:
    dayName = "sunday";
    break;
    default:
    dayName='Invalid Day';
  }
  console.log(dayName);
  rl.close();
});
