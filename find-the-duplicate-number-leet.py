# 287. Find the Duplicate Number

# Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

# There is only one repeated number in nums, return this repeated number.
# You must solve the problem without modifying the array nums and uses only constant extra space.

class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow, fast = 0, 0 # Start both pointers at 0 - before the cycle
        # Phase 1 - Find the intersection point
        while True: 
            # NB - we are treating an array as if it were a linked list
            slow = nums[slow] # This points to the next index
            fast = nums[nums[fast]] # This points to the next next index
            if slow == fast:
                break
        
        # Phase 2 - Increment slow and a 2nd slow pointer  until they meet
        slow2 = 0
        while True:
            slow = nums[slow]
            slow2 = nums[slow2]
            if slow == slow2:
                return slow
        