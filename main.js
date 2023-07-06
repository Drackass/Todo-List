// Model
// If localstorage has a todos array, then use it
// Otherwise use the default array.
let todos;

// Retrieve localStorage
const savedTodos = JSON.parse(localStorage.getItem('todos'));
// Check if it's an array
if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [{
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
}

// Creates a todo
const createTodo = (title, dueDate) => {
  const id = '' + new Date().getTime();
  todos.push({
    title: title,
    dueDate: dueDate,
    id: id
  });
  saveTodos();
}

// Deletes a todo
const removeTodo = idToDelete => {
  todos = todos.filter(todo => {
    // If the id of this todo matches idToDelete, return false
    // For everything else, return true
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });
  saveTodos();
}

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Controller
const addTodo = () => {
  const textbox = document.getElementById('todo-title');
  const title = textbox.value;
  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;
  createTodo(title, dueDate);
  render();
}

const deleteTodo = event => {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;
  removeTodo(idToDelete);
  render();
}

// View
const render = () => {
  // reset our list
  document.getElementById('todo-list').innerHTML = '';

  todos.forEach(todo => {
    const element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style = 'margin-left: 12px';
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);
    
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(element);
  });
}

render();