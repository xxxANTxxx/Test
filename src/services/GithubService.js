class GitHubService {
	static instance = new GitHubService()
	getUserInfo(username) {
		const userData =
			fetch(`https://api.github.com/users/${username}`)
				.then(res => res.json())
				.then(res => res);
		return userData
	}
	getUserRepositories(username, page) {
		const repositoriesData =
			fetch(`https://api.github.com/users/${username}/repos?per_page=4&page=${page}`)
				.then(res => res.json())
				.then(res => res);
		return repositoriesData
	}
}

export default GitHubService.instance