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
    themeIcon.src = savedTheme === 'dark-theme' ? 'img/icons/moon.svg' : 'img/icons/sun.svg';
} else {
    setTheme('dark-theme');
    themeIcon.src = 'img/icons/moon.svg';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    setTheme(newTheme);
    
    themeIcon.src = newTheme === 'dark-theme' ? 'img/icons/moon.svg' : 'img/icons/sun.svg';
    
    themeIcon.classList.add('hidden');
    setTimeout(() => {
        themeIcon.classList.remove('hidden');
    }, 500);
});
