const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function capitalizeFirstLetterOfEachWord(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getUserString() {
  rl.question("Enter a string: ", (userInput) => {
    if (userInput) {
      const capitalizedString = capitalizeFirstLetterOfEachWord(userInput);
      console.log(`Capitalized String: ${capitalizedString}`);
    } else {
      console.log("No input provided.");
    }
    rl.close();
  });
}

getUserString();
