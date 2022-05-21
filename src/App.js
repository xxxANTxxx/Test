import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Report from './components/Report/Report';
import Loader from './components/Loader/Loader';
import Main from './components/Main/Main';
import GithubService from './services/GithubService';
import loupe from './images/loupe.svg'
import user from './images/user.svg'


function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    const [userName, setUserName] = useState('');
    const [pageNumber, setPageNumber] = useState(1)

    const requestUser = async (name) => {
        setUserName(name)
        setIsLoading(true);
        const userInfo = await GithubService.getUserInfo(name);
        setIsLoading(false);
        setUserData(userInfo)
        setPageNumber(1)
    }

    useEffect(() => {
        const fetchData = async () => {
            const userRepos = await GithubService.getUserRepositories(userName, pageNumber)
            setUserRepos(userRepos)
        }
        if (userData.public_repos > 0) {
            fetchData()
        }
    }, [userData, pageNumber])

    const handleSetPage = (page) => {
        setPageNumber(page)
    }

    let content = <Report img={loupe}>Start with searching <br />a GitHub user</Report>

    if (userData.login) {
        content = <Main userData={userData} userRepos={userRepos} reposCount={userData.public_repos} handleSetPage={handleSetPage} />
    }
    if (isLoading) {
        content = <Loader />
    }
    if (userData.message) {
        content = <Report img={user}>User not found</Report>;
    }

    return (
        <div className='App'>
            <Header request={requestUser} />
            {content}
        </div>
    );
}

export default App;
