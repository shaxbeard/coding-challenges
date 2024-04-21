// "Remove First and Last Character Part Two-8str." This is a spin off of my first kata.
// You are given a string containing a sequence of character sequences separated by commas. 
// Write a function which returns a new string containing the same character sequences 
// except the first and the last ones but this time separated by spaces.

// NOTE - If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL


// function removeFirstAndLast(str){
//     return str.split(",").slice(1,-1).join(" ") || null;
// }

function removeFirstAndLast(str) {
    const result = str.split(",").slice(1, -1).join(" ");
    return result === '' ? null : result;
}

console.log(removeFirstAndLast("1,2"), null)
console.log(removeFirstAndLast("1,2,3,4,5"), "2 3 4")
