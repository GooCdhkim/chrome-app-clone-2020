const digClockContainer = document.querySelector(".clock-wrap");
const digClock = document.querySelector("#digClock");

function digitalClock() {
    function getTime() {
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        digClock.innerText = `${hours}:${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    }`;
    }
    getTime();
    setInterval(getTime, 1000);
}
digitalClock();