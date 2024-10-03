// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// RETURN - You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

//INPUT - a string of words - valid, no funny business, letters a to z, lowercase only
//RETRN - first instance of the highest scoring word

//How to assign the values for a to z with numbers from 1 to 26?
// const charValue = {
//   a: 1,
//   b: 2,
// };

//Possible approaches
// 1. Use the charCodeAt value for each letter and subtract the appropriate number
// The charCodeAt value for a = 97, so the "score" for each char should be the charCodeAt - 96

// let max_score = 30;
// let word_score =
//   0     1      2     3     4       5     6     7
//["man", "i", "need", "a", "taxi", "up", "to", "ubud"]
//  ^

// Method #1 - Nested Loops and charCodeAt()
// function highScore(str) {
//   const alphabet = " abcdefghijklmnopqrstuvwxyz";
//   let maxScore = 0;  
//   let maxWord = "";
//   let strArray = str.split(" ");

//   for (let i = 0; i < strArray.length; i++) {
//     let wordScore = 0; // Each word score must be in the outer loop

//     for (let j = 0; j < strArray[i].length; j++) {
//       wordScore += strArray[i].charCodeAt(j) - 96;
//       // wordScore += alphabet.indexOf(strArray[i][j]);
//     }

//     if (wordScore > maxScore) {
//       maxScore = wordScore;
//       maxWord = strArray[i];
//     }
//   }
//   return maxWord;
// }

// Method #2 - The highest rated CodeWars solution
//  0       1      2     3      4     5     6      7
// [28,     9,    28,    1,    54,    37,   35,    48]    // word scores
// ["man", "i", "need", "a", "taxi", "up", "to", "ubud"]  // word array


function highScore(s) {
  const strArr = s.split(" ");
  // Make an array with the count of each word
  const countArr = strArr.map(s => s.split("").reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  // return the word at the same index as the max score
  const maxCount = Math.max(...countArr);
  return strArr[countArr.indexOf(maxCount)];
}


console.log(highScore("man i need a taxi up to ubud"), "taxi");
console.log(highScore("what time are we climbing up the volcano"), "volcano");
console.log(highScore("take me to semynak"), "semynak");