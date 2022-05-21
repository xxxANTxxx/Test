import React from 'react'
import './Header.css'
import logo from '../../images/logo.svg'

const Header = ({ request }) => {
	const inputRef = React.useRef();

	const checkPressedKey = (event) => {
		if (event.key === "Enter") {
			request(inputRef.current.value)
		}
	}

	return (
		<div className='header'>
			<img className='header__img' src={logo} alt="Logo" />
			<input ref={inputRef} className='header__input' type="text" placeholder='Enter GitHub username' onKeyPress={(event) => {
				checkPressedKey(event)
			}} />
		</div>
	)
}

export default Header