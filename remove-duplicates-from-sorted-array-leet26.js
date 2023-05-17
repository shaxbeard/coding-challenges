// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
// such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function (nums) {
  //   return [...new Set(nums)];  // this does not remove the duplicates "in place"

  // NESTED FOR LOOP (QUADRATIC - O(n^2)) - RUNTIME 144 ms
  //Compare each individual number with the rest of the numbers in the array
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       // If a number is duplicated, remove the duplicate instances of the number from the array IN PLACE
//       if (nums[i] === nums[j]) {
//         nums.splice(j, 1);
//         j--;
//       }
//     }
//   }
//   // Count the final number of unique elements (as k)
//   let uniqueLength = nums.length;
//   return nums;
// };

// USING FILTER AND FIND?
// Does filter edit the array IN PLACE? I don't think so
// nums[0].filter(el => el.find(item => item === el); // This filter method is not going well

// LEET CODE ANSWER - RUNTIME 129 ms
// var removeDuplicates = function(nums) {
//     for (i = 0; i < nums.length; i++) {
//         //Next number is identical to current one
//         if (nums[i] == nums[i+1]) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }
// };

console.log(removeDuplicates([1, 1, 2]), 2);
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5);
