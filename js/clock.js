const clock = document.querySelector(".clock .clock__time");
const clockAmPm = document.querySelector(".clock .clock__ampm");
const today = document.querySelector(".date");
const options = { year: "numeric", month: "short", day: "numeric", weekday: "short", }

function getTime() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hour} : ${minute}`;
    clockAmPm.innerText = (hour < 13) ? "AM" : "PM";
    today.innerText = Intl.DateTimeFormat("en-GB", options).format(date);
};

getTime();
setInterval(getTime, 1000);