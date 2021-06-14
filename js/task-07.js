const refs = {
  inputEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

const onResizeText = (event) => {
  refs.textEl.style.fontSize = event.target.value + "px";
};

refs.inputEl.addEventListener("input", onResizeText);
