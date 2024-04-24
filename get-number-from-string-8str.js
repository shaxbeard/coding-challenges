
function getNumberFromString(s) {
    return parseInt(s.replace(/\D/g, ""));
}

function getNumberFromString(s) {
  const nums = "0123456789";
  const noNums = s.split("").filter(char => nums.includes(char)).join("");
  return parseInt(noNums);
}

console.log(getNumberFromString("hell7o ther33e"), 733)

