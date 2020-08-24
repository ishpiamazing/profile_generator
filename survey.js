const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s is your name? Nicknames are also acceptable :)', (answer1) => {
  rl.question('What\'s an activity you like doing?', (answer2) => {
    rl.question('What is your favorite sports?', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (answer4) => {
      
      console.log(`${answer1} loves ${answer2}, ${answer3} is the favorite sport and ${answer4} is the most favourite meal of the day`);
      rl.close();
  });
});
});
});