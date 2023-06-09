// Given an integer array nums, return true if any value appears
//  at least twice in the array, and return false if every element is distinct.

// Parameters -integers, no decimals, no strings as int -> No funny business
// Return - true if any duplicates; false if all elements are unique
// Pseudocode
// Methods - Set

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// console.log(containsDuplicate([1, 2, 3, 1]), true);
// console.log(containsDuplicate([1, 2, 3, 4]), false);
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);

// USING NESTED FOR LOOPS - Big O (n^2) - quadratic
// const containsDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let k = i + 1; k < nums.length; k++) {
//       if (nums[i] === nums[k]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };
// console.log(containsDuplicate([1, 2, 3, 1]), true);
// console.log(containsDuplicate([1, 2, 3, 4]), false);
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);

// USING A MAP - THEN LOOPING OVER THE MAP
// const containsDuplicate = function (nums) {
//   // first you create a hash map
//   const map = nums.reduce((obj, el) => {
//     !obj[el] ? (obj[el] = 1) : obj[el]++;
//     return obj;
//   }, {});

//   //then you loop over the map and return true IF the map contains a duplicate
//   for (const num in map) {
//     if (map[num] > 1) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(containsDuplicate([1, 2, 3, 1]), true);
// console.log(containsDuplicate([1, 2, 3, 4]), false);
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);

// USING A MAP
// PATTERN OF LOGIC - TEST THE MAP AS YOU ARE BUILDING IT
// const containsDuplicate = function (arr) {
//   const numsMap = {};
//   for (num of arr) {
//     // as you are building the map, return true as soon as you find a duplicate
//     if (numsMap[num]) {
//       return true;
//       // if no duplicate, then just set the first instance of a num to true
//     } else {
//       numsMap[num] = true;
//     }
//   }
//   return false;
// };

// console.log(containsDuplicate([1, 2, 3, 1]), true);
// console.log(containsDuplicate([1, 2, 3, 4]), false);
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);

// // USING SET
const containsDuplicate = function (nums) {
  const uniques = [...new Set(nums)];
  return uniques.length !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
