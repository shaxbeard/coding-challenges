
 // Loop over each letter in str
  // Return an array with the entire word "hello" on each iteration
      // BUT one letter of each of these words will be capitalized
      // On the first iteration , capitalize the first letter
      // On the second iteration, capitalize the second letter
      // ...

//  0     1    2    3    4
// ["h", "e", "l", "l", "o"]
//             ^
// ["H", "e", "l", "l", "o"]
// ["h", "E", "l", "l", "o"]
// ["h", "e", "L", "l", "o"]
// ...

function wave(str) {
  // Convert the string to an array of letters
  // Loop over the array of letters
  // Return the letters before the index 
      // + the current letter capitalized
      // + the letters after the index
 
  return str.split("").map((char, index) => str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)).filter(x => x != str);
}


console.log(wave("hello"), ["Hello", "hEllo", "heLlo", "helLo", "hellO"])
console.log(wave("du h"), ["Duh", "dUh", "duH"])
console.log(wave(""))
