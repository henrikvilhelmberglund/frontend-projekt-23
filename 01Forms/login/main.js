let welcome = document.querySelector("#welcome");
let wrong = document.querySelector("#wrong");
let submit = document.querySelector("#submit");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let form = document.querySelector("#form");

welcome.style.display = "none"
wrong.style.display = "none"
// console.log(welcome)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(username.value + " " + password.value);
  if (username.value === "admin" && password.value === "pass123") {
    welcome.style.display = "block";
  }
  else {
    wrong.style.display = "block";
  }
});

