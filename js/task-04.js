const refs = {
  getDecrementButtonEl: document.querySelector('[data-action="decrement"]'),
  getValueEl: document.querySelector("#value"),
  getIncrementButtonEl: document.querySelector('[data-action ="increment"]'),
};

let counterValue = 0;

const updateValueEl = () => (refs.getValueEl.textContent = counterValue);

const decrement = () => {
  counterValue -= 1;
  updateValueEl();
};

const increment = () => {
  counterValue += 1;
  updateValueEl();
};

refs.getDecrementButtonEl.addEventListener("click", decrement);
refs.getIncrementButtonEl.addEventListener("click", increment);
