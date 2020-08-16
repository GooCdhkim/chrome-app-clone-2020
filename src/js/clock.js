function digitalClock() {
  const digClock = document.querySelector("#digClock");

  function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    digClock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    obj.hours = hours;
  }
  getTime();
  setInterval(getTime, 1000);
}
digitalClock();

loadName();
setInterval(loadName, 1000);