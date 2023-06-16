// Array to store the tasks
let tasks = [];

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value;
  
  if (task) {
    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
}

// Function to render the tasks
function renderTasks() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const listItem = document.createElement('li');
    listItem.textContent = task;
    
    // Add a click event listener to toggle task completion
    listItem.addEventListener('click', function() {
      listItem.classList.toggle('completed');
    });
    
    todoList.appendChild(listItem);
  }
}