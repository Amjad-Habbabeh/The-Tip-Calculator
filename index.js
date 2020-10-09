// Your code goes in here

const input = document.getElementById('input-amount');
const service = document.querySelector('.service');
const peoples = document.getElementById('people-val');
const bot = document.getElementById('bot');

const each = document.getElementById('each');

bot.addEventListener('click', calc);

function calc(e) {
  e.preventDefault();
  let bill = Number(input.value);
  let tip = Number(service.value) / 100;
  let people = peoples.value;
  let total;
  if (bill === 0 || people === '' || Number(service.value) === 0) {
    alert('You need to fill in all the fields!');
  } else {
    if (people <= 0) {
      alert('error! some one have to pay;)');
    } else {
      if (people == 1) {
        each.style.display = 'none';
        total = bill + bill * tip;
        document.getElementById('total').innerText = `${total}`;
      } else {
        each.style.display = 'block';

        total = (bill + bill * tip) / people;
        document.getElementById('total').innerText = `${total.toFixed(2)}`;
      }
    }
  }
}
