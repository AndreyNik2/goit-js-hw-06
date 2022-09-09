const loginFormtEl = document.querySelector('.login-form')
loginFormtEl.addEventListener('submit', event => {
  event.preventDefault()
  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены!");
    return
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
})

