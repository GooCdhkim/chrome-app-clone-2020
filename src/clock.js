const clockContainer = document.querySelector(".clock-container");
const clockTitle = document.querySelector("#time");

function digitalClock() {
  function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerText = `${hours}:${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    }`;
  }
  getTime();
  setInterval(getTime, 1000);
}
digitalClock();
