// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// function sumTwoSmallestNumbers(numbers) {
//   return numbers.sort((a, b) => a - b).reduce((a, b, i) => (i < 2 ? a + b : a));
// }

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

// Method #1 - Brute force with a for() loop and a conditional !! Hurts my brain
// function sumTwoSmallestNumbers(numbers) {
//   var smallestNumber = 0,
//     secondSmallest = 0;

//   smallestNumber = Math.min(numbers[0], numbers[1]);
//   secondSmallest = Math.max(numbers[0], numbers[1]);

//   for (var index = 2; index < numbers.length; index++) {
//     if (numbers[index] < smallestNumber) {
//       secondSmallest = smallestNumber;
//       smallestNumber = numbers[index];
//     } else if (numbers[index] < secondSmallest) {
//       secondSmallest = numbers[index];
//     }
//   }

//   return smallestNumber + secondSmallest;
// }

// Method #2 - Sort and then index into the numbers
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

function sumTwoSmallestNumbers(numbers) {
  // input check
  if (!Array.isArray(numbers) || numbers.length < 2) {
    return "Invalid input";
  }
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, c) => a + c, 0);
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
