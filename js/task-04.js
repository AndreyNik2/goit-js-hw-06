let counterValue = 0;

const refs = {
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    valueEl: document.querySelector('#value'),
}

refs.decrementBtn.addEventListener('click', () => {
    counterValue -= 1
    refs.valueEl.textContent = counterValue;
    console.log(counterValue);
    
})

refs.incrementBtn.addEventListener('click', () => {
    counterValue += 1
    refs.valueEl.textContent = counterValue;
    console.log(counterValue);
    
})



