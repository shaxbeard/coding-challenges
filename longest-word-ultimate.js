// Given a sentence, return the longest word in the string

// EXAMPLES
// "Top Shelf Web Development Training on Scotch" -> "development"
// "BUILDING FOR THE NEXT BILLION USERS" -> "BUILDING"

// USING A FOR LOOP

function longestWord(str) {
  let wordArray = str.split(" ");
  let maxLength = 0;
  let result = "";

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > maxLength) {
      maxLength = wordArray[i].length;
      result = wordArray[i];
    }
  }
  return result;
}

// // USING REDUCE()
// function longestWord(str) {
//   const result = str.split(" ").reduce((maxLengthWord, currentWord) => {
//     if (currentWord.length > maxLengthWord.length) {
//       return currentWord;
//     } else {
//       return maxLengthWord;
//     }
//   }, "");
//   return result;
// }

// USING REDUCE() - concise
// function longestWord(str) {
//   return str.split(" ").reduce((maxWord, word) => {
//     return word.length > maxWord.length ? word : maxWord;
//   }, "");
// }

// USING SORT()

function longestWord(str) {
  return str.split(" ").sort((wordA, wordB) => wordB.length - wordA.length)[0];
}

console.log(longestWord("Top Shelf Web Development Training on Scotch"));
console.log(longestWord("BUILDING FOR THE NEXT BILLION USERS"));
