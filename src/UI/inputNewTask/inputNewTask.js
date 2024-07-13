import './inputNewTask.scss'

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


const addTaskButton = document.querySelector('.add-task-button');
const taskBoardInner = document.querySelector('.task-board__inner');


taskBoardInner.appendChild(taskInputBlock)
const addNewTask = document.querySelector('.task-board.task-list-wrapper.task-title.add-task')

addTaskButton.addEventListener('click', () => {
    addNewTask.style.display = 'flex';
    const taskInput = document.querySelector('#task-input');
    taskInput.focus();
    taskInputBlock.style.opacity = '1';
})


const doneTaskButton = document.querySelector('.task-add-done-button');

doneTaskButton.addEventListener('click', () => {
    taskInputBlock.style.opacity = '0';
    setTimeout(() => {addNewTask.style.display = 'none'}, 300);
});

export { addTaskButton, addNewTask, doneTaskButton }