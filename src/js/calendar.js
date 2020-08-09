const currentTitle = document.querySelector("#current-year-month");
const calendarBody = document.querySelector("#calendar-body");
const mainTodayDay = document.querySelector("#prev-d-day");
const mainTodayDate = document.querySelector("#prev-date");
let today = new Date();
let first = new Date(today.getFullYear(), today.getMonth(), 1);

const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
/* 윤년일경우 */
const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/* 윤년이 아닐경우 */
const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var pageFirst = first;
var pageYear;

/* 윤년계산 leapYear = 윤년 (현제 년도를 4로 나눴을때 나머지가 0이면 그 해는 윤년이다.) */
if (first.getFullYear() % 4 === 0) {
  pageYear = leapYear;
} else {
  pageYear = notLeapYear;
}
/*  */
function showCalendar() {
  currentTitle.innerHTML =
    monthList[first.getMonth()] +
    "&nbsp;&nbsp;&nbsp;&nbsp;" +
    first.getFullYear();
  let monthCnt = 100;
  let cnt = 1;
  for (let i = 0; i < 6; i++) {
    var createTr = document.createElement("tr");
    calendarBody.appendChild(createTr);
    createTr.setAttribute("id", monthCnt);
    for (var j = 0; j < 7; j++) {
      if (
        (i === 0 && j < first.getDay()) /* 토요일 = 6 */ ||
        cnt > pageYear[first.getMonth() /* 8월=7 */]
      ) {
        var createTd = document.createElement("td");
        createTr.appendChild(createTd);
      } else {
        var createTd = document.createElement("td");
        createTr.appendChild(createTd);
        createTd.setAttribute("id", cnt);
        createTd.innerHTML = cnt;
        cnt++;
      }
    }
    monthCnt++;
  }
}
showCalendar();

function showMain() {
  mainTodayDay.innerHTML = dayList[today.getDay()];
  mainTodayDate.innerHTML = today.getDate();
}
showMain();

function removeCalendar() {
  let catchTr = 100;
  for (var i = 100; i < 106; i++) {
    var createTr = document.getElementById(catchTr);
    createTr.remove();
    catchTr++;
  }
}

function prev() {
  if (pageFirst.getMonth() === 1) {
    pageFirst = new Date(first.getFullYear() - 1, 12, 1);
    first = pageFirst;
    if (first.getFullYear() % 4 === 0) {
      pageYear = leapYear;
    } else {
      pageYear = notLeapYear;
    }
  } else {
    pageFirst = new Date(first.getFullYear(), first.getMonth() - 1, 1);
    first = pageFirst;
  }
  today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
  currentTitle.innerHTML =
    monthList[first.getMonth()] +
    "&nbsp;&nbsp;&nbsp;&nbsp;" +
    first.getFullYear();
  removeCalendar();
  showCalendar();
  showMain();
  clickedDate1 = document.getElementById(today.getDate());
  clickedDate1.classList.add("active");
  clickStart();
}

function next() {
  if (pageFirst.getMonth() === 12) {
    pageFirst = new Date(first.getFullYear() + 1, 1, 1);
    first = pageFirst;
    if (first.getFullYear() % 4 === 0) {
      pageYear = leapYear;
    } else {
      pageYear = notLeapYear;
    }
  } else {
    pageFirst = new Date(first.getFullYear(), first.getMonth() + 1, 1);
    first = pageFirst;
  }
  today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
  currentTitle.innerHTML =
    monthList[first.getMonth()] +
    "&nbsp;&nbsp;&nbsp;&nbsp;" +
    first.getFullYear();
  removeCalendar();
  showCalendar();
  showMain();
  clickedDate1 = document.getElementById(today.getDate());
  clickedDate1.classList.add("active");
  clickStart();
}

/*  */

var clickedDate1 = document.getElementById(today.getDate());
clickedDate1.classList.add("active");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
var tdGroup = [];
function clickStart() {
  for (let i = 1; i <= pageYear[first.getMonth()]; i++) {
    tdGroup[i] = document.getElementById(i);
    tdGroup[i].addEventListener("click", changeToday);
  }
}
function changeToday(e) {
  for (let i = 1; i <= pageYear[first.getMonth()]; i++) {
    if (tdGroup[i].classList.contains("active")) {
      tdGroup[i].classList.remove("active");
    }
  }
  clickedDate1 = e.currentTarget;
  clickedDate1.classList.add("active");
  today = new Date(today.getFullYear(), today.getMonth(), clickedDate1.id);
  showMain();
  keyValue = today.getFullYear() + "" + today.getMonth() + "" + today.getDate();
}
clickStart();
