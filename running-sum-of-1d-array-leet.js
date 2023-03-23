// 1480. Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
// Explanation: Running sum is obtained as follows: [3, 3+1, 3+1+2, 3+1+2+10, 3+1+2+10+1]

//Inputs - numbers (integers)
//Return an array - each array item is a "running total" of the items in the input array
//Code
//Loop over the input array (nested loop to access curr + prev? - or no, just arr[i] and arr[i - 1]
//On each iteration, add the current item IN THE INPUT ARRAY to the number at the end of the RESULT ARRAY and push the sum to a new array
// [1,2,3,4]
// [1, 1+2, 1+2+3, 1+2+3+4]
// [1, 1+2, [prev]+3, [prev]+4]

// [1, 1+2, [prev] + 3, []]
//Ignore the first iteration

// FOR LOOP WITHOUT THE NEED FOR A CONDITIONAL - with some variations
// function runningSum(arr) {
//   let result = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     // result.push(arr[i] + result[result.length - 1]);
//     // result[i] = arr[i] + result[result.length - 1];
//     result[i] = arr[i] + result[i - 1]; // this is the leet code solution
//   }
//   return result;
// }

// FOR LOOP OVERWRITING THE INPUT ARRAY
function runningSum(nums) {
  for (let i = 1; i < nums.length; i++) {
    // nums[i] = nums[i - 1] + nums[i];
    nums[i] += nums[i - 1];
  }
  return nums;
}

// REDUCE LOOP OVERWRITING THE INPUT ARRAY
// const runningSum = nums => {
//   nums.reduce((a, c, i, arr) => (arr[i] += a));
//   return nums;
// };

console.log(runningSum([1, 2, 3, 4]), [1, 3, 6, 10]);
console.log(runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]);
console.log(runningSum([3, 1, 2, 10, 1]), [3, 4, 6, 16, 17]);
