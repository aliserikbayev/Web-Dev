const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

const handleAddTask = (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();
  if (text === '') return;

  const taskItem = createTaskItem(text);
  taskList.appendChild(taskItem);
  taskInput.value = '';
};

const createTaskItem = (text) => {
  const listItem = document.createElement('li');
  listItem.dataset.completed = 'false';

  const leftContainer = document.createElement('div');
  leftContainer.className = 'task-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskText = document.createElement('span');
  taskText.textContent = text;
  taskText.className = 'task-text';

  checkbox.addEventListener('change', () => {
    const completed = checkbox.checked;
    taskText.classList.toggle('done', completed);
    listItem.dataset.completed = completed.toString();
    applyFilter();
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

const applyFilter = () => {
  const items = taskList.querySelectorAll('li');

  items.forEach((item) => {
    const completed = item.dataset.completed === 'true';

    if (currentFilter === 'all') {
      item.style.display = 'flex';
    } else if (currentFilter === 'active') {
      item.style.display = completed ? 'none' : 'flex';
    } else if (currentFilter === 'completed') {
      item.style.display = completed ? 'flex' : 'none';
    }
  });
};

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFilter();
  });
});

taskForm.addEventListener('submit', handleAddTask);
