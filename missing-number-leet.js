// 268. Missing Number
// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.


// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
// 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 
// 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 
// 8 is the missing number in the range since it does not appear in nums.

// Input array has integers. Any funny business? integer-strings? No
// Return the integer that is missing in a range of nums [0,1,3] => 2
// Example: for an array like [0,1], the "range" is [0,1,2] - so compare the presence of nums in arr1, arr2?

// DEMO
// [0,1], nums
// [0,1,2], range
// numsMap = {0: true, 1: true}
// rangeMap = {0: true, 1: true, 2: true}
           

// METHOD #1 - MY SOLUTION - works, but you have to make 2 hash tables and loop over 1 - Time O(4n), M O(2n)
// function missingNumber(nums) {
//     const range = [];
//     for (let i = 0; i <= nums.length; i++) {
//         range.push(i)
//     }
//     const numsMap = presenceMap(nums);
//     const rangeMap = presenceMap(range);
//     for (let key in rangeMap) {
//         if (!numsMap[key]) {
//             return key; 
//         }
//     }
// } 

// function presenceMap(nums) {
//     const presMap = {};
//     for (let num of nums) {
//         if (!presMap[num]) {
//             presMap[num] = true;
//         }
//     }
//     return presMap;
// }

// console.log(missingNumber([3,0,1]), 2)
// console.log(missingNumber([0,1]), 2)
// console.log(missingNumber([9,6,4,2,3,5,7,0,1]), 8)

//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9
//  [9, 6, 4, 2, 3, 5, 7, 0, 1], nums, length = 9
// [-1,-1,-1,-1,-1,-1,-1,-1,-1, 1], original v, length = 10
//         ^                              // Loop using nums.length = 9
// [-1,-1,-1,-1, 4,-1, 6,-1,-1, 9]  ...  at the end, there will be one -1 left

 

// METHOD #2 - CLEVER USE OF A PLACEHOLDER ARRAY
// function missingNumber(nums) {
//     // let n = nums.length;
//     let v = new Array(nums.length+1).fill(-1);
//     for(let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         v[num] = num; // place the NUM from nums in its corresponding INDEX in v
//     }
//     for(let i = 0; i < v.length; i++) {
//         if(v[i] == -1) return i;
//     }
//     return 0;
// };

// console.log(missingNumber([3,0,1]), 2)
// console.log(missingNumber([0,1]), 2)
// console.log(missingNumber([9,6,4,2,3,5,7,0,1]), 8)

// METHOD #3 - CLEVER MATH TRICK - SUBTRACT RANGE SUM FROM NUMS SUM
var missingNumber = function(nums) {
    const n = nums.length;
    
    // Calculate rangeSum using a for loop
    // let rangeSum = 0;
    // for (let i = 0; i <= n; i++) {
    //     rangeSum += i;
    // }
    // Calculate rangeSum using Array.from and reduce
    // const rangeSum = Array.from({length: n + 1}, (_,i) => i).reduce((a,c) => a + c, 0);

    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return rangeSum - actualSum;
};

console.log(missingNumber([3,0,1]), 2)
console.log(missingNumber([0,1]), 2)
console.log(missingNumber([9,6,4,2,3,5,7,0,1]), 8)

// [9,6,4,2,3,5,7,0,1]
// DEMO USING BINARY SEARCH
//  0,1,2,3,4,5,6,7,8 ,9  // indexes
// [0,2,3,4,5,6,7,8,9],x  // nums array sorted, length = 9
//  ^            // mid
//    ^
//    ^
// mid = 9 // 2 = 4
// ALL of the nums past the missing num are 1 bigger than the index
// So search the left half
// mid = 5 // 2 = 2

//METHOD #4 - BINARY SEARCH SOLUTION !!
// var missingNumber = function(nums) {
//     nums.sort((a, b) => a - b); // Sort the array first
//     let left = 0;
//     let right = nums.length; // point to virtual index 1 past the end

//     while (left < right) { // just < not <= like standard binary search
//         const mid = Math.floor((left + right) / 2);
//         if (nums[mid] > mid) { // if the ACTUAL NUM at mid index > the index itself
//             right = mid; // If that's the case, search the left side (including mid)
//         } else {
//             left = mid + 1;
//         }
//     }
//     return left; // the missing number will be the INDEX of left (not the num at that index)
// };


// console.log(missingNumber([3,0,1]), 2)
// console.log(missingNumber([0,1]), 2)
// console.log(missingNumber([9,6,4,2,3,5,7,0,1]), 8)
    
