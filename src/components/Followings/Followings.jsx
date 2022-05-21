import React from 'react'
import './Followings.css'

const Followings = ({ quantity, children, img }) => {
	return (
		<div className="followings">
			<img className='followings__ico' src={img} alt="followings" />
			<p className='followings__text'><span>{quantity}</span> {children}</p>
		</div>
	)
}

export default Followings