// Your task is to find all the elements of an array that are non consecutive.
// A number is non consecutive if it is not exactly one larger than the previous element in the array.
// The first element gets a pass and is never considered non consecutive.
//If the whole array is consecutive or has one element then return an empty array.
// The array elements will all be numbers.
// The numbers will also all be unique and in ascending order.
// The numbers could be positive and/or negetive and the gap could be larger than one.

//Input - An array of numbers - positive/negative, unique, asc (no funny business - number-strings, etc.)
// Return an array which indicates any non-consecutive number AND its index (or empty array if non non-consecutive nums)

// initialize an empty array and object?
// Loop over the array
// If an item !== prev + 1, then add that item's value and index to the object (but skip the first num)
// reutrn the array with the non-consecutive values and indexes

// function allNonConsecutive(arr) {
//   const noncons = [];
//   for (let i = 0; i < arr.length; i++) {
//     // if (i !== 0 && arr[i] !== arr[i - 1] + 1) {
//     if (i && arr[i] !== arr[i - 1] + 1) {
//       noncons.push({ i: i, n: arr[i] });
//     }
//   }
//   return noncons;

function allNonConsecutive(arr) {
  let noncons = [];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let prev = arr[i - 1];
    if (i && curr !== prev + 1) {
      //   noncons.push({ i: i, n: arr[i] });
      //   noncons.push({ i, curr });
      noncons = [...noncons, { i, curr }];
    }
  }
  return noncons;
}

// function allNonConsecutive(arr) {
//   return arr.reduce(
//     (a, c, i) => (i && c - 1 !== arr[i - 1] ? [...a, { i, c }] : a),
//     []
//   );
// }

console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]), [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
]);
