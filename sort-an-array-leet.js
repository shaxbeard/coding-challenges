// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity
// and with the smallest space complexity possible.

// JS NATIVE SORT METHOD
// function sortArray(nums) {
//   return nums.sort((a, b) => a - b);
// }

// console.log(sortArray([5, 2, 3, 1]), [1, 2, 3, 5]);
// console.log(sortArray([5, 1, 1, 2, 0, 0]), [0, 0, 1, 1, 2, 5]);

//Pseudocode
// Repeat n-1 times
//  For i from 0 to n-2
//    If i'th and i+1'th elements out of order
//      Swap them

// // basic implementation
// function bubbleSortBasic(array) {
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 1; j < array.length; j++) {
//       if (array[j - 1] > array[j]) {
//         var temp = array[j - 1];
//         array[j - 1] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   return array;
// }

// console.log(bubbleSortBasic([5, 2, 3, 1]), [1, 2, 3, 5]);

// Creating the bblSort function
// function bblSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 1; j < arr.length; j++) {
//       if (arr[j - 1] > arr[j]) {
//         var temp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// // This is our unsorted array
// console.log(
//   bblSort([234, 43, 55, 63, 5, 6, 235, 547]),
//   [5, 6, 43, 55, 63, 234, 235, 547]
// );

// OPTIMIZED BUBBLE SORT
// function bblSort(arr) {
//   let swapped = false;
//   for (var i = 0; i < arr.length; i++) {
//     swapped = false;
//     for (var j = 1; j < arr.length; j++) {
//       if (arr[j - 1] > arr[j]) {
//         var temp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//         swapped = true;
//       }
//     }
//     if (!swapped) {
//       break;
//     }
//   }
//   return arr;
// }

// // This is our unsorted array
// console.log(
//   bblSort([234, 43, 55, 63, 5, 6, 235, 547]),
//   [5, 6, 43, 55, 63, 234, 235, 547]
// );

// MERGE SORT

//If only one item
//  Return
//Else
//  Sort left half of items
//  Sort right half of items
//  Merge sorted halves

// function mergeSort(arr) {
//   if (arr.length === 1) {
//     return arr;
//   }
//   const middle = Math.floor(arr.length / 2);
//   const sortedLeft = mergeSort(arr.slice(0, middle));
//   const sortedRight = mergeSort(arr.slice(middle));
//   return merge(sortedLeft, sortedRight);
// }

// function merge(left, right) {
//   let result = [];
//   let indexLeft = 0;
//   let indexRight = 0;

//   while (indexLeft < left.length && indexRight < right.length) {
//     if (left[indexLeft] < right[indexRight]) {
//       result.push(left[indexLeft]);
//       indexLeft++;
//     } else {
//       result.push(right[indexRight]);
//       indexRight++;
//     }
//   }
//   return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
// }

// console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]), [3, 9, 10, 27, 38, 43, 82]);

// QUICK SORT

function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }
  return quicksort(left).concat(pivot, quicksort(right));
}

console.log(
  quicksort([23, 45, 16, 37, 3, 99, 22]),
  [3, 16, 22, 23, 37, 45, 99]
);

// QUICK SORT WITH RANDOM PIVOT

// function quicksort(array) {
//   if (array.length <= 1) {
//     return array;
//   }

//   let pivot = array[Math.floor(Math.random() * array.length)];
//   let left = [];
//   let right = [];
//   let equal = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < pivot) {
//       left.push(array[i]);
//     } else if (array[i] > pivot) {
//       right.push(array[i]);
//     } else {
//       equal.push(array[i]);
//     }
//   }
//   //   return quicksort(left).concat(equal, quicksort(right));
//   return [...quicksort(left), ...equal, ...quicksort(right)];
// }

// console.log(
//   quicksort([23, 45, 16, 37, 3, 99, 22]),
//   [3, 16, 22, 23, 37, 45, 99]
// );

// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const pivot = arr[Math.floor(Math.random() * arr.length)];

//   let left = [];
//   let right = [];
//   let equal = [];

//   for (let val of arr) {
//     if (val < pivot) {
//       left.push(val);
//     } else if (val > pivot) {
//       right.push(val);
//     } else {
//       equal.push(val);
//     }
//   }
//   return [...quickSort(left), ...equal, ...quickSort(right)];
// }

// console.log(
//   quickSort([23, 45, 16, 37, 3, 99, 22]),
//   [3, 16, 22, 23, 37, 45, 99]
// );
