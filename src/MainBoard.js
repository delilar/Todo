import * as sidebarVariables from "./Sidebar.js";
import * as inputNewTask from "./UI/inputNewTask/inputNewTask.js";
import { updateSidebar, menuOptions, ellipsisIcons, showPopup, activeListIndex } from ".";
import { showMarkers } from "./Markers.js";

const mainBoard = document.querySelector('.task-board__inner')
let mainBoardTasksList = document.querySelector('.task-board.task-list')

const listTitle = document.querySelector('.task-board__title-wrapper')

const drawListTitle = (insertTitle) => {
    const title = document.createElement('div');
    const titleInner = `<span class="task-board__list-title">
                        <i class="fa-solid fa-layer-group"></i>
                        <h2>${insertTitle}</h2>
                        <i class="fa-solid fa-ellipsis"></i>
                    </span>
                    <p class="task-board__description">A new description for the title of a new list</p>`;
    title.insertAdjacentHTML('beforeend', titleInner);

    return title;
}

const drawTask = (insertTask) => {
    console.log(insertTask)
    const task = document.createElement('div');
    task.classList.add('task-board', 'task-list-wrapper', 'task-title');

    task.innerHTML = `<div class="task-board task-list__checkbox-wrapper">
                        <div class="task-board task-list__checkbox">
                            <i class="fa-regular fa-circle"></i>
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <h3>${insertTask._title}</h3>
                    </div>`;

    // Добавляем маркеры к задаче
    task.appendChild(showMarkers(insertTask));

    task.innerHTML += `<i class="fa-solid fa-ellipsis"></i>`;

    return task; 
}

function updateMainBoard() {
    sidebarVariables.listStorage.forEach((listElement, listIndex) => {
        if (listIndex === activeListIndex) {

            listTitle.innerHTML = ''
            listTitle.appendChild(drawListTitle(listElement._title)) 
            listTitle.innerHTML += `<div class="add-task-button">
                                        <i class="fa-solid fa-plus"></i>
                                        <p>Task</p>
                                    </div>`;

            mainBoardTasksList.innerHTML = ''
            listElement._tasks.forEach((task) => {
                mainBoardTasksList.appendChild(drawTask(task))
            })
        }
    })

    showPopup()
    inputNewTask.addTaskInMainboardButton()
}

export { updateMainBoard, drawTask }
