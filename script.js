let inputName = document.getElementById("name");
let inputNumber = document.getElementById("number");
let btn = document.getElementById("btn");
let btnDelete = document.getElementById("btnDelete");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
  let inputKey = inputName.value;
  let inputNumValue = inputNumber.value;

  if (inputKey && inputNumValue) {
    localStorage.setItem(inputKey, inputNumValue);
    location.reload();
    inputKey.value = "";
    inputNumValue.value = "";
  }
});

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let item = localStorage.getItem(key);
  result.innerHTML += `${key}: ${item} </br>`;
}

btnDelete.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
