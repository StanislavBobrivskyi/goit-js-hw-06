let counterValue = 0;

const value = document.querySelector("#value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
  value.style.color = "green";
});

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
  value.style.color = "red";
});
