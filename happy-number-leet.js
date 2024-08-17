// 202. Happy Number

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:
// Input: n = 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// Example 2:
// Input: n = 20  // ACTUALLY, START WITH 20 INSTEAD OF 2
// Output: false
// 2^2 + 0^2= 4 
// 4^2 = 16
// 1^2 + 6^2 = 37
// 3^2 + 7^2 = 58
// 5^2 + 8^2 = 89
// 8^2 + 9^2 = 145
// 1^2 + 4^2 + 5^2 = 42
// 4^2 + 2^2 = 20  // WE RETURN TO 20 AND REPEAT THE SAME CYCLE

// DEMO
// 19 -> 82 -> 68 -> 100 -> 1   Happy!
// 20 -> 4 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20  Unhappy!

// If any number repeats in the sequence, then the input num is unhappy

// Method #1 - Neetcode calls this a "hash set" not a "hash table"
// Leetcode says you can solve this with Hash Table or Two Pointers (neetcode says there is a linked list solution)
function isHappy(n) {
    let visit = new Set();

    while (!visit.has(n)) {
        visit.add(n);
        n = sumOfSquares(n); // helper function

        if (n === 1) return true;
    }
    return false // If loop ends, we have reached 2nd instance of a num (other than 1)
}

function sumOfSquares(n) {
    let output = 0;

    while (n > 0) { // stop if this produces zero
        let digit = n % 10 // this gives us the num in the 1s place
        output += digit * digit;
        n = Math.floor(n / 10);
    }
    return output;
}

