export default function checkNumber(number) {
  let result = 0;
  if (number.length < 12 || number.length > 20) {
    return false;
  }
  for (let i = 0; i < number.length; i += 1) {
    let digit = Number(number[i]);
    if (i % 2 === 0) digit *= 2;
    if (digit > 9) result += digit - 9;
    else result += digit;
  }
  return result % 10 === 0;
}
