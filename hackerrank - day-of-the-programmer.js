function solve(year) {
  let programmerDay = 256;
  let programmerMonth;

  months = {
    01: 31,
    02: 28,
    03: 31,
    04: 30,
    05: 31,
    06: 30,
    07: 31,
    08: 31,
    09: 30,
    10: 31,
    11: 30,
    12: 31
  };
  if (year < 1918) {
    if (year % 4 === 0) {
      months[02] = 29;
    } else {
      months[02] = 28;
    }
  } else if (year === 1918) {
    return "26.09.1918";
  } else {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      months[02] = 29;
    } else {
      months[02] = 28;
    }
  }

  for (month in months) {
    if (programmerDay > months[month]) {
      programmerDay -= months[month];
    } else {
      programmerMonth = month;
      break;
    }
  }

  if (programmerMonth < 10) {
    programmerMonth = "0" + programmerMonth;
  }

  return programmerDay + "." + programmerMonth + "." + year;
}
