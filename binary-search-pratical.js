// LeetCode #704 - Binary Search
// Given an array of integers nums which is sorted in ascending order, 
// and an integer target, write a function to search target in nums. 

// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4



// // LINEAR SEARCH SOLUTION WITH FOR LOOP - SEARCH THE ENTIRE ARRAY
// function linearSearch(arr, item) {
//   let index = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       index = i;
//     }
//   }
//   return index;
// }

// console.log(linearSearch([2, 6, 7, 90, 103], 90), 3);

// LINEAR SEARCH SOLUTION WITH FOR LOOP - STOP SEARCHING WHEN YOU FIND A MATCH
// function linearSearch(arr, item) {
//   // let index = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch([2, 6, 7, 90, 103], 90), 3);

// BINARY SEARCH SOLUTION #1
// function binarySearch(arr, item) {
//   var min = 0;
//   var max = arr.length - 1;
//   var middle;

//   while (min <= max) {
//     middle = Math.floor((min + max) / 2);

//     if (arr[middle] === item) {
//       return middle;
//     } else {
//       if (arr[middle] < item) {
//         min = middle + 1;
//       } else {
//         max = middle - 1;
//       }
//     }
//   }
//   return -1;
// }

// David Malan's pseudocode step #1 for Binary Search
//if "target" is in the middle
// return target
//Else if target < middle
// search the left half
//Else if target > middle
// search the right half


//   0 1 2 3 4 5 
// [-1,0,3,5,9,12], target = 9
//                  # mid
//   ^              # min
//              ^   # max


function binarySearch(nums, target) {
  let min = 0;
  let max = nums.length - 1;

  while (min <= max) { // MUST have <= operator here
    let mid = Math.floor((min + max) / 2); // calculate the middle index
    // let mid = min + Math.floor(((max - min) / 2)); // Refactor for huge data
    if (nums[mid] === target) { // IF the middle IS the target, return the index - no else clause
      return mid;
    } else if (nums[mid] < target) { // ELSE IF the middle is < the target, search the left half
      min = mid + 1;
    } else {   // ELSE IF the middle is > the target, search the right half
      max = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch([-1,0,3,5,9,12], 9), 4);
console.log(binarySearch([2, 6, 64, 90, 103, 200], 90), 3);




// LEON'S SOLUTION
// function binarySearch(nums, target) {
//   let left = 0,
//   let right = nums.length - 1;
//   while (left < right) {
//     let mid = left + Math.floor((right - left + 1) / 2);
//     if (target < nums[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid;
//     }
//   }
//   return nums[left] === target ? left : -1;
// }

// console.log(binarySearch([2, 6, 64, 90, 103, 200], 90), 3);
