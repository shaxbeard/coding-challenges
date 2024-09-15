// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

// SOLUTION #1 - USING METHODS
// const str = "world";

// function solution(str) {
//   return str.split("").reverse().join("");
// }

// console.log(solution(str));

// SOLUTION #2 - USING A STACK
// You must reverse the string by modifying the input array in-place with O(1) extra memory.

// THE STRING IS ALREADY SPLIT INTO AN ARRAY OF LETTERS IN THIS VERSION OF THE QUESTION
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// DEMO
// ["h","e","l","l","o"], s
// Step 1 - Copy s as "stack"
// [], stack
// ["h"], stack, iteration #1
// ["h","e"], stack, iteration #2
// ["h","e","l","l","o"], after the for() loop - just a copy of s

// Step 2 - Overwrite s one letter at a time by popping each letter from the END of stack
// ["h","e","l","l","o"], s
// ["o","e","l","l","o"], s - first iteration
// ["o","l","l","l","o"], s - second iteration
// ["o","l","l","l","o"], s - third iteration
// ["o","l","l","e","o"], s - fourth iteration
// ["o","l","l","e","h"], s - fifth iteration


function reverseString(s) {
  // You need a copy of s to overwrite the input array from
  // const stack = [];
  // for (let char of s) {
  //   stack.push(char);
  // }
  const stack = [...s] // OR, just copy the arr
  let i = 0;
  while (stack.length > 0) {
    s[i] = stack.pop();
    i++;
  }
  return s;
}

console.log(reverseString(["h","e","l","l","o"]), ["o","l","l","e","h"])