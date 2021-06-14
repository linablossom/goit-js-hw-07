const getInputEl = document.querySelector("#validation-input");
const dataLength = +getInputEl.dataset.length;
console.log(dataLength);

getInputEl.addEventListener("input", onInputChange);

function onInputChange() {
  if (this.value.length === dataLength) {
    updateClass("valid", "invalid");
  } else {
    updateClass("invalid", "valid");
  }
}

function updateClass(add, rem) {
  getInputEl.classList.add(add);
  getInputEl.classList.remove(rem);
}
