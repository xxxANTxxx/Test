import React from 'react'
import './Report.css'

const Report = ({ children, img }) => {
	return (
		<div className="report">
			<div className="report__img"><img src={img} alt="Loupe" /></div>
			<p className="report__text">{children}</p>
		</div>
	)
}

export default Report