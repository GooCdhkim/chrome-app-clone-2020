const focusForm = document.querySelector(".focusForm");
const focusInput = focusForm.querySelector(".focusInput");
const focusToday = document.querySelector(".focusTitle");
const showFocus = document.querySelector(".showFocus");
const focusDeleteBtn = showFocus.querySelector("resetBtn");
const FOCUS_LS = "currentFocus";

function saveFocus(text) {
  localStorage.setItem(FOCUS_LS, text);
}

function handleSubmitFocus(event) {
  event.preventDefault();
  const currentValue = focusInput.value;
  paintFocus(currentValue);
  saveFocus(currentValue);
}

function resetFocus() {
  focusForm.classList.add("hideInput");
  showFocus.classList.remove("onShowFocus");
  showFocus.innerHTML = "";
  focusToday.innerText = "What is your main focus for today?";
  focusToday.style.fontSize = "250%";
  localStorage.removeItem("currentFocus");
}

function askFocus() {
  focusForm.classList.add("hideInput");
  focusForm.addEventListener("submit", handleSubmitFocus);
}

function paintFocus(text) {
  focusForm.classList.remove("hideInput");
  showFocus.classList.add("onShowFocus");
  focusToday.innerText = "Today";
  focusToday.style.fontSize = "150%";
  showFocus.innerHTML =
    text + "<button class=" + "resetBtn" + " onclick= resetFocus()>X</button>";
}

function loadFocus() {
  const currentFocus = localStorage.getItem(FOCUS_LS);
  if (currentFocus === null) {
    askFocus();
  } else {
    paintFocus(currentFocus);
  }
}

function init() {
  loadFocus();
}

init();
