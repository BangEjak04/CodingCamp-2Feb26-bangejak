import { todoActions } from "../actions/todoActions.js";
import TodoEmptyState from "./todoEmptyState.js";
import TodoListItem from "./todoListItem.js";

let currentFilter = 'all';

export default function TodoList() {
    const component = document.createElement("div");
    component.id = "todo-list-container";
    component.className = "flex flex-col gap-4 mx-auto mt-4";

    const filterContainer = document.createElement('div');
    filterContainer.className = "flex gap-2 mb-4 justify-center";

    const createFilterBtn = (label, value) => {
        const btn = document.createElement('button');
        btn.innerText = label;
        btn.className = `px-3 py-1 text-sm rounded-full border ${currentFilter === value ? 'bg-slate-900 text-white' : 'bg-white text-slate-600'}`;
        btn.onclick = () => {
            currentFilter = value;
            // Panggil ulang render dari todoForm.js (import dinamis untuk hindari circular)
            import('./todoForm.js').then(m => m.renderTodoList());
        };
        return btn;
    };

    filterContainer.append(
        createFilterBtn('Semua', 'all'),
        createFilterBtn('Belum', 'active'),
        createFilterBtn('Selesai', 'completed')
    );
    component.appendChild(filterContainer);

    let todos = todoActions.getAll();
    if (currentFilter === 'active') todos = todos.filter(t => !t.isCompleted);
    if (currentFilter === 'completed') todos = todos.filter(t => t.isCompleted);

    // Tampilkan List
    if (todos.length === 0) {
        const empty = document.createElement('p');
        empty.className = "text-center text-slate-400 py-10";
        empty.innerText = "Tidak ada tugas.";
        component.appendChild(TodoEmptyState());
    } else {
        todos.forEach(todo => component.appendChild(TodoListItem({ todo })));
    }

    return component;
}

window.deleteTodo = (id) => {
    todoActions.delete(id);
    import('./todoForm.js').then(m => m.renderTodoList());
};