/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// CHAINING BUILT-IN METHODS

// function reverseString(text) {
//   return text.split("").reverse().join("");
// }

// //  CHAINING BUILT-IN METHODS USING ES6
// function reverseString(text) {
//   return [...text].reverse().join("");
// }

// USING A FOR LOOP
// function reverseString(text) {
//   let result = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     result += text[i];
//   }
//   return result;
// }

// USING A FOR..OF LOOP IN ES6

// function reverseString(text) {
//   let result = "";
//   for (let char of text) {
//     result = char + result;
//   }
//   return result;
// }

// RECURSIVE METHOD
// function reverseString(text) {
//   if (text === "") {
//     return "";
//   } else {
//     return reverseString(text.substr(1)) + text[0];
//   }
// }

// USING .REDUCE()
// function reverseString(text) {
//   return text.split("").reduce((word, letter) => letter + word, "");
// }

// Using a basic for() loop - manual transmission
// function reverseString(text) {
//   let result = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     result += text[i];
//   }
//   return result;
// }

// Using a for...of loop
// function reverseString(text) {
//   let result = "";
//   for (char of text) {
//     result = char + result;
//   }
//   return result;
// }

//Using reduce
// function reverseString(text) {
//   return text.split("").reduce((word, char) => char + word, "");
// }

//recursion
function reverseString(text) {
  //base case
  if (text === "") {
    return "";
  }
  //recursive case
  return reverseString(text.slice(1)) + text.charAt(0);
}

console.log(reverseString("algorithm"), "mhtirogla");
console.log(reverseString("123456789"), "987654321");
