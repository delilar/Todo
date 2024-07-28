import * as createNewList from "./UI/createNewList/createNewList";
import { updateSidebar } from ".";
import { List } from "./obj/ListObj";
import { Task } from "./obj/TaskObj";

let listStorage = []
localStorage.getItem('listStorage') !== null ? listStorage = JSON.parse(localStorage.getItem('listStorage')) : listStorage = [];

const sidePanel = document.querySelector('.task-panel__list-storage-inner')


//Функция для создания списка заданий
const createList = (listTitle, taskTitles) => {
    // Создаем основной div
    const div = document.createElement('div');
    div.classList.add('task-panel__list-storage', 'list');

    // Создаем span и наполняем его содержимым
    const span = document.createElement('span');
    span.classList.add('project-title');
    span.innerHTML = `
        <div>
            <i class="fa-solid fa-layer-group"></i>
            <h4 id="list-side-title">${listTitle}</h4>
        </div>
        <i class="menu-list-options fa-solid fa-ellipsis"></i>
    `;
    div.appendChild(span);

    // Создаем div с классом tasks
    const tasksDiv = document.createElement('div');
    tasksDiv.classList.add('tasks');

    // Добавляем задачи в tasksDiv
    taskTitles.forEach(taskTitle => {
        const task = document.createElement('p');
        task.id = 'list-side-task';
        task.classList.add('task-in-list');
        task.textContent = taskTitle;
        tasksDiv.appendChild(task);
    });

    // Добавляем tasksDiv в основной div
    div.appendChild(tasksDiv);

    return div;
};


function showSidebarElements() {
    sidePanel.innerHTML = '';
    let showStorage = JSON.parse(localStorage.getItem('listStorage'));
    showStorage !== null ? showStorage = JSON.parse(localStorage.getItem('listStorage')) :  showStorage = []

    if (showStorage.length !== 0) {
        showStorage.forEach(storedList => {
            const listTitle = storedList._title;
        const taskTitles = storedList._tasks.map(task => task._title)

            sidePanel.appendChild(createList(listTitle, taskTitles))
        })
    }

}

showSidebarElements()


//Добавление элементов в sidebar
function addSidebarElements(newList) {

    const storedList = newList;

    if (storedList) {
        const listTitle = storedList._title;
        const taskTitles = storedList._tasks.map(task => task._title)

        sidePanel.appendChild(createList(listTitle, taskTitles))
    }
}


//Код для поля добавление нового списка
// Объявляем переменную newList в глобальной области видимости
let newList = null;
let tasks = null;

createNewList.newListButton.addEventListener('click', () => {
    newList = null;
    tasks = null;

    createNewList.addListName.value = '';
    Array.from(createNewList.addTaskName).forEach(task => {
        task.value = '';
    })
})


createNewList.createListButton.addEventListener('click', () => {
    // Получение значения для заголовка списка
    let listTitle = createNewList.addListName.value;

    if (listTitle.trim() == '') {
        listTitle = 'New title';
    }

    // Создание массива задач
    tasks = Array.from(createNewList.addTaskName).map(taskElement => {
        return new Task(taskElement.value.trim() === '' ? 'New Task' : taskElement.value.trim());
    });

    // Создание нового списка с полученными данными
    newList = new List(listTitle, 'New text for description', tasks);

    listStorage.push(newList)

    localStorage.setItem('listStorage', JSON.stringify(listStorage));

    addSidebarElements(newList);
    updateSidebar();
});

export { sidePanel, listStorage, showSidebarElements }