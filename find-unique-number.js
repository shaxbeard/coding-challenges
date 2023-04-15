// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// Input is an array with numbers - integers, decimals, no numbers as string
// Output is the single unique number
// Methods - set, indexOf?
// Brute force - nested loop

// NESTED LOOPS SOLUTION - 73% SLOWER
// function findUniq(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let isUnique = true;
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j && arr[i] === arr[j]) {
//         // If the current number is not unique, set the flag and break out of the loop
//         isUnique = false;
//         break;
//       }
//     }
//     if (isUnique) {
//       return arr[i];
//     }
//   }
//   return null;
// }

// FOR() SOLUTION -- FASTEST PERFORMANCE
function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1]) {
      if (arr[i] !== arr[i + 1]) {
        return arr[i];
      } else {
        return arr[arr.length - 1];
      }
    }
  }
}

// console.log(findUniq([1, 0, 0]), 1);
// console.log(findUniq([0, 0, 1]), 1);

// INDEX OF() - 96% SLOWER THAN FOR()
// function findUniq(arr) {
//   for (let n of arr) {
//     if (arr.indexOf(n) === arr.lastIndexOf(n)) {
//       return n;
//     }
//   }
// }

// USING A HASH MAP - 98% SLOWER THAN FOR()
// function findUniq(arr) {
//   //Go through the entire array and store the frequency of each number in a hash map
//   const map = {};
//   for (const num of arr) {
//     map[num] ? map[num]++ : (map[num] = 1);
//   }

//   // const map = arr.reduce((obj, num) => {
//   //   obj[num] ? obj[num]++ : (obj[num] = 1);
//   //   return obj;
//   // }, {});

//   // Loop through the map to find the number with the value of 1
//   for (const num in map) {
//     if (map[num] === 1) {
//       return num;
//     }
//   }

//   return map;
// }

// console.log(findUniq([1, 0, 0]), 1);
// console.log(findUniq([0, 1, 0]), 1);
// console.log(findUniq([0, 0, 1]), 1);
console.log(findUniq([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]), 2);
// console.log(findUniq([0, 0, 0.55, 0, 0]), 0.55);
// console.log(findUniq([2, 1, 1, 1, 1, 1]), 2);
// console.log(findUniq([1, 1, 1, 1, 1, 2]), 2);
