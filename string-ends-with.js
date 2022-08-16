//PREP
//If str ends with ending TRUE, else FALSE
//Parameters
//Return
//Examples
//Pseudocode

//Desired result
//solution('abc', 'bc') -> true
//solution('abc', 'd') -> false

//solution('abcdefgh', 'fgh') -> true

//LOL - I guess I should look at the list of JS string methods first

function solution(str, ending) {
  // return str.slice(-ending.length) === ending;
  return str.endsWith(ending);
}

console.log(solution("abc", "bc"));
