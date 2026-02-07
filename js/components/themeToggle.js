import { toggleThemeMode, getThemeMode } from "../utils/theme.js";

export default function ThemeToggle() {
    const button = document.createElement('button');
    button.className = "fixed top-4 right-4 p-2 rounded-md border border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800 transition-all hover:bg-slate-100 dark:hover:bg-slate-900";
    
    const updateIcon = () => {
        const theme = localStorage.getItem('themeMode') || 'light';
        
        const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-500"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
        const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-700 dark:text-slate-400"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

        button.innerHTML = theme === 'light' ? moonIcon : sunIcon;
    };

    button.addEventListener('click', () => {
        toggleThemeMode();
        updateIcon();
    });

    updateIcon();

    return button;
}