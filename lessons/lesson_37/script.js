const loadUser = document.getElementById('js-load-user');
const url = 'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration';
const headers = { 'Content-Type': 'application/json' };

loadUser.addEventListener('click', () => {
  const firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    username = document.getElementById('username'),
    email = document.getElementById('email'),
    password = document.getElementById('password')
  const body = {
    role: 2,
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: password
  }
  console.log(body);
  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  })
    .then((response) => {
      if (response.success) {
        return response.json();
      } else {
        // обробка помилки
        console.log('Помилка:', response);
      }
    .then((data) => {
      console.log(data);
    })
      //     .catch(error => {
      //       console.log(error);
      //       if (Full Name, email)
      //   return null;
      // })
    });
