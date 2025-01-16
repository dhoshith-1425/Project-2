document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      li.innerHTML = `${taskText} <button onclick="removeTask(this)">X</button>`;
      taskList.appendChild(li);
      taskInput.value = '';
    }
  });

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTaskBtn.click();
    }
  });
});

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}
