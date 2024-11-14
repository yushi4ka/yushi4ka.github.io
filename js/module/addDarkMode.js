import {
	btnDarkMode
} from '../index.js'

const addDarkMode = () => {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
}

export default addDarkMode
