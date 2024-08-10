const themeSwitch = document.querySelector('.theme-switch');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    if (document.body.classList.contains('dark-mode')) {
        themeSwitch.textContent = 'Light Mode';
    } else {
        themeSwitch.textContent = 'Dark Mode';
    }
}

themeSwitch.addEventListener('click', toggleDarkMode);

const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    if (storedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitch.textContent = 'Light Mode';
    } else {
        document.body.classList.remove('dark-mode');
        themeSwitch.textContent = 'Dark Mode';
    }
}
