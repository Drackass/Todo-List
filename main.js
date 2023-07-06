let todos = ['Get groceries', 'Wash car', 'Make dinner'];

render();

function addTodo() {
    let textbox = document.getElementById('todo-title');
    let title = textbox.value;
    todos.push(title);

    render();
}

function render() {
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function (todoTitle){
        let element = document.createElement('div');
        element.innerText = todoTitle;

        let todolist = document.getElementById('todo-list');
        todolist.appendChild(element);
    });
}