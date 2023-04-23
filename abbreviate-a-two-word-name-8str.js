// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//PREP
//Parameter - string, 2 words, 1 space between words, lowercase OR uppercase letters
//Return - first letter from first word -> uppercase; then dot; then first letter from second word -> uppercase; then dot (NO - only one dot)
//Example - Sam Harris -> S.H ; patrick feeney -> P.F
//Pseudocode - to uppercase, split, grab the first letter of each name
//Methods!

//which one is the better solution?

function abbrevName(name) {
  //  My solution
  // return name
  //   .toUpperCase()
  //   .split(" ")
  //   .map((item) => item[0])
  //   .join(".");
  // Top ranked solution on codewars
  var arr = name.toUpperCase().split(" ");
  return `${arr[0][0]}.${arr[1][0]}`;
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("patrick feeney"));
