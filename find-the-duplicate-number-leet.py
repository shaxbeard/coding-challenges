class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow, fast = 0, 0 # Start both pointers at 0 - before the cycle
        while True: # This is the find the intersection point
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
        