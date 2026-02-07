import { todoActions } from "../actions/todoActions.js";
import { renderTodoList } from "./todoForm.js";
import TodoListDescription from "./todoListDescription.js";
import TodoListTitle from "./todoListTitle.js";
import Card from "./ui/card.js";
import CardContent from "./ui/cardContent.js";
import Button from "./ui/button.js";
import { formatDueDate } from "../utils/formatdueDate.js";

export default function TodoListItem({ todo }) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.isCompleted;
    checkbox.className = "mt-1 w-4 h-4 accent-slate-900 cursor-pointer";
    checkbox.onchange = () => {
        todoActions.toggleStatus(todo.id);
        renderTodoList();
    };

    const deleteBtn = Button({
        content: `<img 
            src="js/assets/trash.svg" 
            alt="Delete" 
            class="w-4 h-4 opacity-70 group-hover/button:opacity-100 dark:invert"
        />`,
        type: "button",
    });
    deleteBtn.className = "text-xs text-red-500 hover:bg-red-700 font-medium ml-auto p-1 rounded-sm transition";
    deleteBtn.onclick = () => {
        if (confirm('Delete this task?')) {
            todoActions.delete(todo.id);
            renderTodoList();
        }
    };

    const textWrapper = document.createElement('div');
    textWrapper.className = "flex-1 flex flex-col gap-1";
    if (todo.isCompleted) textWrapper.className += " opacity-50 line-through";

    const isOverdue = todo.dueDate && new Date(todo.dueDate).setHours(0,0,0,0) < new Date().setHours(0,0,0,0);

    const dateInfo = document.createElement('div');
    dateInfo.className = `mt-2 flex items-center gap-2 text-xs font-medium ${
        isOverdue && !todo.isCompleted ? "text-red-500" : "text-slate-400"
    }`;

    // Tambahkan icon kalender kecil (opsional)
    dateInfo.innerHTML = `
        <img src="js/assets/calendar.svg" class="size-4 opacity-70 dark:invert" />
        <span>${formatDueDate(todo.dueDate)}</span>
    `;

    return Card({
        children: [
            CardContent({
                children: [
                    (() => {
                        const flexRow = document.createElement('div');
                        flexRow.className = "flex items-start gap-4";
                        
                        textWrapper.append(
                            TodoListTitle({ text: todo.title }),
                            TodoListDescription({ text: todo.description }),
                            dateInfo
                        );

                        flexRow.append(checkbox, textWrapper, deleteBtn);
                        return flexRow;
                    })()
                ]
            })
        ]
    });
}