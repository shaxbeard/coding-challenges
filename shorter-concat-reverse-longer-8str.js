
// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix 
// and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null 

// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// EXAMPLES
// assert.strictEqual(shorterReverseLonger("first", "abcde"), "abcdetsrifabcde"
// assert.strictEqual(shorterReverseLonger("hello", "bau"  ), "bauollehbau"
// assert.strictEqual(shorterReverseLonger("fghi",  "abcde"), "fghiedcbafghi" 

// VERBOSE BUT WORKING
// function shorterReverseLonger(a,b){
//     if (a.length < b.length) {
//         return `${a}${b.split("").reverse().join("")}${a}`;
//     } else {
//         return `${b}${a.split("").reverse().join("")}${b}`;
//     }
//   }

// REFACTOR - Make code DRY by creating a utility function and using ternary
function shorterReverseLonger(a,b){
    return a.length < b.length ? `${a}${reverseStr(b)}${a}` : `${b}${reverseStr(a)}${b}`;
  }

function reverseStr(str) {
    return str.split("").reverse().join("");
}

console.log(shorterReverseLonger("hello", "bau"), "bauollehbau")
console.log(shorterReverseLonger("first", "abcde"), "abcdetsrifabcde")