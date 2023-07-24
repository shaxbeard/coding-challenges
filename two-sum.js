// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Inputs are
// #1 an array of integers # NOT NECESSARILY SORTED IN THIS CASE
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

// Input is an array of nums AND a "target" number
// Return the INDICES of two nums from the array that add up to target
// Examples are explained very well for us above
//

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

// Linear time complexity O(n) - You calculate the sum AS YOU ARE BUILDING THE MAP
// function twoSum(nums, target) {
//   // Create an empty object to store the numbers in the input array as keys and their indices as values.
//   const numMap = {};
//   debugger;

// Loop through each number in the array  - we are NOT looping through the numMap
//   for (let i = 0; i < nums.length; i++) {
//     // Check if the difference between the target value and the current ARRAY number is already a KEY in the numMap object.
//     if (target - nums[i] in numMap) {
//       // If it is, return an array containing the index of the current number and the index of the number in numMap that adds up to the target value.
//       return [numMap[target - nums[i]], i];
//     }
//     // If the difference is not in the numMap object, add the current number and its index to the object.
//     numMap[nums[i]] = i;
//   }
//   return [];
// }

// console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
// console.log(twoSum([3, 2, 4], 6), [1, 2]);
// console.log(twoSum([3, 3], 6), [0, 1]);

// var twoSum = function (nums, target) {
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(target - nums[i])) {
//       return [map.get(target - nums[i]), i];
//     } else {
//       map.set(nums[i], i);
//     }
//   }
//   return [];
// };
// console.log(twoSum([3, 2, 4], 6), [1, 2]);
// console.log(twoSum([3, 3], 6), [0, 1]);

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Inputs are
// #1 an array of integers # NOT NECESSARILY SORTED IN THIS CASE
// #2 an integer target
// Return the indices of the two ints whose sum = target

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

//Input - An array of integers; A "target" integer - any funny business?
//Return the INDICES of the two numbers in the array that add up to target

//Brute force with nested arrays will be O(n2)
//Using a map to store the numbers and their indices should be O(n)
function twoSum(nums, target) {
  //Check input?
  //Initialize an empty object to store each number and its index { 3: 0, 2: 1, 4: 2}
  let map = {};

  //Loop through the array and check if the current number plus its "complement" (in the map) equals the target

  for (let [i, num] of nums.entries()) {
    // for (let i = 0; i < nums.length; i++) {
    // [3, 2, 4]
    //The complement is the target minus the current number
    let complement = target - num;

    //If the complement IS in the map already, return the INDICES of the current num and the complement

    if (complement in map) {
      return [map[complement], i];
    }

    //If the complement is NOT in the map, add the current number and its index to the map
    map[num] = i;
  }

  //If there are no pairs that add up to the target, return -1?
  return [];
}

console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);
