// An anagram is the result of rearranging the letters of a word to produce a new word.

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

//input - two strings - any funny business? case insensitive
//return true if anagram; return false if not
//examples of anagrams
//"foefet" and "toffee" -> true
//"Buckethead" and "DeathCubeK" -> true

//Method with charMap - make a charmap for str1 then check each letter in str2 for same char frequency

//Method with sting methods? Maybe sort by their charCodes?

// function anagram(str1, str2) {
//   // case insensitive
// if (str1.length !== str2.length) {
// return false;
// }
//   const lower1 = str1.toLowerCase();
//   const lower2 = str2.toLowerCase();
//   const charMap = {};
//   for (let char of lower1) {
//     if (!charMap[char]) {
//       charMap[char] = 1;
//     } else {
//       charMap[char]++;
//     }
//   }
//   const charMap2 = {};
//   for (let char of lower2) {
//     if (!charMap2[char]) {
//       charMap2[char] = 1;
//     } else {
//       charMap2[char]++;
//     }
//   }
//   for (let char in charMap) {
//     if (charMap2[char] !== charMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

//Method #2 - Using the sort() array method
// function anagram(test, original) {
//   var testSorted = test.toLowerCase().split("").sort().join("");
//   var originalSorted = original.toLowerCase().split("").sort().join("");
//   return testSorted === originalSorted;
// }

//Method #3 - Edit the prototype of the String object to add a method you can call
String.prototype.sortLetters = function () {
  return this.toLowerCase().split("").sort().join("");
};

var anagram = function (test, original) {
  return test.sortLetters() == original.sortLetters();
};

console.log(anagram("foefet", "toffee"), true);
console.log(anagram("Buckethead", "DeathCubeK"), true);
console.log(anagram("dog", "cat"), false);
