const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
filterOption.addEventListener("click",filterTodo);


todobutton.addEventListener("click",(event) => {

    event.preventDefault();
    
    const tododiv = document.createElement("div");

    tododiv.classList.add("todo");

    const newTodo = document.createElement("li");

    newTodo.innerText = todoinput.value;
    todoinput.value = "";

    newTodo.classList.add("todo-item");

    tododiv.append(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("completed-btn");
    tododiv.append(completedButton);

    const trash = document.createElement("button");
    trash.innerHTML = "<i class='fas fa-trash'></i>";
    trash.classList.add("trash-btn");
    tododiv.append(trash);

    todolist.append(tododiv);


})

todolist.addEventListener("click",(event) => {
    const item = event.target;

    if(item.classList[0]==="trash-btn") {
        const todo = item.parentElement;

        todo.classList.add("fall");
        // todo.remove();
        setTimeout(() => todo.parentNode.removeChild(todo),500)
    }

    if(item.classList[0]=="completed-btn") {
        item.parentElement.classList.add("completed");
    }
})

console.log(filterOption.childNodes);

function filterTodo(e) {
    const todos = todolist.childNodes;
    console.log(todos);
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncomplete":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    });
  }