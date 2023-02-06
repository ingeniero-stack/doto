const form = document.getElementById('todo-form');
const list = document.getElementById('Completed-list');
const completeInput = document.getElementById('Completedtasks');
const uncompleteInput = document.getElementById('Uncompletedtasks');
const completeCheckbox = document.querySelectorAll('.Completed input[type="checkbox"]')[0];
const uncompleteCheckbox = document.querySelectorAll('.Uncompleted input[type="checkbox"]')[0];

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form input values
  const title = document.getElementById('todo-title').value;
  const description = document.getElementById('todo-description').value;
  const date = document.getElementById('todo-date').value;

  // Create new list item
  const li = document.createElement('li');
  li.innerHTML = `<strong>${title}</strong> - ${description} - ${date}`;
  list.appendChild(li);

  // Clear form input values
  document.getElementById('todo-title').value = '';
  document.getElementById('todo-description').value = '';
  document.getElementById('todo-date').value = '';
});

