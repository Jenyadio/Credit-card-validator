import definePaymentSystem from './definePaymentSystem';
import checkNumber from './checkNumber';

const btn = document.querySelector('.btn');
const input = document.querySelector('.form-control');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value) {
    Array.from(document.querySelectorAll('.card'))
      .forEach((item) => item.classList.remove('opacity'));
  }
  if (checkNumber(input.value) === false) {
    alert('Неправильно введен номер карты');
  } else {
    const card = definePaymentSystem(input.value);
    Array.from(document.querySelectorAll('.card')).filter((item) => !item.classList.contains(card))
      .forEach((item) => item.classList.add('opacity'));
  }
});
