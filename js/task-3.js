const namePlaceholder = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

namePlaceholder.addEventListener('input', event => {
  const value = event.target.value.trim();
  if (value) {
    nameOutput.textContent = value;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});
