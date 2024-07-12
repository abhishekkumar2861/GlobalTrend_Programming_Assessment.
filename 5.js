const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function removeDuplicates(array) {
  return Array.from(new Set(array));
}

function getUserArray() {
  rl.question(
    "Enter a list of numbers separated by commas (e.g. 1, 2, 2, 3, 4, 4, 5): ",
    (userInput) => {
      if (userInput) {
        try {
          const array = userInput
            .split(",")
            .map((item) => parseFloat(item.trim()));
          if (array.every(Number.isFinite)) {
            const uniqueArray = removeDuplicates(array);
            console.log(`Array with duplicates removed: ${uniqueArray}`);
          } else {
            console.log("Input contains invalid numbers.");
          }
        } catch (e) {
          console.log("Invalid input.");
        }
      } else {
        console.log("No input provided.");
      }
      rl.close();
    }
  );
}

getUserArray();
