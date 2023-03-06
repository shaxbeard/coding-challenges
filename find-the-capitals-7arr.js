// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.

//Input - one string containing a word - the word can have both capital letters and lowercase letters
// Return an array (list) with all of the INDEXES of the capital letters

// var capitals = function (word) {
//   //initialize an array
//   const arr = [];
//   //loop over the string
//   for (let i = 0; i < word.length; i++) {
//     //inside the loop, test each letter as a capital letter
//     if (word[i] === word[i].toUpperCase()) {
//       //if the letter is a capital, push THE INDEX of the letter to the array
//       arr.push(i);
//     }
//   }
//   // return the array - with the indexes in order ASC
//   return arr;
// };
// var capitals = function (word) {
//   //initialize an array
//   const arr = [];
//   //loop over the string
//   word.split("").forEach((l, i) => l === l.toUpperCase() && arr.push(i));
//   // return the array - with the indexes in order ASC
//   return arr;
// };

var capitals = function (word) {
  //initialize an array
  const arr = [];
  //loop over the string
  word.split("").forEach((l, i) => /[A-Z]/.test(l) && arr.push(i));
  // return the array - with the indexes in order ASC
  return arr;
};

console.log(capitals("CodEWaRs"), [0, 3, 4, 6]);
console.log(capitals("AbCdEfG"), [0, 2, 4, 6]);
console.log(capitals("CamelCase"), [0, 5]);
