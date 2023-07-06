let todo1 = 'Get groceries';
let todo2 = 'wash car';
let todo3 = 'Make dinner';

function addTodo(todoTitle) {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
}

addTodo(todo1);
addTodo(todo2);
addTodo(todo3);