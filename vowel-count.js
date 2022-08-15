//return the number (count) of vowels in a given string
//Parameters - a,e.i,o,u -> ++ , no uppercase, no numbers
//Return - the total number of vowels
//desired result
// 'abracadabra' => 5
// 'oolong' => 3
// 'talented' => 3'
//pseudo
//array # done
//loop (reduce?)
//conditional - ++ if charCodeAt (neede?) = a||e||i||o||u

// function getCount(str) {
//   const letters = str.split("");
//   const result = letters.reduce((total, item) => {
//     if (
//       item === "a" ||
//       item === "e" ||
//       item === "i" ||
//       item === "o" ||
//       item === "u"
//     ) {
//       total++;
//     }
//     return total;
//   }, 0);
//   return result;
// }
// function getCount(str) {
//   const letters = str.split("");
//   const result = letters.reduce((total, item) => {
//     const vowels = ["a", "e", "i", "o", "u"];
//     vowels.forEach((vowel) => {
//       if (vowel === item) {
//         total++;
//       }
//     });
//     return total;
//   }, 0);
//   return result;
// }

function getCount(str) {
  let total = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  str.split("").forEach((letter) => {
    vowels.forEach((vowel) => vowel === letter && total++);
  });
  return total;
}

console.log(getCount("abcdefo"));
