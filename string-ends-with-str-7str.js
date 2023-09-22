//PREP
//If str ends with ending TRUE, else FALSE
//Parameters
//Return
//Examples
//Pseudocode
//Methods

//Desired result
//solution('abc', 'bc') -> true
//solution('abc', 'd') -> false
//solution('abcdefgh', 'fgh') -> true

// METHOD #1 - USING A BUILT-IN STRING METHOD SPECIFICALLY FOR THIS USAGE
// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// METHOD #2 - ADAPTING THE SLICE() METHOD - AS IF THE ENDSWITH() METHOD DIDN'T EXIST
// function solution(str, ending) {
//   var len = ending.length;
//   var str = str.slice(-len);
//   return str.match(ending) ? true : false;
// }

// METHOD #2 - ADAPTING THE SLICE() METHOD - AS IF THE ENDSWITH() METHOD DIDN'T EXIST
function solution(str, ending) {
  var len = ending.length;
  var str = str.slice(-len);
  return str.search(ending) === -1 ? false : true;
}

console.log(solution("abc", "bc"), true);
console.log(solution("abc", "zzz"), false);
console.log(solution("abcdefgh", "fgh"), true);
