const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div class="task-actions">
                <button onclick="editTask(this)">Edit</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector('span');
    const newText = prompt('Edit task:', span.textContent);
    if (newText !== null) {
        span.textContent = newText;
    }
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    taskList.removeChild(li);
}