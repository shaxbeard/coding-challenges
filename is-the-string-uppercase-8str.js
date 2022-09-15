function isUpperCase(str) {
  return str.toUpperCase() === str;
}

//Desired result
//"HELLO" -> true
//"hello" -> false
//"Hello" -> false
console.log(isUpperCase("HELLLO"));
