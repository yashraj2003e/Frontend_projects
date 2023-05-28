const todoinput = document.querySelector(".todo-input");
const todosubmit = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const filtertodo = document.querySelector(".filter-todo");

todosubmit.addEventListener("click",(e) => {

    e.preventDefault();

    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");

    const newtodo = document.createElement("li");

    newtodo.innerText = todoinput.value;
    todoinput.value = "";

    newtodo.classList.add("todo-item");

    tododiv.append(newtodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("completed-btn");
    tododiv.append(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    tododiv.append(trashButton);

    todolist.append(tododiv);
})

todolist.addEventListener("click",(event) => {
    const item = event.target;


    if(item.classList[0]==='trash-btn') {
        const todo = item.parentElement;

        todo.classList.add("fall");

        setTimeout(() => todo.parentNode.removeChild(todo),500);

    }

    if(item.classList[0]==='completed-btn') {
        item.parentElement.classList.add("completed");
    }
})


filtertodo.addEventListener("click",(e) => {
    todos = todolist.childNodes;
    todos.forEach(todo => {
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
            case "uncomplete":
                if(!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
            }
        })
})


