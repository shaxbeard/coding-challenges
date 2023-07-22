// Google question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// EDGE CASE ARRAY = [2,5,5,2,3,5,1,2,4]:
// The nested loop will run twice, but the first time it will return 5.
// The hash map will return

// SOLUTION WITH NESTED LOOPS - O(n^2)
// function firstRecurring(arr) {
//   debugger;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return arr[i];
//       }
//     }
//   }
//   return undefined;
// }
// console.log(firstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]), 2);
// console.log(firstRecurring([2, 1, 1, 2, 3, 5, 1, 2, 4]), 1); // This one fails
// console.log(firstRecurring([2, 3, 4, 5]), undefined);
// console.log(firstRecurring([2, 5, 5, 2, 3, 5, 1, 2, 4]), 2);

// SOLUTION WITH MAP ONLY - NO HASH, NO TABLE - O(n) time and O(n) space (because we are storing the values)
function firstRecurring(arr) {
  let map = {};
  debugger;
  for (let num of arr) {
    if (map[num]) {
      return num;
    } else {
      map[num] = true;
    }
  }
  return undefined;
}

// console.log(firstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]), 2);
console.log(firstRecurring([2, 1, 1, 2, 3, 5, 1, 2, 4]), 1);
// console.log(firstRecurring([2, 3, 4, 5]), undefined);
// console.log(firstRecurring([2, 5, 5, 2, 3, 5, 1, 2, 4]), 5);
//
