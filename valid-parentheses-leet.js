// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

const isValid = s => {
  let stck = [];
  for (let i = 0; i < s.length; i++) {
    let char = stck[stck.length - 1];
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stck.push(s[i]);
    } else if (
      (char == "(" && s[i] == ")") ||
      (char == "{" && s[i] == "}") ||
      (char == "[" && s[i] == "]")
    ) {
      stck.pop();
    } else return false;
  }
  return stck.length ? false : true;
};

console.log(isValid("()[]{}"));
