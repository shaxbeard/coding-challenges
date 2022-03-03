// Palindrom Checker. Given a string of text, return true or false
// indicating whether or not the text is a palindrome

// Three approaches the solving the palindrome check

// THE EASIEST WAY

function palindromeChecker(str) {
  const reversedStr = str.toLowerCase().split("").reverse().join("");
  return str === reversedStr;
}

// LOOPING THROUGH AND COMPARING CHARACTERS

function palindromeChecker(str) {
  let charArray = str.toLowerCase().split("");
  return charArray.every((l, i) => l === charArray[charArray.length - i - 1]);
}

// LOOPING THROUGH AND COMPARING CHARACTERS(OPTIMIZED)
function palindromeChecker(str) {
  var strLen = str.length;
  for (let i = 0; i < strLen / 2; i++) {
    if (str[i] !== str[strLen - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(palindromeChecker("racecar"), true);
console.log(palindromeChecker("algorithm"), false);
