const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  ingredientsList.appendChild(list);
  // console.dir(list);
});

console.dir(ingredientsList);
