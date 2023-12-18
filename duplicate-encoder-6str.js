// The goal of this exercise is to convert a string to a new string
// where each character in the new string is "("
// if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string.

// Ignore capitalization when determining if a character is a duplicate.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// function duplicateEncoder(str) {
//to ignore case, convert toLowerCase at the start
//determine if each character is unique or duplicate
//To loop over each character in this string for the comparison, I need to convert to array
//TEST -> if indexOf each char === lastIndexOf each char -> (  : )
/* *************************** */
/* *************************** */
/* *************************** */
// //THIS SOLUTION USES TWO COPIES OF THE PARAMETER
// const lowerArr = str.toLowerCase();
// const strLower = str.toLowerCase();
// return lowerArr
//   .split("")
//   .map(l => (strLower.indexOf(l) === strLower.lastIndexOf(l) ? "(" : ")"))
//   .join("");

/* *************************** */
/* *************************** */
/* *************************** */

//   //THIS IS THE BEST QUADRATIC SOLUTION
//   // toLowerCase -> split -> map -> join
//   // if letter is unique, then first index === last index; else, letter has duplicates
// function duplicateEncoder(str) {
//   return str
//     .toLowerCase()
//     .split("")
//     .map((l, i, a) => (a.indexOf(l) === a.lastIndexOf(l) ? "(" : ")"))
//     .join("");
// }
function duplicateEncoder(str) {
  return str
    .toLowerCase()
    .split("")
    .map((l, i) => (str.indexOf(l) === str.lastIndexOf(l) ? "(" : ")"))
    .join("");
}

console.log(duplicateEncoder("din"), "(((");
console.log(duplicateEncoder("recede"), "()()()");
console.log(duplicateEncoder("Success"), ")())())");

// // THIS IS MY LINEAR SOLUTION
// const arr = str.toLowerCase().split("");
// const letterCounts = arr.reduce((total, letter) => {
//   total[letter] == null ? (total[letter] = 1) : total[letter]++;
//   return total;
// }, {});
// return arr.map(letter => (letterCounts[letter] > 1 ? ")" : "(")).join("");

//THIS IS A MEMO SOLUTION USING TWO FUNCTIONS FROM CODEWARS
//   function countCharacters(chars) {
//     return chars.reduce((memo, char) => {
//       memo[char] = memo[char] ? memo[char] + 1 : 1;
//       return memo;
//     }, {});
//   }
//   function duplicateEncode(word) {
//     const chars = word.split("").map(ch => ch.toLowerCase());
//     const charsCount = countCharacters(chars);
//     return chars.map(ch => (charsCount[ch] > 1 ? ")" : "(")).join("");
//   }
//   return duplicateEncode(str);
// }

// console.log(duplicateEncoder("din"), "(((");
// console.log(duplicateEncoder("recede"), "()()()");
// console.log(duplicateEncoder("Success"), ")())())");
