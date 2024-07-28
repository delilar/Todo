import './createNewList.scss'

const addNewListTemplate = `<div class="add-project-title">
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
</div>`;

const createAddNewListElement = () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('task-panel__list-storage', 'add-list')
    wrapper.innerHTML = addNewListTemplate;
    return wrapper;
}

const showPanel = document.querySelector('.task-panel__list-storage-inner');

const listStorageAddList = createAddNewListElement();

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

const addTaskButton = listStorageAddList.querySelector('.dropdown-add-task');
const addListName = listStorageAddList.querySelector('#add-project-title');
let addTaskName = Array.from(listStorageAddList.querySelectorAll('#task-in-list'));

const createListButton = listStorageAddList.querySelector('.dropdown-create-list');

newListButton.addEventListener('click', () => {
    showPanel.appendChild(listStorageAddList);
    listStorageAddList.style.display = 'block';
    console.log(showPanel)
    const tasksDiv = listStorageAddList.querySelector('.tasks');
    tasksDiv.innerHTML = '';
    tasksDiv.appendChild(createTaskInput());

    addTaskName = Array.from(listStorageAddList.querySelectorAll('#task-in-list'));
})

addTaskButton.addEventListener('click', () => {
    listStorageAddList.querySelector('.tasks').appendChild(createTaskInput());
    addTaskName = Array.from(listStorageAddList.querySelectorAll('#task-in-list')); 
})

createListButton.addEventListener('click', () => {
    listStorageAddList.style.display = 'none';
})

export { listStorageAddList, addTaskButton, newListButton, addListPanel, addListName, createListButton, addTaskName }
