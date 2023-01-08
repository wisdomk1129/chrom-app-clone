const modeBtn = document.querySelector(".btns__modebtn");
const resetBtn = document.querySelector(".btns__resetbtn");
const all = document.querySelector("*");

//dark mode
function onDarkMode() {
    if (all.classList.contains("dark")) {
        all.classList.remove("dark");
        modeBtn.innerText = "Light";
    }
    else {
        all.classList.add("dark");
        modeBtn.innerText = "Dark";
    }
}
modeBtn.addEventListener("click", onDarkMode);

//reset
function onReset() {
    if (confirm("Do you want remove Name & To do list?")) {
        localStorage.clear();
        window.location.reload();
    }
}
resetBtn.addEventListener("click", onReset);