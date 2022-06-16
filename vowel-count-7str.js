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

function getCount(str) {
  let total = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  str.split("").forEach((letter) => {
    console.log(letter);
    vowels.forEach((vowel) => vowel === letter && total++);
  });
  return total;
}

// // Wow! I had to use total++ inside of the forEach() EVEN INSIDE OF REDUCE
// function getCount(str) {
//   const vowels = ["a", "e", "i", "o", "u"];

//   return str.split("").reduce((total, letter) => {
//     vowels.forEach((vowel) => vowel === letter && total++);
//     return total;
//   }, 0);
// }

console.log(getCount("abracadabra"));
console.log(getCount("talented"));
