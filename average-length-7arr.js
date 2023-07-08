// Given an array of strings of the same letter type.
// Return a new array, which will differ
// in that the length of each element
// is equal to the average length of the elements of the previous array.
// If the average length is not an integer, use Math.round().

//PREP
// input is an array of strings with the same letter
// return? an array with the same elements
// BUT - the length of each element will be changed to the avg length of all elelments in orignal array

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

function averageLength(arr) {
  const avg = Math.round(arr.join("").length / arr.length); // count the length of all strings together
  return arr.map(item => item[0].repeat(avg)); // use the repeat() method to make all strings the same length
}

console.log(averageLength(["aa", "bbb", "cccc"]), ["aaa", "bbb", "ccc"]);
console.log(averageLength(["aa", "bb", "ddd", "eee"]), [
  "aaa",
  "bbb",
  "ddd",
  "eee",
]);
