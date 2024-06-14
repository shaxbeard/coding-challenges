// Maximum Subarray - Medium

// Given an integer array nums, find the subarray
// with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

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

// Method #1 - Brute force - THREE nested loops, so O(n^3)
// function maximumSubarray(arr) {
//   let maxSum = -Infinity;
//   let maxSubarray = []; //This method allows you to show the sum AND the subarray

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       // Use slice() to generate every subarray in the array
//       const subarray = arr.slice(i, j + 1); // O(m)
//       const subarraySum = subarray.reduce((a, c) => a + c, 0); // O(m)
//       if (subarraySum > maxSum) {
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



// METHOD #2 FROM NEETCODE - "SLIDING WINDOW" TO DISCARD NEGATIVE PREFIXES
function maximumSubarray(nums) {
    let maxSub = nums[0];
    let curSum = 0;
    debugger

    for (let n of nums) {
        if (curSum < 0) curSum = 0; //only discard the prefix if it is negative
        curSum += n; //the current sum keeps going every time
        maxSub = Math.max(maxSub, curSum); //the maxSub can diverge from curSum (and then come back!)
    }
    return maxSub;
}

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
// console.log(maximumSubarray([-2, 1, -3, 4, -1, 5, 1, -5, 4])); //for a test
console.log(maximumSubarray([5, 4, -1, 7, 8]), 23);
