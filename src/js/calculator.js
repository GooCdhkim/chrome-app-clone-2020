const obj = {
  screenNum: "0",
  a: null,
  symbol: null,
  areYouWaitingB: false,
  infoScreen: "Salut!",
};
function updateScreen() {
  const display = document.querySelector(".screen");
  display.value = obj.screenNum;
  const infoScreen = document.querySelector(".infoScreen");
  infoScreen.value = obj.infoScreen;
}
updateScreen();
/*  */
/*  */
function inputNum(num) {
  const {screenNum, areYouWaitingB} = obj;

  if (areYouWaitingB === true) {
    obj.screenNum = num;
    obj.areYouWaitingB = false;
  } else {
    obj.screenNum = screenNum === "0" ? num : screenNum + num;
  }
  console.log(obj);
}
/*  */
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
/*  */
function handleSymbol(secondSymbol) {
  const {a, screenNum, symbol} = obj;
  const inputNum = parseFloat(screenNum);

  if (symbol !== null && obj.areYouWaitingB) {
    obj.symbol = secondSymbol;
    console.log(symbol);
    console.log("SIBALLLLLL!!LL!L!");
    console.log(obj);
    return;
  }

  if (a == null && !isNaN(inputNum)) {
    obj.a = inputNum;
  } else if (symbol) {
    const result = calculate(a, inputNum, symbol);
    obj.screenNum = String(result);
    obj.a = result;
  }

  obj.areYouWaitingB = true;
  obj.symbol = secondSymbol;
  console.log(obj);
  obj.infoScreen = `${String(obj.a)}${String(obj.symbol)}`;
}
/*  */
function calculate(a, b, symbol) {
  if (symbol === "+") {
    return a + b;
  } else if (symbol === "-") {
    return a - b;
  } else if (symbol === "*") {
    return a * b;
  } else if (symbol === "/") {
    return a / b;
  }
  return b;
}
/*  */
function resetCalc() {
  obj.screenNum = "0";
  obj.a = null;
  obj.areYouWaitingB = false;
  obj.symbol = null;
  console.log("All-clear");
  obj.infoScreen = "All clear";
  console.log(obj);
}
/*  */
function backCalc() {
  if (
    obj.areYouWaitingB === false &&
    obj.screenNum !== 0 &&
    obj.screenNum.length !== 1
  ) {
    obj.screenNum = obj.screenNum.slice(0, -1);
    console.log(obj);
  } else if (obj.areYouWaitingB) {
    obj.areYouWaitingB = false;
    obj.a = null;
    console.log(obj);
  } else if (obj.areYouWaitingB === false && obj.screenNum.length === 1) {
    obj.screenNum = "0";
    console.log("clear");
    console.log(obj);
  } else {
    console.log("error");
    console.log(obj);
  }
}
/*  */
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
          if (Number.isInteger(parseFloat(value))) {
            inputNum(value);
          }
      }
      updateScreen();
    });
  }
}
keySelector();
