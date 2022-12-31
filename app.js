const loginInput = document.querySelector("input");
const loginButton = document.querySelector("button");

function onLoginButtonClick() {
    if (loginInput.value === "") {
        alert("Plese write your name :(");
    }
    else {
        console.log("hello " + loginInput.value);
    }
};

loginButton.addEventListener("click", onLoginButtonClick);