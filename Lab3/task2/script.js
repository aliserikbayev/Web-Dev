const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

const handleAddTask = (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  const taskItem = createTaskItem(taskText);
  taskList.appendChild(taskItem);

  taskInput.value = '';
};

const createTaskItem = (text) => {
  const listItem = document.createElement('li');

  const leftContainer = document.createElement('div');
  leftContainer.className = 'task-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskText = document.createElement('span');
  taskText.textContent = text;
  taskText.className = 'task-text';

  checkbox.addEventListener('change', () => {
    taskText.classList.toggle('done', checkbox.checked);
  });

  leftContainer.appendChild(checkbox);
  leftContainer.appendChild(taskText);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';

  deleteButton.addEventListener('click', () => {
    taskList.removeChild(listItem);
  });

  listItem.appendChild(leftContainer);
  listItem.appendChild(deleteButton);

  return listItem;
};

taskForm.addEventListener('submit', handleAddTask);
