// Write a function that accepts an integer n and a string s as parameters
// and returns a string of s repeated exactly n times.

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

const str = "Hello";

// function repeatStr(n, s) {
//   let str = "";
//   for (let i = 0; i < n; i++) {
//     str += s;
//   }
//   return str;
// }
// console.log(repeatStr(17, str));

function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(99, str));
