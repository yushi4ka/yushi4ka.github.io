const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme('dark-theme');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    setTheme(newTheme);
});
