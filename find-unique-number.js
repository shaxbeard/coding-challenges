// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// Input is an array with numbers - integers, decimals, no numbers as string
// Output is the single unique number
// Methods - set, indexOf?
// Brute force - nested loop

function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        if (j === 1) {
          return arr[i];
        }
        return arr[j];
      }
    }
  }
}

console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
// console.log(findUniq([0, 0, 0.55, 0, 0]), 0.55);
// console.log(findUniq([2, 1, 1, 1, 1, 1]), 2);
// console.log(findUniq([1, 1, 1, 1, 1, 2]), 2);
