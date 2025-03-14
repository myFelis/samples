  document.addEventListener('DOMContentLoaded', renderTasks);

  function addTask() {
      const input = document.getElementById('taskInput');
      const text = input.value.trim();

      if (text) {
          const task = {
              id: Date.now(),
              text: text,
              completed: false
          };

          const tasks = getTasks();
          tasks.push(task);
          saveTasks(tasks);
          input.value = '';
          renderTasks();
      }
      else {
        alert('An input required')
      }
  }

  function toggleTask(id) {
      const tasks = getTasks().map(task => {
          if (task.id === id) {
              task.completed = !task.completed;
          }
          return task;
          });
      saveTasks(tasks);
      renderTasks();
  }

  function clearTasks() {
      localStorage.removeItem('tasks');
      renderTasks();
  }

  function getTasks() {
      return JSON.parse(localStorage.getItem('tasks')) || [];
  }

  function saveTasks(tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function renderTasks() {
      const tasks = getTasks();
      const list = document.getElementById('tasksList');
      const emptyState = document.getElementById('emptyState');
      const clearButton = document.getElementById('clearButton');

      list.innerHTML = '';

      tasks.forEach(task => {
          const isTaskCompleted = task.completed ? 'checked' : ''
          const li = document.createElement('li');
          li.className = 'task-item';
          const span = `<span class="${task.completed ? 'completed' : ''}">${task.text}</span>`
          li.innerHTML = `<input type="checkbox" ${isTaskCompleted} onchange="toggleTask(${task.id})">` + span;
          list.appendChild(li);
      });

      emptyState.style.display = tasks.length ? 'none' : 'block';
      clearButton.disabled = !tasks.length;
  }
