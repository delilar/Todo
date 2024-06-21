import './styles/style.scss';
import values from './json/values.json'

import { menuOptions, menu } from './UI/panelMenuList/panelMenuList.js';
//import {projectTitles, tasks} from './listStorageChoise.js';
import { taskSotingPannel, taskSotingElements } from "./UI/sortingMethods/sortingMethods.js"
import { dropdownElements, dropdownButton, dropdownContent} from './UI/chooseTag/chooseTag.js';


// HTML-шаблон для меню
const menuHTML = `<div class="menu-list">
                    <div class="menu-list__element">
                        <i class="fa-solid fa-pen"></i>
                        <p>Edit list</p>
                    </div>
                    <div class="menu-list__element">
                        <i class="fa-solid fa-trash"></i>
                        <p>Delete</p>
                    </div>
                  </div>`;

// Добавляем обработчики событий для элементов меню
menuOptions.forEach(option => {
    option.addEventListener("click", function(event) {
        const rect = option.getBoundingClientRect();

        menu.style.left = `${rect.right}px`;
        menu.style.top = `${rect.top}px`;
        menu.style.display = "block";
    });
});

// Добавляем обработчик событий для закрытия меню при клике вне его области
document.addEventListener("click", function(event) {
    if (![...menuOptions].some(option => option.contains(event.target)) && !menu.contains(event.target)) {
        menu.style.display = "none";
    }
});


//Выделение выбранного списка/задания

const projectTitles = document.querySelectorAll('.project-title');

projectTitles.forEach(projectTitle => {
    const tasks = projectTitle.nextElementSibling.querySelectorAll('.task-in-list');
    
    // Обработчик для projectTitle
    projectTitle.addEventListener('click', () => {
        // Снять класс 'active' со всех projectTitles
        projectTitles.forEach(pt => pt.classList.remove('active'));
        // Снять класс 'active' со всех tasks
        document.querySelectorAll('.task-in-list').forEach(task => task.classList.remove('active'));
        // Добавить класс 'active' на кликнутый projectTitle
        projectTitle.classList.add('active');
    });

    // Обработчики для tasks внутри projectTitle
    tasks.forEach(task => {
        task.addEventListener('click', (event) => {
            // Остановить всплытие события, чтобы не вызвать клик на projectTitle
            event.stopPropagation();
            
            // Снять класс 'active' со всех задач
            document.querySelectorAll('.task-in-list').forEach(t => t.classList.remove('active'));
            // Добавить класс 'active' на кликнутую задачу
            task.classList.add('active');
            
            // Снять класс 'active' со всех projectTitles
            projectTitles.forEach(pt => pt.classList.remove('active'));
            // Добавить класс 'active' на соответствующий projectTitle
            projectTitle.classList.add('active');
        });
    });
});



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


//Dropdown стилизация и обработка

dropdownElements.forEach(elem => {
    elem.addEventListener('click', () => {
        dropdownButton.textContent = elem.getAttribute('data-value')
    })
    console.log(elem.getAttribute('data-value'), dropdownButton.textContent)

})