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

const newListButton = document.querySelector('.add-list-button')
const addListPanel = document.querySelector('.task-panel__list-storage.add-list');

const addTaskInput = `<input  type="text" autocomplete="off" name="task" id="task-in-list" placeholder="Enter the task name"></input>`;
addListPanel.querySelector('.tasks').innerHTML += addTaskInput;

const addTaskButton = addListPanel.querySelector('.dropdown-add-task');
const addListName = addListPanel.querySelector('#add-project-title');

const createListButton = addListPanel.querySelector('.dropdown-create-list');



export { listStorageAddList, addTaskButton, newListButton, addListPanel, addTaskInput, addListName, createListButton }