// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.

//Parameters - size - the size of the string to return, +, whole
//Return - a string, length == size, starts with 1
//Examples - 4 -> '1010', 6 -> '101010
//Pseudocode

function stringy(size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    i % 2 === 0 ? arr.push("1") : arr.push("0");
  }
  return arr.join("");
}

console.log(stringy(6));
console.log(stringy(10));
