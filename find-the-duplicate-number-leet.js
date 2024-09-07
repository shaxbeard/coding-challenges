// 287. Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2

// DEMO
// i, [0,1,2,3,4]
// n, [1,3,4,2,2]
// 1 -> i[1] = 3
// 3 -> i[3] = 2
// 4 -> i[4] = 2
// 2 -> i[2] = 4
// 2 -> i[2] = 4 // of course, both 2s point to the same place

// SO the "linked list" for this array looks like so:
// 1 -> 3 -> 2 -> 4 (back to the 2)
//            \   |
//              <--
//                s
//                f

// PHASE #1 - Floyd's tortoise and hare 
// Intially: slow = 0, fast = 0
// 1st iteration:
//     slow = nums[0] = 1
//     fast = nums[nums[0]] = nums[1] = 3  // So jump 2 steps

// 2nd iteration:
//     slow = nums[1] = 3
//     fast = nums[nums[3]] = nums[2] = 4  // So jump 2 steps

// 3rd iteration:
//     slow = nums[3] = 2
//     fast = nums[nums[4]] = nums[2] = 4  // So jump 2 steps

// 4th iteration:
//     slow = nums[2] = 4
//     fast = nums[nums[4]] = nums[2] = 4  // So jump 2 steps


// PHASE #2 - Find the "entrance" to the cycle
// 1 -> 3 -> 2 -> 4 (back to the 2)
//            \   |
//              <--

//                s
// S
// Just increment BOTH slow pointers until they meet


function findDuplicate(nums) {
    let slow = 0;
    let fast = 0;

    // Phase 1 - Floyd's tortoise and hare until the pointers meet
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) break;
    }
    // Phase 2 - Find the "entrance" to the cycle
    let slow2 = 0;
    while (true) {
        slow = nums[slow];
        slow2 = nums[slow2];
        if (slow === slow2) return slow;
    }
}
