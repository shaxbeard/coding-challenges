/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// CHAINING BUILT-IN METHODS

// function reverseString(text) {
//   return text.split("").reverse().join("");
// }

//  CHAINING BUILT-IN METHODS USING ES6

function reverseString(text) {
  return [...text].reverse().join("");
}

console.log(reverseString("algorithm"), "mhtirogla");
console.log(reverseString("123456789"), "987654321");
