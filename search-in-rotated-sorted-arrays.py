

# [4,5,6,7,0,1,2], target = 0
# [left   ][r   ]
#            ^      # middle pointer
#  l                # left pointer
#              r    # right pointer

# Is 4 <= 6  = True, so we are in the [left] section
# Is 0 > 6 = False (if True, search the right side becuase target is on the right side of the left section)
# Is 0 < 4 = True (if True, search the right side because target is in the right section)

# Say that the middle pointer is on the 1
# Is 0 > 2? False (If True, that means it is in the "left sorted section")
# Is 0 < 1? True (If True, that means it is to the left of mid pointer)


def search(nums, target):
    # just the basic setup for a binary search
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if target == nums[mid]:
            return mid # return the index if target found
        
        # mid is in the left sorted section
        if nums[l] <= nums[mid]: 
            # Search right under two different conditions
            # if target < nums[l]: # target is in right sorted section
            #     l = mid + 1 # search the right side of middle (not the "right sorted section")
            # elif target > nums[mid]: # target is in left sorted section but > nums[mid]
            #     l = mid + 1 
            # Refactor of the commented section above
            if target < nums[l] or target > nums[mid]:
                l = mid + 1 # search the right side of middle
            else:
                r = mid - 1 # search the left side of middle (not the "left sorted section")

        # right sorted section
        else: # this means we are in the right section
            if target > nums[r] or target < nums[mid]: # reverse of conditions above
                r = mid - 1 # search the left side of middle
            else:
                l = mid + 1 # search the right side of middle
    
    return -1 # If the loop finishes without finding target

