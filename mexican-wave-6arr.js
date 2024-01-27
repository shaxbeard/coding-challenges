// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

// EXAMPLE
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

//Using map() to replace each char -> not easy?
// ["h", "e", "l", "l", "o"]
//        ^
// str.slice(0, i) + char.toUpperCase() + str.slice(i + 1); // works for the first letter too

function wave(str) {
  return str
    .split("")
    .map((char, i) => str.slice(0, i) + char.toUpperCase() + str.slice(i + 1))
    .filter(x => x != str);
}

console.log(wave("hello"), ["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
console.log(
  wave("Two words", [
    "Two words",
    "tWo words",
    "twO words",
    "two Words",
    "two wOrds",
    "two woRds",
    "two worDs",
    "two wordS",
  ])
);
