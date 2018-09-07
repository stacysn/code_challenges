function angryProfessor(k, a) {
  let presentStudents = 0;

  a.forEach(student => {
    if (student <= 0) {
      presentStudents++;
    }
  });

  if (presentStudents >= k) {
    return "NO";
  } else {
    return "YES";
  }
}
