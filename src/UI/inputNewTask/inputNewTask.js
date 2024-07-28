import './inputNewTask.scss'
import { updateMainBoard } from '../../MainBoard';
import { activeListIndex, updateSidebar } from '../..';
import * as sidebarVariables from '../../Sidebar';
import { Task } from '../../obj/TaskObj';

const taskInputBlock = document.createElement('div');
taskInputBlock.className = 'task-board task-list-wrapper task-title add-task';
taskInputBlock.style.display = 'none';
taskInputBlock.style.opacity = '0';
taskInputBlock.innerHTML = `
    <div class="task-board task-list__checkbox-wrapper">
        <input type="text" autocomplete="off" name="task-input" id="task-input" placeholder="Input new task">
    </div>
    <span class="task-add-done-button">
        <i class="fa-solid fa-check"></i>
        <p>Done</p>
    </span>
`;


let addTaskButton = document.querySelector('.add-task-button');
const taskBoardInner = document.querySelector('.task-board__inner');

taskBoardInner.appendChild(taskInputBlock)
const addNewTask = document.querySelector('.task-board.task-list-wrapper.task-title.add-task')
let taskInput = document.querySelector('#task-input');
let taskInputValue = document.querySelector('#task-input').value;


function addTaskInMainboardButton() {
    addTaskButton = document.querySelector('.add-task-button');

    addTaskButton.addEventListener('click', () => {
        taskInput.value = ''
        addNewTask.style.display = 'flex';
        taskInput = document.querySelector('#task-input');
        taskInput.focus();
        taskInputBlock.style.opacity = '1';
    
        const doneTaskButton = document.querySelector('.task-add-done-button');
        doneTaskButton.addEventListener('click', () => {
            
        })
    })
}


const doneTaskButton = document.querySelector('.task-add-done-button');

doneTaskButton.addEventListener('click', () => {
    addTaskFromMainboard()

    taskInputBlock.style.opacity = '0';
    setTimeout(() => {addNewTask.style.display = 'none'}, 300);
});



function addTaskFromMainboard() {
    document.querySelector('#task-input').value.trim() === '' ? taskInputValue = 'New Task' : taskInputValue = document.querySelector('#task-input').value;

    const obj = new Task(taskInputValue)
    
    sidebarVariables.listStorage[activeListIndex]._tasks.push(obj)
    localStorage.setItem('listStorage', JSON.stringify(sidebarVariables.listStorage))

    console.log(sidebarVariables.listStorage[activeListIndex]._tasks)

    updateMainBoard()
    sidebarVariables.showSidebarElements()
}



export { taskInput, addTaskButton, addNewTask, doneTaskButton, addTaskInMainboardButton }