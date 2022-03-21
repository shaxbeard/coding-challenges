//PREP
// Count the number of each character in a string
//Parameters - string - caps? nums? spaces? if "" -> {}
//Return - object with key=char, value=count for char
//methods

function count(string) {
  let obj = {};
  string.split("").forEach(letter => {
    if (obj[letter] === undefined) {
      obj[letter] === 0;
    }
    obj[letter]++;
  });
}

// FOR EACH METHOD
// function count(string) {
//   let obj = {};
//   string.split("").forEach((letter) => {
//     !obj[letter] ? (obj[letter] = 1) : obj[letter]++;
//   });
//   return obj;
// }

//BEST PRACTICE WITH REDUCE()
// function count(string) {
//   return string.split("").reduce((obj, letter) => {
//     !obj[letter] ? (obj[letter] = 1) : obj[letter]++;
//     return obj;
//   }, {});
// }

console.log(count("aba"));
console.log(count("abracadabra"));
console.log(count("aaaaaaaaazzzzzzzzzzzww"));
