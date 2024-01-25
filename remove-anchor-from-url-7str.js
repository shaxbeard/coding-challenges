// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//PREP
//parameters -> string, no int, float, no null, no undefined, no empty string
//return - if the url has # -> remove the hash AND any characters following it; ELSE -> return the original string
//examples
//pseudocode
//methdods

// Method #1 - manual transmission - C syntax only with a for() loop
// function removeUrlAnchor(url) {
//   let string = "";
//   debugger;
//   for (let i = 0; i < url.length; i++) {
//     //Once you hit the #, break out of the for() loop and return the new string
//     if (url[i] === "#") {
//       break;
//     }
//     string += url[i];
//   }
//   return string;
// }

// Method #2 - using built-in string method(s)
// function removeUrlAnchor(url) {
//   // Split the string into an array of two string using the # as the "splitter"
//   // Return the string at the first index of the array - the part BEFORE the #
//   return url.split("#")[0];
// }

function removeUrlAnchor(url) {
  var index = url.indexOf("#");
  return index == -1 ? url : url.slice(0, index);
}

console.log(removeUrlAnchor("www.codewars.com#about"), "www.codewars.com");
console.log(removeUrlAnchor("www.codewars.com#contactus"), "www.codewars.com");
console.log(
  removeUrlAnchor("www.codewars.com?page=1"),
  "www.codewars.com?page=1"
);
