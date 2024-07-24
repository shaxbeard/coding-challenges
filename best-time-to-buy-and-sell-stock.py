

def maxProfit(prices):
    l, r = 0, 1 # left=buy, right=sell
    maxP = 0

    while r < len(prices):
        if prices[l] < prices[r]: # profitable?
            profit = prices[r] - prices[l] # if val at right pointer higher than at left
            maxP = max(maxP, profit)
        else:
            l = r # if val at right pointer is LOWER than at left
        r += 1 # increment r EVERY time
    return maxP