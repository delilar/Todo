import { Task } from "./TaskObj";

class List {
    constructor(title = "New title", description = 'New text for description', tasks = [new Task('New Task')]) {
        this._title = title;
        this._description = description;
        this._tasks = tasks;
    }

    // Геттеры
    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get tasks() {
        return this._tasks;
    }

    // Сеттеры
    set title(value) {
        this._title = value;
    }

    set description(value) {
        this._description = value;
    }

    set tasks(value) {
        this._tasks = value;
    }
}

export { List }