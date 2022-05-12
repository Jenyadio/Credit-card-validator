export default function definePaymentSystem(number) {
  if (number[0] === '2') {
    return 'mir';
  } if (number[0] === '4') {
    return 'visa';
  } if (number[0] === '5') {
    return 'master';
  } if (number[0] === '3' && (number[1] === '4' || number[1] === '7')) {
    return 'amex';
  } if (number[0] === '3' && (number[1] === '5' || number[1] === '1')) {
    return 'jcb';
  } if (number[0] === '8' || (number[0] === '6' && number[1] === '2')) {
    return 'unionpay';
  }
  return false;
}
