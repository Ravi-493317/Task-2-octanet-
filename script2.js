function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskInput.value;

        const buttonsDiv = document.createElement('div');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editTask(li);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(li);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = () => completeTask(taskSpan);

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(deleteButton);
        buttonsDiv.appendChild(completeButton);

        li.appendChild(taskSpan);
        li.appendChild(buttonsDiv);

        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}

function editTask(taskItem) {
    const taskSpan = taskItem.querySelector('span');
    const newTask = prompt('Edit your task:', taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        taskSpan.textContent = newTask;
    }
}

function completeTask(taskSpan) {
    taskSpan.style.textDecoration = 'line-through';
}