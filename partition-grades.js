//Write a function that takes an array of integer grades.
//The function should return an array of grades with the failing grades at the end of the array
//While maintaining the original order of the passing grades.
//The order of the failing grades does not matter.

//Example:
//Input: [80, 90, 4, 20, 70, 30, 50]
//Output: [80, 90, 70, 50, 4, 20, 30]

function partitionGrades(grades) {
  let passing = [];
  let failing = [];

  grades.forEach(grade =>
    grade >= 50 ? passing.push(grade) : failing.push(grade)
  );

  let mergedGrades = [...passing, ...failing];
  return mergedGrades;
}
console.log(partitionGrades([80, 90, 4, 20, 70, 30, 50]));
