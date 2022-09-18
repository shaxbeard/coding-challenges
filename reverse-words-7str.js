// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//Parameters - string only, can have spaces, including double spaces
//Return 1)reverse the words 2) return all spaces
//Example - above
//Psudocode - split on single space
//
//METHODS - the array reverse method

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// console.log(reverseWords("word"));
// console.log(reverseWords("This is an example!"));
console.log(reverseWords("double       spaces"));
