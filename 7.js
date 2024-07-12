const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateFibonacci(n) {
  let fibSeq = [];

  fibSeq[0] = 0;
  fibSeq[1] = 1;

  for (let i = 2; i < n; i++) {
    fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
  }

  return fibSeq;
}

rl.question("Enter the number of Fibonacci numbers to generate: ", (input) => {
  let n = parseInt(input);

  if (Number.isNaN(n) || n <= 0) {
    console.log("Please enter a positive integer greater than zero.");
  } else {
    const fibonacciNumbers = generateFibonacci(n);
    console.log(`First ${n} Fibonacci numbers:`, fibonacciNumbers);
  }

  rl.close();
});
