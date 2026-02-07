export default class TodoModel {
    constructor(title, description, dueDate) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.createdAt = new Date().toISOString();
        this.isCompleted = false;
    }

    isValid() {
        return this.title.trim().length > 0 && this.dueDate !== "";
    }

    toggleStatus(id) {
        const todos = this.getAll().map(todo => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}