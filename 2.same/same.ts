type Sentence = string;

function same(str: Sentence) {
  let d: number = 0;
  let k: number = 0;

  const word = str.split('');

  word.forEach((item) => {
    if (item === 'D' || item === 'd') {
      d += 1;
    }

    if (item === 'K' || item === 'k') {
      k += 1;
    }
  });

  if (d === k || (d === 0 && k === 0)) {
    return true;
  } else {
    return false;
  }
}

module.exports = same;
