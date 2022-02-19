// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.

// Notes: There is no need for string validation
// and every sentence given will contain all vowels but one.
// Also, you won't need to worry about capitals.

//EXAMPLES
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

//PREP
//Parameter - string contains all vowels but one
//Return - the index of the missing vowel
//Psuedocode - loop through the vowels -> if indexOf(item) is -1 -> return that item's index

function absentVowel(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  // MY ATTEMPT
  //   for (let i = 0; i < vowels.length; i++) {
  //     if (s.indexOf(i) === -1) {
  //       return i;
  //     }
  //   }
  for (let i = 0; i < vowels.length; i++) {
    if (s.indexOf(vowels[i]) === -1) {
      return i;
    }
  }
  //   vowels.forEach((v,i) => indexOf(v) === -1 && i); // how do you return a value from forEach?
  //   return vowels.map((v, i) => s.indexOf(v) === -1 && i);
  for (let x of vowels) {
    if (s.indexOf(x) === -1) {
      return;
    }
  }
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
console.log(
  absentVowel("Bb Smith sent us six neatly arranged range bicycles"),
  3
);
