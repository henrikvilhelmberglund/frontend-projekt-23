// let toppings = ["cheese", "tomato", "ham", "mushroom"];

let about = document.querySelector("#about");
let products = document.querySelector("#products");
let shipping = document.querySelector("#shipping");
let submit = document.querySelector("#submit");
let form = document.querySelector("#form");
let selected = [];

let inputs = document.querySelectorAll("input")
// console.log(inputs)

// about.style.display = "none";
products.style.display = "none";
shipping.style.display = "none";
// console.log(kitchen);

function clearArray() {
  selected = [];
}

inputs.forEach(input => {

  let show = input.id.split("Tab")[0];
  input.addEventListener("change", (e) => {
    about.style.display = "none";
    products.style.display = "none";
    shipping.style.display = "none";
    document.querySelector(`#${show}`).style.display = "block";
  })

 })

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let checked = document.querySelectorAll('input[type="checkbox"]:checked');
//   checked.forEach(item => {
//     let label = document.querySelector(`label[for=${item.value}`);
//     // console.log(label.innerText);
//     selected.push(label.innerText);
//   })
//   selected = selected.join("\n");
//   // console.log(selected);
//   // alert(selected);
//   // console.log(checked);
//   clearArray();
// });

