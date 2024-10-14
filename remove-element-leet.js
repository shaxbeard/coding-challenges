// 27. Remove Element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. Then return the number of elements in nums which 
// are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, 
// you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
// The remaining elements of nums are not important as well as the size of nums.
// Return k.


// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// val = 3
// [3,2,2,3] - arr of int
// [_,2,2,_] -> remove the 3s IN PLACE - no new array
// [2,2,_,_]

// SANDBOX

// FOR THE PURPOSE OF DEMONSTRATION, it would be clearer if I actually SWAPPED the values - so the swapped nums are together at the end
// Then refactor the swap to optimize the swap

// FULL SWAP DEMO
// val = 2
//  0,1,2,3,4,5,6,7   - indexes
// [0,1,4,0,3,2,2,2]  - the final array (the final 3 nums are irrelevant anyway)
//          l        
//          r         - the length of the array items OTHER THAN VAL === the final position of l + 1 (or r + 1)
//                    - we COULD edit the loop so it increments one more time, but that is less clear

// The solution if I optimize the swap to nums[l] = nums[r] only
// val = 2
//  0,1,2,3,4,5,6,7   - indexes
// [0,1,4,0,3,0,4,2]  - the final array (the final 3 nums are irrelevant anyway)
//          l        
//          r




function removeElement(nums, val) {
    let l = 0;
    let r = nums.length - 1;
    
    while (l < r) {
        if (nums[l] === val) {
            // nums[l] = nums[r]; // refactor - no need for full swap
            [nums[l], nums[r]] = [nums[r], nums[l]]; // start with a full swap to see results better
            r--;
            console.log(nums);
        } 
        else {
            l++;
        }
    }
    return l + 1;
}

// console.log(removeElement([3,2,2,3], 3), 2); // removed indexes can hold anything
console.log(removeElement([0,1,2,2,3,0,4,2], 2), 5); // removed indexes can hold anything




