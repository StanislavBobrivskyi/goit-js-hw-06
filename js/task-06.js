const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInput);

function onInput() {
  const length = parseInt(inputEl.getAttribute("data-length"));
  const inputLength = inputEl.value.length;

  if (inputLength === length) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
