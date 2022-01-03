const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form :nth-child(1)");
const logOut = document.querySelector("#login-form :nth-child(3)");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Welcome ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logOut.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
