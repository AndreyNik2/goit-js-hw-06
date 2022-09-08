const textEl = document.querySelector('#text')
const fontSizeControlEl = document.querySelector('#font-size-control')
textEl.style.fontSize = `${fontSizeControlEl.value}px`;
fontSizeControlEl.addEventListener('input', event => {
    console.log(event.currentTarget.value);
    textEl.style.fontSize = `${event.currentTarget.value}px`;
    console.log(textEl.style.fontSize);
})



