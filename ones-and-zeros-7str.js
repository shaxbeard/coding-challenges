// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//PREP
//Paramters - an array of 1s, 0s > max length = 4????
//Return - sum of the binary value of the array digits
//Example
//Pseudocode  - loop, sum
//Methods!

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.
//SO
// Testing: [1, 1, 1] => 7

// const binaryArrayToNumber = (arr) => {
//   if (arr.length === 4) {
//     const binaryArrayVals = arr.map((item, index) => {
//       if (index === 0) {
//         item *= 8;
//       } else if (index === 1) {
//         item *= 4;
//       } else if (index === 2) {
//         item *= 2;
//       }
//       return item;
//     });
//     return binaryArrayVals.reduce((a, b) => a + b);
//   }
//   if (arr.length === 3) {
//     const binaryArrayVals = arr.map((item, index) => {
//       if (index === 0) {
//         item *= 4;
//       } else if (index === 1) {
//         item *= 2;
//       } else if (index === 2) {
//         item *= 1;
//       }
//       return item;
//     });
//     return binaryArrayVals.reduce((a, b) => a + b);
//   }
// };

//METHOD #2 - USING THE BUILT-IN ABILITY FOR PARSE-INT TO READ BINARY FROM A STRING

// Step 1. arr.join(""): This joins all the elements of the array into a single string. For example, [1, 1, 1, 1].join("") would result in the string "1111".

// Step 2. parseInt(..., 2): The second argument to parseInt() specifies the radix or base of the numeral system to be used. In this case, 2 indicates that the input string is in base-2 (binary).

// THE LONG WAY WITH COMMENTS
// function binaryArrayToNumber(arr) {
//   // Convert the array to a string so that we can pass it into parseInt
//   let str = arr.join("");

//   // Use parseInt to convert the stringified number from binary (base 2) to decimal (base 10)
//   let decimal = parseInt(str, 2);

//   // return the decimal version of the number
//   return decimal;
// }

// THE SHORTER WAY
function binaryArrayToNumber(arr) {
  return parseInt(arr.join(""), 2);
}

// THE TRICKY FORMULA
// const binaryArrayToNumber = arr => {
//   return arr.reduce((a, c) => (a = a * 2 + c), 0);
// };

// AN EVEN TRICKIER TECHNIQUE
// function binaryArrayToNumber(arr) {
//   return arr.reduce( (a, b) => a << 1 | b );
// }

console.log(binaryArrayToNumber([1, 1, 1, 1]));
console.log(binaryArrayToNumber([1, 1, 1]));
