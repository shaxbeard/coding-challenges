// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes AN ARRAY of strings and returns each line prepended by the correct number.

//Input is an array of strings - need to handle an empty array
//Output is an array of strings

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// Each iteration of the loop
//["a", "b", "c"]
//            ^ i = 2
//["1: a", "2: b", "3: c"]

function testing(arr) {
  if (arr.length < 1) {
    return [];
  }
  return arr.map((item, i) => `${i + 1}: ${item}`);
}

console.log(testing(["a", "b", "c"]), ["1: a", "2: b", "3: c"]);
console.log(testing([]), []);
