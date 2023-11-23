// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//Input is a string - do I need to worry about funny business? Empty string, non-string input like an array?
//Return a string, but the letters are converted like so:
// A -> T
// T -> A
// G -> C
// C -> G

//Method #1 - Simple conditional or switch statement

function DNAStrand(dna) {
  // input check
  if (dna.length < 1 || typeof dna !== "string") {
    return 0;
  }

  let dnaConverted = "";
  // Loop over the string and swap each letter as appropriate
  for (let char of dna) {
    if (char === "A") {
      dnaConverted += "T";
    }
    if (char === "T") {
      dnaConverted += "A";
    }
    if (char === "G") {
      dnaConverted += "C";
    }
    if (char === "C") {
      dnaConverted += "G";
    }
  }
  return dnaConverted;
}

//Method #2 - Use a "map" to lookup the conversion for each letter

var pairs = { A: "T", T: "A", C: "G", G: "C" };

function DNAStrand(dna) {
  return dna
    .split("")
    .map(char => pairs[char])
    .join("");
}

// Method #3 - Use replace() to a global find/replace on the letters

var pairs = { A: "T", T: "A", C: "G", G: "C" };

function DNAStrand(dna) {
  return dna.replace(/./g, char => pairs[char]);
}

console.log(DNAStrand("ATTGC"), "TAACG");
console.log(DNAStrand("GTAT"), "CATA");
// console.log(DNAStrand([1, 2, 3]), "CATA");
