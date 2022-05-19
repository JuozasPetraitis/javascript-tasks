const same = require('./same');

test('2.checks if the same amount of d and k is in the string.', () => {
  expect(same('ddkk')).toBeTruthy();
  expect(same('dkkdd')).toBeFalsy();
  expect(same('ddkKm')).toBeTruthy();
  expect(same('dmm')).toBeFalsy();
  expect(same('eSss')).toBeTruthy();
});
