class Solution:
    def isHappy(self, n: int) -> bool:
        visit = set()

        while n not in visit:
            visit.add(n)
            n = self.sumOfSquares(n) # helper function

            if n == 1:
                return True
        # If our loop ever stops, we have reached a 2nd instance (that is not 1)    
        return False
    
    def sumOfSquares(self, n: int) -> int:
        output = 0 # initialize our sum of squares to zero

        while n:
            digit = n % 10 # this gives us the num in the 1s place?
            digit = digit ** 2
            output += digit
            n = n // 10 #  this moves us to the next digit to the left

