// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const controlsDiv = document.querySelector("#controls");
const input = controlsDiv.querySelector("input");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.value;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesDiv.append(...boxes);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// Отримуємо посилання на необхідні елементи DOM: controlsDiv, input, createButton, destroyButton і boxesDiv.
// Додаємо слухача подій click до кнопок createButton і destroyButton. Функція createBoxes викликається при натисканні кнопки "Create", а функція destroyBoxes - при натисканні кнопки "Destroy".
// У функції createBoxes отримуємо значення кількості елементів, введене користувачем у полі вводу.
// Створюємо масив boxes, у якому будемо зберігати створені елементи <div>.
// За допомогою циклу for створюємо кожен елемент <div> з відповідними розмірами і кольором фону.
// Додаємо створені елементи <div> до boxesDiv за допомогою append і оператора розширення (...).
// Функція destroyBoxes очищає вміст boxesDiv, встановлюючи innerHTML у порожній рядок.
// Функція getRandomHexColor генерує випадковий шестизначний шістнадцятковий код кольору.
// Запускаючи цей скрипт, ви можете вводити кількість елементів, натиснути кнопку "Create" для створення колекції елементів <div>, а потім натиснути кнопку "Destroy" для їх очищення
