// METHOD #1 - MANUAL TRANSMISSION
// function removeChars(str) {
//   var output_str = "";

//   for (var i = 1; i < str.length - 1; i++) {
//     output_str += str[i];
//   }

//   return output_str;
// }
// console.log(removeChars("eloquent"), "loquen");

// METHOD #2 - USING SLICE
function removeChars(str) {
  return str.slice(1, -1);
}

console.log(removeChars("eloquent"), "loquen");

// METHOD #3 - USING SHIFT() AND POP() - WITH DIFFICULTY !!

// function removeChars(str) {
//   let strArr = str.split("");
//   strArr.shift();
//   strArr.pop();
//   return strArr.join("");
// }

// console.log(removeChars("eloquent"), "loquen");
