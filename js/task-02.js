const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const getIngredientsEl = document.querySelector("#ingredients");

const addIngredientsEl = ingredients.map((ingredient) => {
  const createLiEl = document.createElement("li");
  createLiEl.textContent = ingredient;
  return createLiEl;
});
getIngredientsEl.append(...addIngredientsEl);
