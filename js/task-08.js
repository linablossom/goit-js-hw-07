const refs = {
  inputEl: document.querySelector('[type="number"]'),
  addButtonEl: document.querySelector('[data-action="render"]'),
  removeButtonEl: document.querySelector('[data-action="destroy"]'),
  boxEl: document.querySelector("#boxes"),
};

const getRandNum = () => Math.floor(Math.random() * 255);
const getRandomRgbColor = () =>
  `rgb(${getRandNum()}, ${getRandNum()}, ${getRandNum()})`;

const startSize = 30;
const step = 10;
const createBoxes = (amount) => {
  const lastDiv = refs.boxEl.lastChild;
  const initialSize =
    lastDiv === null
      ? 
        startSize - step
      : 
        +lastDiv.style.width.replace("px", "");
  const divs = [];
  for (let i = 1; i <= amount; i += 1) {
    //   создаем заданое количество дивов
    const div = document.createElement("div");
    // размер дива определяется как изначальний размер + щаг * порядковий номер дива в групе
    const size = `${initialSize + step * i}px`;
    div.style.width = size;
    div.style.height = size;
    div.style.backgroundColor = getRandomRgbColor();
    divs.push(div);
  }
  refs.boxEl.append(...divs);
};

const destroyBoxes = () => {
  refs.boxEl.innerHTML = "";
};

const onRenderClick = () => {
  const inputValue = +refs.inputEl.value;
  createBoxes(inputValue);
};

refs.addButtonEl.addEventListener("click", onRenderClick);

refs.removeButtonEl.addEventListener("click", destroyBoxes);
