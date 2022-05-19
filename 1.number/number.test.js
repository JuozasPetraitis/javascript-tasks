const number = require('./number');

test('1.Takes the average of an array of number and returns the nearest whole number.', () => {
  expect(number([1, 2])).toBe(2);
  expect(number([2, 4])).toBe(3);
  expect(number([23, 18, 1, 1, 1, 1])).toBe(8);
  expect(number([1, 2, 3, 4, 5])).toBe(3);
});
