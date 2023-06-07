const input = document.querySelector("#name-input");
const output = document.querySelector("#name-outpuy");

input.addEventListener("input", () => {
  const inputValue = input.value.trim();
  if (inputValue !== "") {
    output.textContent = input;
  } else {
    output.textContent = "Anonymous";
  }
});
