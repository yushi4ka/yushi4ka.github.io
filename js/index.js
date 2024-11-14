import resetDarkMode from './module/resetDarkMode.js'
import addDarkMode from './module/addDarkMode.js'

const btnDarkMode = document.querySelector('.dark-mode-btn')
if( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
	addDarkMode()
}

if( localStorage.getItem('darkMode') === 'dark' ) {
	addDarkMode()
} else if( localStorage.getItem('darkMode') === 'light' ){
	resetDarkMode()
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
	const newColorScheme = event.matches
	? 'dark' : 'light'

	if(newColorScheme === 'dark') {
		addDarkMode()
		localStorage.setItem('darkMode', 'dark')
	} else {
		resetDarkMode()
		localStorage.setItem('darkMode', 'light')
	}
})

btnDarkMode.addEventListener('click', () => {
	btnDarkMode.classList.toggle('dark-mode-btn--active')
	const isDark = document.body.classList.toggle('dark')

	isDark
		? localStorage.setItem('darkMode', 'dark')
		: localStorage.setItem('darkMode', 'light')
})

export {
	btnDarkMode
}
