const form = document.querySelector('form');
const pinInput = document.querySelector('#pin');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const pin = pinInput.value;
  const isValid = validatePin(pin);
  result.textContent = isValid ? 'Pin code is valid' : 'Pin code is invalid';
});

function validatePin(pin) {
  return /^\d{4}(\d{2})?$/.test(pin);
}