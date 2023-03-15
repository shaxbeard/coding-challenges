// You will be given an array a and a value x.
// All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
//PREP
//Parameter #1 is an array - can contain numbers or strings
//Paramter #2 is either a number or a string
//RETURN - I return true (boolean) if the array contains the value or false(boolean) if not

// FOR LOOP SOLUTION(S)
// function check(a, x) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == x) {
//       return true;
//     }
//   }
//   return false;
// }

// FOR-OF LOOP SOLUTION
// function check(a, x) {
//   for (let item of a) {
//     if (item === x) {
//       return true;
//     }
//   }
//   return false;
// }

// FOR LOOP - CHECK THE ENTIRE ARRAY BEFORE RETURNING A RESULT
// function check(a, x) {
//   let result = false;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === x) {
//       result = true;
//     }
//   }
//   return result;
// }

// COUNT THE INSTANCES OF X INSTEAD OF RETURNING TRUE/FALSE
// function check(a, x) {
//   let count = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === x) {
//       count++;
//     }
//   }
//   return count;
// }

// SOLUTION USING INCLUDES() METHOD
// function check(a, x) {
//   return a.includes(x);
// }

console.log(check([5, 1, 2, 3, 4, 5], 5), true);
console.log(check([1, 2, 3, 4, 5], 11), false);
console.log(check(["a", "b", "c", "d", "e"], "e"), true);
console.log(check(["1", "2", "3", "4", "5"], 5), false);
