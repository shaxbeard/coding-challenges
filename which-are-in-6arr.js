// Given two arrays of strings a1 and a2
// return a sorted array r in lexicographical order
// of the strings of a1 which are substrings of strings of a2.

// Parameters are two arrays of strings
// Return an array containing the strings of parameter a1 that are substrings of the strings of parameter a2

// Example 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

// NESTED LOOPS WITH INCLUDES()
// function inArray(array1, array2) {
//     const result = [];
//     for (let i = 0; i < array1.length; i++) {
//       for (let j = 0; j < array2.length; j++) {
//         if (array2[j].includes(array1[i]) && !result.includes(array1[i])) {
//           result.push(array1[i]);
//         }
//       }
//     }
//     return result.sort();
//   }

// FILTER, FIND, AND INCLUDES
// function inArray(arr1, arr2) {
//   return arr1.filter(inner => arr2.find(outer => outer.includes(inner))).sort();
// }

// FILTER, SOME, AND INCLUDES
function inArray(arr1, arr2) {
  return arr1.filter(inner => arr2.some(outer => outer.includes(inner))).sort();
}

console.log(
  inArray(
    ["arp", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  ),
  ["arp", "live", "strong"]
);
console.log(
  inArray(
    ["harp", "mice", "bull"],
    ["lively", "alive", "starp", "sharp", "armstrong"]
  ),
  ["harp"]
);
