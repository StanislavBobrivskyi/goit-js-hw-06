const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInput);

function onInput() {
  const length = parseInt(inputEl.getAttribute("data-length"));
  const inputLength = inputEl.value.length;

  if (inputLength === length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("ivalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}

inputEl.addEventListener("focus", checkInput);

function checkInput() {
  inputEl.classList.remove("valid");
  inputEl.classList.remove("invalid");
}
