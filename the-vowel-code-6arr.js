// Step 1:
// Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

////Step 2:
// Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// Input is a string - any empty strings? Any other funny business?
// The output has all lowercase vowels converted to appropriate numbers - no uppercase vowels will appear?

//[""]
//["h", "e", "l", "l", "o"]
//  ^

// Method #1 - DEMO ONLY - Manual transmission and only including the encode() function
// function encode(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const vowelMap = { a: 1, e: 2, i: 3, o: 4, u: 5 };
//   let encodedStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       encodedStr += vowelMap[str[i]];
//     } else {
//       encodedStr += str[i];
//     }
//   }
//   return encodedStr;
// }

// Method #2 - Using the replace() method
function encode(str) {
  //   const vowelMap = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  const vowels = "aeiou";
  return str.replace(/[aeiou]/g, char => vowels.indexOf(char) + 1);
}

function decode(str) {
  const numMap = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };
  return str.replace(/[12345]/g, num => numMap[num]);
}

console.log(encode("hello"), "h2ll4");
console.log(encode("How are you today?"), "H4w 1r2 y45 t4d1y?");
// console.log(decode("h2ll4"), "hello");
// console.log(decode("H4w 1r2 y45 t4d1y?"), "How are you today?");
