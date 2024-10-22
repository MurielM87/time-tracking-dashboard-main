let btnDaily = document.getElementById("span_daily");
let btnWeekly = document.getElementById("span_weekly"); 
let btnMonthly = document.getElementById("span_monthly");
let daily = document.getElementsByClassName("daily");
let weekly = document.getElementsByClassName("weekly");
let monthly = document.getElementsByClassName("monthly");

btnDaily.addEventListener("click", () => {
    Array.from(daily).forEach((el) => el.style.display = "flex");
    Array.from(weekly).forEach((el) => el.style.display = "none");
    Array.from(monthly).forEach((el) => el.style.display = "none");
})

btnWeekly.addEventListener("click", () => {
    Array.from(daily).forEach((el) => el.style.display = "none");
    Array.from(weekly).forEach((el) => el.style.display = "flex");
    Array.from(monthly).forEach((el) => el.style.display = "none");
})

btnMonthly.addEventListener("click", () => {
    Array.from(daily).forEach((el) => el.style.display = "none");
    Array.from(weekly).forEach((el) => el.style.display = "none");
    Array.from(monthly).forEach((el) => el.style.display = "flex");
})