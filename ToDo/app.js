const todoinput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const tl = gsap.timeline();
const filterOption = document.querySelector(".filter-todo");


tl.fromTo('.headerName',{y:-100,opacity:0,rotate:'180deg',scale:0},{y:0,scale:1,opacity:1,duration:1.15,rotate:'0deg'})

// Event Listeners
todoButton.addEventListener('click',addToDo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

function addToDo(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoinput.value;
    newTodo.classList.add('todo_input');
    todoinput.value = "";

    newTodo.classList.add('todo-item');
    todoDiv.append(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.append(completedButton);


    const trashButton = document.createElement('button');

    trashButton.innerHTML =  '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.append(trashButton);
    todoList.append(todoDiv);
}

function deleteCheck(e) {
    const item = e.target;
    // delete
    const todo = item.parentElement;
    if(item.classList[0]==='trash-btn') {
        todo.classList.add('fall');
        setTimeout(() => {
            todo.parentNode.removeChild(todo);
          }, 500); 
    }
    if(item.classList[0]==='complete-btn') {
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    console.log(todos);
}