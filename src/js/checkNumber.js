export default function checkNumber(number) {
  let result = 0;
  if (number.length < 12 || number.length > 20) {
    return false;
  }
  for (let i = 0; i < number.length; i += 1) {
    let cardNum = parseInt(number[i], 10);

    if ((number.length - i) % 2 === 0) {
      cardNum *= 2;

      if (cardNum > 9) {
        cardNum -= 9;
      }
    }
    result += cardNum;
  }
  return result % 10 === 0;
}
