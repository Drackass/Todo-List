// Model
let todos = [{
    title: 'Get groceries',
    dueDate: '2021-10-04',
    id: 'id1'
}, {
    title: 'Wash car',
    dueDate: '2021-02-03',
    id: 'id2'

}, {
    title: 'Make dinner',
    dueDate: '2021-03-04',
    id: 'id3'
}];

// Creates a todo
function createTodo(title, dueDate) {
    const id = '' + new Date().getTime();
    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });
}
// Deletes a todo
function removeTodo(idToDelete) {
    todos = todos.filter(function (todo) {
        if (todo.id === idToDelete) {
            return false;
        }
        else{
            return true
        }
    });
}

// Controller
function addTodo() {
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;

    createTodo(title, dueDate);
    render();
}

function deleteTodo(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    removeTodo(idToDelete);
    render();
}


// View
function render() {
    // reset our list
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function (todo){
        const element = document.createElement('div');
        element.innerText = todo.title + ' ' + todo.dueDate;
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left: 12px;';
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);
        
        const todolist = document.getElementById('todo-list');
        todolist.appendChild(element);
    });
}

render();
