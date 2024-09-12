// Given an integer array nums, return an array answer such that answer[i] 
// is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

//  DEMO #1 - USING NEW ARRAYS FOR PREFIX AND SUFFIX
//  (1)[1, 2, 3, 4](1)    # Nums
//  (1)[1, 2, 6, 24]      # Prefix 
//            ^           # Pointer to [i-1]
//     [24,24,12,4](1)    # Suffix
//                  ^     # Pointer to [i + 1]
//     [24,12,8, 6]       # Output - prefix[i-1] * suffix[i+1]
//               ^        # Pointer to [i]
 
//  DEMO #2 - STORE THE NEW VALUES DIRECTLY IN THE OUTPUT ON THE FLY
// Suffix = 24 * 1 = 24
// (1)[1,2,3,4](1)   # Nums, len = 4
//     ^             # nums[i]
// (1)[24,12,8,6](1) # Result 
//     ^             # result[i]         


// THE ACTUAL ALGORITHM
function productExceptSelf(nums) {
    const result = [];
    let prefix = 1;
    //pass 1 - multiply the prefix nums and store values in result array
    for (let i=0; i<nums.length; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }
    let suffix = 1
    for (let i=nums.length - 1; i>=0; i--) {
        result[i] *= suffix
        suffix *= nums[i]
    }
    return result
};

console.log(productExceptSelf([1,2,3,4]), [24,12,8,6])
console.log(productExceptSelf([-1,1,0,-3,3]), [0,0,9,0,0])