// Find the Difference of Two Arrays. The category for this solution is Hash Set.

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

// Note that the integers in the lists may be returned in any order.

// Example 1:
// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]

// Example 2:
// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]


// METHOD #1 - My answer without using a set
// function difference(nums1, nums2) {
//   const hash1 = {};
//   const hash2 = {};
//   for (let num of nums1) {
//     !hash1[num] ? hash1[num] = true: null;
//   }
//   for (let num of nums2) {
//     !hash2[num] ? hash2[num] = true: null;
//   }

//   // Section 2 - push the distinct integers into 2 arrays
//   const res1 = [];
//   const res2 = [];
//   for (let num in hash1) {
//     if (hash1[num] && !hash2[num]) res1.push(num);
//   }
//   for (let num in hash2) {
//     if (hash2[num] && !hash1[num]) res2.push(num);
//   }
//   return [res1.map(Number), res2.map(Number)];
// }

// console.log(difference([1,2,3], [2,4,6]), [[1,3], [4,6]]);
// console.log(difference([1,2,3,3],[1,1,2,2]), [[3],[]])

// // METHOD #2 - MUCH BETTER SOLUTION USING HASH SETS
// DEMO
// nums1 = [1,2,3,6]
// nums2 = [2,4,6,8]
// If we convert the input arrays to sets, we can just DELETE the common nums from BOTH sets
// set1 = {1,3}
//           ^
// set2 = {4,8}
// then convert each set back to an array [1,3], [4,8]

// function difference(nums1, nums2) {
//     set1 = new Set(nums1)
//     set2 = new Set(nums2)
//     // You can do one pass and delete the common items in BOTH sets
//     for (let item of set1){
//         if (set2.has(item)) {
//             set1.delete(item)
//             set2.delete(item)
//         }
//     }    
//     return [[...set1], [...set2]]
// }

// console.log(difference([1,2,3], [2,4,6]), [[1,3], [4,6]]);
// console.log(difference([1,2,3,3],[1,1,2,2]), [[3],[]])

// METHOD #3 - If we can't use sets, we can filter the arrays like so
// function difference(nums1, nums2) {
//     // Step 1: Remove duplicates from each array
//     const uniqueNums1 = nums1.filter((item, index) => nums1.indexOf(item) === index);
//     const uniqueNums2 = nums2.filter((item, index) => nums2.indexOf(item) === index);
    
//     // Step 2: Delete items that are in both arrays
//     const result1 = uniqueNums1.filter(item => !uniqueNums2.includes(item));
//     const result2 = uniqueNums2.filter(item => !uniqueNums1.includes(item));

//     return [result1, result2];
// }

// console.log(difference([1,2,3], [2,4,6]), [[1,3], [4,6]]);
// console.log(difference([1,2,3,3],[1,1,2,2]), [[3],[]])

