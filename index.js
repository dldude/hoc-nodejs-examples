const readline = require('readline');
const Divide = require("./divide.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What NodeJS example would you like to play? ", (answer) => {
  console.log("You have choosen:", answer);
  console.log("Please hold while loading....");
  console.log();
  if (answer == "divide") {
    const divide = new Divide(rl);
    divide.start();
  } else {
    console.log("Sorry, that example doesn't exist at the moment");
    console.log("Please open a GitHub issue to have this example added")
    console.log("Good bye!")
    rl.close();
  }
});
