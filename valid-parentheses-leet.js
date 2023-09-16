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

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// const isValid = s => {
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     let char = stack[stack.length - 1];
//     if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
//       stack.push(s[i]);
//     } else if (
//       (char == "(" && s[i] == ")") ||
//       (char == "{" && s[i] == "}") ||
//       (char == "[" && s[i] == "]")
//     ) {
//       stack.pop();
//     } else return false;
//   }
//   return stack.length ? false : true;
// };

// console.log(isValid("()[]{}"), true);
// console.log(isValid("()[{}"), false);
// console.log(isValid("([]{})"), true);
// console.log(isValid("([{}])"), true);

const isValid = s => {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = stack[stack.length - 1];
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else if (char === map[s[i]]) {
      stack.pop();
    } else return false;
  }
  return stack.length ? false : true;
};

console.log(isValid("[[{({{[[()]]}})}]]"));

// console.log(isValid("()[]{}"), true);
// console.log(isValid("()[{}"), false);
// console.log(isValid("([]{})"), true);
// console.log(isValid("([{}])"), true);
