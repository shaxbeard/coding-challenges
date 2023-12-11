// Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.

// Return your answer as a number.

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

function sumMix(arr) {
  //Method #1 - the reduce() method with map(Number)
  return arr.map(Number).reduce((sum, num) => sum + num, 0);

  //Method #2 - the reduce() method with the unary operator
  return arr.reduce((sum, num) => sum + +num, 0);
}

console.log(sumMix([1, 2, "3", "4"]), 10);
console.log(sumMix(["5", "0", 2, "3", "4", 6]), 20);
