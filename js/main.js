import AppContent from "./components/appContent.js";
import AppFooter from "./components/appFooter.js";
import AppHeader from "./components/appHeader.js";
import TodoForm from "./components/todoForm.js";
import TodoList from "./components/todoList.js";
import { getThemeMode } from "./utils/theme.js";

const app = document.getElementById('root');

getThemeMode();

app.append(
    AppHeader({
        title: "To-Do List",
        description: "Keep track of your projects and personal errands."
    }),
    AppContent({
        children: [
            TodoForm(),
            TodoList(),
        ]
    }),
    AppFooter()
);
// done