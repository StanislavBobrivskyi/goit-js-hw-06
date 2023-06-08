const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput(event) {
  output.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
}
