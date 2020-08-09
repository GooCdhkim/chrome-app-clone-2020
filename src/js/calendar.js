const currentTitle = document.querySelector("#current-year-month");
const calendarBody = document.querySelector("#calendar-body");
const today = new Date();
const first = new Date(today.getFullYear(), today.getMonth(), 1);
var dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var monthList = [
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
const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var pageFirst = first;
var pageYear;

if (first.getFullYear() % 4 === 0) {
  pageYear = leapYear;
} else {
  pageYear = notLeapYear;
}

function showCalendar() {
  let monthCnt = 100;
  let cnt = 1;
  for (var i = 0; i < 6; i++) {
    var $tr = document.createElement("tr");
    $tr.setAttribute("id", monthCnt);
    for (var j = 0; j < 7; j++) {
      if ((i === 0 && j < first.getDay()) || cnt > pageYear[first.getMonth()]) {
        var $td = document.createElement("td");
        $tr.appendChild($td);
      } else {
        var $td = document.createElement("td");
        $td.textContent = cnt;
        $td.setAttribute("id", cnt);
        $tr.appendChild($td);
        cnt++;
      }
    }
    monthCnt++;
    calendarBody.appendChild($tr);
  }
}
showCalendar();
