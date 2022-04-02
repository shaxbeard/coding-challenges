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

function maskify(cc) {
  //replace elements at the end of a string
  //convert to array and use the splice method - can you use the array length?
  //manually loop over the array and replace each index with # until you reach arr.length - 4?

  return cc
    .split("")
    .map((item, index) => (index < cc.length - 4 ? "#" : item))
    .join("");
}

console.log(maskify("4556364607935616"), "############5616");
console.log(maskify("64607935616"), "#######5616");
console.log(maskify("1"), "1");
console.log(maskify(""), "");

//#1 codewars solution - but it uses regEx for the replace() and I want to avoid for now
// return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
