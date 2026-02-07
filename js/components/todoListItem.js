import { todoActions } from "../actions/todoActions.js";
import { renderTodoList } from "./todoForm.js";
import TodoListDescription from "./todoListDescription.js";
import TodoListTitle from "./todoListTitle.js";
import Card from "./ui/card.js";
import CardContent from "./ui/cardContent.js";
import Button from "./ui/button.js";

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
        content: "Hapus",
        type: "button"
    });
    deleteBtn.className = "text-xs text-red-500 hover:text-red-700 font-medium ml-auto";
    deleteBtn.onclick = () => {
        if (confirm('Hapus tugas ini?')) {
            todoActions.delete(todo.id);
            renderTodoList();
        }
    };

    const textWrapper = document.createElement('div');
    textWrapper.className = "flex-1 flex flex-col gap-1";
    if (todo.isCompleted) textWrapper.className += " opacity-50 line-through";

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
                            document.createElement('p').appendChild(Object.assign(document.createElement('span'), {
                                className: "text-[10px] text-slate-400 font-mono",
                                innerText: todo.dueDate
                            })).parentElement
                        );

                        flexRow.append(checkbox, textWrapper, deleteBtn);
                        return flexRow;
                    })()
                ]
            })
        ]
    });
}