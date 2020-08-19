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

function analongClock() {
  const deg = 6;
  const hr = document.querySelector("#hr");
  const mn = document.querySelector("#mn");
  const sc = document.querySelector("#sc");
  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
  });
}
analongClock();
