// 875. Koko Eating Bananas
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
// The guards have gone and will come back in h hours. 

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses 
// some pile of bananas and eats k bananas from that pile. 
// If the pile has less than k bananas, she eats all of them instead and will not eat any more 
// bananas during this hour. Koko likes to eat slowly but still wants to finish eating all the 
// bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Example 1:
// Input: piles = [3,6,7,11], h = 8
// Output: 4

// k = rate of bananas/hr (looking for min)
// h - total hours allowed
//  0 1 2 3
// [3,6,7,11] 


// result = 3 

// THIS PROBLEM HAS TWO LOOPS 
// LOOP #1 - A FOR LOOP THROUGH THE PILES ARRAY
// [3,6,7,11] - piles, h = 8
//  p
//  k = 4
//  hours = 1 + 2 + 2 + 3 = (8 <= 8 === True)

// LOOP #2 - A WHILE LOOP FOR A BINARY SEARCH THROUGH A RANGE
// k = [1,2,3,4,5,6,7,8,9,10,11] # We need a binary search for k where min = 1 and max = Math.max(...piles)
// k =        ^
// l =        ^
// r =        ^  

function minEatingSpeed(piles, h) {
    let l = 1
    let r = Math.max(...piles)
    let result = r

    while (l <= r) {
        let k = Math.floor((l + r) / 2)
        let hours = 0
        for (let p of piles) {
            hours += Math.ceil(p / k)
        }
        if (hours <= h) {
            result = Math.min(result, k)
            // result = k
            r = k - 1
        } else {
            l = k + 1
        }
    }
    return result
}

console.log(minEatingSpeed([3,6,7,11], 8), 4)
