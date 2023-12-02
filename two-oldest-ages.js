// The two oldest ages function/method needs to be completed.
// It should take an array of numbers as its argument and return the two highest numbers within the array.
// The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items.
// If there are two or more oldest age, then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

//Input is an array of nums - int? num as string?, empty array? No funny business?
//Output is an array with the two highest values [2nd highest, highest]
//If the highest has 2 instances, return both fo them

//max = 10
//2nd max = 8
//maxIndes = 2
//[[1, 2, 10, 8]
//              ^

// Method #1 - O(n) - Brute force with a loop that tracks both max and 2nd max
// function twoOldestAges(ages) {
//   let oldest = 0;
//   let second = 0;

//   for (let i = 0; i < ages.length; ++i) {
//     if (ages[i] > oldest) {
//       second = oldest;
//       oldest = ages[i];
//     } else if (ages[i] > second) {
//       second = ages[i];
//     }
//   }
//   return [second, oldest];
// }

// Method #2 - O(n log n) - Sort the array and index into the top two items
function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).slice(-2);
}

console.log(twoOldestAges([1, 2, 10, 8]), [8, 10]);
// console.log(twoOldestAges([1, 5, 87, 45, 8, 8]), [45, 87]);
// console.log(twoOldestAges([1, 3, 10, 0]), [3, 10]);
// console.log(twoOldestAges([1, 3, 10, 10]), [10, 10]); //2 of the same highest num
