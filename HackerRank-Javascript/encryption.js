const encryption = givenString => {
  const rows = Math.floor(Math.sqrt(givenString.length));
  const columns = Math.ceil(Math.sqrt(givenString.length));

  givenString = givenString.split("");

  let stringMatrix = [];
  for (let i = 0; i < givenString.length; i += columns) {
    stringMatrix.push(givenString.slice(i, i + columns));
  }
  givenString = "";
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < stringMatrix.length; j++) {
      if (stringMatrix[j][i] !== undefined) {
        givenString += stringMatrix[j][i];
      }
      if (j === rows - 1) {
        givenString += " ";
      }
    }
  }
  return givenString;
};
