// DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  const strSplit = str.indexOf("-") !== -1 ? str.split("-") : str.split("_");
  let camel;
  strSplit.forEach((item, index) => {
    index === 0
      ? (camel = item)
      : (camel += item[0].toUpperCase() + item.slice(1));
  });
  return camel;
}

console.log(toCamelCase("the-stealth-warrier"));
console.log(toCamelCase("the_stealth_warrier"));
