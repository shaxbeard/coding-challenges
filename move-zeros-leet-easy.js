// Given an integer array nums, 
// move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Follow up: Could you minimize the total number of operations done?


// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// 0 1 2 3 4 
//[1,0,3,12,0]
// ^


// function moveZeros(nums) {
//     for(var i = nums.length;i--;)  { // where is the condition?
//         if(nums[i]===0){
//             nums.splice(i,1)
//             nums.push(0);
//         }
//     }
//     return nums;
// }

// function moveZeros(nums) {
//     let j = 0  // nonzero count
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== 0) {
//         // swap elements - what kind of a swap mechanism is this?
//         [nums[j], nums[i]] = [nums[i], nums[j]]
//         j++
//       }
//     }
//     return nums;
// }


// 0 1 2 3 4 
//[1,3,12,0,0]
//        i
//             ** j = 5         // Loop until j reaches the end


// METHOD 1 - TOP SOLUTION ON LEETCODE
// let moveZeros = function (nums) {
//     let i = 0;
//     let j = i + 1;

//     while (j <= nums.length - 1) { // j = 5 AND nums.length = 5
//         if (nums[i] !== 0) { // If both nums !== 0, increment both indexes
//             i++;
//             j++;
//         } else { // If just the HIGH num !== 0, swap the zero and the high num
//             if (nums[j] !== 0) {
//                 [nums[i], nums[j]] = [nums[j], nums[i]];
//                 i++;
//             }
//             j++;
//         }
//     }
//     return nums;
// };

// METHOD 2 - MORE CONCISE - SEEMS TO WORK FOR THIS PROBLEM IN PARTICULAR
function moveZeros(nums) {
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[j] = nums[i];
        nums[i] = j === i ? nums[i] : 0;
        j++;
      }
    }
    return nums;
  }

console.log(moveZeros([0,1,0,3,12]),[1,3,12,0,0])