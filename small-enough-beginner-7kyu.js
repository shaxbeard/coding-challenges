// You will be given an array and a limit value.
// You must check that all values in the array are below or equal to the limit value.
// If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

//The inputs are:
//#1 - An array of numbers (int?) yes
//#2 - Another int that is the "limit value"
//The output of the function is either true or false

//Example #1 - If limit not > all items, then O(n) - upper bound is still linear
// limite = 100
// [78, 117, 110, 99, 104, 117, 107, 115]
//       ^

//Exmaple #2 - If limit > all items, then time complexity is linear EVERY TIME
// limit = 500
//[80, 117, 115, 104, 45, 85, 112, 115]
//                    ^

//METHOD #1 - MANUAL TRANSMISSION - O(n)
// function smallEnough(a, limit) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > limit) {
//       return false;
//     }
//   }
//   return true;
// }

//METHOD #2 - ARRAY METHOD
// function smallEnough(a, limit) {
//   return a.every(x => x <= limit);
// }

console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
