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
// function findMaxSubarraySum(arr) {
//   let maxSum = -Infinity;
//   let maxSubarray = []; //This method allows you to show the sum AND the subarray

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       // Use slice() to generate every subarray in the array
//       const subarray = arr.slice(i, j + 1); // O(m)
//       const subarraySum = subarray.reduce((acc, curr) => acc + curr, 0); // O(m)
//       // Test each sum against a maxSum on each iteration
//       if (subarraySum > maxSum) {
//         maxSum = subarraySum;
//         maxSubarray = subarray;
//       }
//     }
//   }
//   return [maxSum, maxSubarray];
// }

// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const [maxSum, maxSubarray] = findMaxSubarraySum(arr);

// console.log("Maximum Subarray Sum:", maxSum);
// console.log("Maximum Subarray:", maxSubarray);

// maxSum = 7
// nums = [-2, 1, -2, 4, 3, 6, 7, -5, 4]
// nums[i]                     ^
//

// maxSum = 5
// nums = [-2, 1, -2, 4, 3, 5, 6, -5, 4]
// nums[i]                     ^                  ^
// runningMax = 7

//Method #2 - Keep a running maximum sum by overwriting the input array
function maximumSubarray(nums) {
  debugger;
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    //Mutate the input array to store a running max sum at each index
    let runningMax = nums[i] + nums[i - 1];
    nums[i] = Math.max(nums[i], runningMax);
    //If the next number is larger than the running max sum, then start counting again with the new number
    maxSum = Math.max(maxSum, nums[i]);
  }
  return maxSum;
}

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maximumSubarray([5, 4, -1, 7, 8]), 23);
