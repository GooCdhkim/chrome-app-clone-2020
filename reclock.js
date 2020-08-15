const digClockContainer = document.querySelector(".clock-wrap");
const digClock = document.querySelector("#digClock");

function digitalClock() {
  function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    digClock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
  }
  getTime();
  setInterval(getTime, 1000);
}
digitalClock();
