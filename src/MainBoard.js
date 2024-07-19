import * as sidebarVariables from "./Sidebar.js";
import * as inputNewTask from "./UI/inputNewTask/inputNewTask.js";
import { updateSidebar, menuOptions, ellipsisIcons, showPopup, activeIndex } from ".";

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

const drawTask = (insertTitle) => {
    const task = document.createElement('div');
    task.classList.add('task-board', 'task-list-wrapper', 'task-title');

    task.innerHTML = `<div class="task-board task-list__checkbox-wrapper">
                        <div class="task-board task-list__checkbox">
                            <i class="fa-regular fa-circle"></i>
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <h3>${insertTitle._title}</h3>
                    </div>

                    <div class="task-board task-list__markers-wrapper">
                        <div class="date-marker">
                            <p>12.06.2024</p>
                        </div>
                        <div class="priority-marker">
                            <p>High</p>
                        </div>
                    </div>

                    <i class="fa-solid fa-ellipsis"></i>`;

    return task; 
}

function updateMainBoard() {

    sidebarVariables.listStorage.forEach((listElement, listIndex) => {
        if (listIndex === activeIndex) {
            console.log(listElement)

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
}


export { updateMainBoard }