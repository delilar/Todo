class Task {
    constructor(title = 'New Task', date = '', priority = 'None', priorityColor = '') {
        this._title = title;
        this._markers = {
            date: date,
            priority: priority,
            priorityColor: priorityColor
        };
    }


    // Геттеры
    get title() {
        return this._title;
    }

    get date() {
        return this._markers.date;
    }

    get priority() {
        return this._markers.priority;
    }

    get priorityColor() {
        return this._markers.priorityColor;
    }

    // Сеттеры
    set title(value) {
        this._title = value;
    }

    set date(value) {
        this._markers.date = value;
    }

    set priority(value) {
        this._markers.priority = value;
    }

    // Геттер для markers
    get markers() {
        return this._markers;
    }
}

export { Task }
