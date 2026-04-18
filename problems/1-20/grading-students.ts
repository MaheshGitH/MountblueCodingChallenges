/*
  finalGrades = []
  for loop -> {
    if(grades[i] <= 42) finalGrades.push(grades[i])
    if(grades[i] % 5 >= 3) finalGrades.push(grades[i] + 5 - grades[i] % 5)
    else finalGrades.push(grades[i])
  } 
  return finalGrades[]

*/

function gradingStudents(grades: number[]): number[] {
  const finalGrades = [];
  for (const grade of grades) {
    if (grade < 38) finalGrades.push(grade);
    else if (grade % 5 >= 3) finalGrades.push(grade + 5 - (grade % 5));
    else finalGrades.push(grade);
  }
  return finalGrades;
}

console.log(gradingStudents([74, 67, 38, 33]));
