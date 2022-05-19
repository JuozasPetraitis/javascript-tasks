type NumbersArray = Array<number>;

function number(numbers: NumbersArray) {
  const initialValue = 0;
  const totalSum = numbers.reduce((previous, current) => previous + current, initialValue);

  return Math.round(totalSum / numbers.length);
}

module.exports = number;
