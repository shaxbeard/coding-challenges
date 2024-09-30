/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// THE BEST SOLUTIONS ARE AT THE BOTTOM OF THIS FILE

// CHAINING BUILT-IN METHODS
// function reverseString(text) {
//   return text.split("").reverse().join("");
// }

// //  CHAINING BUILT-IN METHODS USING ES6
// function reverseString(text) {
//   return [...text].reverse().join("");
// }

// USING A FOR LOOP
// function reverseString(text) {
//   let result = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     result += text[i];
//   }
//   return result;
// }

// USING A FOR..OF LOOP IN ES6

// function reverseString(text) {
//   let result = "";
//   for (let char of text) {
//     result = char + result;
//   }
//   return result;
// }

// USING .REDUCE()
// function reverseString(text) {
//   return text.split("").reduce((word, letter) => letter + word, "");
// }

// Using a basic for() loop - manual transmission
// function reverseString(text) {
//   let result = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     result += text[i];
//   }
//   return result;
// }

// Using a for...of loop
// function reverseString(text) {
//   let result = "";
//   for (char of text) {
//     result = char + result;
//   }
//   return result;
// }

//Using reduce
// function reverseString(text) {
//   return text.split("").reduce((word, char) => char + word, "");
// }


// THE LEETCODE VERSION OF THIS QUESTION REQUIRES YOU TO MODIFY THE INPUT ARRAY IN PLACE

// Leetcode #344
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// THE STRING IS ALREADY SPLIT INTO AN ARRAY OF LETTERS IN THIS VERSION OF THE QUESTION
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Interview solution #1 - Two pointers
var reverseString = function(s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
      [s[l], s[r]] = [s[r], s[l]]; // Neetcode says that some language allow you to swap without a temp var like this
      l++;
      r--;
  }
  return s;
};

// Java solution - note, you have to use temp for swap (I think)
// class Solution {
//   public void reverseString(char[] s) {
//       int left = 0, right = s.length-1;
//       while( left < right ){  
//           char temp = s[left];
//           s[left] = s[right];            
//           s[right] = temp;
//           left += 1;
//           right -= 1;
//       }
//       return;
//   }
// }

console.log(reverseString(["h","e","l","l","o"]), ["o","l","l","e","h"]);

// Solution #2 - Recursive (uses O(n) memory)
// DEMO 
// [h, e, l, l, o]
// [x, e, l, l, x] // first and last indexes have been swapped
// [e, l, l] // The unswapped letters are now a sub-problem


// Recursive solution using slice() and charAt()
// function reverseString(text) {
//   //base case
//   if (text === "") {
//     return "";
//   }
//   //recursive case
//   return reverseString(text.slice(1)) + text.charAt(0);
// }



// Solution using a stack (uses O(n) memory)
// DEMO
// First, add each letter to a stack
// Then, pop each letter off the top of the stack
// Stack
// "o"
// "l"
// "l"
// "e"
// "h"
// function reverseString(s) {
//   const stack = [];
//   for (let char of s) {
//     stack.push(char);
//     console.log(stack);
//   }
//   // const stack = [...s] // OR, just copy the arr
//   let i = 0;
//   while (stack.length > 0) {
//     s[i] = stack.pop();
//     console.log(s);
//     i++;
//   }
//   return s;
// }

// console.log(reverseString("algorithm"), "mhtirogla");
// console.log(reverseString(["h","e","l","l","o"]));
