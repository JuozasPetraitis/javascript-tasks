function wave(str: Sentence) {
  const regExp = new RegExp('[a-z ]');
  const word = str.split('');

  const isAllLettersLowercase = word.every((item) => regExp.test(item) === true);

  if (isAllLettersLowercase) {
    let array: string[] = [];
    let i = 0;

    do {
      array.push(word.join(''));
      i++;
    } while (i < word.length);
  } else {
    throw new Error('String must be lowercase');
  }
}

wave('hello');
// wave(' h e y ');
