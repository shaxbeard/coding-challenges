// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

//              1               // row = 1, sum = 1
//           3     5            // row = 2, sum = 8
//        7     9    11         // row = 3, sum = 27
//    13    15    17    19      // row = 4, sum = 64
// 21    23    25    27    29   // Okay, the sum of each row is just the row number to the power of 3 (cubed)
// ...

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

console.log(rowSumOddNumbers(2), 8);
console.log(rowSumOddNumbers(4), 64);
