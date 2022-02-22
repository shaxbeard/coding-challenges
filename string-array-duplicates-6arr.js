// In this Kata, you will be given an array of strings
// and your task is to remove all consecutive duplicate letters
// from each string in the array.

// EXAMPLES
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].

//PREP
// lowercase strings, no spaces
// return an array of the the strings but with consecutive duplicate letters removed
// pseudocode
//map -> split words into letters -> filter ->
// if (letter !== prev) THEN keep the letter

function dup(arr) {
  return arr.map(word =>
    word
      .split("")
      .filter((l, i, a) => l !== a[i - 1])
      //   .filter((l, i, { [i - 1]: prev }) => l !== prev)
      .join("")
  );
}

console.log(dup(["abracadabra", "allottee", "assessee"]), [
  "abracadabra",
  "alote",
  "asese",
]);
console.log(dup(["kelless", "keenness"]), ["keles", "kenes"]);
