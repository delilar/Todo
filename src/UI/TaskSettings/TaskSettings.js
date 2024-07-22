import './TaskSettings.scss'
import "../choosePriority/choosePriority.scss"

// Create the popup menu
const taskSettingsPopup = `<div class="add-list__popup">
    <span class="dropdown-add-date">
        <p class="dropdown-tag">Add date</p>
        <input type="date" name="dropdown-date" id="dropdown-date">
    </span>
    <span class="dropdown-wrapper">
        <p class="dropdown-tag">Add priority</p>  
    </span>
    <span class="dropdown-submit">
        <button id="task-settings-submit" type="submit">Submit</button>
    </span>
</div>`;

document.body.insertAdjacentHTML('beforeend', taskSettingsPopup);

const popupMenu = document.querySelector('.add-list__popup');

const dropDownMenu = `<div class="dropdown-menu">
                            <button class="dropdown-menu__button" id="dropdownPriority">None</button>
                            <div class="dropdown-menu__content" id="dropdownContent">
                                <a href="#" data-value="None">None</a>
                                <a href="#" data-value="Low">Low</a>
                                <a href="#" data-value="Medium">Medium</a>
                                <a href="#" data-value="High">High</a>
                            </div>
                        </div>`;


const dropdownWrapper = document.querySelector('.dropdown-wrapper');
dropdownWrapper.innerHTML += dropDownMenu;

const dropdownContent = document.querySelector('.dropdown-menu__content');
const dropdownElements = Array.from(dropdownContent.getElementsByTagName('a'));

const dropdownPriority = document.querySelector('.dropdown-menu__button');
const dropdownDate = document.getElementById('dropdown-date');

//Task check
const taskCheckbox = document.querySelectorAll('.task-board.task-list__checkbox');
let tasks = document.querySelectorAll('.task-board.task-list-wrapper.task-title');

const settingsSubmit = document.getElementById('task-settings-submit');

tasks.forEach((task, index) => {
    taskCheckbox[index].addEventListener('click', () => {
        taskCheckbox[index].getElementsByTagName('i')[0].style.display = 'none'
        taskCheckbox[index].getElementsByTagName('i')[1].style.display = 'block'
        task.style.opacity = 0;

        setTimeout(() => {
            task.style.display = 'none'
        }, '300')
    })
})


const addTaskButton = document.querySelector('.add-task-button');




export { popupMenu, dropdownPriority, dropdownContent, dropdownElements, dropdownDate, taskCheckbox, tasks, settingsSubmit }




