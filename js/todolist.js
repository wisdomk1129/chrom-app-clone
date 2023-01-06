const toDoSettingForm = document.querySelector(".todosetting-form");
const toDoSettingFormInput = toDoSettingForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const TODOSETTING_KEY = "todo-setting";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOSETTING_KEY, JSON.stringify(toDos));
};

function deleteToDo(event) {
    const existingToDo = event.target.parentNode;
    existingToDo.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(existingToDo.id));
    saveToDos();
};

function makingToDo(toDoObject) {
    const toDoListItem = document.createElement("li");
    toDoListItem.id = toDoObject.id;
    const toDoListSpan = document.createElement("span");
    toDoListSpan.innerText = toDoObject.toDo;
    const toDoListBtn = document.createElement("button");
    toDoListBtn.innerText = "✖️";
    toDoListItem.appendChild(toDoListSpan);
    toDoListItem.appendChild(toDoListBtn);
    toDoList.appendChild(toDoListItem);

    toDoListBtn.addEventListener("click", deleteToDo);
};

function onToDoSettingFromSubmit(event) {
    event.preventDefault();
    const typedToDo = toDoSettingFormInput.value;
    toDoSettingFormInput.value = "";
    toDoObject = {
        toDo: typedToDo,
        id: Date.now(),
    };
    toDos.push(toDoObject);
    makingToDo(toDoObject);
    saveToDos();
};

toDoSettingForm.addEventListener("submit", onToDoSettingFromSubmit);

const savedToDos = localStorage.getItem(TODOSETTING_KEY);

if (savedToDos !== null) {
    const parsedSavedToDos = JSON.parse(savedToDos);
    toDos = parsedSavedToDos;
    parsedSavedToDos.forEach(makingToDo);
}