const inputEl = document.querySelector("#font-size-control");

const textEL = document.querySelector("#text");

inputEl.addEventListener("input", textSize);

function textSize() {
  textEL.style.fontSize = inputEl.value + "px";
}
