const obj = {
  screenNum: "0",
  a: null,
  symbol: null,
  areYouWaitingB: false,
  infoScreen: "Salut!",
  remember: "",
};
function updateScreen() {
  const display = document.querySelector(".screen");
  display.value = obj.screenNum;
  const infoScreen = document.querySelector(".infoScreen");
  infoScreen.value = obj.infoScreen;
}
updateScreen();

function inputNum(num) {
  const {screenNum, areYouWaitingB} = obj;
  if (areYouWaitingB === true) {
    obj.screenNum = num;
    obj.areYouWaitingB = false;
  } else {
    obj.screenNum = screenNum === "0" ? num : screenNum + num;
  }
}
function inputDot(dot) {
  if (obj.areYouWaitingB === true) {
    obj.screenNum = "0.";
    obj.areYouWaitingB = false;
    return;
  }

  if (!obj.screenNum.includes(dot)) {
    obj.screenNum += dot;
  }
}
function handleSymbol(secondSymbol) {
  const {a, screenNum, symbol} = obj;
  const inputNum = parseFloat(screenNum);

  if (symbol !== null && obj.areYouWaitingB) {
    obj.symbol = secondSymbol;
    return;
  }

  if (a == null && !isNaN(inputNum)) {
    obj.a = inputNum;
  } else if (symbol) {
    const result = calculate(a, inputNum, symbol);
    obj.screenNum = `${commas(parseFloat(result.toFixed(7)))}`;
    obj.a = result;
  }

  obj.areYouWaitingB = true;
  obj.symbol = secondSymbol;
}
function commas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function calculate(a, b, symbol) {
  return symbol === "+"
    ? a + b
    : symbol === "-"
    ? a - b
    : symbol === "*"
    ? a * b
    : symbol === "/"
    ? a / b
    : b;
}
function resetCalc() {
  obj.screenNum = "0";
  obj.a = null;
  obj.areYouWaitingB = false;
  obj.symbol = null;
  obj.infoScreen = "All Clear";
  obj.remember = "";
}
function backCalc() {
  return obj.areYouWaitingB === false &&
    obj.screenNum !== 0 &&
    obj.screenNum.length !== 1
    ? (obj.screenNum = obj.screenNum.slice(0, -1)) + (obj.infoScreen = "Back")
    : obj.areYouWaitingB
    ? (obj.areYouWaitingB = false) + (obj.a = null) + (obj.infoScreen = "Back")
    : obj.areYouWaitingB === false && obj.screenNum.length === 1
    ? (obj.screenNum = "0") + (obj.infoScreen = "All Clear")
    : (obj.infoScreen = "Back");
}
function keySelector() {
  let keys = document.querySelectorAll(".keyss");
  let i;
  for (i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", (event) => {
      const {target} = event;
      const {value} = target;
      if (!target.matches("button")) {
        return;
      }
      switch (value) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
          obj.infoScreen = `${
            value === "+"
              ? "+"
              : value === "-"
              ? "-"
              : value === "*"
              ? "×"
              : value === "/"
              ? "÷"
              : "="
          }`;
          handleSymbol(value);
          break;
        case ".":
          inputDot(value);
          break;
        case "back":
          backCalc();
          break;
        case "all-clear":
          resetCalc();
          break;
        default:
          Number.isInteger(parseFloat(value))
            ? inputNum(value)
            : updateScreen();
      }
      updateScreen();
    });
  }
}
keySelector();
