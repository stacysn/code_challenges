function pageCount(n, p) {
  let book = [[1]];
  let pagesTurnedFromLeft = 0;
  let pagesTurnedFromRight = 0;

  for (let i = 2; n >= i; i++) {
    if (n === i) {
      book.push([i]);
    } else {
      book.push([i, i + 1]);
      i++;
    }
  }

  let j = book.length - 1;
  for (let i = 0; book.length > i; i++) {
    if (book[i].includes(p) || book[j].includes(p)) {
      break;
    } else {
      pagesTurnedFromLeft++;
      pagesTurnedFromRight++;
    }
    j--;
  }
  if (pagesTurnedFromLeft < pagesTurnedFromRight) {
    return pagesTurnedFromLeft;
  } else {
    return pagesTurnedFromRight;
  }
}
