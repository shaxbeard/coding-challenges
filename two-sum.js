// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Inputs are
// #1 an array of integers
// #2 an integer target
// Return the indices of the two ints whose sum = target

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// BRUTE FORCE (nested for loops) - O(n^2) quadratic
// function twoSum(nums, target) {
//   // Outer loop for i
//   for (let i = 0; i < nums.length; i++) {
//     // Inner loop for j
//     for (let j = i + 1; j < nums.length; j++) {
//       // If nums[i] + nums[j] = target
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// Linear time complexity - map the indexes and values
// function twoSum(nums, target) {
// //   // create map of the indexes and values
//     const map = {};
//     for (let i = 0; i < nums.length; i++) {
//         map[i] = nums[i]; // map = { 0: 2, 1: 7, 2: 11, 3: 15}
//     }
// //   // loop over the map
//     for (let j = 0; j < map.length; j++) {
//         if (map)
//     }
// //   // if two values have sum of target, then return their keys
// }

// Linear time complexity O(n) - You calculate the sum AS YOU ARE BUILDING THE MAP
function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);
