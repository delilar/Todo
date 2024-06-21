import "./choosetag.scss"

const dropDownMenu = `<div class="dropdown-menu">
                            <button class="dropdown-menu__button" id="dropdownButton">Priority</button>
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



export { dropdownElements, dropdownButton, dropdownContent }

