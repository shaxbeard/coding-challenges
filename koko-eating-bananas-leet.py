# 875. Koko Eating Bananas
# Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
# The guards have gone and will come back in h hours. 

# Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses 
# some pile of bananas and eats k bananas from that pile. 
# If the pile has less than k bananas, she eats all of them instead and will not eat any more 
# bananas during this hour. Koko likes to eat slowly but still wants to finish eating all the 
# bananas before the guards return.

# Return the minimum integer k such that she can eat all the bananas within h hours.

# Example 1:
# Input: piles = [3,6,7,11], h = 8
# Output: 4

# result = 4  
# [3,6,7,11], h = 8
#  ^
#  1 + 2 + 2 + 3 = 8

# k = [1,2,3,4,5,6,7,8,9,10,11] # We need a binary search for k where min = 1 and max = Math.max(...piles)
# m =        ^
# l =        ^
# r =        ^     

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l = 1 # the lowest possible eating rate is 1
        r = max(piles) # the highest possible rate is max(piles)
        res = r # the highest possible result is at the right pointer

        while l <= r: # This is the binary search
            k = (l + r) // 2 # Find the middle num
            # Calculate total hour to eat bananas at rate k
            hours = 0
            for p in piles:
                hours += math.ceil(p / k) # why use math.ceil() instead of round()?
            
            if hours <= h: # is hours below the threshold?
                res = min(res, k) 
                r = k - 1 # keep looking for a lower value
            else:
                l = k + 1
        return res

