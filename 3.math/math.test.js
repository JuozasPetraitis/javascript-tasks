const math = require('./math');

test('3.Multiply each > add all together > take sqr root > divide by 2', () => {
  expect(math(65, 60, 75, 55, 60, 63, 64, 45)).toBe(86);
});
