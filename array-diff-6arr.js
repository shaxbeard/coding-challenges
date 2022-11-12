// Your goal in this kata is to implement a difference function,
// which subtracts one array from another and returns the result.

// It should remove all values from array a, which are present
// in array b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// arrayDiff([1,2,3], [1,2]) == [3]

//PREP-M
//Parameters - two arrays of integers(?), array a; array b. No edge cases (string numbers? decimals?)
//Return - return array a MINUS all instances
//Example
//Pseudocode
//METHODS !!!  If string, I could use replace?

// function arrayDiff(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] == b[j]) {
//         a.splice(i, 1);
//         i--;
//       }
//     }
//   }
//   return a;
// }

// function arrayDiff(a, b) {
//   return a.filter((el) => !b.includes(el));
// }

function arrayDiff(a, b) {
  return a.filter(el => b.indexOf(el) === -1);
}

//Coming back to consider time and space complexity

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2, 3], [1, 2]));
