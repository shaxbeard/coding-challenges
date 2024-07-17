# Given an integer array nums, move all 0's to the end of it 
# while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.

# Follow up: Could you minimize the total number of operations done?

# Example 1:
# Input: nums = [8,0,1,0,3,12]
# Output: [8,1,3,12,0,0]

# DEMO HERE
#  0 1 2 3 4 5 
# [8,1,3,12,0,0]   # nums, len = 6
#           i
#               j                         # Loop until j reaches the end

def moveZeros(nums):
    # Initialize one pointer at index 0 and one at index 1
    i = 0
    j = i + 1
    # Keep looping while j < nums.length
    while j < len(nums):
    # If i does not point to a zero, increment both pointers
        if nums[i] != 0:
            i += 1
            j += 1
    # When i DOES point to a zero, (# Watch for both zeros)
        else:
            # Only if the number AT j does not ALSO == 0
            if nums[j] != 0:
                [nums[i], nums[j]] = [nums[j], nums[i]]
                i += 1
            j += 1
        # If j does NOT point to a zero
        # swap the nums at i and j 
        # and increment i and j(so increment j every time)
        #
        # If j DOES point to a zero
        # increment j
    # Then increment both of the pointers
    # Return the swapped array
    return nums
    


print(moveZeros([8,0,1,0,3,12]), [8,1,3,12,0,0])