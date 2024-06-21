
const projectTitles = document.querySelectorAll('.project-title');
const tasks = []
projectTitles.forEach(projectTitle => {
    const task = projectTitle.nextElementSibling.querySelectorAll('.task-in-list');
    tasks.push(task)
})

export {projectTitles, tasks};

