// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.

// Input - one string containing a word - the word can have both capital letters and lowercase letters
// Return an array (list) with all of the INDEXES of the capital letters

//Method #1 - Manual transmissiton with C syntax and test with charCodeAt() method
// const capitals = word => {
//   const indexes = [];
//   for (let i = 0; i < word.length; i++) {
// const code = word.charCodeAt(i);
// if (code >= 65 && code <= 90) {
//       indexes.push(i);
//     }
//   }
//   return indexes;
// };

//Method #1a - Manual transmissiton with C syntax and test with toUpperCase() method
// Loop over the word and test each letter
// If the letter is uppercase, then push its index to a new array

// var capitals = function (word) {
//   const capIndexes = [];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === word[i].toUpperCase()) {
//       // this records symbols as uppercase letters!
//       capIndexes.push(i);
//     }
//   }
//   return capIndexes;
// };

// Method #2 - Use Regex to match each of the capital letters
function capitals(word) {
  // Use match() to make a new array with just the capital letters in it
  const capsArray = word.match(/[A-Z]/g);
  // Then loop over this new array and convert each letter to it index from the original array
  return capsArray.map(capChar => word.indexOf(capChar));
}

console.log(capitals("CodEWaRs"), [0, 3, 4, 6]);
console.log(capitals("tUnE-yArDs"), [1, 3, 6, 8]);
