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

// METHOD 1 - DEMO ONLY -- NESTED FOR LOOPS
// function findCommonStrings(arrays) {
//   const result = [];
//   for (let i = 0; i < arrays[0].length; i++) {
//     const string = arrays[0][i]; // repeated nested index assigned to variable
//     let isInAllArrays = true;

//     for (let j = 1; j < arrays.length; j++) {
//       if (!arrays[j].includes(string)) {
//         isInAllArrays = false;
//         break;
//       }
//     }
//     if (isInAllArrays && !result.includes(string)) {
//       result.push(string); // O(1)
//     }
//   }
//   return result;
// }

// console.log(
//   findCommonStrings([
//     ["apple", "banana", "pear", "orange"],
//     ["apple", "pear", "kiwi", "strawberry"],
//     ["apple", "pear", "grape"],
//   ]),
//   ["apple", "pear"]
// );

// USING FILTER AND EVERY - The time complexity of the provided solution is O(n * m * k)
// function findCommonStrings(arrays) {
//   return arrays[0].filter(string =>
//     arrays.every(array => array.includes(string))
//   );
// }

function findCommonStrings(arrays) {
  return arrays[0].filter(el =>
    arrays.every(subarray => subarray.includes(el))
  );
}

console.log(
  findCommonStrings([
    ["apple", "banana", "pear", "orange"],
    ["apple", "pear", "kiwi", "strawberry"],
    ["apple", "pear", "grape"],
  ]),
  ["apple", "pear"]
);


// function map(arr) {
//   const wordMap = {};
//   for (let word of arr) {
//     if (wordMap[word]) {
//       wordMap[word]++;
//     } else {
//       wordMap[word] = 1;
//     }
//   }
//   return wordMap;
// }

// USING A MAP -  the overall time complexity is O(n + m + k) - simplify to O(n)
// Is it possible to find a recurring PATTERN for this one? Flatten nested arrays, then count each word, then compare to the # of nested arrays?
// function findCommonStrings(arr) {
//   // Remove duplicates from each subarray - we need each string to be unique for this function to work
//   const uniqueArr = arr.map(subArr => [...new Set(subArr)]);
//   // Flatten the nested arrays into a single array
//   const flattenedArray = uniqueArr.flat();

//   const wordMap = map(flattenedArray);

//   // Find the strings with a frequency equal to the number of nested arrays (aka - these strings are in ALL of the nested arrays)
//   const commonStrings = [];
//   for (const key in wordMap) {
//     if (wordMap[key] === arr.length) {
//       commonStrings.push(key);
//     }
//   }
//   return commonStrings;
// }

// console.log(
//   findCommonStrings([
//     ["apple", "banana", "banana", "banana", "pear", "orange"],
//     ["apple", "pear", "kiwi", "strawberry"],
//     ["apple", "pear", "pear", "pear", "pear", "grape"],
//   ]),
//   ["apple", "pear"]
// );
