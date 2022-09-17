// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
//PREP
//Parameters -> array of integers, negative=yes, integers as strings=no, empty array-> CONSIDER AS [0]
//Return - If array sum is odd => "odd"; If array sume is even => "even"
//Examples [0,1,4] -> "odd"
// [0,-1,-5] -> "even"
// [] -> even
//Psuedocode
//handle the empty array
//sum the array
//if the sum is even reutrn "even"
//if the sum is odd return "odd"

function oddOrEven(array) {
  if (!array.length) array = [0];
  const sum = array.reduce((a, b) => a + b);
  return sum % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([]));
