const clock = document.querySelector(".clock");
const today = document.querySelector(".date");
const options = { year: "numeric", month: "short", day: "numeric", weekday: "short", }

function getTime() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = (hour < 13) ? `AM ${hour} : ${minute}` : `PM ${hour - 12} : ${minute}`;
    today.innerText = Intl.DateTimeFormat("en-GB", options).format(date);
};

getTime();
setInterval(getTime, 1000);