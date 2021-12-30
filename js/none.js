const transparentBtn = document.querySelector("#transparent-all");
const main = document.querySelector("#all-elements");
const resetTransparentBtn = document.querySelector("#reset-trans-btn");
const colorBox = document.querySelector(".hidden-box");
const watchBox = document.querySelector(".watch-box");



const NONE = "none";
const BLOCK = "block";
const FLEX = "flex"

function handleClickTransparent(event) {
  event.preventDefault();
  main.style.display = NONE;
  watchBox.style.display = FLEX;
  resetTransparentBtn.style.display = BLOCK;
  colorBox.style.display = 'flex'
}

transparentBtn.addEventListener("click", handleClickTransparent);

function handleClickResetTransparent(event) {
  event.preventDefault();
  main.style.display = FLEX;
  
  watchBox.style.display = NONE;
  resetTransparentBtn.style.display = NONE;
  colorBox.style.display = 'none'
}

resetTransparentBtn.addEventListener("click", handleClickResetTransparent);
