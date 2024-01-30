// Maximum Subarray - Medium

// Given an integer array nums, find the subarray
// with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Say there was just 5 elements in the array [9,8.7,6,5]
//Method #1 - Brute force to find the largest subarray
//Starting with each number in the array
//
//[0]
//[0,1]
//[0,1,2]
//[0,1,2,3.4] // This is all of subarrays starting with 0
//[1]
//[1,2]
//[1,2,3]
//[1,2,3,4] // This is all of the subarrays starting with 1
//[2]
//[2,3]
//[2,3,4] // this is all of the subarrays starting with 2
//[3]
//[3,4]
//[4]

// Method #1 - Brute force with nested for() loops to test all combinations of numbers
// function maximumSubarray(arr) {

//   //Initialize a maxSum at negative infinity and a maxSubarray as an empty array
//   let maxSum = -Infinity;
//   let maxSubarray = []; //This method allows you to show the sum AND the subarray

//   //Make a nested loop so you can compare each item in the array against every other item
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       // Use slice() to generate every subarray in the array
//       const subarray = arr.slice(i, j + 1); // O(m)
//       // Use reduce() to sum each of these subarrays
//       const subarraySum = subarray.reduce((acc, curr) => acc + curr, 0); // O(m)
//       // Test each sum against a maxSum on each iteration
//       if (subarraySum > maxSum) {
//         // If the sum of the current subArray is higher than maxSum, update the maxSum and the maxSubarray
//         maxSum = subarraySum;
//         maxSubarray = subarray;
//       }
//     }
//   }
//   // After all of the loops are done, return the maxsum and the maxSubarray
//   return [maxSum, maxSubarray];
// }

// console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
// console.log(maximumSubarray([5, 4, -1, 7, 8]), 23);

// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const [maxSum, maxSubarray] = findMaxSubarraySum(arr);

// console.log("Maximum Subarray Sum:", maxSum);
// console.log("Maximum Subarray:", maxSubarray);

// maxSum = 7
// nums = [-2, 1, -2, 4, 3, 6, 7, -5, 4]
// nums[i]                     ^
//

// nums = [-2, 1, -2, 4, -1, 2, 1, -5, 4]
// nums[i]            ^                                     ^
// maxSum = 1
// localMax = -2

//Method #2 - Keep a running maximum sum by overwriting the input array
function maximumSubarray(nums) {
  // Initialize a variable for maxSum at the value of the first number in the array (index 0)
  debugger;
  let maxSum = nums[0];
  // Loop through the array starting at index 1
  for (let i = 1; i < nums.length; i++) {
    // Add up the number at the current index with the previous index (which will be the running max sum)
    let localMax = nums[i] + nums[i - 1];
    //If the local maxSum is larger by adding the current number, then mutate the current number to store the local maxSum
    //If the local maxSum is SMALLER by adding the current number, then leave the current number as it is
    nums[i] = Math.max(nums[i], localMax);
    //If the next number is larger than the running max sum, then start counting again with the new number
    maxSum = Math.max(maxSum, nums[i]);
  }
  return maxSum;
}

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maximumSubarray([5, 4, -1, 7, 8]), 23);
