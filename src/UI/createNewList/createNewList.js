import './createNewList.scss'

const addNewList = `<div class="add-project-title">
    <input type="text" autocomplete="off" name="project-title" id="add-project-title" placeholder="Enter the list name">
</div>
<div class="tasks">
    
</div>
<div class="add-list__modificators">
    <span class="dropdown-add-task">
        <i class="fa-solid fa-plus"></i>
        <p>Task</p>
    </span>
    <span class="dropdown-create-list">
        <i class="fa-solid fa-check"></i>
        <p>Done</p>
    </span>
</div>`

const listStorageAddList = document.querySelector('.task-panel__list-storage.add-list');
listStorageAddList.innerHTML = addNewList;

const newListButton = document.querySelector('.add-list-button');
const addListPanel = document.querySelector('.task-panel__list-storage.add-list');

const createTaskInput = () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.autocomplete = 'off';
    input.name = 'task';
    input.id = 'task-in-list';
    input.placeholder = 'Enter the task name';
    return input;
}

const addTaskButton = addListPanel.querySelector('.dropdown-add-task');
const addListName = addListPanel.querySelector('#add-project-title');
let addTaskName = Array.from(addListPanel.querySelectorAll('#task-in-list'));

const createListButton = addListPanel.querySelector('.dropdown-create-list');

newListButton.addEventListener('click', () => {
    listStorageAddList.style.display = 'block';
    const tasksDiv = addListPanel.querySelector('.tasks');
    tasksDiv.innerHTML = '';
    tasksDiv.appendChild(createTaskInput());

    addTaskName = Array.from(addListPanel.querySelectorAll('#task-in-list'));
})

addTaskButton.addEventListener('click', () => {
    addListPanel.querySelector('.tasks').appendChild(createTaskInput());
    addTaskName = Array.from(addListPanel.querySelectorAll('#task-in-list')); 
})

createListButton.addEventListener('click', () => {
    listStorageAddList.style.display = 'none';
})

export { listStorageAddList, addTaskButton, newListButton, addListPanel, addListName, createListButton, addTaskName }
