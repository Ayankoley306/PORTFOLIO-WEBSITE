// DOM Variables
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let day = document.querySelector("#day");
let date = document.querySelector("#date");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
// current date and Time
const timeupdate = () => {
    const now = new Date();
    let hours = now.getHours();
    let amPm = hours >= 12 ? "PM" : "AM" ;
    hours = hours % 12 || 12;
    hour.textContent = String(hours).padStart(2, "0");
    minute.textContent = String(now.getMinutes()).padStart(2, "0");
    second.textContent = String(now.getSeconds()).padStart(2, "0");
    day.textContent = days[now.getDay()];
    date.textContent = String(now.getDate()).padStart(2, "0");
    month.textContent = months[now.getMonth()];
    year.textContent = String(now.getFullYear());
    document.querySelector("#am-pm").textContent = amPm
}
setInterval(timeupdate, 1000)
timeupdate();

l