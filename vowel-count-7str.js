// return the number (count) of vowels in a given string
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

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

const vowels = ["a", "e", "i", "o", "u"];

// SOLUTION #1 - Manual transmission with for() loop and if() statement
// function getCount(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// SOLUTION #2 - REGEX SOLUTION
// REGEX - FASTEST @ 4.5 million ops/s
// function getCount(str) {
//   let vowelsArr = str.match(/[aeiou]/gi);
//   return !vowelsArr ? 0 : vowelsArr.length;
// }

// SOLUTION #3 - 1 LINER WITH REDUCE()
function getCount(str) {
  return str.split("").reduce((a, c) => (vowels.includes(c) ? a + 1 : a), 0);
}

console.log(getCount("abracadabra"), 5);

// FOR-OF LOOP WITH INCLUDES() - 45% SLOWER THAN REGEX - 5% SLOWER THAN SPLIT().FOREACH() !!!
// function getCount(str) {
//   let total = 0;
//   for (letter of str) {
//     if (vowels.includes(letter)) {
//       total++;
//     }
//   }
//   return total;
// }

// SHORTENED VERSION OF ABOVE
// function getCount(str) {
//   let total = 0;
//   for (letter of str) {
//     vowels.includes(letter) && total++;
//   }
//   return total;
// }

// // Wow! I had to use total++ inside of the forEach() EVEN INSIDE OF REDUCE

// REDUCE WITH INCLUDES()
// function getCount(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   return str.split("").reduce((counter, letter) => {
//     vowels.includes(letter) && counter++;
//     return counter;
//   }, 0);
// }

// console.log(getCount("abracadabra"), 5);
// console.log(getCount("talented"), 3);
// console.log(getCount("abcdefghijklmnopqrstuvwxyz"), 5);
// console.log(getCount("bbb"), 0);
