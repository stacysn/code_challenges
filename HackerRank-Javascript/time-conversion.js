function timeConversion(s) {
  s = s.split("");
  if (s[s.length - 2] === "P") {
    s.splice(s.length - 2, 2);
    s = s.join("").split(":");
    if (parseInt(s[0]) !== 12) {
      s[0] = parseInt(s[0]) + 12;
    }
    if (s[0] === 24) {
      s[0] = "00";
    }
    return s.join(":");
  } else {
    if (s[0] === "1" && s[1] === "2") {
      s = s.join("").split(":");
      s[0] = 0;
      s = s.join(":").split("");
      s.unshift("0");
    }
    s.splice(s.length - 2, 2);
    return s.join("");
  }
}
