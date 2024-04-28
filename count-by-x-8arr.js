// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

//Inputs - positive nums > 0 - any funny business? num as string? no;
//Output - an array with the first n "multiples" of the number - what is a "multiple"?
// A multiple for 5 is 5 X 1, 5 X 2, 5 X 3, 5 X 4 ...

// For the number 2 and 5 multiples
//i:  1      2      3   
// [2 * 1, 2 * 2, 2 * 3 ...]
//    ^

// Okay, this is one of those "range" problems
// But in JS we don't have a range() method so we use a for() loop to count up to n

// METHOD 1 - USE A FOR() LOOP TO COUNT TO N
// function countBy(num, n) {
//   const result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(num * i);
//   }
//   return result;
// }

// METHOD 2 - MDN PROVIDES THIS VARIATION ON ARRAY.FROM() TO "GENERATE A SEQUENCE OF NUMBERS"
function countBy(num, n) {
  return Array.from({length: n}, (_, i) => (i + 1) * num);
} 


console.log(countBy(1, 10), [1,2,3,4,5,6,7,8,9,10])
console.log(countBy(2, 5), [2,4,6,8,10])