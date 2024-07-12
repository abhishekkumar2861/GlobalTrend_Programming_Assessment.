const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function evaluateExpression(expression) {
  expression = expression.replace(/\s+/g, "");

  let numbers = expression.split(/[\+\-]/).map(Number);
  let operators = expression.split(/[0-9]+/).filter((op) => op);

  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "+") {
      result += numbers[i + 1];
    } else if (operators[i] === "-") {
      result -= numbers[i + 1];
    }
  }

  return result;
}

function evaluateUserExpression() {
  rl.question(
    "Enter an arithmetic expression (e.g., 10 + 20 - 5): ",
    (expression) => {
      if (expression) {
        const result = evaluateExpression(expression);
        console.log(`Result: ${result}`);
        rl.close();
      } else {
        console.log("No expression entered.");
        rl.close();
      }
    }
  );
}

evaluateUserExpression();
