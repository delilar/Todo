import './sortingMethods.scss'

const taskSotingPannel = document.querySelector('.task-panel__task-quick-access')

const sortingPanel = `
            <div class="task-panel__task-quick-access--inner active">
                <i class="fa-solid fa-star"></i>
                <p>Today</p>
            </div>
            <div class="task-panel__task-quick-access--inner">
                <i class="fa-solid fa-arrow-right"></i>
                <p>Tomorrow</p>
            </div>
            <div class="task-panel__task-quick-access--inner">
                <i class="fa-solid fa-calendar-week"></i>
                <p>On week</p>
            </div>
            <div class="task-panel__task-quick-access--inner">
                <i class="fa-solid fa-box-archive"></i>
                <p>No due date</p>
            </div>`

taskSotingPannel.innerHTML = sortingPanel;

const taskSotingElements = document.querySelectorAll('.task-panel__task-quick-access--inner')



export { taskSotingPannel, taskSotingElements } 