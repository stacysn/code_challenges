function catAndMouse(x, y, z) {
  if ((Math.abs(x - z)) < Math.abs(z - y)){
      return "Cat A"
  } else if ((Math.abs(x - z)) > Math.abs(z - y)){
      return "Cat B"
  }
  return "Mouse C"
}
