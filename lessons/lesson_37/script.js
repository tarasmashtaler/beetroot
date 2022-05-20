const loadUser = document.getElementById('js-load-user');
const url = 'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration';
const headers = { 'Content-Type': 'application/json' };

loadUser.addEventListener('click', () => {
  const firstName = document.getElementById('firstName').value,
    lastName = document.getElementById('lastName').value,
    username = document.getElementById('username').value,
    email = document.getElementById('email').value,
    password = document.getElementById('password').value
  const body = {
    role: 2,
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: password
  };
  console.log(body);
  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // alert(data.message.ua);
      if (data.success) {
        const formSuccess = document.getElementById('js-form-success');
        formSuccess.innerText = data.message.ua + '!!!';
        formSuccess.classList.remove("hidden");
        setTimeout(() => {
          formSuccess.classList.add("hidden");
          console.log("Delayed for 5 second.");
        }, "5000");
      } else {
        const formError = document.getElementById('js-form-error');
        formError.innerText = data.message.ua + '!!!';
        formError.classList.remove("hidden");
        setTimeout(() => {
          formError.classList.add("hidden");
          console.log("Delayed for 5 second.");
        }, "5000");
      }
    })
});
