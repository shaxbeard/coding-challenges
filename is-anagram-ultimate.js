// DIRECT COMPARISON

function isAnagram(strA, strB) {
  const sanitizeString = function (str) {
    return str
      .toLowerCase()
      .replace(/[^a-z\d]/g, "")
      .split("")
      .sort()
      .join("");
  };
  return sanitizeString(strA) === sanitizeString(strB);
}

console.log(isAnagram("silent", "listen"), true);
console.log(isAnagram("skywalker", "listen"), false);
