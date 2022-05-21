import React from 'react'
import './Main.css'
import Followings from '../Followings/Followings'
import Repositories from '../Repositories/Repositories'
import Report from '../Report/Report';
import followersImg from '../../images/followers.svg'
import followingImg from '../../images/following.svg'
import repository from '../../images/repository.svg'

const Main = ({ userData, userRepos, reposCount, handleSetPage = { handleSetPage } }) => {
	const { avatar_url, login, name, html_url, following, followers } = userData;
	function quantityFollowers(a) {
		if (a > 999) {
			return (Math.floor(a / 100) / 10) + "k"
		} else {
			return a
		}
	}
	return (
		<div className='main'>
			<div className='main__user'>
				<div className="main__avatar">
					<img src={avatar_url} alt="Avatar" />
				</div>
				<div className="main__name">{name ? name : ""}</div>
				<div className="main__nickname"><a href={html_url} target="_blank">{login}</a></div>
				<div className="main__followings">
					<Followings img={followersImg} quantity={quantityFollowers(followers)}>followers</Followings>
					<Followings img={followingImg} quantity={quantityFollowers(following)}>followings</Followings>
				</div>
			</div>
			{reposCount === 0 ? <Report img={repository}>Repository list is empty</Report> : <Repositories userRepos={userRepos} reposCount={reposCount} handleSetPage={handleSetPage} />}
		</div >
	)
}

export default Main
