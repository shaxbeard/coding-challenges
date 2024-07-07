// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

//[-3,3,4,-3,1,2]

// _ + _ + _ = 0
// a   b   c  

function threeSum(nums) {
    const res = [];
    nums.sort((a, b) => a - b);

    // nums[i] will point to the "a" - the first of the 3sum nums
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break; //This is not in the Python solution, and the function passes leetcode without it
        if (i > 0 && nums[i] === nums[i - 1]) continue; //Ignore duplicates
        
        // Now, the rest is mostly the Two Pointer solution to Two Sum II
        let l = i + 1; // i + 1 because we start 1 to the right of number "a"
        let r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum > 0) { // We are looking for a sum of zero this time
                r--;
            } else if (sum < 0) {
                l++;
            } else { // If the sum actually equals zero
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while (l < r && nums[l] === nums[l - 1]) { // Avoid duplicates again
                    l++; //Only need to increment 1 pointer here
                }
            }
        }
    }
    return res;
}

console.log(threeSum([-1,0,1,2,-1,-4]), [[-1,-1,2],[-1,0,1]])





