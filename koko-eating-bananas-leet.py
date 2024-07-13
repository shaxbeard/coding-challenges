class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l, r = 1, max(piles)
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
