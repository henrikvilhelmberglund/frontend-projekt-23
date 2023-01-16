
// let toppings = ["cheese", "tomato", "ham", "mushroom"];

let submit = document.querySelector("#submit");
let form = document.querySelector("#form");
let selected = [];

function clearArray() {
  selected = [];
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let checked = document.querySelectorAll('input[type="checkbox"]:checked');
  checked.forEach(item => {
    let label = document.querySelector(`label[for=${item.value}`);
    // console.log(label.innerText);
    selected.push(label.innerText);
  })
  selected = selected.join("\n");
  // console.log(selected);
  alert(selected);
  // console.log(checked);
  clearArray();
})