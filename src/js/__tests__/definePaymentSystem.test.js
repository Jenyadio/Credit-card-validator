import definePaymentSystem from '../definePaymentSystem';

test.each([
  ['3539628762844381', 'jcb'],
  ['4716879787500440', 'visa'],
  ['374443871476115', 'amex'],
  ['373448793676305', 'amex'],
  ['8171999927660000', 'unionpay'],
  ['2258703123404141', 'mir'],
  ['5246779424401786', 'master'],
  ['63682900559618927895475', false],
  ['6058703123404647', false],
])(('Should define payment system'), (value, expected) => {
  expect(definePaymentSystem(value)).toBe(expected);
});
