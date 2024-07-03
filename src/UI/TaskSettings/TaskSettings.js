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
        <button>Save</button>
    </span>
</div>`;

document.body.insertAdjacentHTML('beforeend', taskSettingsPopup);

const popupMenu = document.querySelector('.add-list__popup');

const dropDownMenu = `<div class="dropdown-menu">
                            <button class="dropdown-menu__button" id="dropdownButton">None</button>
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
const dropdownButton = document.querySelector('.dropdown-menu__button');

const dropdownDate = document.getElementById('dropdown-date');

//Task check
const taskCheckbox = document.querySelectorAll('.task-board.task-list__checkbox');
const tasks = document.querySelectorAll('.task-board.task-list-wrapper.task-title')


export { popupMenu, dropdownButton, dropdownContent, dropdownElements, dropdownDate, taskCheckbox, tasks }




