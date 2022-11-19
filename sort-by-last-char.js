// Given a string of words (x), you need to return an array of the words,
// sorted alphabetically by the final character in each.

// If two words have the same last letter,
// they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// PREP
// input - string, so no int, normal letters only? yes
// return an ARRAY - sort alphabetically by LAST CHAR - if 2 words end in same char, leave orig order

// function last(str) {
//   const arr = str.split(" ");
//   const reversed = arr.map(word => word.split("").reverse().join(""));
//   const sorted = reversed.sort((a, b) => (a > b ? 1 : a === b ? 0 : -1));
//   return sorted.map(word => word.split("").reverse().join(""));
// }

function last(str) {}

console.log(last("take me to semynak"), ["take", "me", "semynak", "to"]);
console.log(last("man i need a taxi up to ubud"), [
  "a",
  "need",
  "ubud",
  "i",
  "taxi",
  "man",
  "to",
  "up",
]);

// (last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
