// DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

function toCamelCase(str) {
  const strSplit = str.indexOf("-") !== -1 ? str.split("-") : str.split("_");
  return strSplit
    .map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join("");
}

console.log(toCamelCase("the-stealth-warrier"), "theStealthWarrior");
console.log(toCamelCase("the_stealth_warrier"), "theStealthWarrior");
console.log(toCamelCase("The_Stealth_Warrier"), "TheStealthWarrior");
// ["the"], ["stealth"], ["warrior]"];
