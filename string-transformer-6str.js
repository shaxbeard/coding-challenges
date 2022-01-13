// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

//Examples
// "Example Input" ==> "iNPUT eXAMPLE"

//PREP
//Input is a string - can have multiple spaces, including leading/trailing
//Reverse the words - AND change the characters. IF uc -> lc; IF lc -> uc

//This fails the tests in codewars if I trim the whitespace - they don't want me to trim !!
function stringTransformer(str) {
  const reversed = str.split(" ").reverse().join(" ");
  return reversed
    .split("")
    .map(l => (l.toUpperCase() === l ? l.toLowerCase() : l.toUpperCase()))
    .join("");
}

console.log(stringTransformer("Example Input"), "iNPUT eXAMPLE");
console.log(stringTransformer("  Example Input "), "iNPUT eXAMPLE");
