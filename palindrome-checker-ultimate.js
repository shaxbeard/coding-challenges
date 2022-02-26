// Three approaches the solving the palindrome check

// THE EASIEST WAY

function palindromeChecker(str) {
  const reversedStr = str.toLowerCase().split("").reverse().join("");
  return str === reversedStr;
}

console.log(palindromeChecker("racecar"), true);
console.log(palindromeChecker("algorithm"), false);
