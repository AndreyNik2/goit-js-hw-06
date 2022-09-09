function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtnEl = document.querySelector('[data-create]')
const destroyBtnEl = document.querySelector('[data-destroy]')
const boxesEl = document.querySelector('#boxes')
const controlsEl = document.querySelector('#controls')
const numbers = controlsEl.firstElementChild
let size = 20;
const boxArr = [];


numbers.addEventListener('input', event => {
  return event.currentTarget.value;
})

console.log(numbers.value);


createBtnEl.addEventListener('click', () => {
  for (let i = 0; i < numbers.value; i += 1) {
    const newEl = document.createElement('div')
    size += 10;
    newEl.style.height = `${size}px`;
    newEl.style.width = `${size}px`;
    newEl.style.backgroundColor = getRandomHexColor();
    boxArr.push(newEl)

  }
  
boxesEl.append(...boxArr)
})

destroyBtnEl.addEventListener('click', () => boxesEl.innerHTML = '')

console.log(boxArr);