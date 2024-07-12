const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

rl.question("Enter numbers separated by commas: ", (input) => {
  let numbers = input.split(",").map((num) => parseInt(num.trim()));

  let filteredNumbers = filterEvenNumbers(numbers);
  console.log("Filtered odd numbers:", filteredNumbers);

  rl.close();
});
