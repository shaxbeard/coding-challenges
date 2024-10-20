// First, a simpler version of merging two arrays, then below it, the Leetcode version of the question

// [0, 3, 4, 31], [4, 6, 30]
//          ^               ^
// Step 1 [0]
// Step 2: [0,3]
// Step 3: [0,3,4]
// Step 4: [0,3,4,4]
// Step 5: [0,3,4,4,6]
// Step 6: [0,3,4,4,6,30]

// WAIT - WHY CAN'T YOU JUST DO THIS ??
// function mergeArrays(a, b) {
//     return [...new Set(a.concat(b))].sort((a, b) => a - b);
// }

// console.log(mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
// console.log(mergeArrays([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8]);

// DEMO FOR THE TWO POINTER METHOD

// merged = [0,3,4,4,6,30,31]
// LEFT   
//  0, 1, 2, 3  - indexes        
// [0, 3, 4, 31], length = 4
//           i      
// RIGHT
//  0, 1, 2   - indexes
// [4, 6, 30],  length = 3
//            j

// Method BEST - Simpler merge function with concat() to ensure all items have been included
// This is a common "merge" function when building mergeSort()
function mergeSortedArrays(left, right) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) { // why "length" not "length - 1" ??
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // return merged.concat(left.slice(i)).concat(right.slice(j));
  return [...merged, ...left.slice(i), ...right.slice(j)];
}

console.log(
  mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]),
  [0, 3, 4, 4, 6, 30, 31]
);

// What is this? - Is this the function will merge n sorted arrays?
// function mergeSortedArrays(arrays) {
//   let result = arrays[0];
//   for (let i = 1; i < arrays.length; i++) {
//     result = mergeTwoArrays(result, arrays[i]);
//   }
//   return result;
// }

// const mergedArray = mergeSortedArrays([[1, 3, 5], [2, 4, 6], [0, 7, 8]]);
// console.log(mergedArray, [0, 1, 2, 3, 4, 5, 6, 7, 8]);


// function mergeTwoArrays(arr1, arr2) {
//     let merged = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] < arr2[j]) {
//         merged.push(arr1[i]);
//         i++;
//       } else {
//         merged.push(arr2[j]);
//         j++;
//       }
//     }
//     return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
//   }