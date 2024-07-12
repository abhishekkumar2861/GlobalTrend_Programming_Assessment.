const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function flattenArray(nestedArray) {
  let flatArray = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      element.forEach(flatten);
    } else {
      flatArray.push(element);
    }
  }

  flatten(nestedArray);
  return flatArray;
}

function flattenUserArray() {
  rl.question(
    "Enter a nested array (e.g.[1, [2, [3, 4], 5], 6, [7, 8]]): ",
    (userInput) => {
      try {
        const nestedArray = JSON.parse(userInput);
        if (Array.isArray(nestedArray)) {
          const flatArray = flattenArray(nestedArray);
          console.log(`Flattened Array: ${flatArray}`);
        } else {
          console.log("Input is not a valid array.");
        }
      } catch (e) {
        console.log("Invalid JSON input.");
      }
      rl.close();
    }
  );
}

flattenUserArray();
