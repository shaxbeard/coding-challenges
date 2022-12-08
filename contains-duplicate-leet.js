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

// USING SET
const containsDuplicate = function (nums) {
  const uniques = [...new Set([...nums])];
  return uniques.length !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
