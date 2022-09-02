let main = document.body;

function regForm() {
  let innerForm = `
    <div>
    Login: <input type="text" name="login" id="reg-login">
</div>
<div>
    Password: <input type="password" name="password" id="reg-password">
</div>
<div>
    Email: <input type="email" name="email" id="reg-email">
</div>`;
  let regForm = document.createElement("form");
  regForm.innerHTML = innerForm;
  main.appendChild(regForm);
  let button = document.createElement("button");
  button.innerText = "Отправить";
  main.appendChild(button);
  button.addEventListener("click", () => {
    reg();
    if (localStorage.getItem("registration")) {
      logForm(regForm, innerForm, button);
    } 
  });
}

function reg() {
  let login = document.querySelector("#reg-login").value;
  let password = document.querySelector("#reg-password").value;
  let email = document.querySelector("#reg-email").value;

  let data = {
    login: login,
    password: password,
    email: email,
  };
  if (data.login === "" || data.password === "" || data.email === "") {
    alert("Заполните обязательные поля");
  } else {
    localStorage.setItem("registration", JSON.stringify(data));
  }
}

function logForm(log, newForm, logButton) {
  newForm = `
<div>
    Login: <input type="text" name="login" id="input-login">
</div>
<div>
    Password: <input type="password" name="password" id="input-password">
</div>`;

  log.innerHTML = newForm;
  logButton.innerText = "Войти";
  logButton.addEventListener("click", () => {
    login();
  });
  let link = document.createElement("a");
  link.innerText = "Забыли пароль?";
  main.appendChild(link);
  link.addEventListener("click", () => {
    forgetPass(newForm, log, logButton);
    link.innerText = "";
  });
}

function forgetPass(emailForm, login, sendButton) {
  emailForm = `
  <p>Введите свой email</p>
  <div>
    Email: <input type="text" name="email" id="forget-email">
</div>
`;
  login.innerHTML = emailForm;
  sendButton.innerText = "Отправить";
  sendButton.addEventListener("click", () => {
    sendPass();
  });
}

function sendPass() {
  let email = document.querySelector("#forget-email").value;
  let data = {
    email: email,
  };
  let value = localStorage.getItem("registration");
  value = JSON.parse(value);
  if (data.email === value.email) {
    alert("На вашу почту была отправлена форма для восстановления пароля");
  } else {
    alert("Введен не верный email");
  }
}

function login() {
  let login = document.querySelector("#input-login").value;
  let password = document.querySelector("#input-password").value;

  let data = {
    login: login,
    password: password,
  };
  let value = localStorage.getItem("registration");
  value = JSON.parse(value);
  if (data.login === value.login && data.password === value.password) {
    window.location.href = "./test.html";
  } else if (data.login === "" || data.password === "") {
    alert("Вы не ввели логин или пароль");
  } else {
    alert("Введите верный логин и пароль");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  regForm();
});
