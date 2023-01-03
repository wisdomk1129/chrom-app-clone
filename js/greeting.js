const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector("input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function greetingShow(username) {
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

function OnLoginFormSubmit(event) {
    event.preventDefault();
    const typedUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, typedUsername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greetingShow(typedUsername);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", OnLoginFormSubmit);
}
else {
    greetingShow(savedUsername);
}

//rest btn을 click하면
//alert("닉네임, to do list가 초기화 됩니다");
//if (yes)
//localStorage.clear();
//confirm();으로 만들기 boolean을 반환함