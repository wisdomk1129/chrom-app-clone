const loginFrom = document.querySelector(".login-form");
const loginInput = document.querySelector("input");
const greeting = document.querySelector(".greeting");
const HIDDEN_CLASSNAME = "hidden"

function onloginFormSubmit(event) {
    event.preventDefault();
    if (localStorage.length === 0) {
        localStorage.setItem("userName", loginInput.value);
        loginFrom.classList.add("hidden");
        const userName = localStorage.getItem("userName");
        greeting.innerText = `Hello! ${userName}`
        greeting.classList.remove("hidden");
    }
    else {

    }
}

loginFrom.addEventListener("submit", onloginFormSubmit);