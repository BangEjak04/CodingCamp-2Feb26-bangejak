export function getThemeMode() {
    const themeMode = localStorage.getItem('themeMode') || 'light';
    
    if (themeMode === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
    }
    
    return themeMode;
}

export function toggleThemeMode() {
    const currentTheme = localStorage.getItem('themeMode') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'dark'; // logika toggle
    
    const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    localStorage.setItem('themeMode', targetTheme);
    
    getThemeMode();
}