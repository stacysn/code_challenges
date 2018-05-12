function gradingStudents(grades) {
  let roundedGrades = grades.map(grade => {
    if (grade < 38) {
      return grade;
    }

    if ((grade + 1) % 5 === 0) {
      return grade + 1;
    } else if ((grade + 2) % 5 === 0) {
      return grade + 2;
    } else {
      return grade;
    }
  });
  return roundedGrades;
}
