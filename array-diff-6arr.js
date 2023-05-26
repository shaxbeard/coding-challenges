// Your goal in this kata is to implement a difference function,
// which subtracts one array from another and returns the result.

// It should remove all values from array a, which are present
// in array b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// arrayDiff([1,2,3], [1,2]) == [3]

//PREP-M
//Parameters - two arrays of integers(?), array a; array b. No edge cases [no funny business!] (string numbers? decimals?)
//Return - return array a MINUS all instances
//Example
//Pseudocode
//METHODS !!!  If string, I could use replace?

// TIME COMPLEXITY IS O(n * m) - where n is the length of the first array,
// and m is the length of the second array

function arrayDiff(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        a.splice(i, 1);
        i--;
      }
    }
  }
  return a;
}

// TIME COMPLEXITY FOR THE FILTER METHODS IS  ALSO O(n * m)
// where n is the length of the first array, and m is the length of the second array

// function arrayDiff(a, b) {
//   return a.filter(el => b.indexOf(el) === -1); // if item in a is NOT in b, then KEEP IT
// }

// function arrayDiff(a, b) {
//   return a.filter(el => !b.includes(el));
// }

// IMPROVE TIME COMPLEXITY BY USING SET() FOR ARRAY B

function arrayDiff(a, b) {
  let bUniques = new Set(b); //pass array #2 to the set
  return a.filter(n => !bUniques.has(n)); //check each item in array #1 - keep only if NOT in array #2
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]), [1, 3]);
console.log(arrayDiff([1, 2, 3], [1, 2]), [3]);
