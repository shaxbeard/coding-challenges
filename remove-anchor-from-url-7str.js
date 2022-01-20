// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//PREP
//parameters -> string, no int, float, no null, no undefined, no empty string
//return - if the url has # -> remove the hash AND any characters following it; ELSE -> return the original string
//examples
//pseudocode
//methdods

const removeAnchor = url => (url.indexOf("#") === -1 ? url : url.split("#")[0]);

console.log(removeAnchor("www.codewars.com#about"), "www.codewars.com");
console.log(removeAnchor("www.codewars.com#contactus"), "www.codewars.com");
console.log(removeAnchor("www.codewars.com?page=1"), "www.codewars.com?page=1");
