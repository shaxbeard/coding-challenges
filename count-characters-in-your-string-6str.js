// Return an object with keys of the characters in the string and values of the number of times they appear (a hash map)

//PREP
// Count the number of each character in a string
//Parameters - string - caps? nums? spaces? if "" -> {}
//Return - object with key=char, value=count for char
//methods

// FOR-OF - FASTEST at 2 million ops/s
// function count(string) {
//   let obj = {};
//   for (letter of string) {
//     !obj[letter] ? (obj[letter] = 1) : obj[letter]++;
//   }
//   return obj;
// }

// FOR EACH METHOD - 10% slower
// function count(string) {
//   let obj = {};
//   string.split("").forEach(letter => {
//     !obj[letter] ? (obj[letter] = 1) : obj[letter]++;
//   });
//   return obj;
// }

// BEST PRACTICE WITH REDUCE() - 6% slower
// function count(string) {
//   return string.split("").reduce((obj, letter) => {
//     !obj[letter] ? (obj[letter] = 1) : obj[letter]++;
//     return obj;
//   }, {});
// }

// CHAT GPT GAVE ME THIS AS A "ONE-LINER" VERSION USING REDUCE - it works!
// function count(str) {
//   return [...str].reduce(
//     (map, char) => ((map[char] = !map[char] ? 1 : map[char] + 1), map),
//     {}
//   );
// }

// Using a and c as variables to make it ultra short but hard to read
// function count(str) {
//   return [...str].reduce((a, c) => ((a[c] = !a[c] ? 1 : a[c] + 1), a), {});
// }

// console.log(count("aba"));
console.log(count("abracadabra"));
console.log(count("aaaaaaaaazzzzzzzzzzzww"));
