const categoriesList = document.querySelector("#categories");

const item = [...categoriesList.children];

console.log("Number of categories:", item.length);

item.forEach((el) => {
  const categoryTitle = el.firstElementChild.textContent;
  const categoryItem = el.lastElementChild.children.length;
  console.log(`Category: ${categoryTitle}`);
  console.log("Elements:", categoryItem);
});
