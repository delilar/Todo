class Task {
    constructor(title = 'New Task', date = '', priority = 'None') {
        this._title = title;
        this._markers = {
            date: date,
            priority: priority,
            priorityColor: this.setPriorityColor(priority) 
        };
    }

    // Метод для установки цвета приоритета
    setPriorityColor(priority) {
        switch (priority) {
            case 'Low':
                return '#2feb55';
            case 'Medium':
                return '#eb9d2f';
            case 'High':
                return '#eb2f35';
            default:
                return '';
        }
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
        this._markers.priorityColor = this.setPriorityColor(value); // Обновите цвет при изменении приоритета
    }

    // Геттер для markers
    get markers() {
        return this._markers;
    }
}

export { Task }
