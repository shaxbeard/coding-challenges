// Write a function that when given a URL as a string, parses out just the
// domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") === "cnet"

// input is URL - "" no funny business

// SANDBOX
// "http://github.com/carbonfive/raygun" // indefinite chars after .com /route1/subroute

// "zombie-bites"
// remove:  http:// 
// remove: www.
// remove: .com

//"cnet"
// remove: https://
// remove: www.
// remove: .com

// "github.com/carbonfive/raygun"
// remove: http://
// no www in this case but there could be
// split on the "." ["github", "com/carbonfive/raygun"]

function domainName(s) {
  return s.replace("http://", "").replace("https://", "").replace("www.", "").split(".")[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"), "github");
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(domainName("https://www.cnet.com"), "cnet");





