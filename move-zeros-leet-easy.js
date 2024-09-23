// Given an integer array nums, move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


// Example 1:
// Input: nums = [8,0,1,0,3,12]
// Output: [8,1,3,12,0,0]


// DEMO
//[8,4,3,2,1,2,3,12,0,0]
//               i
//                   j                         # Loop until j reaches the end

// Key mechanisms for using two pointeres
// 1. If i !== the target, then increment BOTH pointers  
// I like the variation on the mechanism of two pointers here. The trailing pointer is the primary mover,
// so you increment BOTH pointers while i !== 0. In this way, the mechanism is almost like the simple
// "cur" and "next" pointers in the Roman Numerals problem. BUT, if j === 0, then you need to move it ahead
// on its own - so now it "decouples" the cur/next set (like the Star Trek TNG Enterprise when it
// separates the saucer section from the rest of the ship).

// Loop using 2 pointers - so use while() with indexes starting at i = 0 and j = i + 1
function moveZeros(nums) {
  let i = 0;
  let j = i + 1;
  // Keep looping until the second pointer (j) is larger than nums.length - 1
  while (j < nums.length) {
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
    return nums;
}

console.log(moveZeros([0,1,0,3,12]),[1,3,12,0,0])