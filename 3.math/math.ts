function math(...numbers: NumbersArray) {
  const multiplied = numbers.map((item) => item * item);

  const totalSum = multiplied.reduce((previous, current) => previous + current, 0);

  const squareRoot = Math.sqrt(totalSum);
  return Math.trunc(squareRoot / 2);
}

module.exports = math;
