# Find Minimum in Rotated Sorted Array

# You are given an array of length n which was originally sorted in ascending order. 
# It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

#     [3,4,5,6,1,2] if it was rotated 4 times.
#     [1,2,3,4,5,6] if it was rotated 6 times.

# Notice that rotating the array 4 times moves the last four elements of the array to the beginning. 
# Rotating the array 6 times produces the original array.

# Assuming all elements in the rotated sorted array nums are unique, return the minimum element of this array.

# A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

# Example 1:
# Input: nums = [3,4,5,6,1,2]
# Output: 1


def findMin(self, nums: List[int]) -> int:
    res = nums[0] # Initialize res with arbitrary value
    l, r = 0, len(nums) - 1

    while l <= r:
        if nums[l] < nums[r]: # if the arr OR SUBARR is in sorted order
            res = min(res, nums[l])
            break
    
    m = (l + r) // 2
    res = min(res, nums[m]) # Update res if mid < res
    if nums[m] >= nums[l]: # Search the right side of rotated array in this case
        l = m + 1
    else:
        r = m - 1 # Search the left half of rotated arr in this case
    
    return res