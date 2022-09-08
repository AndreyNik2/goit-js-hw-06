const bodyEl = document.querySelector('body')
const btnEl = document.querySelector('.change-color')
const color = document.querySelector('.color')

bodyEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  color.textContent = bodyEl.style.backgroundColor
})
function getRandomHexColor() {
  bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  color.textContent = bodyEl.style.backgroundColor
}


