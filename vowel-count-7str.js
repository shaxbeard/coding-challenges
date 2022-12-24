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

// INCLUDES() AND FOR-OF LOOP
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

// NESTED FOR LOOPS
// function getCount(str) {
//   let total = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (str[i] === vowels[j]) {
//         total++;
//       }
//     }
//   }
//   return total;
// }

// // Wow! I had to use total++ inside of the forEach() EVEN INSIDE OF REDUCE

// NESTED FOR EACH LOOPS
//   let total = 0;
//   function getCount(str) {
//   str.split("").forEach(letter => {
//     vowels.forEach(vowel => vowel === letter && total++);
//   });
//   return total;
// }
//}

//  FOR EACH WITH INCLUDES() using split() and foreach()
//   let total = 0;
// function getCount(str) {
//   str.split("").forEach(letter => vowels.includes(letter) && total++);
//   return total;
// }

// REDUCE WITH INCLUDES()
// function getCount(str) {
//   let total = 0;
//   return str.split("").reduce((counter, letter) => {
//     vowels.includes(letter) && counter++;
//     return counter;
//   }, 0);
// }

// REGULAR EXPRESSIONS
// function getCount(str) {
//   let total = 0;
//   let vowelsArr = str.match(/[aeiou]/gi);
//   return vowelsArr ? vowelsArr.length : 0;
// }

console.log(getCount("abracadabra"), 5);
console.log(getCount("talented"), 3);
console.log(getCount("abcdefghijklmnopqrstuvwxyz"), 5);
