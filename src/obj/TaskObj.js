import { dropdownPriority, dropdownDate } from "../UI/TaskSettings/TaskSettings";

class Task {
    constructor(title = 'New Task', date = '', priority = 'None') {
        this._title = title;
        this._date = date;
        this._priority = priority;
    }

    // Геттеры
    get title() {
        return this._title;
    }

    get date() {
        return this._date;
    }

    get priority() {
        return this._priority;
    }

    // Сеттеры
    set title(value) {
        this._title = value;
    }

    set date(value) {
        this._date = value;
    }

    set priority(value) {
        this._priority = value;
    }
}

export { Task }