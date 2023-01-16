// let toppings = ["cheese", "tomato", "ham", "mushroom"];

let room = document.querySelector("#room");
let kitchen = document.querySelector("#kitchen");
let bathroom = document.querySelector("#bathroom");
let submit = document.querySelector("#submit");
let form = document.querySelector("#form");
let selected = [];

kitchen.style.display = "none";
bathroom.style.display = "none";
// console.log(kitchen);

function clearArray() {
  selected = [];
}

room.addEventListener("change", (e) => {
  kitchen.style.display = "none";
  bathroom.style.display = "none";
  document.querySelector(`#${room.value}`).style.display = "block";
})

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
  // alert(selected);
  // console.log(checked);
  clearArray();
});

