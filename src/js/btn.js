const cog = document.querySelector(".fas");
const clockStyleBtn = document.querySelector(".clockstyle-btn");

cog.addEventListener("click", function () {
  console.log("hello");
});

clockStyleBtn.addEventListener("click", function () {
  const togDigtalClock = document.querySelector(".digclock").classList;
  const togAnalogClock = document.querySelector(".clock").classList;
  togDigtalClock.toggle("digitalTog");
  togAnalogClock.toggle("analogTog");
  console.log("stylebtn run!");
});
