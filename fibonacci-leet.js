// The Fibonacci numbers, commonly denoted F(n) form a sequence,
// called the Fibonacci sequence, such that each number is the sum of the two preceding ones,
// starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

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

//  FOR() LOOP SOLUTION
function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    //iteration #1 - (i=2)(arr=[0,1]) -- arr[2] = arr[1] (=1) + arr[0] (=0) - so arr = [0,1,1]
    //iteration #2 - (i=3) arr[3] = arr[2] (=1) + arr[1] (=1) - so arr = [0,1,1,2]
    //iteration #3 - (i=4) arr[4] = arr[3] (=2) + arr[2] (=1) = so arr = [0,1,1,2,3]
    // (i=5) now the condition of i <= 4 is FALSE so break out of the loop
  }
  return arr[n]; //arr[4] where arr = [0,1,1,2,3] (index 4 = 3)
}

console.log(fib(4), 3);
