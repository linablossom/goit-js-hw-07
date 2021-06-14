const allCategoriesLiEl = document.querySelectorAll(".item");
const listEl = document.querySelectorAll(".item");
const titlesEl = document.querySelectorAll(".item h2");
const listsEl = document.querySelectorAll(".item ul");

console.log(`В списке ${allCategoriesLiEl.length} категории.`);

for (let i = 0; i < listEl.length; i += 1) {
  const categoryTitleEl = titlesEl[i].textContent;
  console.log(`Категория: ${categoryTitleEl}`);

  const categoryItemEl = listsEl[i].children.length;
  console.log(`Количество элементов: ${categoryItemEl}`);
}
