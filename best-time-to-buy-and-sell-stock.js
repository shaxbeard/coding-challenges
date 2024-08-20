// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit 
// by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,2,5,3,6,4,1,11]
// Output: 10
// NOTE: If the 11 were not there, you could not use the 1 because there is no way to sell after buying at the value

// DEMO
//  0,1,2,3,4,5  - Indexes
// [7,1,5,3,6,4], len = 6
//    l
//              r
// Step 1 - prices[l] > prices[r], so slide l up to r, then increment 4
// Step 2 - prices[l] < prices[r], so the profit is prices[r] (5) - prices[l] (1) = 4
// Step 3 - check if this profit is bigger than the max profit, true, so maxP = 4, and increment r





function maxProfit(prices) {
    let l = 0
    let r = 1
    let maxP = 0

    while (r < prices.length) { // In 0-based index, stop loop when r === length
        if (prices[l] < prices[r]) { // only check from the left TO the right !!
            profit = prices[r] - prices[l] // if val at right pointer > left
            maxP = Math.max(maxP, profit)
        } else {
            l = r // if val at right pointer < left, SLIDE l all the way to r
        }
        r++ // increment r in all cases
    }
    return maxP
}

console.log(maxProfit([7,1,5,3,6,4]), 5)
console.log(maxProfit([7,2,5,3,6,4,1,11]), 10)
