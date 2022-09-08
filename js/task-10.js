function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtnEl = document.querySelector('[data-create]')
const destroyBtnEl = document.querySelector('[data-destroy]')
const boxesEl = document.querySelector('#boxes')
const controlsEl = document.querySelector('#controls')
const numbers = controlsEl.firstElementChild
let size = 10;


numbers.addEventListener('input', event => {
  return event.currentTarget.value;
})


createBtnEl.addEventListener('click', () => {
  for (let i = 0; i < numbers.value; i += 1) {
    const newEl = document.createElement('div')
    size += 10;
    newEl.style.height = `${size}px`;
    newEl.style.color = getRandomHexColor();
     boxesEl.createElement(newEl)

  }
  

})