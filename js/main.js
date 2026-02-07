import AppContent from "./components/appContent.js";
import ThemeToggle from "./components/themeToggle.js";
import TodoForm from "./components/todoForm.js";
import TodoList from "./components/todoList.js";
import { getThemeMode } from "./utils/theme.js";

const app = document.getElementById('root');

getThemeMode();

app.append(
    AppContent({
        children: [
            TodoForm(),
            TodoList(),
            ThemeToggle(),
        ]
    }),
);