//A string with multiple words is inputted - each word should be changed so it begin with capital letter
//Inputs: a string, letters only not numbers or special characters
//return the full string with intial caps on all letters

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

function jadenCase(str) {
  // console.log(str.split(" "));
  return str
    .split(" ")
    .map(item => item[0].toUpperCase() + item.slice(1))
    .join(" ");
}

//Desired Result
// jadenCase("How can mirrors be real if our eyes aren't real"); // "How Can Mirrors Be Real If Our Eyes Aren't Real"

console.log(jadenCase("hello world"));
console.log(jadenCase("How can mirrors be real if our eyes aren't real"));
