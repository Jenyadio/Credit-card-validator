import checkNumber from '../checkNumber';

test.each([
  ['5246779424401786', true],
  ['5301608004627084', true],
  ['2720993602085863', true],
  ['2', false],
  ['000000001', false],
  ['3333333333333', false],
  ['номер', false],
])(('should check card number with Luhn algorithm'), (value, expected) => {
  expect(checkNumber(value)).toBe(expected);
});
