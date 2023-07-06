let todos = ['Get groceries', 'Wash car', 'Make dinner'];
todos.push('another todo')

render();

function addTodo() {
    let textbox = document.getElementById('todo-title');
    let title = textbox.value;
    todos.push(title);

    render();
}

function render() {
    todos.forEach(function (todoTitle){
        let element = document.createElement('div');
        element.innerText = todoTitle;
        document.body.appendChild(element);
    });
}