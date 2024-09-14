// LEETCODE PROBLEM #509 - FIBONACCI NUMBER
// The Fibonacci numbers, commonly denoted F(n) form a sequence,
// called the Fibonacci sequence, such that each number is the sum of the two preceding ones,
// starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

// Given n, calculate F(n).
// [0, 1, 1, 2, 3, 5, 8];
//        ^               n = 2 - Wait, the fib sequence starts at ZERO - so we have to start counting from a zero index
//           ^            n = 3 - so fib(3) = 1 + 1

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// The full sequence with 3 numbers: [0,1,1]

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
// The full sequence with 4 numbers: [0,1,1,2]

/*

#####################    SOLUTIONS BELOW  ###############################
*/

//  0  1  2  3  4  5  6   # The INDEX of 6
//  1  2  3  4  5  6  7   # For the NUMBERS, fib(7) should equal 8
// [0, 1, 1, 2, 3, 5, 8];

// 0,1,2,3,4,5,6     # Range to loop through
//[0,1,1,2,3,5,8]            # ouput array, len = 7
//               ^           

// METHOD #1 - ITERATIVE SOLUTION
// function fib(n) {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   return arr[n];
// }

// console.log(fib(6), 8);
//  0,1,2,3,4,5,6,7, 8, 9, 10
// [0,1,1,2,3,5,8,13,21,34,55]

// METHOD #2 - SIMPLE RECURSIVE SOLUTION - O(2^n)
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(6), 8);

//  0,1,2,3,4,5,6, 7, 8
// [0,1,1,2,3,5,8,13,21,34]


// THE TREE FOR THE BASIC RECURSIVE SOLUTION
// Notice how fib(1) is calculated five times!
// The time complexity of recursive fibonacci is EXPONENTIAL O(2^n) - Leon says it is "mayhem"

//                      fib(5)
//                    /       \..............             
//              fib(4)                      fib(3)
//              /   \                         /   \
//         fib(3)    fib(2)                fib(2)  fib(1)
//         /    \    /     \                /  \
//     fib(2) fib(1) fib(1) fib(0)      fib(1) fib(0)
//     /  \
//  fib(1) fib(0)


// METHOD #3 - MEMOIZED FIBONACCI O(n) - each repeated tree node is calculated only once

// LEON VERSION OF MEMOIZED FIBONACCI - memo in the global scope
// const memo = {};
// function fib(n) {
//   if (n < 2) {
//     return n;
//   } else if (memo[n]) {
//     return memo[n];
//   } else {
//     memo[n] = fib(n - 1) + fib(n - 2);
//     return memo[n]
//   }
// }
// console.log(fib(6), 8);
// [0, 1, 1, 2, 3, 5, 8];


// RECURSIVE SOLUTION USING MEMOIZATION - memo in local scope, no closure
// function fib(n, memo) {
//   memo = memo || {};
//   if (n in memo) {
//     return memo[n];
//   }
//   if (n < 2) {
//     return n;
//   }
//   return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
// }
// console.log(fib(6), 8); // Test fails - returns 13

// //RECURSIVE SOLUTION USING MEMOIZATION AND CLOSURE
function fibonacciClosure() {
  let memo = {};
  return function fib(n) {
    if (n in memo) {
      return memo[n];
    } else {
      if (n < 2) {
        return n; 
      } else {
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
      }
    }
  };
}
const fasterFib = fibonacciClosure();
console.log(fasterFib(6), 8);
//  0  1  2  3  4  5  6   # The INDEX of 6
//  1  2  3  4  5  6  7   # For the NUMBERS, fib(7) should equal 8
// [0, 1, 1, 2, 3, 5, 8];

//  0,1,2,3,4,5,6,7, 8, 9, 10
// [0,1,1,2,3,5,8,13,21,34,55]


//RECURSIVE SOLUTION USING MEMOIZATION AND CLOSURE - NO "ELSE" STATEMENTS
// function fibonacciClosure() {
//   let memo = {};
//   return function fib(n) {
//     if (n in memo) {
//       return memo[n];
//     }
//     if (n < 2) {
//       return 1; // OR return n to add zero at start
//     }
//     return (memo[n] = fib(n - 1) + fib(n - 2));
//   };
// }

// const fasterFib = fibonacciClosure();

// console.log(fasterFib(5), 8);

//[0,1,1,2,3,5,8,13,21,34,55]
//OR
//[1,1,2,3,5,8,13,21,34,55]

// IS THERE A RECURRING PATTERN OF LOGIC FOR THIS SOLUTION?
// This solution has THREE big elements
// 1. Using recursiion
// 2. Using memoization
// 3. Using a closure with memoization
