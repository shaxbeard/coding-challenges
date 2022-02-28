// Three approaches the solving the palindrome check

// THE EASIEST WAY

// function palindromeChecker(str) {
//   const reversedStr = str.toLowerCase().split("").reverse().join("");
//   return str === reversedStr;
// }

// LOOPING THROUGH AND COMPARING CHARACTERS

function palindromeChecker(str) {
  let charArray = str.toLowerCase().split("");
  return charArray.every((l, i) => l === charArray[charArray.length - i - 1]);
}

console.log(palindromeChecker("racecar"), true);
console.log(palindromeChecker("algorithm"), false);
