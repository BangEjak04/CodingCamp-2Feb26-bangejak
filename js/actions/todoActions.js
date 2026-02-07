import TodoModel from "../models/todoModel.js";

const STORAGE_KEY = "todos";

export const todoActions = {
    getAll() {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    },

    add(title, description, date) {
        const newTodo = new TodoModel(title, description, date);

        if (!newTodo.isValid()) return false;

        const todos = this.getAll();
        todos.push(newTodo);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        return true;
    },

    delete(id) {
        const todos = this.getAll().filter(todo => todo.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    },

    toggleStatus(id) {
        const todos = this.getAll().map(todo => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    },
}