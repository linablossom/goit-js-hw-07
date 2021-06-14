const refs = {
  getInputEl: document.querySelector("#name-input"),
  getSpanEl: document.querySelector("#name-output"),
};

refs.getInputEl.addEventListener("input", onInputChange);

function onInputChange() {
  refs.getSpanEl.textContent = this.value ? this.value : "незнакомец";
}
