import * as sidebarVariables from "./Sidebar.js";
import * as taskSettings from './UI/TaskSettings/TaskSettings.js';
import { activePopupIndex, activeListIndex } from ".";
import { drawTask, updateMainBoard } from "./MainBoard.js";



let tasksInLists = [];

function getMarkers() {
    sidebarVariables.listStorage.forEach( (tasks, tasksIndex) => {
        if (activeListIndex === tasksIndex) {
            tasksInLists = tasks._tasks;
        }
    })
}

taskSettings.settingsSubmit.addEventListener('click', () => {
    getMarkers()

    tasksInLists[activePopupIndex]._markers.date = taskSettings.dropdownDate.value;
    tasksInLists[activePopupIndex]._markers.priority = taskSettings.dropdownPriority.textContent;

    sidebarVariables.listStorage[activeListIndex]._tasks = tasksInLists;
    localStorage.setItem('listStorage', JSON.stringify(sidebarVariables.listStorage));
    
    updateMainBoard()
})



function showMarkers(task) {
    const div = document.createElement('div');
    div.classList.add('task-board', 'task-list__markers-wrapper');

    if (task._markers.date !== '') {
        const dateMarker = document.createElement('div');
        dateMarker.classList.add('date-marker');
        dateMarker.innerHTML = `<p>${task._markers.date}</p>`;
        div.appendChild(dateMarker);
    }

    if (task._markers.priority !== 'None') {
        const priorityMarker = document.createElement('div');
        priorityMarker.classList.add('priority-marker');
        priorityMarker.style.borderColor = task._markers.priorityColor;
        priorityMarker.style.color = task._markers.priorityColor;
        priorityMarker.innerHTML = `<p>${task._markers.priority}</p>`;
        div.appendChild(priorityMarker);
    }

    return div;
}

export { showMarkers }
