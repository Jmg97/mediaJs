const clock = document.querySelector("#clock");
const day = document.querySelector(".day");
const month = document.getElementById("month");
const week = document.getElementById("week");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const days = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]



function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // .padstart(n, 'str') n의 자리로 만들고 그 자리에 str을 채우기
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function time() {
  const weekDate = new Date();
  const getHour = String(weekDate.getHours()).padStart(2, "0");
  const getMinute = String(weekDate.getMinutes()).padStart(2, "0");
  const getSecond = String(weekDate.getSeconds()).padStart(2, "0");
  const getMonth = String(weekDate.getMonth() +1).padStart(2, "0");
  const getDate = String(weekDate.getDate()).padStart(2, "0");
  const getDays = String(weekDate.getDay());
 

  hour.innerText = `${getHour}`;
  minute.innerText = `${getMinute}`;
  second.innerText = `${getSecond}`
  month.innerText = `${getMonth}`;
  week.innerText = `${getDate}`;
}

function getDate(){
  const dayOfWeek = days[new Date().getDay()];
  return dayOfWeek
}


getClock();
getDate();
time();
setInterval(getDate, 1000);
setInterval(time, 1000);
setInterval(getClock, 1000);