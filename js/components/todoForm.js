import Button from "./ui/button.js";
import Card from "./ui/card.js";
import CardContent from "./ui/cardContent.js";
import CardFooter from "./ui/cardFooter.js";
import Field from "./ui/field.js";
import FieldDescription from "./ui/fieldDescription.js";
import FieldGroup from "./ui/fieldGroup.js";
import FieldLabel from "./ui/fieldLabel.js";
import Input from "./ui/input.js";
import Textarea from "./ui/textarea.js";
import TodoList from "./todoList.js";

import { todoActions } from "../actions/todoActions.js";

export default function TodoForm() {
    const form = document.createElement('form');

    const titleInput = Input({ id: 'todo-title', placeholder: 'e.g. Finish project report', required: true });
    const descriptionInput = Textarea({ id: 'todo-description', placeholder: 'Add more details about this task...', required: false });
    const dateInput = Input({ id: 'todo-date', type: 'date', required: true });

    form.append(
        Card({
            children: [
                CardContent({
                    children: [
                        FieldGroup({
                            children: [
                                Field({
                                    children: [
                                        FieldLabel({
                                            htmlFor: 'todo-title',
                                            text: 'Title'
                                        }),
                                        titleInput,
                                        FieldDescription({
                                            text: 'The name of your task.'
                                        })
                                    ]
                                }),
                                Field({
                                    children: [
                                        FieldLabel({
                                            htmlFor: 'todo-description',
                                            text: 'Description'
                                        }),
                                        descriptionInput,
                                        FieldDescription({
                                            text: 'Provide additional context for this task (optional).'
                                        })
                                    ]
                                }),
                                Field({
                                    children: [
                                        FieldLabel({
                                            htmlFor: 'todo-date',
                                            text: 'Due Date'
                                        }),
                                        dateInput,
                                        FieldDescription({
                                            text: 'Set a deadline to stay on track.'
                                        })
                                    ]
                                })
                            ]
                        }),
                    ]
                }),
                CardFooter({
                    children: [
                        Field({
                            children: [
                                Button({
                                    type: 'submit',
                                    content: 'Add'
                                })
                            ]
                        })
                    ]
                })
            ]
        }),
    );

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const success = todoActions.add(titleInput.value, descriptionInput.value, dateInput.value);

        if (success) {
            form.reset();
            renderTodoList();
        } else {
            alert("Data tidak valid!");
        }

    });

    return form;
}

export function renderTodoList() {
    const oldList = document.getElementById('todo-list-container');

    if (oldList) {
        const newList = TodoList();
        oldList.replaceWith(newList);
    }
}