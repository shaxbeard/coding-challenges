// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. Return the good values in the order they are given.

function noOdds(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(noOdds([0, 1, 2, 3]), [0, 2]);
console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [2, 4, 6, 8, 10]);
