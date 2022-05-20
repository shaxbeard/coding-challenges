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

// const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);
function binaryArrayToNumber(arr) {
  return parseInt(arr.join(""), 2);
}

console.log(binaryArrayToNumber([1, 1, 1, 1]));
console.log(binaryArrayToNumber([1, 1, 1]));
