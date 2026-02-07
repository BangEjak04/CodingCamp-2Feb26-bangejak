import { todoActions } from "../actions/todoActions.js";
import TodoEmptyState from "./todoEmptyState.js";
import TodoListItem from "./todoListItem.js";
import Tabs from "./ui/tabs.js";
import TabsList from "./ui/tabsList.js";
import TabsTrigger from "./ui/tabsTrigger.js";

let currentFilter = 'all';

export default function TodoList() {
    const component = document.createElement("div");
    component.id = "todo-list-container";
    component.className = "min-h-80 flex flex-col gap-4 w-full mt-4";

    // Fungsi helper untuk handle perpindahan filter
    const handleFilterChange = (value) => {
        currentFilter = value;
        import('./todoForm.js').then(m => m.renderTodoList());
    };

    // Integrasi Tabs sebagai Filter
    const tabsComponent = Tabs({
        children: [
            TabsList({
                children: [
                    TabsTrigger({
                        text: 'All',
                        isActive: currentFilter === 'all',
                        onClick: () => handleFilterChange('all')
                    }),
                    TabsTrigger({
                        text: 'Active',
                        isActive: currentFilter === 'active',
                        onClick: () => handleFilterChange('active')
                    }),
                    TabsTrigger({
                        text: 'Completed',
                        isActive: currentFilter === 'completed',
                        onClick: () => handleFilterChange('completed')
                    }),
                ]
            })
        ]
    });

    component.appendChild(tabsComponent);

    // Logika Filtering Data
    let todos = todoActions.getAll();
    if (currentFilter === 'active') todos = todos.filter(t => !t.isCompleted);
    if (currentFilter === 'completed') todos = todos.filter(t => t.isCompleted);

    // Render List atau Empty State
    const listContainer = document.createElement('div');
    listContainer.className = "flex flex-col gap-3";

    if (todos.length === 0) {
        listContainer.appendChild(TodoEmptyState());
    } else {
        todos.forEach(todo => listContainer.appendChild(TodoListItem({ todo })));
    }

    component.appendChild(listContainer);

    return component;
}

window.deleteTodo = (id) => {
    todoActions.delete(id);
    import('./todoForm.js').then(m => m.renderTodoList());
};