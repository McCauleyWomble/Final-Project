// Initialize array to store todos
let todos = [];

// Get references to DOM elements
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

// Event listener for form submission
todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Extract user input from form
    const newTodoText = todoInput.value;
    // Create new todo object
    const newTodo = {
        text: newTodoText,
        complete: false
    };
    // Add new todo to array
    todos.push(newTodo);
    // Clear input field
    todoInput.value = '';
    // Update display of todo list
    displayTodos();
});

// Event listeners for check and delete buttons
todoList.addEventListener('click', function (event) {
    // Check if event target is a check or delete button
    if (event.target.classList.contains('check-btn')) {
        // Get index of todo item in array
        const todoIndex = event.target.parentNode.dataset.index;
        // Toggle complete property of todo item
        todos[todoIndex].complete = !todos[todoIndex].complete;
        displayTodos();
    } else if (event.target.classList.contains('delete-btn')) {
        // Get index of todo item in array
        const todoIndex = event.target.parentNode.dataset.index;
        // Remove todo item from array
        todos.splice(todoIndex, 1);
        displayTodos();
    }
});

// Function to display todos on the page
function displayTodos() {
    // Clear existing todo list
    todoList.innerHTML = '';
    // Loop through todos array and create HTML elements for each todo
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const todoItem = document.createElement('li');
        todoItem.dataset.index = i;
        todoItem.innerText = todo.text;
        // Add line-through style if todo is complete
        if (todo.complete) {
            todoItem.style.textDecoration = 'line-through';
        }
        const checkBtn = document.createElement('button');
        checkBtn.classList.add('check-btn');
        checkBtn.innerText = 'Complete Todo';
        checkBtn.style.margin = '5px'; // Add some space between buttons
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete Todo';
        todoItem.appendChild(checkBtn);
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);
    }
}
