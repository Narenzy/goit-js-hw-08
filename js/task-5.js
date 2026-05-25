function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', () => {
  const random = getRandomHexColor();
  document.body.style.backgroundColor = random;
  color.textContent = random;
});
