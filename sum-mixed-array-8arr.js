// Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.

// Return your answer as a number.

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

// function sumMix(arr) {
//   //Method #1 - the reduce() method with map(Number)
//   return arr.map(Number).reduce((sum, num) => sum + num, 0);

//   //Method #2 - the reduce() method with the unary operator
//   return arr.reduce((sum, num) => sum + +num, 0);
// }

//Method #3  - Use gauss formula to sum the array
function sumContiguousNums(arr) {
  const numArr = arr.map(num => Number(num));
  const firstNum = numArr[0];
  const lastNum = numArr[numArr.length - 1];
  const n = numArr.length;

  // Gauss formula: Sum = n * (firstNum + lastNum) / 2
  return (n * (firstNum + lastNum)) / 2;
}

console.log(sumContiguousNums([1, 2, "3", "4", 5]), 15);
console.log(sumContiguousNums(["2", 3, "4", "5", 6]), 20);




