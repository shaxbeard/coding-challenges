// Write a function called findCommonStrings that takes an array of arrays as an argument.

// Each sub-array contains an arbitrary number of random strings. Your function should find the strings that occur in every sub-array and return them (the returned result strings must also be in an array).

// There can be duplicates of the same string in any of the sub-arrays.

// Here is an example input and output for your function:
// INPUT
// [  ['apple', 'banana', 'pear', 'orange'],
//   ['apple', 'pear', 'kiwi', 'strawberry'],
//   ['apple', 'pear', 'grape']
// ]
// OUTPUT
// ["apple", "pear"];

// NESTED FOR LOOPS
// function findCommonStrings(arrays) {
//   const result = [];
//   // Nested for() loops to test each item in the first array against the other arrays
//   for (let i = 0; i < arrays[0].length; i++) {
//     const string = arrays[0][i];
//     let isInAllArrays = true;

//     for (let j = 1; j < arrays.length; j++) {
//       if (!arrays[j].includes(string)) {
//         isInAllArrays = false;
//         break;
//       }
//     }
//     if (isInAllArrays && !result.includes(string)) {
//       result.push(string);
//     }
//   }
//   return result;
// }

// USING FILTER AND EVERY
// function findCommonStrings(arrays) {
//   return arrays[0].filter(string =>
//     arrays.every(array => array.includes(string))
//   );
// }

// USING REDUCE AND FILTER
// function findCommonStrings(arrays) {
//   return arrays.reduce((commonStrings, array) =>
//     commonStrings.filter(string => array.includes(string))
//   );
// }

console.log(
  findCommonStrings([
    ["apple", "banana", "pear", "orange"],
    ["apple", "pear", "kiwi", "strawberry"],
    ["apple", "pear", "grape"],
  ]),
  ["apple", "pear"]
);
