//Remove any duplicated strings within each of the nested arrays.

//Example
// Input: Some of the nested arrays have duplicate strings
// [
//   ["apple", "banana", "pear", "orange"],
//   ["apple", "pear", "kiwi", "kiwi", "strawberry"],
//   ["apple", "pear", "pear", "pear", "pear", "grape"],
// ]
// Output: Each array has only unique strings
// [
//   [ 'apple', 'banana', 'pear', 'orange' ],
//   [ 'apple', 'pear', 'kiwi', 'strawberry' ],
//   [ 'apple', 'pear', 'grape' ]
// ]

// SOLUTION USING MAP() AND A SET
// function uniqueArrays(arrayOfArrays) {
//   return arrayOfArrays.map(subarray => [...new Set(subarray)]);
// }

// Nested loops O(n * m) - n = nested arrays, m = items in each array
// function uniqueArrays(arrayOfArrays) {
//   const uniques = arrayOfArrays.map(subarray => {
//     const occurrences = {};
//     const uniqueSubarray = [];

//     for (let item of subarray) {
//       if (!occurrences[item]) {
//         occurrences[item] = true;
//         uniqueSubarray.push(item);
//       }
//     }
//     return uniqueSubarray;
//   });

//   return uniques;
// }

// function uniqueArrays(arrayOfArrays) {
//   const uniques = arrayOfArrays.map(subarray => {
//     const occurrences = {};
//     const uniqueSubarray = [];

//     for (let item of subarray) {
//       if (!uniqueSubarray.includes(item)) {
//         uniqueSubarray.push(item);
//       }
//     }
//     return uniqueSubarray;
//   });

//   return uniques;
// }

function uniqueArrays(arrayOfArrays) {
  const occurrences = {};
  const uniqueSubarray = [];

  arrayOfArrays;
}

// function uniqueArrays(arrayOfArrays) {
//   return arrayOfArrays.map(subarray => [...new Set(subarray)]);
// }

console.log(
  uniqueArrays([
    ["apple", "banana", "pear", "orange"],
    ["apple", "pear", "kiwi", "kiwi", "strawberry"],
    ["apple", "pear", "pear", "pear", "pear", "grape"],
  ]),
  [
    ["apple", "banana", "pear", "orange"],
    ["apple", "pear", "kiwi", "strawberry"],
    ["apple", "pear", "grape"],
  ]
);
