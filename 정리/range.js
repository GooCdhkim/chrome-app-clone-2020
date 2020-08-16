let randomNumber,
  submitNumber,
  x,
  y = Number;
const userNumberForm = document.querySelector("#lala"),
  winOrLost = document.querySelector("#winOrLost"),
  labelText = document.querySelector("#vol-html"),
  answer = document.querySelector("#answer"),
  labelA = [winOrLost, answer],
  vol = document.querySelector("#vol"),
  guessField = document.querySelector("#guessField"),
  msg = [
    "You Win!",
    "Input Your own number first",
    "Your Number is out of range! </br> Set Number between 0 and ",
    "You Lost",
    "You chose : ",
    ", the machine chose : ",
    "Your Number is out of range!",
    "It's not a natural number",
  ];

function init() {
  labelText.innerHTML = " 50 ";
  function changeRange() {
    labelText.innerHTML = "" + vol.value + "";
  }
  function inputMaxRdNumb() {
    const changeRdNumb = Math.round(Math.random() * vol.value);
    randomNumber = changeRdNumb;
    console.log(randomNumber);
    y = randomNumber;
    x = submitNumber;
    setColorAndText(labelA[1], msg[4] + x + msg[5] + y, "black");
  }
  function setColorAndText(position, text, color) {
    position.innerHTML = text;
    position.style.color = color;
  }
  function message(type) {
    if (type === "win") {
      setColorAndText(labelA[0], msg[0], "green");
    } else if (type === "errorNoNumb") {
      setColorAndText(labelA[1], msg[1], "red");
      winOrLost.style.display = "none";
    } else if (type === "errorOutRange") {
      setColorAndText(labelA[1], msg[2] + vol.value + "", "red");
      winOrLost.style.display = "none";
    } else if (type === "lost") {
      setColorAndText(labelA[0], msg[3], "red");
    } else if (type === "errorOutRangeTwo") {
      setColorAndText(labelA[1], msg[6], "red");
      winOrLost.style.display = "none";
    } else if (type === "error") {
      setColorAndText(labelA[1], msg[7], "red");
      winOrLost.style.display = "none";
    }
  }

  function checkGuess() {
    if (Number(submitNumber) === randomNumber && guessField.value !== "") {
      message("win");
    } else if (guessField.value === "" || guessField.value === "") {
      message("errorNoNumb");
    } else if (Number(submitNumber) > vol.value) {
      message("errorOutRange");
    } else if (Number(submitNumber) < 0) {
      message("errorOutRangeTwo");
    } else if (
      isFinite(Number(submitNumber)) === true &&
      Number(submitNumber) !== parseInt(Number(submitNumber))
    ) {
      message("error");
    } else {
      message("lost");
    }
  }
  function handlesubmit(event) {
    event.preventDefault();
    winOrLost.style.display = "block";
    submitNumber = guessField.value;
    inputMaxRdNumb();
    checkGuess();
    guessField.focus();
  }
  vol.addEventListener("input", changeRange);
  userNumberForm.addEventListener("click", handlesubmit);
}
init();
