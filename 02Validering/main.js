let form = document.querySelector("#registerform");
form.addEventListener("submit", (e) => inputCheck(e));
let errors = document.querySelectorAll(".error");
let inputs = document.querySelectorAll("input");
// console.log(errors)

function inputCheck(e) {
  e.preventDefault();
  let errorCount = 0;
  inputs.forEach((input, i) => {
    if (!input.checkValidity()) {
      errors[i].style.display = "block";
      errorCount += 1;
    }
    else {
      errors[i].style.display = "none";
    }
  })
  if (errorCount === 0) {
    let exists = document.querySelector("h1");
    if (!exists) {
      let myH1 = document.createElement("h1");
      myH1.innerText = "no errors!! wow!"
      document.body.append(myH1);
    }
  }
}

errors.forEach(error => {
  error.style.display = "none";
})