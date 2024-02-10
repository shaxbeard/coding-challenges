// DESCRIPTION:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//Parameter - string only?
//Return - IF odd -> reutrn the middle char; IF even -> return middle 2 chars
//Example - "testing" -> "t" or testing[3]; "middle" -> "dd" or middle[2] and middle[3]
//Pseudocode
// METHODS - STRING OR ARRAY

// function getMiddle(s) {
//   var middle = s.length / 2;
//   console.log(middle);
//   return s.length % 2 === 1
//     ? s.charAt(Math.floor(middle))
//     : s.slice(middle - 1, middle + 1);
// }

function getMiddle(s) {
  var middle = s.length / 2;
  return s.length % 2 === 1
    ? s[Math.floor(middle)]
    : s.slice(middle - 1, middle + 1);
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
