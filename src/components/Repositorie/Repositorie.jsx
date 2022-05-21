import React from 'react'
import './Repositorie.css'

const Repositorie = ({ html_url, name, description }) => {
	return (
		<div className="repositorie">
			<h3 className="repositorie__title"><a href={html_url} target="_blank">{name}</a></h3>
			<div className="repositorie__subtitle">{description}</div>
		</div>
	)
}

export default Repositorie
