import './panelMenuList.scss'

// Получаем элементы меню
const menuOptions = document.querySelectorAll(".menu-list-options");

// HTML-шаблон для меню
const menuHTML = `<div class="menu-list">
                    <div class="menu-list__element">
                        <i class="fa-solid fa-pen"></i>
                        <p>Edit list</p>
                    </div>
                    <div class="menu-list__element">
                        <i class="fa-solid fa-list-check"></i>
                        <p>Add task</p>
                    </div>
                    <div class="menu-list__element">
                        <i class="fa-solid fa-trash"></i>
                        <p>Delete</p>
                    </div>
                  </div>`;

// Вставляем HTML-шаблон в тело документа
document.body.insertAdjacentHTML('beforeend', menuHTML);

// Получаем меню из DOM
const menu = document.querySelector(".menu-list");

// Экспортируем необходимые элементы
export { menuOptions, menu };


