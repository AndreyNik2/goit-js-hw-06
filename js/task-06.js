const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
inputEl.addEventListener('blur', event => {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === 6) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } if (event.currentTarget.value.length > 0 & event.currentTarget.value.length < 6 || event.currentTarget.value.length > 6) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    } if (event.currentTarget.value.length === 0) {
        inputEl.classList.remove('invalid');
        inputEl.classList.remove('valid')
    }
})