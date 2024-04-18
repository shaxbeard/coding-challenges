// "All Star Code Challenge #18-8str." Create a function that accepts a string and a single character, 
// and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o") ==> 1
// ("Hello", "l") ==> 2
// ("", "z") ==> 0

// Method #1 - DEMO ONLY - Manual transmission

// function strCount(str, letter){  
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] == letter)
//         count++;
//     }
//     return count;
//   }

// Elegant use of filter() and length to count the instances of letter
// function strCount(str, letter){  
//     return str.split("").filter(char => char === letter).length;
// }

// Shortest but least readable
// function strCount(str, letter){  
//     return str.split(letter).length-1
// }

console.log(strCount("Hello", "o"), 1)
console.log(strCount("Hello", "l"), 2)

