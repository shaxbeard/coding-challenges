// DESCRIPTION:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//Parameter - string only?
//Return - IF odd -> reutrn the middle char; IF even -> return middle 2 chars
//Example - "testing" -> "t"; "middle" -> "dd"
//Pseudocode

//If odd like 7 chars, get char at position 4
//7 / 2 = 3.5 ; cut off the .5 - then it will be the zero indexed char 3
//If even like 6 chars, get chars at positions 3 and 4
//6 / 2 = 3; get the chars at indexes 2(3 -1) and 3

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

console.log(getMiddle("middle"));
console.log(getMiddle("testing"));

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// function getMiddle(s) {
//     const middle = s.length / 2;
//     return s.length % 2 ? s[parseInt(middle)] : `${s[middle - 1]}${s[middle]}`;
//   }
