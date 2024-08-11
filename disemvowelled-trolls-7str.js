// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// METHOD #1 - MANUAL TRANSMISSION
// function disemvowel(str) {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//   //Push all of the non-vowels to a new string
//   let nonVowels = "";

//   //Loop over the string to test each letter individually
//   for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i])) {
//       nonVowels += str[i];
//     }
//   }
//   return nonVowels;
// }

// METHOD #1.5 - PYTHONIC VERION OF #1
function disemvowel(str) {
  const vowels = "aeiouAEIOU"
  let nonVowels = "";
  for (let char of str) {
    if (!vowels.includes(char)) nonVowels += char
  }
  return nonVowels
}

console.log(
  disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!"
);

// METHOD #2 - USING REPLACE AND REGEX
// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, "");
// }

// console.log(
//   disemvowel("This website is for losers LOL!"),
//   "Ths wbst s fr lsrs LL!"
// );

// const vowels = "aeiou";

// function disemvowel(str) {
//   return str
//     .split("")
//     .filter(letter => !vowels.includes(letter.toLowerCase()))
//     .join("");
// }

// const vowels = "aeiouAEIOU";
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function disemvowel(str) {
  return str
    .split("")
    .filter(letter => !vowels.includes(letter))
    .join("");
}

console.log(
  disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!"
);
