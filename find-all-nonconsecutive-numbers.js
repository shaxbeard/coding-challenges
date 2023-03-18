// Your task is to find all the elements of an array that are non consecutive.
// A number is non consecutive if it is not exactly one larger than the previous element in the array.
// The first element gets a pass and is never considered non consecutive.
//If the whole array is consecutive or has one element then return an empty array.
// The array elements will all be numbers.
// The numbers will also all be unique and in ascending order.
// The numbers could be positive and/or negetive and the gap could be larger than one.

function allNonConsecutive(arr) {
  return arr;
}

console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]), [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
]);
