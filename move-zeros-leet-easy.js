// Given an integer array nums, move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Follow up: Could you minimize the total number of operations done?


// Example 1:
// Input: nums = [8,0,1,0,3,12]
// Output: [8,1,3,12,0,0]


// 0 1 2 3 4 5 
//[8,1,3,12,0,0]   # nums array
//       i
//            j                         # Loop until j reaches the end

// Key mechanisms for using two pointeres
// 1. If i !== the target, then increment BOTH pointers  # Do you really want this in EVERY condition?
// 

// Loop using 2 pointers - so use while() with indexes starting at i = 0 and j = i + 1
function moveZeros(nums) {
  let i = 0;
  let j = i + 1;
  // Keep looping until the second pointer (j) is larger than nums.length - 1
  while (j <= nums.length - 1) {
  // Keep incrementing BOTH indexes until num[i] equals the target (zero in this case)
    if (nums[i] !== 0) {
      i++;
      j++;
      // ELSE (so nums[i] DOES EQUAL ZERO)  
    } else {
        // Swap nums[i] with nums[j] and increment both i and j  # Caveat here 
        ///////  Increment i ONLY IF nums[j] DOES NOT ALSO EQUAL ZERO 
        if (nums[j] !== 0) {
          [nums[i], nums[j]] = [nums[j], nums[i]]
          i++
        }
        // ALWAYS INCRMENT J - EVEN IF J === 0
        j++
      }
    }
}



////  Increment j no matter what (here in the ELSE condition where nums[i] !== 0)


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