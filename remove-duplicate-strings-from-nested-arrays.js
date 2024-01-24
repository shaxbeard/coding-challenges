// Remove any duplicated strings within each of the nested arrays.

// Example
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
function uniqueArrays(arrayOfArrays) {
  return arrayOfArrays.map(subarray => [...new Set(subarray)]);
}

//Using a map to track repeated occurrences within each array - O(n * m)
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

// USING MAP WITH A FOR() LOOP NESTED INSIDE OF IT
// function uniqueArrays(arrayOfArrays) {
//   const uniques = arrayOfArrays.map(subarray => {
//     const occurrences = {};
//     const uniqueSubarray = [];

//     //Loop through each subarray and push only the first occurrence to the new subarray
//     for (let i = 0; i < subarray.length; i++) {
//       if (!occurrences[subarray[i]]) {
//         occurrences[subarray[i]] = true;
//         uniqueSubarray.push(subarray[i]);
//       }
//     }
//     return uniqueSubarray;
//   });
//   return uniques;
// }

// USING TWO NESTED FOR() LOOPS INSTEAD OF USING MAP FOR THE
// function uniqueArrays(arrayOfArrays) {
//   const uniques = [];
//   for (let j = 0; j < arrayOfArrays.length; j++) {
//     // const uniques = arrayOfArrays.map(subarray => {
//     const occurrences = {};
//     const uniqueSubarray = [];

//     //Loop through each subarray and push only the first occurrence to the new subarray
//     for (let i = 0; i < arrayOfArrays[j].length; i++) {
//       if (!occurrences[arrayOfArrays[j][i]]) {
//         occurrences[arrayOfArrays[j][i]] = true;
//         uniqueSubarray.push(arrayOfArrays[j][i]);
//       }
//     }
//     // return uniqueSubarray;
//     // });
//     uniques.push(uniqueSubarray);
//   }
//   return uniques;
// }

// Using filter() with the occurance map instead of a manual loop
// function uniqueArrays(arrayOfArrays) {
//   return arrayOfArrays.map(subarray => {
//     const seen = {};
//     return subarray.filter(item => {
//       if (!seen[item]) {
//         seen[item] = true;
//         return true;
//       }
//       return false;
//     });
//   });
// }

// You COULD just use includes() to test the array itself, but the time complexity would not be as good as the object lookup !!
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
