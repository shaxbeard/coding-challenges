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

// result = 3 


function minEatingSpeed(piles, h) {
    let l = 1 //the lowest possible eating rate is 1
    let r = Math.max(...piles) // the highest possible rate is max(piles)
    let result = r // use the highest rate for the right pointer in the range array

    while (l <= r) { // This is the binary search
        let k = Math.floor((l + r) / 2)
        let hours = 0
        for (let p of piles) { // Loop to count total hours at rate k
            hours += Math.ceil(p / k)
        }
        if (hours <= h) { // is hours below the threshold?
            result = Math.min(result, k) // needed? result always goes down?
            // result = k
            r = k - 1 // keep looking for a lower value
        } else {
            l = k + 1
        }
    }
    return result
}

console.log(minEatingSpeed([3,6,7,11], 8), 4)
