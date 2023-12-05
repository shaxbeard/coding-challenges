// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

//EXAMPLE
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  return str;
}

console.log(wave("hello"), ["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
console.log(wave("codewars"), [
  "Codewars",
  "cOdewars",
  "coDewars",
  "codEwars",
  "codeWars",
  "codewArs",
  "codewaRs",
  "codewarS",
]);
