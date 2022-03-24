//PREP
// Count the number of each character in a string
//Parameters - string - caps? nums? spaces? if "" -> {}
//Return - object with key=char, value=count for char
//methods

// FOR-OF - FASTEST at 2 million ops/s
function count(string) {
  let obj = {};
  for (letter of string) {
    !obj[letter] ? (obj[letter] = 1) : obj[letter]++;
  }
  return obj;
}

// FOR EACH METHOD - 10% slower
// function count(string) {
//   let obj = {};
//   string.split("").forEach(letter => {
//     !obj[letter] ? (obj[letter] = 1) : obj[letter]++;
//   });
//   return obj;
// }

//BEST PRACTICE WITH REDUCE() - 6% slower
// function count(string) {
//   return string.split("").reduce((obj, letter) => {
//     !obj[letter] ? (obj[letter] = 1) : obj[letter]++;
//     return obj;
//   }, {});
// }

console.log(count("aba"));
console.log(count("abracadabra"));
console.log(count("aaaaaaaaazzzzzzzzzzzww"));
