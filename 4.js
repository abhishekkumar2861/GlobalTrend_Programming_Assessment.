const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function areAnagrams(str1, str2) {
  str1 = str1.replace(/\W/g, "").toLowerCase();
  str2 = str2.replace(/\W/g, "").toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

function checkUserAnagrams() {
  rl.question("Enter the first string: ", (string1) => {
    rl.question("Enter the second string: ", (string2) => {
      if (string1 && string2) {
        const result = areAnagrams(string1, string2);
        if (result) {
          console.log(`"${string1}" and "${string2}" are anagrams.`);
        } else {
          console.log(`"${string1}" and "${string2}" are not anagrams.`);
        }
      } else {
        console.log("Please enter both strings.");
      }
      rl.close();
    });
  });
}

checkUserAnagrams();
