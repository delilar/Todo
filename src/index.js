import './styles/style.scss';
import values from './json/values.json'

import { menuOptions as initialMenuOptions, menu } from './UI/panelMenuList/panelMenuList.js';
//import {projectTitles, tasks} from './listStorageChoise.js';
import { taskSotingPannel, taskSotingElements } from "./UI/sortingMethods/sortingMethods.js"
import { popupMenu, dropdownPriority, dropdownContent, dropdownElements, dropdownDate, taskCheckbox, tasks, settingsSubmit } from './UI/TaskSettings/TaskSettings.js';
import * as createNewList from './UI/createNewList/createNewList.js';
import { addTaskButton, doneTaskButton, addTaskElement } from './UI/inputNewTask/inputNewTask.js'
import * as listStorageChoise from './Sidebar.js';


let menuOptions = initialMenuOptions;

// Добавляем обработчики событий для элементов меню
function updateMenuOptions() {
    menuOptions.forEach(option => {
        option.addEventListener("click", function(event) {
            const rect = option.getBoundingClientRect();
            menu.style.left = `${rect.right}px`;
            menu.style.top = `${rect.top}px`;
            menu.style.display = "block";
        });
    });
}

updateMenuOptions();

// Добавляем обработчик событий для закрытия меню при клике вне его области
document.addEventListener("click", function(event) {
    if (![...menuOptions].some(option => option.contains(event.target)) && !menu.contains(event.target)) {
        menu.style.display = "none";
    }
});


//Выделение выбранного списка/задания

const projectTitles = document.querySelectorAll('.project-title');

// Функция для обновления обработчиков событий в sidebar
function updateSidebar() {
    const projectTitles = document.querySelectorAll('.project-title');
    projectTitles.forEach(projectTitle => {
        const tasks = projectTitle.nextElementSibling.querySelectorAll('.task-in-list');
        
        // Удаляем старые обработчики событий, если они есть
        projectTitle.removeEventListener('click', handleProjectTitleClick);
        
        // Обработчик для projectTitle
        projectTitle.addEventListener('click', handleProjectTitleClick);
    });

    menuOptions = document.querySelectorAll(".menu-list-options");
    updateMenuOptions();
}

// Обработчик событий для projectTitle
function handleProjectTitleClick(event) {
    const projectTitles = document.querySelectorAll('.project-title');
    
    // Снять класс 'active' со всех projectTitles
    projectTitles.forEach(pt => pt.classList.remove('active'));

    // Добавить класс 'active' на кликнутый projectTitle
    event.currentTarget.classList.add('active');
}

updateSidebar()



    //Переключение active в окне быстрой сортировки 

taskSotingElements.forEach((sortingElement) => {


    sortingElement.addEventListener('click', (event) => {
        event.stopPropagation()

        const isActive = sortingElement.classList.contains('active');
        taskSotingElements.forEach((tse) => {tse.classList.remove('active')});
        if (!isActive) {
            sortingElement.classList.add('active');
        }
    })
})


// Event listener to task popup menu
const ellipsisIcon = document.querySelectorAll('.task-board.task-list-wrapper.task-title .fa-ellipsis');
ellipsisIcon.forEach(icon => {
    icon.addEventListener('click', (event) => {
        const rect2 = event.target.getBoundingClientRect();
        popupMenu.style.top = `${rect2.top}px`;
        popupMenu.style.left = `${rect2.left - 180}px`;
        popupMenu.style.display = 'block';

        dropdownPriority.textContent = 'None';
        dropdownDate.value = '';
    });
});

// Close the popup when clicking outside
document.addEventListener('click', (event) => {
    if (!popupMenu.contains(event.target) && !event.target.matches('.fa-ellipsis')) {
        popupMenu.style.display = 'none';
    }
});

//Dropdown стилизация и обработка

dropdownElements.forEach(elem => {
    elem.addEventListener('click', () => {
        dropdownPriority.textContent = elem.getAttribute('data-value')
        console.log(dropdownPriority.textContent)
    })
})

dropdownDate.addEventListener('change', (event) => {
    console.log(event.target.value)
})


export { updateSidebar, menuOptions }

