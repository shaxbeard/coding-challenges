// Return an array containing the numbers from 1 to N,
// where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:
// fizzbuzz(3) -->  [1, 2, "Fizz"]

// PREP
// Parameter - a number from 1 to N, INT?, no funny business?
// VARIATION #1 return an array with all the values
// Return - an array -> all the numbers from 1 to N
// EXCEPT - return "Fizz" if the value is a multiple of 3
// - reutrn "Buzz" if the value is a multiple of 5
// return "FizzBuzz" if the value is a multiple of 3 & 5

// VARIATION #1 - JUST "PRINT" ALL OF THE VALUES
// function fizzbuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzbuzz(20);


// VARIATION #2 - RETURN AN ARRAY OF VALUE
// THE CODEWARS VERSION OF FIZZBUZZ


function fizzbuzz(n){
  const result = [];
  for(let i = 1; i <= n; i++){
    const divisibleBy3 = i % 3 === 0;
    const divisibleBy5 = i % 5 === 0;
    
    if (divisibleBy3 && divisibleBy5) {result.push("FizzBuzz")}
    else if (divisibleBy3) {result.push("Fizz")}
    else if (divisibleBy5) {result.push("Buzz")}
    else {
      result.push(i);
    }
  }
  return result;
}


console.log(fizzbuzz(3), [1, 2, "Fizz"]);
console.log(fizzbuzz(15), [
  [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"],
]);
