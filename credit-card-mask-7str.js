// Usually when you buy something, you're asked whether your credit card number,
// phone number or answer to your most secret question is still correct.
// However, since someone could look over your shoulder, you don't want that shown on your screen.
// Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

//PREP(M)
//Parameters -> str (letters, numbers), int? no, decimals? no, empty string, null?, undefined?
//Return - last 4 characters are the same - everything else turned to #
//Examples - good
//Pseudocode
//Methods

//Method #1 - MANUAL TRANSMISSION - Use a for() loop to replace characters with # until length - 4
function maskify(str) {
  //input check - if empty string, return empty string
  if (str.length < 1) {
    return "";
  }
  //Initialize an empty string for the altered string
  let masked = "";

  //Loop over the input string and push a # to the masked string
  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 4) {
      masked += "#";
    } else {
      masked += str[i];
    }
  }

  return masked;
}

// Method #2 - Convert to array and use map() to loop
function maskify(str) {
  return str
    .split("")
    .map((char, i) => (i < str.length - 4 ? "#" : char))
    .join("");
}

//METHOD #3 - USE BUILT-IN STRING METHODS: SLICE() AND REPLACE()
function maskify(str) {
  return str.slice(0, -4).replace(/./g, "#") + str.slice(-4);
}

//METHOD #3 - USE BUILT-IN STRING METHODS: SLICE() AND PADSTART()
function maskify(str) {
  debugger;
  return str.slice(-4).padStart(str.length, "#");
}

console.log(maskify("4556364607935616"), "############5616");
console.log(maskify("64607935616"), "#######5616");
console.log(maskify("1"), "1");
console.log(maskify(""), "");

//#1 codewars solution - but it uses regEx for the replace() and I want to avoid for now
// return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
